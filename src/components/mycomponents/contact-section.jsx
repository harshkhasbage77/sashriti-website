import { FlaskConical, Mail, Phone, MapPin, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "../magicui/magic-card";
import { WordRotate } from "../magicui/word-rotate";
import { TextAnimate } from "../magicui/text-animate";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
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
              <PhoneCall className="ml-1 mb-1 size-4 stroke-neutral-500"/>
              <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
              <AnimatedGradientText className="text-lg font-medium">
                Contact
              </AnimatedGradientText>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-left">
                <div className="text-center md:text-left font-thin text-gray-200 text-3xl py-2 px-4">
                  <p className="font-thin">
                    Reach out if you're an{" "}
                  </p>
                  <WordRotate 
                    words={["investor.", "OEM.", "recycler.", "policymaker."]} 
                    duration={2000}
                    className="inline-block text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ffaa40] to-[#9c40ff]"
                  />                  
                </div>
              </div>
              <MagicCard 
                className="p-6 rounded-2xl"
                gradientFrom="#ffaa40"
                gradientTo="#9c40ff"
                gradientSize={300}
              >
                <TextAnimate
                  className="text-gray-400 font-bold italic mb-6"
                  duration={0.5}
                  stagger={0.05}
                >
                  Let's talk recovery, not recycling.
                </TextAnimate>
                <div className="space-y-4">
                  <p className="text-gray-600 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    contact@sashriti.com
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +91-9080610121
                  </p>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </section>
  );
} 