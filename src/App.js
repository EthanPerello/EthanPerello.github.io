import React from 'react';
import './App.css';

const capabilities = [
  { number: '01', title: 'AI-assisted development', text: 'Building and refining practical software with AI-supported development workflows.' },
  { number: '02', title: 'Generative media', text: 'Working with image, video, and multimodal systems for creative production.' },
  { number: '03', title: 'Systems and infrastructure', text: 'Connecting models, applications, APIs, cloud infrastructure, and production software.' },
  { number: '04', title: 'Creative tooling', text: 'Developing workflow automation, animation pipeline tools, and DCC integrations.' }
];

export default function App() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">EP</a>
        <div className="nav-links"><a href="#work">What I do</a><a href="mailto:ethanperello@gmail.com">Contact</a></div>
      </nav>
      <section className="hero" id="top">
        <p className="eyebrow">AI creative technologist | New York</p>
        <h1>I build AI tools for creative work.</h1>
        <p className="lede">I work where software, generative media, and animation meet, turning new AI capabilities into practical tools and production workflows.</p>
        <div className="actions">
          <a className="primary" href="mailto:ethanperello@gmail.com">Get in touch</a>
          <a href="https://www.linkedin.com/in/ethanperello/">LinkedIn ↗</a>
          <a href="https://github.com/EthanPerello">GitHub ↗</a>
        </div>
      </section>
      <section className="capabilities" id="work" aria-labelledby="work-heading">
        <div className="section-intro"><p className="eyebrow">What I do</p><h2 id="work-heading">Creative technology, built for real workflows.</h2></div>
        <div className="capability-list">
          {capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>
      <section className="about" aria-labelledby="about-heading">
        <p className="eyebrow">Current direction</p>
        <div>
          <h2 id="about-heading">Technical thinking with a visual point of view.</h2>
          <p>I am currently a freelance Junior AI Technician at Hornet. My work is grounded in understanding how models, applications, infrastructure, production software, and creative tools fit together.</p>
          <p>Before moving into creative AI, I worked across game development, full-stack applications, data science, animation, and production. That range shapes how I approach AI systems and production workflows today.</p>
          <p>I have also participated in multiple game jams and completed Curious Refuge’s AI Filmmaking course in 2025.</p>
        </div>
      </section>
      <footer><p>Available for thoughtful AI and creative-technology work.</p><a href="mailto:ethanperello@gmail.com">ethanperello@gmail.com</a></footer>
    </main>
  );
}
