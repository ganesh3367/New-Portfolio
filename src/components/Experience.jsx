
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "TechNova Inc.",
    period: "2022 - Present",
    description: "Leading the frontend architecture for an enterprise SaaS platform. Mentoring junior developers and implementing micro-frontends.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    period: "2020 - 2022",
    description: "Developed award-winning marketing websites using React, Three.js, and GSAP. Improved site performance by 40%.",
  },
  {
    role: "Web Developer",
    company: "StartupLab",
    period: "2018 - 2020",
    description: "Built scalable web applications from scratch. Collaborated closely with designers to ensure pixel-perfect implementations.",
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
    <section className="relative bg-background py-32 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
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
        initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
