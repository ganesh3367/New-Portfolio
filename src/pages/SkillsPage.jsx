import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const SkillsPage = () => {
    useScrollReveal();

    return (
        <div className="skills-page">
            <Link to="/">
                <button className="back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
            </Link>

            <div className="container">
                <div className="skills-title reveal">
                    <h1>Programming Skills</h1>
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
                        <img src="/html.png" alt="HTML" />
                        <h3>HTML</h3>
                        <p>Experienced in building responsive and semantic HTML structures.</p>
                    </div>
                    <div className="skill-card">
                        <img src="/css-3.png" alt="CSS" />
                        <h3>CSS</h3>
                        <p>Strong in modern CSS techniques, animations, and layouts.</p>
                    </div>
                    <div className="skill-card">
                        <img src="/js.png" alt="JavaScript" />
                        <h3>JavaScript</h3>
                        <p>Proficient in ES6+, DOM manipulation, and interactive UI design.</p>
                    </div>
                    <div className="skill-card">
                        <img src="/atom.png" alt="React JS" />
                        <h3>React JS</h3>
                        <p>Skilled in building dynamic SPA using React and hooks.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node JS" />
                        <h3>Node JS</h3>
                        <p>Experience in server-side development and RESTful APIs.</p>
                    </div>
                    <div className="skill-card">
                        <img src="/python.png" alt="Python" />
                        <h3>Python</h3>
                        <p>Scripting, automation, data work, and backend development.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919831.png" alt="MongoDB" />
                        <h3>MongoDB</h3>
                        <p>Experience designing and querying NoSQL document databases.</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png" alt="Git" />
                        <h3>Git</h3>
                        <p>Version control, branching, pull requests, and team workflows.</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="skills-title reveal">
                        <h1>Soft Skills</h1>
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
                            <img src="https://img.icons8.com/?size=100&id=2YPST59G2xJZ&format=png&color=000000" alt="Time Management" />
                            <h3>Time Management</h3>
                            <p>Ability to prioritize tasks, plan effectively, and meet deadlines efficiently.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://img.icons8.com/?size=100&id=AVQyR7yVZtgD&format=png&color=000000" alt="Communication" />
                            <h3>Communication</h3>
                            <p>Skill in expressing thoughts confidently and building meaningful connections.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://img.icons8.com/?size=100&id=IqO8sjenu7je&format=png&color=000000" alt="Marketing" />
                            <h3>Marketing</h3>
                            <p>Basic understanding of marketing strategies with a keen interest to learn.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://img.icons8.com/?size=100&id=pSKGjhit2j5J&format=png&color=000000" alt="Adaptability" />
                            <h3>Adaptability</h3>
                            <p>Ability to adjust quickly to new challenges and changing environments.</p>
                        </div>
                        <div className="skill-card">
                            <img src="https://img.icons8.com/?size=100&id=wG20FqoYHvVB&format=png&color=000000" alt="Team Work" />
                            <h3>Team Work</h3>
                            <p>Can collaborate effectively with others to achieve common goals.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillsPage;
