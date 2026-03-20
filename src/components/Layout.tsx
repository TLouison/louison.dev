import { Sidebar } from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-void)' }}>
      <Sidebar />
      {/* Main content: offset for sidebar on desktop, bottom padding for mobile nav */}
      <main className="md:ml-[15rem] pb-28 md:pb-0">
        {children}
      </main>
    </div>
  )
}
