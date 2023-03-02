import './globals.css'

import Topbar from '../components/ui/topbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <head />
      <body>

        <header>
          <Topbar />
        </header>
        <main>
          {children}
        </main>

      </body>
    
    </html>
  )
}
