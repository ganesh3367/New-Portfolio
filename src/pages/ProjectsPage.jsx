import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const ProjectsPage = () => {
    useScrollReveal();

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #132551, #00030d)', padding: '50px 0', color: '#fff' }}>
            <Link to="/">
                <button className="back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
            </Link>

            <h1 className="reveal" style={{ textAlign: 'center', fontSize: '60px', marginBottom: '50px', color: '#ffffff' }}>All Projects</h1>

            <div className="product-container reveal stagger-1">
                {/* Existing Projects */}
                <div className="product">
                    <a href="https://ganesh3367.github.io/Shop-File/" target="_blank" rel="noopener noreferrer">
                        <img src="/Shop.JPG" alt="Furniture Website" className="scroll-effect" />
                    </a>
                    <p className="Product-text">Furniture Website</p>
                </div>
                <div className="product">
                    <a href="https://ganyesportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/portfolioname.JPG" alt="Portfolio" className="scroll-effect" />
                    </a>
                    <p className="Product-text">Portfolio</p>
                </div>
                <div className="product">
                    <a href="https://task-manager-app-one-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/taskmanager.JPG" alt="Task Manager" className="scroll-effect" />
                    </a>
                    <p className="Product-text">Task Manager</p>
                </div>
                <div className="product">
                    <a href="https://age-calculator-ten-swart.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/IMG.JPG" alt="Calculator" className="scroll-effect" />
                    </a>
                    <p className="Product-text">Calculator</p>
                </div>

                {/* New Placeholder Projects */}
                <div className="product">
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', color: '#333', fontSize: '24px' }}>
                        Coming Soon
                    </div>
                    <p className="Product-text">E-commerce App</p>
                </div>
                <div className="product">
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', color: '#333', fontSize: '24px' }}>
                        Coming Soon
                    </div>
                    <p className="Product-text">Weather Dashboard</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
