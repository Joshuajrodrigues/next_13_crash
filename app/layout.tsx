import { Poppins } from 'next/font/google'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Some app',
  description: 'made at 12 am',
}

const poppins = Poppins({
  weight: ["200", "400", "500"],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
