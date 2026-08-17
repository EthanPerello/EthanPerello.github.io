import React from 'react';
import './App.css';
import profilePhoto from './images/profile-photo.jpg';

const capabilities = [
  { number: '01', title: 'AI systems', text: 'Connecting models, applications, APIs, cloud infrastructure, and production software.' },
  { number: '02', title: 'Generative media', text: 'Building practical workflows around image, video, and multimodal tools.' },
  { number: '03', title: 'Creative tooling', text: 'Developing workflow automation, animation pipeline tools, and DCC integrations.' },
  { number: '04', title: 'AI-assisted development', text: 'Using modern AI workflows to turn ideas into reliable, useful software.' }
];

const background = ['Game development', 'Full-stack applications', 'Data science', 'Animation and production'];

export default function App() {
  return (
    <main id="top">
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Ethan Perello home">EP<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Expertise</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:ethanperello@gmail.com">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> New York · Creative AI</p>
          <h1>Building useful tools at the edge of <em>AI</em> and creativity.</h1>
          <p className="lede">I work across software, generative media, and animation to turn new AI capabilities into practical systems for creative production.</p>
          <div className="actions">
            <a className="primary" href="mailto:ethanperello@gmail.com">Start a conversation <span>↗</span></a>
            <a href="https://www.linkedin.com/in/ethanperello/">LinkedIn</a>
            <a href="https://github.com/EthanPerello">GitHub</a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Portrait of Ethan Perello">
          <div className="portrait-glow" />
          <img className="profile-photo" src={profilePhoto} alt="Ethan Perello" />
          <div className="portrait-label">
            <span>Ethan Perello</span>
            <small>Junior AI Technician at Hornet</small>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of focus">
        <span>Generative media</span><i />
        <span>Systems integration</span><i />
        <span>Creative technology</span><i />
        <span>Production workflows</span>
      </section>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h2 id="work-heading">Creative technology designed around how people actually work.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span className="number">{item.number}</span>
              <div className="card-mark" aria-hidden="true">↗</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-heading">
        <div className="about-lead">
          <p className="eyebrow">How I think</p>
          <h2 id="about-heading">A systems mindset with a visual point of view.</h2>
        </div>
        <div className="about-copy">
          <p className="statement">I am most interested in the whole system: how models, infrastructure, applications, production software, and creative tools fit together.</p>
          <p>I currently work as a freelance Junior AI Technician at Hornet. My broader background helps me move comfortably between technical and creative problems without losing sight of the people using the tools.</p>
          <div className="background-list">
            <p>Background</p>
            {background.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s build something useful.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:ethanperello@gmail.com">ethanperello@gmail.com <span>↗</span></a>
          <a href="https://www.linkedin.com/in/ethanperello/">LinkedIn</a>
          <a href="https://github.com/EthanPerello">GitHub</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ethan Perello · New York</p>
      </footer>
    </main>
  );
}
