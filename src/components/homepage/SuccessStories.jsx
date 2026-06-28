import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedDiv";

const stories = [
  {
    quote: "Sourced a legendary Hasselblad 500C medium-format body that had been sitting in my watchlists for months. The transaction structure was clean, peer-to-peer communication was seamless, and the camera arrived performing at absolute spec.",
    name: "Arthur Vance",
    role: "Verified Tech Collector • Kyoto, JP",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote: "Liquidated a curated collection of authentic mid-century modern teak furniture within two weeks. The platform's integrated identity verification layer filtered out casual window shoppers, directing serious architectural buyers right to my private portal.",
    name: "Sienna Brooks",
    role: "Estate Liquidator • Austin, TX",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote: "Completely decoupled my wardrobe architecture from fast fashion pipelines. Acquired archival outerwear pieces for a fraction of primary market costs. The physical and material longevity of circular luxury design scales past anything produced new today.",
    name: "Leon Sterling",
    role: "Sartorial Architect • London, UK",
    image: "https://i.pravatar.cc/150?img=11",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-background relative">
      {/* Structural Atmospheric Blurs */}
      <div className="absolute top-12 left-1/3 w-[450px] h-[450px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[300px] h-[300px] bg-secondary/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-12 lg:gap-16 items-start">
          
          {/* Header Framework */}
          <div className="lg:sticky lg:top-28 space-y-4">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/[0.08] bg-foreground/[0.02] text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Collective Ledger
              </div>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black font-serif tracking-tight text-foreground leading-[1.15]">
                Voices from the <span className="text-primary italic font-normal">ecosystem</span>.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
                Real-world asset optimization metrics, direct from our verified peer network.
              </p>
            </FadeUp>
          </div>

          {/* Testimonial Bento-inspired Stack */}
          <StaggerContainer>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {stories.map((story) => (
                <StaggerItem key={story.name}>
                  <div className="group h-full relative overflow-hidden rounded-[2.5rem] border border-foreground/[0.06] bg-card/40 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/[0.12] hover:bg-card flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.03)]">
                    
                    {/* Floating Design Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/[0.02] rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                    <div className="space-y-8 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary transition-transform duration-300 group-hover:rotate-6">
                          <Quote className="h-4 w-4 fill-current" />
                        </div>
                      </div>

                      <p className="text-base text-foreground/90 font-medium leading-relaxed tracking-tight">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-foreground/[0.05] relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="overflow-hidden rounded-2xl h-12 w-12 border border-foreground/[0.08] shadow-inner bg-muted">
                          <Avatar className="h-full w-full rounded-none transition-transform duration-500 group-hover:scale-105">
                            <AvatarImage src={story.image} className="object-cover" />
                            <AvatarFallback className="font-bold text-xs">{story.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold tracking-tight text-foreground">
                            {story.name}
                          </h4>
                          <p className="text-xs font-semibold text-muted-foreground/80">
                            {story.role}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}