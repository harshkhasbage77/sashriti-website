import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { SparklesText } from "@/components/magicui/sparkles-text";

export function ImpactSection() {
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
              Impact
            </AnimatedGradientText>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 flex flex-col min-h-[400px]">
            <ShineBorder 
              shineColor={["#ffaa40", "#9c40ff"]} 
              duration={14}
            />
            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1000" 
                alt="Environmental impact" 
                className="w-full h-full object-cover"
              />
            </div>
            <SparklesText 
              className="text-2xl font-semibold mb-6 block"
              colors={{ first: "#ffaa40", second: "#9c40ff" }}
              sparklesCount={5}
            >
              Environmental
            </SparklesText>
            <ul className="text-gray-600 dark:text-gray-300 text-lg space-y-3">
              <li className="flex items-start">
                <span className="text-[#ffaa40] mr-2">•</span>
                Drastically reduces landfill waste and acid-based recycling
              </li>
              <li className="flex items-start">
                <span className="text-[#ffaa40] mr-2">•</span>
                Enables carbon-credit-compatible operations
              </li>
            </ul>
          </div>
          <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 flex flex-col min-h-[400px]">
            <ShineBorder 
              shineColor={["#ffaa40", "#9c40ff"]} 
              duration={14}
            />
            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" 
                alt="Economic impact" 
                className="w-full h-full object-cover"
              />
            </div>
            <SparklesText 
              className="text-2xl font-semibold mb-6 block"
              colors={{ first: "#ffaa40", second: "#9c40ff" }}
              sparklesCount={5}
            >
              Economic
            </SparklesText>
            <ul className="text-gray-600 dark:text-gray-300 text-lg space-y-3">
              <li className="flex items-start">
                <span className="text-[#ffaa40] mr-2">•</span>
                Turns waste into high-margin metal streams
              </li>
              <li className="flex items-start">
                <span className="text-[#ffaa40] mr-2">•</span>
                Makes rural micro-recovery units possible
              </li>
            </ul>
          </div>
          <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 flex flex-col min-h-[400px]">
            <ShineBorder 
              shineColor={["#ffaa40", "#9c40ff"]} 
              duration={14}
            />
            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
                alt="Strategic impact" 
                className="w-full h-full object-cover"
              />
            </div>
            <SparklesText 
              className="text-2xl font-semibold mb-6 block"
              colors={{ first: "#ffaa40", second: "#9c40ff" }}
              sparklesCount={5}
            >
              Strategic
            </SparklesText>
            <ul className="text-gray-600 dark:text-gray-300 text-lg space-y-3">
              <li className="flex items-start">
                <span className="text-[#ffaa40] mr-2">•</span>
                Reduces India&apos;s reliance on imported critical metals
              </li>
              <li className="flex items-start">
                <span className="text-[#ffaa40] mr-2">•</span>
                Aligns with global ESG and sustainable mining mandates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 