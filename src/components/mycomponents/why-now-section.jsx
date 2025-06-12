import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";

export function WhyNowSection() {
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
            <Clock className="ml-1 mb-1 size-4 stroke-neutral-500"/>
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-lg font-medium">
              Why Now
            </AnimatedGradientText>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Timing is everything. We&apos;re ready.
            </h2>
          </div>

          <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6 font-mono">
            <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <BorderBeam 
                size={100}
                initialOffset={20}
                className="from-transparent via-yellow-500 to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">E-Waste Volume</h3>
              <p className="text-gray-300 text-sm">
                India generates over <span className="text-gray-300 font-semibold">1 million tonnes</span> of e-waste per year.
              </p>
            </div>

            <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <BorderBeam 
                size={100}
                initialOffset={20}
                className="from-transparent via-yellow-500 to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Policy Pressure</h3>
              <ul className="space-y-2 text-gray-300 text-sm font-mono">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  <span className="text-gray-300 font-semibold"></span>EPR {" "}mandates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  <span className="text-gray-300 font-semibold">Carbon tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa40] mr-3"></span>
                  <span className="text-gray-300 font-semibold">Circularity indices</span>
                </li>
              </ul>
            </div>

            <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <BorderBeam 
                size={100}
                initialOffset={20}
                className="from-transparent via-yellow-500 to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Supply Chain</h3>
              <p className="text-gray-300 text-sm">
                Global supply chains for <span className="text-gray-300 font-semibold">critical materials</span> are tightening.
              </p>
            </div>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
} 