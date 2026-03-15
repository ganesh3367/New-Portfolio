
import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { Send } from "lucide-react";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleFocus = (name) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map the entry field names back to our state keys
    const fieldMapping = {
      "entry.540519818": "name",
      "entry.1814335426": "email",
      "entry.636509076": "message"
    };
    const fieldKey = fieldMapping[name];
    if (fieldKey) {
      setFormData(prev => ({ ...prev, [fieldKey]: value }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isActive = (name) => focusedInput === name || formData[name].length > 0;

  return (
    <section className="relative min-h-screen bg-background py-32 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:gap-20">

        <div className="mb-20 flex-1 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-5xl font-bold tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
              Let's create <br />
              <span className="text-muted-text">something</span> <br />
              <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">together.</span>
            </h2>

            <p className="max-w-md text-xl text-muted-text">
              Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
            </p>

            <div className="mt-16 space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-sm uppercase tracking-widest text-muted-text">Email</span>
                <a href="mailto:ganeshwayal250@gmail.com" className="hover-target text-xl font-medium text-foreground transition-colors hover:text-primary-accent">
                  ganeshwayal@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm uppercase tracking-widest text-muted-text">Social</span>
                <div className="flex gap-6">
                  {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                    <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="hover-target font-medium text-foreground transition-colors hover:text-primary-accent">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl bg-zinc-50 p-12 text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-accent/10 text-primary-accent">
                <Send size={40} />
              </div>
              <h3 className="mb-4 text-3xl font-bold">Message Sent!</h3>
              <p className="text-lg text-muted-text">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-medium uppercase tracking-wider text-primary-accent hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              <form
                className="flex flex-col gap-12"
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzSHxGq7q5flv32_v6KeX5ga9lzOodmnPuHiiQztcaFD5r8w/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
              >
                <div className="relative group">
                  <label
                    className={`absolute left-0 transition-all duration-300 ${isActive("name") ? "-top-6 text-xs text-primary-accent" : "top-2 text-lg text-muted-text"
                      }`}
                  >
                    What's your name?
                  </label>
                  <input
                    type="text"
                    name="entry.540519818"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className="w-full bg-transparent border-b border-black/20 py-2 text-xl text-foreground outline-none transition-colors focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="relative group">
                  <label
                    className={`absolute left-0 transition-all duration-300 ${isActive("email") ? "-top-6 text-xs text-primary-accent" : "top-2 text-lg text-muted-text"
                      }`}
                  >
                    What's your email?
                  </label>
                  <input
                    type="email"
                    name="entry.1814335426"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className="w-full bg-transparent border-b border-black/20 py-2 text-xl text-foreground outline-none transition-colors focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="relative group">
                  <label
                    className={`absolute left-0 transition-all duration-300 ${isActive("message") ? "-top-6 text-xs text-primary-accent" : "top-2 text-lg text-muted-text"
                      }`}
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    name="entry.636509076"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    className="w-full resize-none bg-transparent border-b border-black/20 py-2 text-xl text-foreground outline-none transition-colors focus:border-primary-accent"
                    required
                  />
                </div>

                <Magnetic>
                  <button type="submit" className="hover-target group relative flex h-20 w-full items-center justify-between overflow-hidden rounded-full bg-transparent border border-black/5 border border-black/10 px-10 transition-colors hover:border-primary-accent">
                    <span className="relative z-10 text-xl font-medium text-foreground transition-colors group-hover:text-black">Send Message</span>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-transparent border border-black text-black transition-colors group-hover:bg-black group-hover:text-foreground">
                      <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 z-0 h-[200%] w-[120%] -translate-x-1/2 -translate-y-1/2 scale-y-0 rounded-[50%] bg-primary-accent transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  </button>
                </Magnetic>
              </form>
              <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
}
