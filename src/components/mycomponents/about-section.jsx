import { Users } from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="group relative inline-flex w-fit items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-12">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <Users className="ml-1 mb-1 size-4 stroke-neutral-500"/>
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-lg font-medium">
              About Us
            </AnimatedGradientText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-4 md:px-0">
          {/* Position 1 */}
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="group relative h-full p-4 md:p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(156,64,255,0.3)] hover:translate-y-[-4px] border border-gray-800 dark:border-gray-800">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffaa40]/20 via-[#9c40ff]/20 to-[#ffaa40]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-100">Who We Are</h3>
                <p className="text-gray-300 text-xs md:text-sm">Engineers, researchers, and operators driven by science and purpose.</p>
              </div>
            </div>
          </NeonGradientCard>
          
          {/* Position 6 */}
          <NeonGradientCard className="items-center justify-center text-center" neonColors={ {firstColor: "#1c1faa", secondColor: "#f0bbfa"} }>
            <div className="group relative h-full p-4 md:p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(156,64,255,0.3)] hover:translate-y-[-4px] border border-gray-800 dark:border-gray-800">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffaa40]/20 via-[#9c40ff]/20 to-[#ffaa40]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-100">Vision</h3>
                <p className="text-gray-300 text-xs md:text-sm">A cleaner planet powered by smarter recovery.</p>
              </div>
            </div>
          </NeonGradientCard>
          
          {/* Position 7 */}
          <NeonGradientCard className="items-center justify-center text-center" neonColors={ {firstColor: "#cc0ffa", secondColor: "#00bbaa"} }>
            <div className="group relative h-full p-4 md:p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(156,64,255,0.3)] hover:translate-y-[-4px] border border-gray-800 dark:border-gray-800">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffaa40]/20 via-[#9c40ff]/20 to-[#ffaa40]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-100">Mission</h3>
                <p className="text-gray-300 text-xs md:text-sm">To industrialize a scalable, clean, and cost-effective cryogenic pulverization system.</p>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </div>
    </section>
  );
} 