import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AnimatedList } from "@/components/magicui/animated-list";
import { ShineBorder } from "@/components/magicui/shine-border";

export function TechnologySection() {
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
            <FlaskConical className="ml-1 mb-1 size-4 stroke-neutral-500"/>
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-lg font-medium">
              Technology
            </AnimatedGradientText>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center">
            <BoxReveal width="fit-content" boxColor="#ffaa40" duration={0.8}>
              <h2 className="text-3xl font-bold mb-6 block text-gray-800 dark:text-gray-100">
                Built from First Principles
              </h2>
            </BoxReveal>
          </div>
          <div className="flex justify-center">
            <BoxReveal width="fit-content" boxColor="#9c40ff" duration={0.8}>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Our IP-pending cryo-mill is custom-designed for layered electronic waste, not food-grade LN2 gimmicks. We use a hybrid mechanical-thermal disruption model, with a process efficiency benchmarked at 95% recovery for DDR3 RAM.
              </p>
            </BoxReveal>
          </div>
          <div className="flex justify-center">
            <BoxReveal width="fit-content" boxColor="#ffaa40" duration={0.8}>
              <h3 className="text-2xl font-semibold mt-6 block text-gray-800 dark:text-gray-100">
                Prototyped. Validated. Scaling Up.
              </h3>
            </BoxReveal>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="h-[280px]">
            <AnimatedList delay={500} className="space-y-3">
              <div className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
                <ShineBorder 
                  shineColor={["#ffaa40", "#9c40ff"]} 
                  duration={14}
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Lab-grade validation</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                    Done
                  </span>
                </div>
              </div>
              <div className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
                <ShineBorder 
                  shineColor={["#ffaa40", "#9c40ff"]} 
                  duration={14}
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Commercial-scale proof-of-concept</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                    Done
                  </span>
                </div>
              </div>
              <div className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
                <ShineBorder 
                  shineColor={["#ffaa40", "#9c40ff"]} 
                  duration={14}
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Patent</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                    In progress
                  </span>
                </div>
              </div>
              <div className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
                <ShineBorder 
                  shineColor={["#ffaa40", "#9c40ff"]} 
                  duration={14}
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Manufacturing partner</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    In discussion
                  </span>
                </div>
              </div>
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  );
} 