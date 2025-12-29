import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useMousePosition from '../hooks/useMousePosition';
import '../styles/projects.css';

const projectsData = [
    {
        id: 1,
        title: "Furniture E-commerce",
        category: "Full Stack",
        description: "A premium, minimalist shopping experience for modern interiors, featuring advanced search and seamless checkout logic.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
        link: "https://ganesh3367.github.io/Shop-File/",
        tech: ["React", "CSS Modules", "Vite"]
    },
    {
        id: 2,
        title: "Digital Portfolio",
        category: "Creative UI",
        description: "An interactive, glassmorphic portfolio designed to showcase digital craftsmanship through smooth motion and high-end aesthetics.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
        link: "https://ganyesportfolio.vercel.app/",
        tech: ["React", "Framer Motion", "Vite"]
    },
    {
        id: 3,
        title: "Task Intelligence",
        category: "Productivity",
        description: "A secure, robust task management system designed to optimize workflows with real-time state management and intuitive UX.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
        link: "https://task-manager-app-one-orpin.vercel.app/",
        tech: ["Node.js", "MongoDB", "Auth0"]
    },
    {
        id: 4,
        title: "Precision Calculator",
        category: "Utility",
        description: "A sleek, high-precision utility tool designed for instantaneous calculations with a polished, user-centric interface.",
        image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=80",
        link: "https://age-calculator-ten-swart.vercel.app/",
        tech: ["JavaScript", "CSS3", "Logic"]
    },
    {
        id: 5,
        title: "Market Dashboard",
        category: "Data Viz",
        description: "A sophisticated administrative control panel for e-commerce, visualizing complex market trends and customer behavior in real-time.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        link: "#",
        tech: ["Chart.js", "React", "Firebase"]
    },
    {
        id: 6,
        title: "Atmosphere Engine",
        category: "IoT / API",
        description: "A real-time atmospheric intelligence platform providing deep localized insights and predictive weather modeling.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=80",
        link: "#",
        tech: ["OpenWeather API", "React", "Axios"]
    }
];

const ProjectsPage = () => {
    useScrollReveal();
    const mousePos = useMousePosition();

    return (
        <div className="projects-page">
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

            <div className="projects-container">
                <header className="projects-header reveal">
                    <h1>Curated Work</h1>
                    <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '20px auto' }}>
                        A collection of projects exploring the intersection of design, technology, and user experience.
                    </p>
                </header>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card reveal stagger-${(index % 4) + 1}`}
                            style={{ '--float-delay': `${index * 0.5}s` }}
                        >
                            <div className="project-image-box">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Live Preview <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
