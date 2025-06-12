import { AuroraTextDemo } from "@/components/mycomponents/heading";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { MoveRight, ArrowRightIcon, MoveRightIcon } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-gray-100/30 to-transparent rounded-full blur-3xl" />
      {/* <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="text-gray-100/30"
        glow={true}
      /> */}
      <div className="relative z-10">
        <div className="flex justify-center gap-4 mt-10">
          <Link href="#solution" passHref>
            <button className="group p-2 rounded-full border border-gray-300 bg-neutral-100 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/30 dark:bg-neutral-800 dark:hover:bg-neutral-700 items-center">
              <AnimatedShinyText className="inline-flex justify-center px-3 py-0 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400
              text-gray-700 items-center gap-2">
                <span className="text-amber-400 fill-amber-400">★</span>
                Explore Our Process
                <ArrowRightIcon className="w-4 h-4 ml-0 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </AnimatedShinyText>
            </button>
          </Link>
        </div>
        <AuroraTextDemo />
        <p className="text-center text-xl font-medium mb-10 text-gray-400">
          Cryogenic Pulverization of E-Waste for High-Purity Material Recovery
        </p>
        <Link href="#contact" passHref>
          <div className="flex justify-center gap-4 mt-20">
            <RainbowButton variant="default" size="default" className="inline-flex justify-center items-center font-extrabold">
              <span>Get in Touch</span>
              <ArrowRightIcon className="w-4 h-4 mb-1 size-3 transition-transform duration-500 ease-in-out group-hover:translate-x-1"/>
            </RainbowButton>
          </div>
        </Link>
      </div>
    </section>
  );
} 