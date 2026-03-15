
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Experience",
    category: "Web Development",
    year: "2023",
    description: "A headless next-gen e-commerce platform with 3D product visualization, seamless checkout flows, and sub-second page transitions.",
    color: "#FF8700",
  },
  {
    title: "AI Dashboard",
    category: "Product Design & Dev",
    year: "2024",
    description: "Analytics dashboard for generative AI models. Features real-time data visualization, magnetic UI elements, and complex state management.",
    color: "#FF5F00",
  },
  {
    title: "Creative Studio",
    category: "Frontend Dev",
    year: "2023",
    description: "Award-winning portfolio for a design agency featuring WebGL fluid simulations, custom GSAP scroll hijacking, and premium typography.",
    color: "#9CA3AF",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-background py-32 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl">
            <span className="text-muted-text">03.</span> Selected Work
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />;
          })}
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={cardRef} className="group relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
      <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-zinc-100 lg:h-[600px] lg:w-2/3 cursor-pointer">
        {/* Fake image with parallax */}
        <motion.div 
          className="absolute inset-0 h-[120%] w-full bg-zinc-200"
          style={{ y, backgroundColor: index % 2 === 0 ? "#111" : "#1a1a1a" }}
        >
          {/* We would use next/image here in reality */}
          <div className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
            <span className="text-2xl font-bold uppercase tracking-widest text-foreground/50">{project.title} Preview</span>
          </div>
        </motion.div>
        
        {/* Overlay hover effect */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      </div>

      <div className="flex w-full flex-col justify-center lg:w-1/3">
        <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4">
          <span className="font-mono text-sm text-primary-accent">{project.category}</span>
          <span className="font-mono text-sm text-muted-text">{project.year}</span>
        </div>
        
        <h3 className="mb-6 text-4xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-accent lg:text-5xl">
          {project.title}
        </h3>
        
        <p className="mb-8 text-lg text-muted-text">
          {project.description}
        </p>

        <Magnetic>
          <button className="hover-target flex h-14 w-14 items-center justify-center rounded-full border border-black/20 text-foreground transition-colors hover:bg-transparent border border-black hover:text-black">
            <ArrowUpRight size={24} />
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
