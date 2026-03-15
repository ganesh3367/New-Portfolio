import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "../assets/images/profile.png";

export default function About() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal translation based on scroll progress
  // We want to translate negatively by the width of the content minus the viewport width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-background text-foreground"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex h-full w-[200vw] items-center gap-20 px-20 relative"
          style={{ x }}
        >
          {/* Section 1: Intro Text */}
          <div className="flex w-screen max-w-4xl flex-col gap-8 shrink-0">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl">
              <span className="text-muted-text">01.</span> About
            </h2>
            <p className="text-xl leading-relaxed text-muted-text sm:text-3xl">
              I am a passionate Full Stack Developer with a sharp eye for <span className="text-foreground">beautiful design</span> and <span className="text-foreground">smooth interactions</span>.
              I specialize in bridging the gap between design and engineering to create products that not only work perfectly, but feel incredible to use.
            </p>
          </div>

          {/* Section 2: Image & Details */}
          <div className="flex w-screen max-w-6xl shrink-0 items-center justify-between gap-12 pr-20">
            <div className="flex-1">
              <h3 className="mb-6 text-3xl font-bold">My Approach</h3>
              <p className="mb-4 text-lg text-muted-text">
                I believe that animations and micro-interactions elevate a website from good to memorable.
                Using tools like Framer Motion and GSAP, I bring static mockups to life.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-2 bg-transparent border border-black/5">
                  <div className="h-2 w-2 rounded-full bg-primary-accent" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>

            <div className="group relative h-[600px] w-[450px] overflow-hidden rounded-2xl">
              <img 
                src={profileImg} 
                alt="Ganesh Wayal" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-mono text-xl font-bold tracking-wider text-white">GANESH WAYAL</p>
                <p className="text-sm text-muted-text">Based in [Pune]</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
