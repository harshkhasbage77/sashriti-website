import { LucideIndentIncrease } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";

export function SolutionSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="group relative inline-flex w-fit items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
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
            <LucideIndentIncrease className="ml-1 mb-1 size-4 stroke-neutral-500"/>
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-lg font-medium">
              Our Solution
            </AnimatedGradientText>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Cryogenic Pulverization
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A dry, scalable process that freezes, fractures, and fractionates multi-layer PCBs into separated, reclaimable material streams.
            </p>
          </div>

          <BentoGrid className="grid-cols-1 md:grid-cols-2 auto-rows-[minmax(200px,auto)] gap-6">
            <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <BorderBeam 
                size={100}
                duration={8}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
              />
              <h3 className="text-2xl font-semibold mb-6 text-gray-100">Core Process Flow</h3>
              <ol className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">1</span>
                  Manual Dismantling
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">2</span>
                  Shredding
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">3</span>
                  Cryogenic Treatment
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">4</span>
                  Pulverization
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">5</span>
                  Mechanical Sieving
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">6</span>
                  Shaking Table Separation
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffaa40]/10 text-[#ffaa40] mr-4 text-lg">7</span>
                  Electrostatic Refinement
                </li>
              </ol>
            </div>

            <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <BorderBeam 
                size={100}
                duration={8}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
                delay={2}
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Output Streams</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  Clean Copper Particles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  Base Metal Powders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  Gold-Enriched Fractions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  Resin Dust (for R&D into composites)
                </li>
              </ul>
            </div>

            <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <BorderBeam 
                size={100}
                duration={8}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
                delay={4}
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">What Makes It Different</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#9c40ff] mr-3"></span>
                  No acids. No heat. No emissions.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#9c40ff] mr-3"></span>
                  Better purity, higher resale value.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#9c40ff] mr-3"></span>
                  Scalable design for India&apos;s decentralised e-waste ecosystem.
                </li>
              </ul>
            </div>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
} 