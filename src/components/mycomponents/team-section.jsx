import { FlaskConical, Code2, Microscope, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShineBorder } from "@/components/magicui/shine-border";

export function TeamSection() {
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
              Team
            </AnimatedGradientText>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
            <ShineBorder 
              shineColor={["#ffaa40", "#9c40ff"]} 
              duration={14}
            />
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                <Code2 className="w-16 h-16 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 text-center">Shri Srinivasa Ragavan</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Computer engineer blending robotics and AI with waste recovery.</p>
          </div>
          <div className="group relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
            <ShineBorder 
              shineColor={["#ffaa40", "#9c40ff"]} 
              duration={14}
            />
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                <Microscope className="w-16 h-16 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 text-center">Dr Shri ChandraSekhar Tiwary</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Metallurgy and nanoparticle researcher. Academic backbone.</p>
          </div>
          <div className="group relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
            <ShineBorder 
              shineColor={["#ffaa40", "#9c40ff"]} 
              duration={14}
            />
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                <Wrench className="w-16 h-16 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 text-center">Shri Jayakumar Jayaraman</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Mechanical engineer & financial strategist. Builds precision startups.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 