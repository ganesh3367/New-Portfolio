import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  const title = "Full Stack\nDeveloper";

  return (
    <section
      ref={container}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-grid"
    >
      <motion.div
        className="relative z-10 flex w-full max-w-7xl flex-col px-4 sm:px-8 md:px-12 lg:px-20"
        style={{ y, opacity }}
      >
        <motion.p
          className="mb-4 text-xl font-medium tracking-wider text-muted-text sm:text-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Hi, I am Ganesh Wayal
        </motion.p>

        <motion.h1
          className="font-sans text-6xl font-black uppercase leading-[1.1] tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split("\n").map((line, i) => (
            <span key={i} className="block overflow-hidden">
              {line.split(" ").map((word, j) => (
                <motion.span
                  key={`${i}-${j}`}
                  className="mr-[0.2em] inline-block"
                  variants={wordVariants}
                >
                  {word === "Developer" ? (
                    <span className="bg-primary-accent text-foreground px-4 rounded-xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.div
          className="mt-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <p className="text-lg leading-relaxed text-muted-text sm:text-xl">
            I craft premium digital experiences using modern web technologies.And Build Apps Also.
            Focused on performance, animations, and beautiful user interfaces.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <Magnetic>
            <button className="hover-target group relative flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-foreground bg-foreground px-8 font-medium text-background transition-colors hover:text-foreground">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:bg-transparent" />
              <div className="absolute left-1/2 top-1/2 z-0 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-primary-accent transition-transform duration-500 group-hover:scale-100" />
            </button>
          </Magnetic>

          <Magnetic>
            <button className="hover-target group flex h-14 items-center justify-center rounded-full border-2 border-foreground/20 px-8 font-medium text-foreground transition-all hover:border-foreground hover:bg-black/5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Contact Me
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-text flex gap-2"><ArrowDown size={16} className="text-primary-accent bg-foreground rounded-full p-0.5" /> Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
