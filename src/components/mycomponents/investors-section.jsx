import { FlaskConical, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Globe } from "@/components/magicui/globe";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function InvestorsSection() {
  return (
    <section className="py-16 px-4 h-full">
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
              Investors
            </AnimatedGradientText>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center justify-center">
          <p className="mb-2 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">We&apos;re raising smart capital.</p>
          <Globe />
          <p className="text-gray-200 mb-8">Looking for partners who understand deep-tech, materials, and sustainability.</p>
          <ShimmerButton 
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            shimmerDuration="2.5s"
            className="text-lg font-semibold justify-self-center dark:text-white/75"
          >
            Request Pitch Deck
            <Send className="ml-2 mb-1"/>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
} 