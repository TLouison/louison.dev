import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

// ── Data ──────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'chess-rust',
    title: 'chess-rust',
    summary: 'Chess engine written in Rust.',
    description:
      'I wanted to spend some time learning Rust, and I thought a chess engine would be a fun but fairly complex way to dive into a larger project. Implements move generation, board representation, and a basic search algorithm.',
    tech: ['Rust'],
    href: 'https://github.com/TLouison/chess-rust',
  },
  {
    id: 'location-aware-lighting',
    title: 'Location Aware Lighting',
    summary: 'IoT room-detection lighting system.',
    description:
      'A group project for an IoT class using three Raspberry Pi devices as Bluetooth beacons. A smartwatch reads signal strength to detect which room a person is in and controls lights accordingly. I handled all the network programming.',
    tech: ['Python', 'Raspberry Pi', 'Bluetooth'],
    href: 'https://github.com/akhilcjacob/Location-Aware-Lighting',
  },
  {
    id: 'louison-dev',
    title: 'louison.dev',
    summary: 'This site — now rebuilt in React.',
    description:
      'The source code for the site you\'re looking at. Originally built with Tailwind CSS and vanilla JavaScript, now rebuilt as a React + Vite + TanStack Router app with a Rivian-inspired design language.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    href: 'https://github.com/TLouison/louison.dev',
  },
  {
    id: 'packing-helper',
    title: 'PackingHelperiOS',
    summary: 'iOS app to reduce pre-travel packing anxiety.',
    description:
      'A work-in-progress iOS app designed to help reduce pre-travel packing anxiety. Built both to solve a real problem I struggle with, and as an excuse to learn Swift, SwiftUI, and SwiftData.',
    tech: ['Swift', 'SwiftUI', 'SwiftData'],
    href: 'https://github.com/TLouison/PackingHelperiOS',
  },
]

const experiences = [
  {
    id: 'drchrono',
    company: 'DrChrono',
    role: 'Software Engineer',
    period: 'April 2023 – Present',
    current: true,
    team: 'Payments Team',
    body: `As part of DrChrono, I've learned how to work with legacy code and implement modern best practices while preserving historical functionality. The payments surface is complex — touching Stripe, Square, and PaySimple — and PCI compliance shapes everything.`,
    learnings: [
      {
        title: 'Payment Processing',
        detail:
          "Deeply familiar with Stripe's Payments API and Stripe.js, moderately familiar with Square and PaySimple. Through this work I've developed a practical understanding of PCI compliance.",
      },
      {
        title: 'Working With Legacy Code',
        detail:
          "DrChrono has been around for over a decade. I've learned to encapsulate new functionality to reduce surface area on old code, slowly improving the codebase over time.",
      },
    ],
  },
  {
    id: 'energysage-ii',
    company: 'EnergySage, Inc.',
    role: 'Software Engineer II',
    period: 'January 2022 – April 2023',
    current: false,
    team: 'Community Solar Pod',
    body: `A startup environment with experienced engineers who accelerated my development. I began taking ownership of large features end-to-end and doing cross-team work with company-wide implications.`,
    learnings: [
      {
        title: 'Tackling Large Features End-to-End',
        detail:
          'I became the primary backend developer for the pod, delivering large projects independently and coordinating closely with product.',
      },
      {
        title: 'Cross-Team Collaboration',
        detail:
          'Led a cross-team project to implement AWS Cognito SSO authentication across the EnergySage portfolio of sites.',
      },
    ],
  },
  {
    id: 'energysage-i',
    company: 'EnergySage, Inc.',
    role: 'Software Engineer I',
    period: 'June 2020 – January 2022',
    current: false,
    team: 'Provider & Community Solar Pod',
    body: `My first professional role. I immediately worked on impactful projects for solar installers, then joined the CSM greenfield project with modern tooling — a perfect environment for learning production software development.`,
    learnings: [
      {
        title: 'Developing Production-Ready Code',
        detail:
          'Learned to work with stakeholders, understand requirements, and leverage senior engineers to reach solid solutions.',
      },
      {
        title: 'Learning How To Learn',
        detail:
          'Identified the gaps between academic programming and professional software: tradeoffs, stakeholder sign-off, and working within large codebases.',
      },
    ],
  },
]

const hobbies = [
  {
    id: 'photography',
    title: 'Photography',
    icon: '📷',
    description:
      'One of my more recent hobbies, I\'ve fallen deeply into the rabbit hole of photography. I\'m always walking around with a camera in my hand, and particularly enjoy portrait and pet photography with friends and family.',
  },
  {
    id: '3d-printing',
    title: '3D Printing',
    icon: '🖨️',
    description:
      '3D printing became a hobby out of necessity: I love smart home automation, but I needed mounts for my sensors. I started prototyping and printing custom models to fit the exact spots my sensors live.',
  },
  {
    id: 'cooking',
    title: 'Cooking',
    icon: '🍳',
    description:
      'A love of cooking nurtured by my dad, an awesome chef. I really care about the science of cooking and love experimenting with different methods and flavor combinations.',
  },
  {
    id: 'gaming',
    title: 'Gaming',
    icon: '🎮',
    description:
      'Gaming since my earliest memories, growing up a huge fan of Sonic. I\'ve reached Legendary Eagle in CS:GO, love story-driven single-player games, and have played World of Warcraft since 2008.',
  },
]

// ── Sub-components ─────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl font-light tracking-tight mb-6"
      style={{ color: 'var(--color-text)' }}
    >
      {children}
    </h2>
  )
}

function Card({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-[1.25rem] p-6 ${className}`}
      style={{
        background: 'var(--color-raised)',
        border: '1px solid var(--color-border)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="text-left rounded-[1.25rem] p-5 w-full transition-colors duration-200 cursor-pointer"
      style={{
        background: 'var(--color-raised)',
        border: '1px solid var(--color-border)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-red-ember)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--color-elevated)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--color-raised)'
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>
          {project.title}
        </h3>
        <span className="text-xs mt-0.5 shrink-0" style={{ color: 'var(--color-red-core)' }}>
          View ↗
        </span>
      </div>
      <p className="text-sm" style={{ color: 'var(--color-subtle)' }}>{project.summary}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'var(--color-elevated)', color: 'var(--color-text-dim)', border: '1px solid var(--color-border)' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  )
}

function ProjectDetail({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.25 }}
      className="rounded-[1.25rem] p-6"
      style={{
        background: 'var(--color-elevated)',
        border: '1px solid var(--color-red-ember)',
        boxShadow: '0 0 0 1px rgba(155,42,26,0.2), 0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>{project.title}</h3>
        <button
          onClick={onClose}
          className="text-sm px-3 py-1 rounded-lg transition-colors"
          style={{ color: 'var(--color-muted)', background: 'var(--color-raised)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
        >
          ✕ Close
        </button>
      </div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-dim)' }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'var(--color-raised)', color: 'var(--color-text-dim)', border: '1px solid var(--color-border)' }}
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200"
        style={{ background: 'var(--color-red-ember)', color: 'var(--color-text)' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-red-core)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-red-ember)' }}
      >
        View on GitHub ↗
      </a>
    </motion.div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────────

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [selectedExp, setSelectedExp] = useState('drchrono')

  const activeProject = projects.find(p => p.id === selectedProject)
  const activeExp = experiences.find(e => e.id === selectedExp)!

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 flex flex-col gap-20">

      {/* ── Hero ── */}
      <section id="home" className="pt-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <div
            className="shrink-0 w-28 h-28 rounded-full overflow-hidden"
            style={{ outline: '2px solid var(--color-border)' }}
          >
            <img src="/headshot.jpg" alt="Todd Louison" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              Todd Louison
            </h1>
            <p className="text-lg font-light mt-1" style={{ color: 'var(--color-subtle)' }}>
              Full Stack Web Developer
            </p>
            <p className="mt-2 text-sm" style={{ color: 'var(--color-text-dim)' }}>
              Passionate about{' '}
              <span style={{ color: 'var(--color-red-bright)' }}>learning</span>,{' '}
              <span style={{ color: 'var(--color-red-core)' }}>tinkering</span>, and{' '}
              <span style={{ color: 'var(--color-red-glow)' }}>automating</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <Card>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
                Currently
              </span>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-red-core)' }} />
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-dim)' }}>
              <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Software Engineer</span>{' '}
              at{' '}
              <a href="https://www.drchrono.com/" target="_blank" rel="noopener noreferrer"
                className="font-semibold transition-colors"
                style={{ color: 'var(--color-red-bright)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-red-glow)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-red-bright)' }}
              >DrChrono</a>,{' '}
              part of{' '}
              <a href="https://www.evercommerce.com/" target="_blank" rel="noopener noreferrer"
                className="font-medium transition-colors"
                style={{ color: 'var(--color-subtle)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-subtle)' }}
              >EverCommerce</a>.
            </p>
          </Card>
        </motion.div>

        <div className="flex gap-2 mt-6">
          {[
            { label: 'GitHub', href: 'https://github.com/TLouison' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/todd-louison/' },
            { label: 'Email', href: 'mailto:toddmlouison@gmail.com' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs font-medium px-4 py-2 rounded-xl transition-colors duration-200"
              style={{ background: 'var(--color-raised)', border: '1px solid var(--color-border)', color: 'var(--color-text-dim)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--color-elevated)'
                el.style.color = 'var(--color-text)'
                el.style.borderColor = 'var(--color-muted)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--color-raised)'
                el.style.color = 'var(--color-text-dim)'
                el.style.borderColor = 'var(--color-border)'
              }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about">
        <SectionHeading>About Me</SectionHeading>
        <Card className="mb-6">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
            Hi, I'm Todd — a software engineer with 4 years of experience building web applications on Python/Django. I graduated from Rensselaer Polytechnic Institute in 2020 with a BS in Computer Science (Systems &amp; Software concentration).
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-dim)' }}>
            Outside of work I spend time on side projects in frameworks and languages I find interesting, and pursue a handful of hobbies I'm genuinely obsessed with.
          </p>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {hobbies.map(hobby => (
            <motion.div
              key={hobby.id}
              whileHover={{ scale: 1.02 }}
              className="rounded-[1.25rem] p-5 cursor-default"
              style={{
                background: 'var(--color-raised)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{hobby.icon}</span>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{hobby.title}</h3>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-subtle)' }}>
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
            />
          ))}
        </div>
        <AnimatePresence>
          {activeProject && (
            <div className="mt-3">
              <ProjectDetail
                project={activeProject}
                onClose={() => setSelectedProject(null)}
              />
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Experience ── */}
      <section id="experience">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Timeline */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible shrink-0 pb-1 md:pb-0 md:w-44">
            {experiences.map(exp => (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp.id)}
                className="text-left px-3 py-3 rounded-xl shrink-0 transition-all duration-200"
                style={{
                  background: selectedExp === exp.id ? 'var(--color-elevated)' : 'transparent',
                  border: `1px solid ${selectedExp === exp.id ? 'var(--color-red-ember)' : 'transparent'}`,
                  color: selectedExp === exp.id ? 'var(--color-text)' : 'var(--color-muted)',
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-medium">{exp.company}</span>
                  {exp.current && (
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                      style={{ background: 'var(--color-red-core)' }}
                    />
                  )}
                </div>
                <div className="text-[10px]" style={{ color: 'var(--color-muted)' }}>{exp.role}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="flex-1 rounded-[1.25rem] p-6"
              style={{
                background: 'var(--color-raised)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="mb-1">
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: 'var(--color-red-core)' }}>
                  {activeExp.team}
                </span>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>{activeExp.company}</h3>
              <p className="text-sm font-light mt-0.5" style={{ color: 'var(--color-subtle)' }}>
                {activeExp.role} · {activeExp.period}
              </p>
              <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-dim)' }}>
                {activeExp.body}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {activeExp.learnings.map(l => (
                  <div key={l.title}>
                    <h4 className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>
                      {l.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
                      {l.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="pb-8">
        <SectionHeading>Contact</SectionHeading>
        <Card>
          <p className="text-sm mb-5" style={{ color: 'var(--color-text-dim)' }}>
            Want to get in touch? Reach me through any of the following.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'GitHub', href: 'https://github.com/TLouison' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/todd-louison/' },
              { label: 'Email', href: 'mailto:toddmlouison@gmail.com' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-sm font-medium px-5 py-2.5 rounded-xl transition-colors duration-200"
                style={{ background: 'var(--color-red-ember)', color: 'var(--color-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-red-core)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-red-ember)' }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </Card>
      </section>

      <footer className="text-center text-xs pb-4" style={{ color: 'var(--color-muted)' }}>
        © 2024 · Todd Louison
      </footer>
    </div>
  )
}
