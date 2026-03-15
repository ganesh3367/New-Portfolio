
import { motion } from "framer-motion";

const tech = [
  { name: "React", x: -150, y: -100 },
  { name: "Next.js", x: 150, y: 100 },
  { name: "Javascript", x: 0, y: -150 },
  { name: "Tailwind", x: -250, y: 100 },
  { name: "Framer Motion", x: 250, y: -50 },
  { name: "GSAP", x: -100, y: 200 },
  { name: "Node.js", x: 100, y: -200 },
];

export default function TechStack() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden bg-background py-20">
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <h2 className="text-[10vw] font-black uppercase text-foreground/5 tracking-tighter">
          Technologies
        </h2>
      </div>
      
      <div className="relative z-20 flex h-full w-full items-center justify-center">
        {tech.map((item, i) => (
          <motion.div
            key={i}
            className="absolute flex h-16 px-6 cursor-pointer items-center justify-center rounded-2xl border-2 border-foreground bg-primary-accent shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110"
            initial={{ x: item.x * 0.5, y: item.y * 0.5, opacity: 0 }}
            whileInView={{ x: item.x, y: item.y, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: i * 0.1,
            }}
            animate={{
              y: [item.y, item.y - 15, item.y],
            }}
            style={{ x: item.x, y: item.y }}
          >
            <span className="font-bold text-foreground text-lg">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
