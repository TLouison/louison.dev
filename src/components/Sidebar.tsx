import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home', icon: '⌂' },
  { label: 'About', href: '#about', icon: '○' },
  { label: 'Projects', href: '#projects', icon: '◇' },
  { label: 'Experience', href: '#experience', icon: '◈' },
  { label: 'Contact', href: '#contact', icon: '◉' },
]

const socialItems = [
  { label: 'GitHub', href: 'https://github.com/TLouison', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/todd-louison/', external: true },
  { label: 'Email', href: 'mailto:toddmlouison@gmail.com', external: true },
]

function scrollTo(href: string) {
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
}

export function Sidebar() {
  return (
    <>
      {/* Desktop: left sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="hidden md:flex fixed left-4 top-4 bottom-4 z-50 w-52 flex-col rounded-[1.25rem] overflow-hidden"
        style={{
          background: 'rgba(26, 22, 18, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(51, 42, 34, 0.8)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Logo */}
        <div className="px-5 pt-6 pb-4">
          <div className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
            Todd<span className="font-light" style={{ color: 'var(--color-subtle)' }}>Louison</span>
          </div>
          <div className="mt-1 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--color-red-core)' }}>
            Portfolio
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px" style={{ background: 'var(--color-border)' }} />

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left w-full"
              style={{ color: 'var(--color-text-dim)' }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(192, 57, 43, 0.12)'
                el.style.color = 'var(--color-text)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'transparent'
                el.style.color = 'var(--color-text-dim)'
              }}
            >
              <span className="text-base w-5 text-center opacity-60 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom: socials */}
        <div className="px-5 pb-6">
          <div className="h-px mb-4" style={{ background: 'var(--color-border)' }} />
          <div className="flex flex-col gap-2">
            {socialItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-xs font-medium transition-colors duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-red-bright)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
              >
                {item.label} ↗
              </a>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Mobile: bottom bar */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-around rounded-[1.25rem] px-2 py-3"
        style={{
          background: 'rgba(26, 22, 18, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(51, 42, 34, 0.8)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-200"
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-red-bright)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
          >
            <span className="text-lg leading-none">{item.icon}</span>
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </motion.nav>
    </>
  )
}
