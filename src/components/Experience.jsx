
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Rookie Just jin college ",
    company: "Selftaught",
    period: "2024",
    description: "Start my College jouney with zero knowledge at the end of 2024 complete mastrey in HTML CSS JS",
  },
  {
    role: "Chapter 2",
    company: "MY Version 2,0",
    period: "2025",
    description: "Master in Frontend Backend and Full Stack Development Also Complete DSA",
  },
  {
    role: "Chapter 3",
    company: "MY Version 3,0",
    period: "2026",
    description: "App Development and Full Stack Development with React Native and NodeJs And Also DATABASE Mastery in MONGODB and MYSQL ",
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative min-h-screen bg-background py-32 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="mesh-gradient-2 absolute inset-0" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary-accent/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl">
            <span className="text-muted-text">04.</span> Experience
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-transparent border border-black/10 md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-primary-accent to-secondary-accent md:left-1/2 md:-translate-x-1/2"
            style={{ scaleY: pathLength }}
          />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} justify-center gap-8 md:gap-16 pl-8 md:pl-0`}>
      {/* Timeline dot */}
      <div className="absolute left-[-29px] top-6 h-4 w-4 rounded-full border-4 border-background bg-primary-accent md:left-1/2 md:-ml-2 md:top-1/2 md:-translate-y-1/2" />

      {/* Empty space for alternating layout */}
      <div className="hidden w-1/2 md:block" />

      {/* Content block */}
      <motion.div
        className="w-full md:w-1/2 pt-4 md:pt-0"
        initial={{ 
          opacity: 0, 
          x: isEven ? -150 : 150, 
          y: 100,
          rotate: isEven ? -10 : 10
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0, 
          y: 0,
          rotate: 0
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end text-left md:text-right'}`}>
          <span className="mb-2 font-mono text-sm text-primary-accent">{exp.period}</span>
          <h3 className="text-3xl font-bold text-foreground">{exp.role}</h3>
          <h4 className="mb-4 text-xl font-medium text-muted-text">{exp.company}</h4>
          <p className="text-lg text-muted-text">{exp.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
