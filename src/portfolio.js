/* eslint-disable */
/* global React, ReactDOM */

const { useEffect, useRef, useState } = React;

/* ---------- Palettes ---------- */
const PALETTES = {
  paper: {
    bg: '#FBFAF6', bg2: '#F2EFE6', paper: '#FFFFFF',
    ink: '#1B231D', inkDim: '#5b6358', inkMute: '#8c8d82',
    moss: '#3D5C44', sage: '#5F7A4F', brass: '#8A6A3C', rule: '#E3DFD2'
  },
  cabin: {
    bg: '#0F1F17', bg2: '#142a1f', paper: '#E8E1D1',
    ink: '#E8E1D1', inkDim: '#b8b0a0', inkMute: '#8c8576',
    moss: '#7A8B5C', sage: '#9BB07A', brass: '#C8A876', rule: '#2a3a2f'
  }
};

function applyPalette(p) {
  const root = document.documentElement;
  root.style.setProperty('--bg', p.bg);
  root.style.setProperty('--bg-2', p.bg2);
  root.style.setProperty('--paper', p.paper);
  root.style.setProperty('--ink', p.ink);
  root.style.setProperty('--ink-dim', p.inkDim);
  root.style.setProperty('--ink-mute', p.inkMute);
  root.style.setProperty('--moss', p.moss);
  root.style.setProperty('--sage', p.sage);
  root.style.setProperty('--brass', p.brass);
  root.style.setProperty('--rule', p.rule);
}

/* ---------- Reveal-on-scroll ---------- */
function useReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12 }
    );
    const observe = () => document.querySelectorAll('.reveal-up:not(.in)').forEach((el) => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [dep]);
}

/* ---------- Nav ---------- */
function Nav({ isDark, onToggleDark }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Todd Louison — home">
          <span className="brand-mark" aria-hidden="true">
            <span className="mark-glyph">tl</span>
            <span className="mark-dot" />
          </span>
        </a>
        <div className="nav-links">
          <a href="#about"><span className="num">01</span>About</a>
          <a href="#projects"><span className="num">02</span>Projects</a>
          <a href="#experience"><span className="num">03</span>Work</a>
          <a href="#contact"><span className="num">04</span>Contact</a>
          <button
            type="button"
            className="mode-toggle"
            onClick={onToggleDark}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <svg className="ico sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
            </svg>
            <svg className="ico moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero hero-b" id="top">
      <div className="shell">
        <div className="grid reveal-up">
          <div className="photo-frame">
            <img src="./static/img/headshot.jpg" alt="Todd Louison" />
            <div className="photo-tag">Gainesville · 2024</div>
          </div>
          <div>
            <div className="eyebrow"><span className="dot"></span>Full Stack Web Developer</div>
            <h1 style={{ marginTop: 14 }}>
              Todd<br />
              <span className="it">Louison.</span>
            </h1>
            <p className="sub">
              Software engineer with six years of experience.
              Passionate about <span className="italic-serif" style={{ color: 'var(--brass)' }}>learning</span>, tinkering, and automating.
            </p>
            <div className="hero-status" style={{ marginTop: 28 }}>
              <span className="led" /> Currently · Software Engineer III, DrChrono
            </div>
            <div className="row">
              <a className="btn primary" href="#projects">
                See the work <span className="arrow">→</span>
              </a>
              <a className="btn" href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about">
      <div className="shell">
        <div className="section-head reveal-up">
          <div className="num">01 — About</div>
          <div>
            <h2>About <span className="it">me.</span></h2>
            <p className="blurb">Hi, I'm Todd 👋🏻</p>
          </div>
        </div>

        <div className="about-grid reveal-up">
          <div />
          <div className="body">
            <p>
              I'm a software engineer with six years of experience working on web applications.
              I graduated from <span className="accent">Rensselaer Polytechnic Institute</span> with a B.S. in Computer Science,
              concentrating in Systems &amp; Software.
            </p>
            <p>
              I started my career at <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>EnergySage</span>, working on community solar — software that helped people get cleaner electricity without putting panels on their own roof.
              These days I'm at <span className="accent">DrChrono</span> on the payments team, learning how to bring a legacy healthcare codebase up to modern standards without sacrificing what already works.
            </p>
            <p>
              In my free time I code side projects in whatever framework or language sounds fun that week,
              and I've got a handful of hobbies I love pursuing — photography, 3D printing, cooking, and gaming.
              I'd like to find my way back to <span className="accent">climate &amp; sustainability</span> work eventually; it's the kind of problem I enjoy most.
            </p>
          </div>
        </div>

        <div className="fact-strip reveal-up">
          <div className="fact">
            <div className="label">Experience</div>
            <div className="val">Six years</div>
          </div>
          <div className="fact">
            <div className="label">Studied at</div>
            <div className="val">RPI · CS '20</div>
          </div>
          <div className="fact">
            <div className="label">Based in</div>
            <div className="val">Gainesville, FL</div>
          </div>
          <div className="fact">
            <div className="label">Interested in</div>
            <div className="val">Climate &amp; sustainability</div>
          </div>
        </div>

        <Hobbies />
      </div>
    </section>
  );
}

function Hobbies() {
  return (
    <div className="hobbies reveal-up">
      <div className="featured">
        <img src="./static/img/camera-roll.jpg" alt="From the camera roll" />
        <div className="featured-cap">From the camera roll</div>
      </div>
      <div className="hobby-list">
        <div className="hobby">
          <div className="yr">i.</div>
          <div>
            <div className="ttl">Photography</div>
            <div className="body">One of my newer hobbies, and I've fallen pretty deep into the rabbit hole. I'm usually walking around with a camera in my hand, and I particularly enjoy portrait and pet photography with friends and family.</div>
          </div>
        </div>
        <div className="hobby">
          <div className="yr">ii.</div>
          <div>
            <div className="ttl">3D printing</div>
            <div className="body">This one started out of necessity — I love smart-home automation and needed mounts for my sensors. I started prototyping and printing custom models to fit the spots my sensors live in, and it kind of took on a life of its own.</div>
          </div>
        </div>
        <div className="hobby">
          <div className="yr">iii.</div>
          <div>
            <div className="ttl">Cooking</div>
            <div className="body">A love nurtured by my dad, who's an awesome chef himself. I really care about the science of cooking, and I love experimenting with different methods and flavors.</div>
          </div>
        </div>
        <div className="hobby">
          <div className="yr">iv.</div>
          <div>
            <div className="ttl">Gaming</div>
            <div className="body">I've been gaming since my earliest memories — grew up a huge Sonic fan. I play all kinds of genres: I hit Legendary Eagle in CS:GO, I love story-driven single-player games, and I've played World of Warcraft since 2008.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    yr: '2024',
    title: 'chess-rust',
    titleIt: 'a chess engine in Rust.',
    blurb: 'I wanted to spend some time learning Rust, and a chess engine seemed like a fun but fairly complex way to dive into a larger project.',
    stack: ['Rust'],
    href: 'https://github.com/TLouison/chess-rust'
  },
  {
    yr: '2025',
    title: 'PackingHelper',
    titleIt: 'iOS · in progress.',
    blurb: "A work-in-progress iOS app designed to help reduce pre-travel packing anxiety. Solving an issue I really struggle with, and a great excuse to learn more about Swift, SwiftUI, and SwiftData.",
    stack: ['Swift', 'SwiftUI', 'SwiftData'],
    href: 'https://github.com/TLouison/PackingHelperiOS'
  },
  {
    yr: '2026',
    title: 'louison.dev',
    titleIt: 'this site.',
    blurb: "The source code for the website you're looking at right now. Built by hand with a hint of JavaScript, refreshed in 2026 with a quieter palette and warmer colors.",
    stack: ['HTML', 'CSS', 'JS'],
    href: 'https://github.com/TLouison/louison.dev'
  },
  {
    yr: '2020',
    title: 'Location-Aware Lighting',
    titleIt: 'an IoT class project.',
    blurb: "A group project for an IoT class where we used three Raspberry Pi's as Bluetooth beacons. A smartwatch read their signal strength to detect what room a person was in, then turned the lights on and off. I handled the network programming for the team.",
    stack: ['Python', 'Pi', 'BLE'],
    href: 'https://github.com/akhilcjacob/Location-Aware-Lighting'
  }
];

function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section id="projects" className="projects">
      <div className="shell">
        <div className="section-head reveal-up">
          <div className="num">02 — Projects</div>
          <div>
            <h2>My <span className="it">projects.</span></h2>
            <p className="blurb">Side projects, mostly. Hover or tap any line for the details.</p>
          </div>
        </div>

        <div className="project-list reveal-up">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={'project' + (open === i ? ' is-open' : '')}
              onClick={() => setOpen(open === i ? null : i)}>
              <div className="yr">{p.yr}</div>
              <div className="ttl">
                {p.title} <span className="it">— {p.titleIt}</span>
              </div>
              <div className="stack">
                {p.stack.map((s, j) => (
                  <span key={j}>{s}{j < p.stack.length - 1 ? ' ·' : ''}</span>
                ))}
              </div>
              <div className="reveal">
                {p.blurb}
                <br />
                <a href={p.href} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
const EXPERIENCE = [
  {
    when: 'April 2023 — present',
    co: 'DrChrono · part of EverCommerce',
    role: 'Software Engineer III',
    badge: 'Now',
    title: 'DrChrono · Payments Team',
    summary: "As part of DrChrono, I've worked with a legacy healthcare codebase, learning how to bring it up to modern standards while not sacrificing what already works.",
    learnings: [
      { h: 'Payment processing', p: "In my work I've become very familiar with Stripe's Payments API and Stripe.js, plus Square and PaySimple as payment processors. Through that I've also come to understand PCI compliance at a practical level." },
      { h: 'Working with legacy code', p: "DrChrono has been around for over a decade, so a lot of code was written before today's best practices were defined. I've learned ways to encapsulate new functionality to reduce changes required to old code, slowly improving the codebase over time." },
      { h: 'EDI standard', p: "I've become very familiar integrating with insurance clearinghouses using the EDI standard, particularly EDI 835 and 837. I've worked extensively with DrChrono's insurance integration code and built significant improvements into the workflow." }
    ]
  },
  {
    when: 'January 2022 — April 2023',
    co: 'EnergySage · Community Solar',
    role: 'Software Engineer II',
    title: 'EnergySage · Community Solar Pod',
    summary: 'At EnergySage, I had the chance to work in a startup environment with experienced engineers who helped accelerate my development and understanding of writing production software that scales to the needs of the business.',
    learnings: [
      { h: 'Tackling large features end-to-end', p: 'As I gathered more experience, I began being trusted with (and successfully delivering) larger and larger projects — at one point being the primary backend developer for the pod.' },
      { h: 'Collaborating across teams', p: 'I took on multiple projects with company-wide implications, which required constant cross-team communication. Notably, I helped devise and implement a new auth flow for CSM that leveraged AWS Cognito to enable SSO across the EnergySage portfolio of sites.' }
    ]
  },
  {
    when: 'June 2020 — January 2022',
    co: 'EnergySage · Provider & CSM',
    role: 'Software Engineer I',
    title: 'EnergySage · Provider & Community Solar',
    summary: "Starting my career at EnergySage, I had the chance to immediately work on impactful projects that directly affected the solar installers on the platform. In 2021 I joined the CSM team's greenfield project shortly after it began, with modern tooling that let me keep learning practical software development without working around as much legacy code.",
    learnings: [
      { h: 'Developing production-ready code', p: 'My first role as an individual contributor to a codebase. I learned an incredible amount about working with my tools, understanding requirements from product stakeholders, and leveraging the knowledge of more experienced coworkers to reach solutions.' },
      { h: 'Learning how to learn', p: 'Developing software in a company environment is far different from academic programming, so identifying the blind spots from school — working with experienced programmers, tradeoffs between speed and correctness, getting stakeholder approval, and many more — was critical.' }
    ]
  }
];

function Experience() {
  const [active, setActive] = useState(0);
  const cur = EXPERIENCE[active];
  return (
    <section id="experience">
      <div className="shell">
        <div className="section-head reveal-up">
          <div className="num">03 — Experience</div>
          <div>
            <h2>Experience <span className="it">timeline.</span></h2>
            <p className="blurb">Six years across community solar and healthcare. Click any role for details.</p>
          </div>
        </div>

        <div className="exp-grid reveal-up">
          <div className="exp-rail">
            {EXPERIENCE.map((e, i) => (
              <div
                key={i}
                className={'exp-item' + (active === i ? ' active' : '')}
                onClick={() => setActive(i)}>
                <div className="when">
                  {e.when}
                  {e.badge ? <span className="badge">{e.badge}</span> : null}
                </div>
                <div className="role">{e.role}</div>
                <div className="co">{e.co}</div>
              </div>
            ))}
          </div>

          <div className="exp-detail" key={active}>
            <div className="exp-fade">
              <h3>{cur.title}</h3>
              <div className="role-line">{cur.role} · {cur.when}</div>
              <p className="summary">{cur.summary}</p>
              <div className="learnings">
                {cur.learnings.map((l, i) => (
                  <div className="learn" key={i}>
                    <h4>{l.h}</h4>
                    <p>{l.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="shell">
        <div className="reveal-up">
          <div className="eyebrow"><span className="dot"></span>04 — Contact</div>
          <h2 style={{ marginTop: 16 }}>
            Want to <span className="it">get in touch?</span>
            <br /> <span className="br">Here's where to find me.</span>
          </h2>
          <p className="lead">
            Always happy to chat — especially around <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>climate</span>, <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>energy</span>, or anything you think I'd find interesting.
            The fastest way to reach me is <a href="mailto:toddmlouison@gmail.com">email</a>.
          </p>

          <div className="links">
            <a href="mailto:toddmlouison@gmail.com">
              <span className="label">Email</span>
              <span className="val">toddmlouison@gmail.com →</span>
            </a>
            <a href="https://github.com/TLouison" target="_blank" rel="noreferrer">
              <span className="label">GitHub</span>
              <span className="val">@TLouison →</span>
            </a>
            <a href="https://www.linkedin.com/in/todd-louison/" target="_blank" rel="noreferrer">
              <span className="label">LinkedIn</span>
              <span className="val">in/todd-louison →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Foot() {
  return (
    <footer>
      <div className="shell">
        <div className="foot">
          <div>©️ 2026 · Todd Louison</div>
          <div className="center"></div>
          <div className="right">Gainesville, FL</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('louison-dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useReveal(isDark);

  useEffect(() => {
    const p = isDark ? PALETTES.cabin : PALETTES.paper;
    applyPalette(p);
    document.body.dataset.mode = isDark ? 'dark' : 'light';
    localStorage.setItem('louison-dark', isDark);
  }, [isDark]);

  const toggleDark = () => setIsDark((d) => !d);

  return (
    <div className="app">
      <Nav isDark={isDark} onToggleDark={toggleDark} />
      <Hero />
      <hr className="rule" />
      <About />
      <hr className="rule" />
      <Projects />
      <hr className="rule" />
      <Experience />
      <hr className="rule" />
      <Contact />
      <Foot />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
