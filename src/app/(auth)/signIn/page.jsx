"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loginAnimation from "../../../../public/lottie/login.json";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Eye, EyeOff, Loader2 } from "lucide-react"; // Added for modern micro-interactions

const SignInPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { email, password } = form;

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data?.user) {
        toast.success("Welcome back! Signed in successfully.");
        router.refresh();
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      console.log(data);
    } catch (err) {
      console.error(err);
      toast.error(
        err?.message || "Failed to sign in with Google."
      );
    } finally {
      setIsGoogleLoading(false);
    }
  };

  // Micro-interaction variants for cleaner organization
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 px-4 py-8 lg:py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-card/60 text-card-foreground shadow-2xl backdrop-blur-xl flex flex-col md:flex-row min-h-[600px]"
      >
        {/* Left Side: Modern Interactive Lottie Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-muted/50 via-muted/30 to-transparent p-12 md:w-1/2 relative overflow-hidden border-r border-border/40"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-secondary/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="w-full max-w-[340px] relative z-10 transition-transform duration-500 hover:scale-105">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
          
          <div className="relative z-10 mt-8 space-y-3 text-center max-w-sm">
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Welcome Back to Resell.Hub
            </h2>
            <p className="text-sm text-muted-foreground/90 leading-relaxed">
              Securely sign in to access your customized dashboard, manage metrics, and explore our latest collections.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Clean Typography & Modern Form Controls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 space-y-6 flex flex-col justify-center bg-card"
        >
          <motion.div {...fadeInUp} className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Sign In
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials below to access your account.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isLoading}
                  value={form.email}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-background/50 px-3.5 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div {...fadeInUp} transition={{ delay: 0.25 }} className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs font-medium text-primary hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  disabled={isLoading}
                  value={form.password}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-background/50 pl-3.5 pr-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="pt-2">
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-11 rounded-xl font-medium shadow-md shadow-primary/10 transition-all duration-200 active:scale-[0.99]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Signing you in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>
          </form>

          {/* Separator Divider */}
          <motion.div {...fadeInUp} transition={{ delay: 0.35 }} className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border/60" />
            <span className="flex-shrink mx-4 text-xs uppercase tracking-widest text-muted-foreground/70 bg-card px-2">
              or continue with
            </span>
            <div className="flex-grow border-t border-border/60" />
          </motion.div>

          {/* OAuth Google Button */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Button 
              variant="outline" 
              type="button"
              disabled={isGoogleLoading || isLoading}
              className="w-full h-11 rounded-xl font-medium bg-background/40 hover:bg-muted/40 transition-all border-border/80 active:scale-[0.99]" 
              onClick={handleGoogleSignIn}
            >
              {isGoogleLoading ? (
                <Loader2 className="mr-2 size-4 animate-spin" />
              ) : (
                <svg className="mr-2 size-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              )}
              Google
            </Button>
          </motion.div>

          {/* Bottom Footer Callout */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.45 }}
            className="text-center text-sm text-muted-foreground pt-2"
          >
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors">
              Sign Up
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignInPage;