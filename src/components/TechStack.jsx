
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
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-background py-32 sm:py-40">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] bg-primary-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="h-[400px] w-[400px] bg-secondary-accent/5 rounded-full blur-[100px] absolute translate-x-1/2 -translate-y-1/2" />
        <h2 className="text-[15vw] font-black uppercase text-foreground/[0.03] tracking-tighter whitespace-nowrap">
          Arsenal
        </h2>
      </div>
      
      <div className="relative z-20 flex h-full w-full max-w-7xl items-center justify-center">
        {tech.map((item, i) => (
          <motion.div
            key={i}
            className="absolute flex h-16 px-6 cursor-pointer items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[10px_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all hover:border-primary-accent group"
            initial={{ x: item.x * 2, y: item.y * 2, opacity: 0, scale: 0.5 }}
            whileInView={{ x: item.x, y: item.y, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: i * 0.1,
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ x: item.x, y: item.y }}
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 blur transition-opacity group-hover:opacity-20" />
            <span className="relative z-10 font-bold text-foreground text-lg">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
