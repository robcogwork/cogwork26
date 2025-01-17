import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import '../globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Cogwork AB',
  description: `
    
  `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={poppins.className}>
        <div className="bg-apricot-500 selection:bg-salmon-300">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
