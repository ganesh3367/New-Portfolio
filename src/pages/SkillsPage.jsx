import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useMousePosition from '../hooks/useMousePosition';

const SkillsPage = () => {
    useScrollReveal();
    const mousePos = useMousePosition();

    const skillCategories = [
        {
            title: "Frontend Engineering",
            skills: [
                { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png", level: 95, label: "Expert", desc: "Semantic structures & SEO optimization." },
                { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", level: 90, label: "Expert", desc: "Modern layouts & glassmorphism." },
                { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", level: 85, label: "Advanced", desc: "ES6+, Async, & DOM logic." },
                { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", level: 88, label: "Advanced", desc: "State management & Hooks." },
            ]
        },
        {
            title: "Backend & Systems",
            skills: [
                { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", level: 75, label: "Intermediate", desc: "RESTful APIs & Microservices." },
                { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", level: 80, label: "Advanced", desc: "Automation & Data processing." },
                { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", level: 70, label: "Intermediate", desc: "NoSQL architecture & Queries." },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494740.png", level: 85, label: "Advanced", desc: "Version control & CI/CD flow." },
            ]
        }
    ];

    const professionalSkills = [
        { name: "Strategic Planning", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972531.png", level: 90, label: "Expert" },
        { name: "Communication", icon: "https://cdn-icons-png.flaticon.com/512/9746/9746658.png", level: 95, label: "Expert" },
        { name: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/1998/1998310.png", level: 92, label: "Expert" },
        { name: "Adaptability", icon: "https://cdn-icons-png.flaticon.com/512/10434/10434606.png", level: 88, label: "Advanced" },
        { name: "Collaboration", icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png", level: 94, label: "Expert" },
    ];

    return (
        <div className="skills-page">
            <div className="ambient-bg">
                <div className="blob blob-1" style={{ transform: `translate3d(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px, 0)` }}></div>
                <div className="blob blob-2" style={{ transform: `translate3d(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px, 0)` }}></div>
            </div>

            <Link to="/">
                <button className="back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
            </Link>

            <div className="container dashboard-container">
                <div className="dashboard-header reveal">
                    <span className="badge">Technical Stack</span>
                    <h1>Engineering Expertise</h1>
                    <p className="subtitle">A structured overview of my technical capabilities and professional strengths.</p>
                </div>

                {skillCategories.map((cat, catIdx) => (
                    <div key={catIdx} className="category-section">
                        <h2 className="reveal">{cat.title}</h2>
                        <div className="skills-grid reveal stagger-1">
                            {cat.skills.map((skill, index) => (
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
                ))}

                <section className="professional-core-section">
                    <div className="category-header reveal">
                        <span className="badge">Soft Skills</span>
                        <h2>Professional Core</h2>
                    </div>
                    <div className="soft-skills-strip reveal stagger-2">
                        {professionalSkills.map((skill, index) => (
                            <div key={index} className="soft-skill-tag">
                                <img src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                                <div className="dot"></div>
                                <span className="level">{skill.label}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SkillsPage;
