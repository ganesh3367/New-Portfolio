import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const MainPage = () => {
    useScrollReveal();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitToGoogleForm = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target;
        const formData = new FormData(form);

        const entryIds = {
            name: 'entry.262204678',
            email: 'entry.118273897',
            message: 'entry.1628378535'
        };

        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfQvCZxvgqI0vbeVQhWlUwREASnP5hwQZ5xpp2xh7gQKSWEfg/formResponse';

        const data = {
            [entryIds.name]: formData.get('name'),
            [entryIds.email]: formData.get('email'),
            [entryIds.message]: formData.get('message')
        };

        try {
            await fetch(googleFormUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data)
            });

            alert('Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const [markerStyle, setMarkerStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navRef = useRef(null);

    const handleMouseEnter = (e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        setMarkerStyle({
            left: rect.left - navRect.left,
            width: rect.width,
            opacity: 1
        });
    };

    const handleMouseLeave = () => {
        setMarkerStyle(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <div>
            <nav ref={navRef}>
                <div className="nav-marker" style={{
                    transform: `translateX(${markerStyle.left}px)`,
                    width: `${markerStyle.width}px`,
                    opacity: markerStyle.opacity
                }}></div>
                <ul>
                    <li><a href="#page1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</a></li>
                    <li><a href="#page2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</a></li>
                    <li><a href="#page3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Projects</a></li>
                    <li><a href="#page4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Skills</a></li>
                    <li><a href="#contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</a></li>
                </ul>
            </nav>

            <section className="page page-1" id="page1">
                <div className="image-container"></div>
                <div id="content">
                    <div id="textdiv" className="reveal">
                        <div id="headingdiv">
                            <h1>
                                <div className="loader"></div>Welcome to My Portfolio.
                            </h1>
                        </div>
                        <div id="paradiv"><p>Hello Everyone! My name is Ganesh, and I'm a first-year engineering student at Newton School of Technology, Pune, specializing in AI and ML. I'm passionate about coding, problem-solving, and exploring new technologies. This portfolio reflects my journey, projects, and aspirations. Feel free to explore my work!</p></div>
                    </div>
                    <div id="imgdiv" className="reveal stagger-2">
                        <img src="https://wallpapers.com/images/high/cool-portrait-art-of-kakashi-bmf8bsl4blpsq7w7.webp" alt="Portfolio Image" id="image1" />
                        <a className="button" href="/Resume-Ganesh Wayal 111.pdf" target="_blank">
                            <span className="button__text">Resume</span>
                            <span className="button__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg">
                                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="page page-2" id="page2">
                <div id="page2container" className="reveal">
                    <h1 id="page2head">Academic & Professional Journey</h1>
                    <p id="p2para">
                        I am an aspiring AI & Machine Learning engineer, currently pursuing my degree at the <strong>Newton School of Technology, Pune</strong>. My focus lies at the intersection of complex problem-solving and scalable system design, with a deep commitment to mastering the foundations of data structures, algorithms, and modern full-stack architectures.
                        <br /><br />
                        Driven by a passion for disruptive technologies, I am actively building a portfolio of projects that leverage <strong>Python, React, and Linux-based systems</strong> to solve real-world challenges. My objective is to contribute to high-impact engineering teams at global technology leaders, developing innovative AI solutions that shape the future of machine intelligence.
                        <br /><br />
                        Beyond the terminal, I am an explorer at heart—whether it's planning future expeditions to the Swiss Alps or pursuing the discipline of skydiving and scuba diving.
                    </p>
                </div>
            </section>

            <section className="page page-3" id="page3">
                <h2 id="p3head" className="reveal"><div className="loader2"></div>ProJects</h2>
                <div className="product-container reveal stagger-1">
                    <div className="product">
                        <a href="https://ganesh3367.github.io/Shop-File/" target="_blank" rel="noopener noreferrer">
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80" alt="Furniture Website" className="scroll-effect" />
                        </a>
                        <p className="Product-text">Furniture E-commerce</p>
                    </div>
                    <div className="product">
                        <a href="https://ganyesportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80" alt="Portfolio" className="scroll-effect" />
                        </a>
                        <p className="Product-text">Digital Portfolio</p>
                    </div>
                    <div className="product">
                        <a href="https://task-manager-app-one-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80" alt="Task Manager" className="scroll-effect" />
                        </a>
                        <p className="Product-text">Task Intelligence</p>
                    </div>
                    <div className="product">
                        <a href="https://age-calculator-ten-swart.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=80" alt="Calculator" className="scroll-effect" />
                        </a>
                        <p className="Product-text">Precision Calculator</p>
                    </div>
                </div>
                <div className="reveal stagger-2">
                    <Link to="/projects"><button className="button2">Show More</button></Link>
                </div>
            </section>

            <section id="page4">
                <h1 className="reveal">Technical Proficiency</h1>
                <div className="programming-languages-container reveal stagger-1">
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
                        <span>Python</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
                        <span>React</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js" />
                        <span>Node.js</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" alt="MongoDB" />
                        <span>MongoDB</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/4494/4494740.png" alt="Git" />
                        <span>Git</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" />
                        <span>Java</span>
                    </div>
                    <div className="programming-language">
                        <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" />
                        <span>C++</span>
                    </div>
                </div>
                <div className="reveal stagger-2">
                    <Link to="/skills">
                        <button className="button2">Explore Full Stack</button>
                    </Link>
                </div>
            </section>

            <section id="contact">
                <h1 className="reveal">Get in Touch</h1>
                <div className="contact-container reveal stagger-1">
                    <div className="contact-form">
                        <form id="contact-form" onSubmit={submitToGoogleForm}>
                            <input type="text" name="name" id="name" placeholder="Name" required disabled={isSubmitting} />
                            <input type="email" name="email" id="email" placeholder="Email" required disabled={isSubmitting} />
                            <textarea name="message" id="message" placeholder="Message" required disabled={isSubmitting}></textarea>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>

                    </div>
                    <div className="social-links">
                        <h2>Follow Me</h2>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/ganesh_3367_/?hl=en" target="_blank">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/your-twitter-handle" target="_blank">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ganesh3367" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ganesh-wayal-72303830a" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/your-behance-handle" target="_blank">
                                    <i className="fab fa-behance" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/user/your-reddit-handle" target="_blank">
                                    <i className="fab fa-reddit" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;
