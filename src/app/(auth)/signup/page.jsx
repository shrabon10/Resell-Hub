"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import signupAnimation from "../../../../public/lottie/signup.json";

const SignUpPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [roleState, setRoleState] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, email, password, confirmPassword, image } = form;

    if (!roleState) {
      setError("Please select a role (Buyer or Seller).");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!hasUpperCase || !hasNumber) {
      setError("Password must contain at least 1 uppercase letter and 1 number.");
      setLoading(false);
      return;
    }

    try {
      const { data: session, error: apiError } = await authClient.signUp.email({ 
        name, 
        email, 
        password, 
        role: roleState, 
        image: image || undefined,
        status: 'active' 
      });

      if (apiError) {
        setError(apiError.message || "An error occurred during sign up.");
        setLoading(false);
        return;
      }

      if (session?.user || session) {
        router.refresh();
        router.push('/');
      }
    } catch (err) {
      console.error("Sign-up exception caught:", err);
      setError(err?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true);
    setError("");
    try {
      const data = await authClient.signIn.social({ provider: "google" });
      console.log("Google Sign Up:", data);
    } catch (err) {
      setError(err?.message || "Google authentication failed.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  // Modern Framer Motion Orchestrations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 120, duration: 0.6 }
    }
  };

  const formOrchestration = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 20, stiffness: 140 } 
    }
  };

  const buttonInteractive = {
    hover: { scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.985 }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-background via-background to-muted/30 px-4 py-8 lg:py-12 overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/40 text-card-foreground shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-2xl flex flex-col md:flex-row-reverse min-h-[700px]"
      >
        {/* Dynamic Presentation Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 90, delay: 0.2 }}
          className="hidden md:flex flex-col items-center justify-center bg-gradient-to-bl from-muted/60 via-muted/20 to-transparent p-12 md:w-1/2 relative overflow-hidden border-l border-border/30"
        >
          <motion.div 
            animate={{ scale: [1, 1.15, 1], x: [0, 15, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" 
          />
          
          <motion.div 
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-full max-w-[340px] relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-grab active:cursor-grabbing"
          >
            <Lottie animationData={signupAnimation} loop={true} />
          </motion.div>
          
          <div className="relative z-10 mt-8 space-y-3 text-center max-w-sm">
            <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Join Resell-Hub Today
            </h2>
            <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
              Create an account to unlock premium trading capabilities, real-time analytics, and standard-setting execution.
            </p>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          variants={formOrchestration}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-8 sm:p-12 lg:p-14 space-y-6 flex flex-col justify-center bg-card/30"
        >
          <motion.div variants={itemVariants} className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground/80 bg-clip-text text-transparent">
              Sign Up
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              Establish your verified cloud architecture space.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 18, stiffness: 180 }}
                  className="rounded-2xl bg-destructive/10 border border-destructive/20 p-4 text-xs font-semibold text-destructive whitespace-pre-line shadow-inner"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid Input Group (Name & Email) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={loading}
                  value={form.name}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-background/30 backdrop-blur-md px-3.5 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={loading}
                  value={form.email}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-background/30 backdrop-blur-md px-3.5 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm"
                  placeholder="you@example.com"
                />
              </motion.div>
            </div>

            {/* Avatar URL Input */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <label htmlFor="image" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">Image URL</label>
              <input
                id="image"
                name="image"
                type="text"
                disabled={loading}
                value={form.image}
                onChange={handleChange}
                className="flex h-11 w-full rounded-xl border border-input bg-background/30 backdrop-blur-md px-3.5 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm"
                placeholder="https://example.com/image.jpg"
              />
            </motion.div>

            {/* Grid Input Group (Password & Confirmation) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    disabled={loading}
                    value={form.password}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-xl border border-input bg-background/30 backdrop-blur-md pl-3.5 pr-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1.5">
                <label htmlFor="confirmPassword" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">Confirm</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    disabled={loading}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-xl border border-input bg-background/30 backdrop-blur-md pl-3.5 pr-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Select Role Dropdown */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">Select Role</label>
              <Select onValueChange={(value) => setRoleState(value)} disabled={loading}>
                <SelectTrigger className="w-full h-11 rounded-xl bg-background/30 backdrop-blur-md border-input focus:ring-2 focus:ring-primary/20 transition-all">
                  <SelectValue placeholder="Select account matrix" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border border-border/60 bg-popover/90 backdrop-blur-lg shadow-xl">
                  <SelectGroup>
                    <SelectItem value="buyer" className="rounded-lg font-medium cursor-pointer focus:bg-primary focus:text-primary-foreground">Buyer</SelectItem>
                    <SelectItem value="seller" className="rounded-lg font-medium cursor-pointer focus:bg-primary focus:text-primary-foreground">Seller</SelectItem>
                    <SelectItem value="admin" className="rounded-lg font-medium cursor-pointer focus:bg-primary focus:text-primary-foreground">Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Fixed Action Submit Control using motion.div wrapper */}
            <motion.div 
              variants={itemVariants} 
              className="pt-2"
            >
              <motion.div
                variants={buttonInteractive}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  type="submit" 
                  disabled={loading || isGoogleLoading} 
                  className="w-full h-11 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all relative overflow-hidden"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Provisioning Account...
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </form>

          {/* Custom Modern Splitting Line */}
          <motion.div variants={itemVariants} className="relative flex items-center py-1">
            <div className="flex-grow border-t border-border/40" />
            <span className="flex-shrink mx-4 text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground/60 bg-transparent px-2">
              or connect gateway
            </span>
            <div className="flex-grow border-t border-border/40" />
          </motion.div>

          {/* Fixed Google OAuth Button wrapper */}
          <motion.div variants={itemVariants}>
            <motion.div
              variants={buttonInteractive}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                variant="outline" 
                type="button"
                disabled={loading || isGoogleLoading}
                className="w-full h-11 rounded-xl font-semibold bg-background/20 hover:bg-muted/40 backdrop-blur-md transition-all border-border/60 shadow-sm" 
                onClick={handleGoogleSignUp}
              >
                {isGoogleLoading ? (
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                ) : (
                  <svg className="mr-2 w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                )}
                Google SSO
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer Navigation Link */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm font-medium text-muted-foreground/80 pt-1"
          >
            Already a member?{" "}
            <Link href="/signIn" className="font-bold text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors">
              Sign In
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;