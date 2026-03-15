import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { ArrowUpRight } from "lucide-react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const projects = [
  {
    title: "HELP MY CAR APP",
    category: "Mobile App Development",
    year: "2025",
    description: "Ever stuck when Your car breaks down in the middle of the road? No worries, we got you covered. Just tap a button and get help in minutes.",
    color: "#FF8700",
    image: project1,
    position: "center top",
  },
  {
    title: "HTML TO REACT",
    category: "Extension",
    year: "2025",
    description: "Fear of Reac Wrote in html we will handle rest",
    color: "#FF5F00",
    image: project2,
    position: "center center",
  },
  {
    title: "GANY'S Furnitue ",
    category: "Frontend Dev",
    year: "2024",
    description: "E commerce webpage for u ",
    color: "#9CA3AF",
    image: project3,
    position: "center center",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#fafafa] py-32 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Scrolling Text */}
      <motion.div 
        style={{ x: xBg }}
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[25vw] font-black leading-none text-black/5 select-none"
      >
        SELECTED WORK SELECTED WORK
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-primary-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl"
          >
            <span className="text-muted-text">03.</span> Selected Work
          </motion.h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef} 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-white/50 border border-black/5 lg:h-[650px] lg:w-2/3 cursor-pointer p-12 backdrop-blur-sm shadow-sm transition-all duration-500 hover:shadow-2xl">
        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{ y, scale }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain p-8 md:p-16"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
        
        {/* Floating Number */}
        <div className="absolute right-8 top-8 text-6xl font-black text-black/5 transition-colors duration-500 group-hover:text-primary-accent/10">
          0{index + 1}
        </div>
      </div>

      <div className="flex w-full flex-col justify-center lg:w-1/3">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-4 flex items-center justify-between border-b border-black/10 pb-4"
        >
          <span className="font-mono text-sm text-primary-accent tracking-widest uppercase">{project.category}</span>
          <span className="font-mono text-sm text-muted-text">{project.year}</span>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-4xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-accent lg:text-5xl"
        >
          {project.title}
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-lg text-muted-text leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Magnetic>
            <button className="hover-target flex h-16 w-16 items-center justify-center rounded-full border border-black/10 text-foreground transition-all duration-500 hover:bg-black hover:text-white group-hover:border-primary-accent">
              <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </motion.div>
  );
}
