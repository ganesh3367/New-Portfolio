import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useMousePosition from '../hooks/useMousePosition';

const SkillsPage = () => {
    useScrollReveal();
    const mousePos = useMousePosition();

    return (
        <div className="skills-page">
            {/* Ambient Background Glows */}
            <div className="ambient-bg">
                <div
                    className="blob blob-1"
                    style={{
                        transform: `translate3d(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px, 0)`
                    }}
                ></div>
                <div
                    className="blob blob-2"
                    style={{
                        transform: `translate3d(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px, 0)`
                    }}
                ></div>
            </div>
            <Link to="/">
                <button className="back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
            </Link>

            <div className="container">
                <div className="skills-title reveal">
                    <h1>Technical Proficiency</h1>
                    <div className="ball-wrap">
                        <div className="ball">
                            <div className="inner">
                                <div className="line"></div>
                                <div className="line line--two"></div>
                                <div className="oval"></div>
                                <div className="oval oval--two"></div>
                            </div>
                        </div>
                        <div className="shadow"></div>
                    </div>
                </div>

                <div className="skills-grid reveal stagger-1">
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML5" />
                        <h3>HTML5</h3>
                        <p>Architecting semantic, SEO-friendly, and accessible web structures for modern applications.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" />
                        <h3>CSS3</h3>
                        <p>Mastering layouts with Flexbox and Grid, along with complex animations and glassmorphism.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
                        <h3>JavaScript</h3>
                        <p>Developing robust logic using ES6+, asynchronous programming, and efficient DOM manipulation.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
                        <h3>React</h3>
                        <p>Building scalable and high-performance SPAs using functional components and advanced hooks.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js" />
                        <h3>Node.js</h3>
                        <p>Designing secure and efficient server-side architectures and multi-functional RESTful APIs.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
                        <h3>Python</h3>
                        <p>Applying Python for automation, AI/ML foundations, and rapid backend service development.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" alt="MongoDB" />
                        <h3>MongoDB</h3>
                        <p>Implementing agile NoSQL data models and optimizing complex document-based queries.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/4494/4494740.png" alt="Git" />
                        <h3>Git</h3>
                        <p>Streamlining development workflows with advanced version control and collaborative strategies.</p>
                    </div>
                </div>
            </div>

            <section className="soft-skills">
                <div className="container">
                    <div className="skills-title reveal">
                        <h1>Professional Core</h1>
                        <div className="skills-loader">
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                        </div>
                    </div>

                    <div className="skills-grid reveal stagger-2">
                        <div className="skill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972531.png" alt="Strategic Planning" />
                            <h3>Strategic Planning</h3>
                            <p>Proven ability to prioritize high-impact tasks and optimize workflow efficiency.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/9746/9746658.png" alt="Communication" />
                            <h3>Communication</h3>
                            <p>Articulating complex technical concepts clearly to diverse stakeholders.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/1998/1998310.png" alt="Problem Solving" />
                            <h3>Problem Solving</h3>
                            <p>Approaching challenges with analytical depth and innovative solution design.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/10434/10434606.png" alt="Adaptability" />
                            <h3>Adaptability</h3>
                            <p>Thriving in evolving environments and rapidly mastering new technologies.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Collaboration" />
                            <h3>Collaboration</h3>
                            <p>Fostering synergy within cross-functional teams to achieve collective excellence.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillsPage;
