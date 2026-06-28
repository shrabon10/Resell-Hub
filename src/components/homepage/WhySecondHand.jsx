import { Recycle, Trees, Droplets, Factory } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedDiv";

const featured = {
  icon: Recycle,
  stat: "92M",
  statUnit: "tons intercepted / annually",
  title: "Deflecting the Post-Consumer Cascade",
  description:
    "Every curated exchange breaks the linear take-make-waste cycle, redirecting premium materials away from the global discard stream and transforming waste into structural permanency.",
};

const benefits = [
  {
    icon: Trees,
    stat: "80%",
    title: "Carbon Arbitrage",
    description: "Bypasses primary industrial extraction entirely, securing an instant margin of avoided atmospheric load.",
    accent: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: Droplets,
    stat: "2.7kL",
    title: "Hydrological Credit",
    description: "Saves the massive aquatic expenditure of raw textile cultivation with a single conscious choice.",
    accent: "from-blue-500/10 to-indigo-500/5",
  },
  {
    icon: Factory,
    stat: "0",
    title: "Logistical Zero",
    description: "Eliminates global dispatch loops, multi-tiered freight packaging, and redundant container transit.",
    accent: "from-amber-500/10 to-orange-500/5",
  },
];

export default function WhySecondHand() {
  return (
    <section className="overflow-hidden bg-[#FBFBFA] py-24 lg:py-32 relative">
      {/* Structural Minimalist Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#3E5F47]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-700/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Editorial Conceptual Hook */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3E5F47]/20 bg-[#3E5F47]/5 text-[#3E5F47] text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E5F47] animate-pulse" />
                The Circular Paradigm
              </div>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1C241E] leading-[1.1] font-serif">
                Ownership without a <span className="text-[#3E5F47] italic font-normal">manufacturing footprint</span>.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[#5C645E] text-base leading-relaxed max-w-md font-medium">
                We treat pre-owned procurement not as a compromise, but as a strategic ecological override—retaining design value while severing ties with heavy industry.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: Premium Bento Grid Stack */}
          <div className="space-y-8">
            {/* Primary Hero Feature Card */}
            <FadeUp delay={0.15}>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3E5F47] p-8 sm:p-12 text-white shadow-[0_20px_50px_rgba(62,95,71,0.2)] group transition-all duration-500 hover:shadow-[0_24px_60px_rgba(62,95,71,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-8 justify-between">
                  <div className="space-y-4 max-w-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <featured.icon className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">{featured.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80 font-medium">
                        {featured.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end justify-center shrink-0 border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-8">
                    <span className="font-serif text-6xl sm:text-7xl font-bold tracking-tighter leading-none bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                      {featured.stat}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/60 mt-1 whitespace-nowrap">
                      {featured.statUnit}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Micro-Bento Grid List */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <div className="group h-full relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.12] hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-8">
                      {/* Dynamic Background Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                      <div className="relative z-10 space-y-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] text-[#3E5F47] bg-[#FBFBFA] transition-all duration-300 group-hover:bg-[#3E5F47] group-hover:text-white group-hover:border-transparent shadow-sm">
                          <benefit.icon className="h-4 w-4" />
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold tracking-tight text-[#161616] group-hover:text-[#3E5F47] transition-colors duration-200">
                            {benefit.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-[#6F6F6F] font-medium">
                            {benefit.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 pt-4 border-t border-black/[0.04]">
                        <span className="font-serif text-3xl font-black text-[#3E5F47] tracking-tight">
                          {benefit.stat}
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

          </div>
        </div>
      </div>
    </section>
  );
}