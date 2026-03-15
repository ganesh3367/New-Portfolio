
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Vercel", "AWS", "Jest"] },
  { category: "Creative", items: ["Three.js", "WebGL", "SVG Animation", "UI/UX Design"] },
];

export default function Skills() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the "ARSENAL" text
  const xTitle = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] // Custom ease-out
      } 
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-background py-32 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Decor with subtle parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-accent/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          style={{ x: xTitle, opacity: opacityHeader }}
          className="mb-24 space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary-accent" />
            <span className="font-mono text-sm uppercase tracking-widest text-primary-accent">Stack & Expertise</span>
          </div>
          <h2 className="text-[12vw] font-black leading-none tracking-tighter text-foreground md:text-[15vw] select-none whitespace-nowrap">
            ARSENAL<span className="text-primary-accent text-[8vw]">.</span>
          </h2>
        </motion.div>

        <div className="mb-20">
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-xl text-muted-text leading-relaxed"
          >
            A curated selection of technologies and tools I use to bring complex digital visions to life. Focused on performance and scalability.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative flex flex-col p-10 rounded-3xl bg-white/60 border border-black/5 shadow-sm transition-all duration-500 hover:border-primary-accent/50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              {/* Dynamic Blur Background for each card */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-accent/10 blur-3xl transition-all duration-500 group-hover:bg-primary-accent/20" />
              
              <div className="relative z-10 flex flex-col h-full space-y-10">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-muted-text/50">0{index + 1}</span>
                  <h3 className="text-3xl font-bold text-foreground tracking-tight">{skillGroup.category}</h3>
                </div>

                <ul className="space-y-4 flex-1">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-muted-text/80 transition-all duration-300 group-hover:text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-accent/40 group-hover:bg-primary-accent transition-colors shrink-0" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Decorative element */}
                <div className="pt-4 border-t border-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs font-mono uppercase tracking-widest text-primary-accent">Experienced</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
