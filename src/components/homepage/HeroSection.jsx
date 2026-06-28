import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeLeft, FadeRight, FadeUp } from "@/components/shared/AnimatedDiv";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Avant-garde Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

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

                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                          Escrow Network
                        </p>
                        <h3 className="text-xl font-extrabold text-foreground tracking-tight mt-0.5">
                          98% Verified
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