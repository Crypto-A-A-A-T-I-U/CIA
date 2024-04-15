import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CIA - Copa Inter Atléticas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          <nav className="flex h-[9vh] items-center justify-around border-b-8 border-secondary bg-primary">
            <span>LOGO</span>
            <ul className="flex gap-x-10 text-secondary">
              <li>
                <Link href="/">INICIO</Link>
              </li>
              <li>
                <Link href="/atleticas">ATLÉTICAS</Link>
              </li>
              <li>
                <Link href="/partidas">PRÓXIMAS PARTIDAS</Link>
              </li>
              <li>
                <Link href="/resultados">RESULTADOS</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
          {children}
        </header>
      </body>
    </html>
  )
}
