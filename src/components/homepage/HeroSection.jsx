import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeLeft, FadeRight, FadeUp } from "@/components/shared/AnimatedDiv";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Unsplash Wholesale & Supply-Chain Architectural Background */}
      
      {/* Avant-Garde Wholesale Logistic Dot & Isometric Mesh Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.04)_1.5px,transparent_1.5px)] [background-size:24px_24px] -z-30" />
      
      {/* Architectural Supply-Chain Vector Lines */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full [background:linear-gradient(26.5deg,transparent_49%,var(--foreground)_50%,transparent_51%)] [background-size:120px_60px]" />
        <div className="absolute top-0 left-0 w-full h-full [background:linear-gradient(-26.5deg,transparent_49%,var(--foreground)_50%,transparent_51%)] [background-size:120px_60px]" />
      </div>

      {/* Abstract Structural Asset blocks representing stacked volume cargo */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] border border-pink-500/10 rounded-[60px] rotate-12 -z-10 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] border border-cyan-500/10 rounded-[80px] -rotate-12 -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* Left Text Space Container */}
          <div className="lg:col-span-7">
            <FadeLeft>
              <div>
                {/* Modern Capsule Badge */}
                <div className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-purple-500/20 px-4 py-2 shadow-[0_4px_20px_rgba(139,92,246,0.05)]">
                  <Sparkles className="h-4 w-4 text-pink-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.15em] font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                    The Next-Gen Circular Ecosystem
                  </span>
                </div>

                {/* Hero Gradient Typography */}
                <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
                  Give quality items a{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] hover:bg-right transition-all duration-700 bg-clip-text text-transparent">
                    second narrative.
                  </span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
                  Buy, swap, and sell certified pre-owned electronics, high-street fashion, and designer furniture. Minimize ecological waste while maximizing value liquidity.
                </p>

                {/* Interface CTA Matrix */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/products">
                    <Button className="h-14 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold tracking-wide px-8 hover:opacity-95 shadow-xl shadow-purple-500/20 hover:shadow-none active:scale-95 transition-all duration-200 border-0">
                      Browse Live Drop
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link href="/categories">
                    <Button
                      variant="outline"
                      className="h-14 rounded-2xl px-8 border-foreground/10 bg-foreground/[0.02] hover:bg-foreground hover:text-background active:scale-95 transition-all duration-200"
                    >
                      Explore Verticals
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeLeft>
          </div>

          {/* Right Visual Architecture Media Wall */}
          <div className="lg:col-span-5 relative">
            <FadeRight>
              <div className="relative mx-auto max-w-[450px] lg:max-w-none">
                
                {/* Micro Ambient Shadow Deck */}
                <div className="absolute -inset-1 rounded-[42px] bg-gradient-to-r from-pink-500 to-cyan-500 opacity-30 blur-xl -z-10 animate-pulse" />

                {/* Main Asymmetric Image Shield Cut */}
                <div className="relative overflow-hidden rounded-bl-[40px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[90px] border border-foreground/[0.08] bg-background shadow-2xl aspect-square">
                  <Image
                    src="/resell.jpg"
                    alt="Resell Hub Platform Display"
                    width={800}
                    height={800}
                    priority
                    className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Glassmorphic Live Counter Widget */}
                <FadeUp delay={0.3}>
                  <div className="absolute -bottom-6 -left-6 md:-left-10 rounded-2xl border border-purple-500/20 bg-background/70 backdrop-blur-xl px-6 py-5 shadow-2xl max-w-[260px]">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                        <ShieldCheck className="h-6 w-6 text-pink-500" />
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <p className="text-xs font-semibold text-muted-foreground/90 tracking-wide">
                            Escrow Network
                          </p>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground font-mono">
                          99% <span className="text-sm font-medium text-muted-foreground">Verified</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </FadeRight>
          </div>

        </div>

        {/* Global Impact Analytical Dashboard */}
        <FadeUp delay={0.2}>
          <div className="mt-28 border-t border-foreground/[0.06] pt-16">
            <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
              
              <div className="relative pl-6 border-l-2 border-pink-500/30 group hover:border-pink-500 transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Zap className="h-4 w-4 text-pink-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Active Assets</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">124k+</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-purple-500/30 group hover:border-purple-500 transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <ShieldCheck className="h-4 w-4 text-purple-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Nodes Verified</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">48k</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-cyan-500/30 group hover:border-cyan-500 transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Globe className="h-4 w-4 text-cyan-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Circulation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">92%</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-emerald-500/30 group hover:border-emerald-500 transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Coins className="h-4 w-4 text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Offset Metric</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">12t CO₂</h2>
              </div>

            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}