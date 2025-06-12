import { AuroraTextDemo } from "@/components/mycomponents/heading";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRight, ArrowRightIcon, MoveRight, Percent, Leaf, Factory, RefreshCcwDotIcon, User2Icon, UserCog, Users, FileQuestionIcon, BedDouble, LucideIndentIncrease, FlaskConical, Mail, Send, Phone, PhoneCall, Code2, Microscope, Wrench, Clock } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Slot } from "@radix-ui/react-slot";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Marquee } from "@/components/magicui/marquee";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { MagicCard } from "@/components/magicui/magic-card";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import { ShineBorder } from "@/components/magicui/shine-border";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AlertTriangle, Zap, MapPin } from "lucide-react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { HeroSection } from "@/components/mycomponents/hero-section";
import { AboutSection } from "@/components/mycomponents/about-section";
import { ContactSection } from "@/components/mycomponents/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <ScrollProgress />
      <SmoothCursor />
      
      <HeroSection />

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-black-50">
        <div className="max-w-7xl mx-auto">
          <Marquee className="py-4 " pauseOnHover>
            <div className="flex gap-4">
              <MagicCard className="text-center p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 shadow-sm hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 w-[350px] group">
                  <div className="flex justify-center mb-4">
                    <RefreshCcwDotIcon className="w-8 h-8 text-yellow-400 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-300 group-hover:text-white transition-colors">95%+</h3>
                  <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">Recovery efficiency (DDR3 RAM benchmark)</p>
              </MagicCard>
              <MagicCard className="text-center p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 shadow-sm hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 w-[350px] group">
                <div className="flex justify-center mb-4">
                  <Leaf className="w-8 h-8 text-green-400 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-4xl font-bold text-gray-300 group-hover:text-white transition-colors">0 toxic emissions</h3>
                <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">Zero heat, zero-acid process</p>
              </MagicCard>
              <MagicCard className="text-center p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 shadow-sm hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 w-[350px] group">
                <div className="flex justify-center mb-4">
                  <Factory className="w-8 h-8 text-blue-400 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-4xl font-bold text-gray-300 group-hover:text-white transition-colors">India-first</h3>
                <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">Cryo-milling solution for PCB waste</p>
              </MagicCard>
            </div>
          </Marquee>
        </div>
      </section>

      <AboutSection />

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
              <div className="md:col-span-1 md:row-span-2 group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
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

              <div className="md:col-span-1 md:row-span-1 group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
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

              <div className="md:col-span-1 md:row-span-1 group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6 font-mono">
              <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                {/* <BorderBeam 
                  size={100}
                  initialOffset={20}
                  className="from-transparent via-yellow-500 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                /> */}
                <h3 className="text-xl font-semibold mb-4 text-gray-100">E-Waste Volume</h3>
                <p className="text-gray-300 text-sm">
                  India generates over <span className="text-gray-300 font-semibold">1 million tonnes</span> of e-waste per year.
                </p>
              </div>

              <div className="group relative p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:bg-gray-800 dark:hover:bg-gray-800 border border-gray-800 dark:border-gray-800 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                {/* <BorderBeam 
                  size={100}
                  initialOffset={20}
                  className="from-transparent via-yellow-500 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                /> */}
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
                {/* <BorderBeam 
                  size={100}
                  initialOffset={20}
                  className="from-transparent via-yellow-500 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                /> */}
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Supply Chain</h3>
                <p className="text-gray-300 text-sm">
                  Global supply chains for <span className="text-gray-300 font-semibold">critical materials</span> are tightening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
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

      {/* Impact Section */}
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
              {/* <ShineBorder 
                shineColor={["#ffaa40", "#9c40ff"]} 
                duration={14}
              /> */}
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
              {/* <ShineBorder 
                shineColor={["#ffaa40", "#9c40ff"]} 
                duration={14}
              /> */}
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
              {/* <ShineBorder 
                shineColor={["#ffaa40", "#9c40ff"]} 
                duration={14}
              /> */}
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

      {/* Team Section */}
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

      {/* <Particles /> */}

      {/* Investors Section */}
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
            <a href="mailto:contact@sashriti.com" target="blank" className="inline-block">
              <ShimmerButton 
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                shimmerDuration="2.5s"
                className="text-lg font-semibold justify-self-center dark:text-white/75"
              >
                Request Pitch Deck
                <Send className="ml-2 mb-1"/>
              </ShimmerButton>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
