import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useMousePosition from '../hooks/useMousePosition';

const SkillsPage = () => {
    useScrollReveal();
    const mousePos = useMousePosition();

    const technicalSkills = [
        { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png", level: 95, label: "Expert", desc: "Architecting semantic, SEO-friendly, and accessible web structures." },
        { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", level: 90, label: "Expert", desc: "Mastering complex layouts, animations, and glassmorphism." },
        { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", level: 85, label: "Advanced", desc: "Developing robust logic, ES6+, and efficient DOM manipulation." },
        { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", level: 88, label: "Advanced", desc: "Building scalable SPAs using functional components and hooks." },
        { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", level: 75, label: "Intermediate", desc: "Designing secure server-side architectures and RESTful APIs." },
        { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", level: 80, label: "Advanced", desc: "Applying Python for automation, AI foundations, and backend." },
        { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", level: 70, label: "Intermediate", desc: "Implementing NoSQL data models and optimized queries." },
        { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494740.png", level: 85, label: "Advanced", desc: "Streamlining development with advanced version control." },
    ];

    const softSkills = [
        { name: "Strategic Planning", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972531.png", level: 90, label: "Expert", desc: "Prioritizing high-impact tasks and workflow efficiency." },
        { name: "Communication", icon: "https://cdn-icons-png.flaticon.com/512/9746/9746658.png", level: 95, label: "Expert", desc: "Articulating technical concepts clearly to stakeholders." },
        { name: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/1998/1998310.png", level: 92, label: "Expert", desc: "Approaching challenges with analytical and innovative depth." },
        { name: "Adaptability", icon: "https://cdn-icons-png.flaticon.com/512/10434/10434606.png", level: 88, label: "Advanced", desc: "Thriving in evolving environments and mastering new tech." },
        { name: "Collaboration", icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png", level: 94, label: "Expert", desc: "Fostering synergy within cross-functional elite teams." },
    ];

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
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <img src={skill.icon} alt={skill.name} />
                                <span className="skill-label">{skill.label}</span>
                            </div>
                            <h3>{skill.name}</h3>
                            <p>{skill.desc}</p>
                            <div className="proficiency-container">
                                <div className="proficiency-bar" style={{ '--level': `${skill.level}%` }}></div>
                                <span className="proficiency-value">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
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
                        {softSkills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-header">
                                    <img src={skill.icon} alt={skill.name} />
                                    <span className="skill-label">{skill.label}</span>
                                </div>
                                <h3>{skill.name}</h3>
                                <p>{skill.desc}</p>
                                <div className="proficiency-container">
                                    <div className="proficiency-bar" style={{ '--level': `${skill.level}%` }}></div>
                                    <span className="proficiency-value">{skill.level}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillsPage;
