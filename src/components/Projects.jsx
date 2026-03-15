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
  return (
    <section className="relative bg-[#fafafa] py-32 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-primary-accent/5 rounded-full blur-[120px] pointer-events-none" />
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
    <motion.div 
      ref={cardRef} 
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-white/[0.03] border border-black/5 lg:h-[600px] lg:w-2/3 cursor-pointer p-8">
        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{ y }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain"
          />
        </motion.div>

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
    </motion.div>
  );
}
