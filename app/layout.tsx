import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/navbar'
import localFont from 'next/font/local'

const acorn = localFont({
  src: [
    {
      path: '../public/Acorn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Acorn-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Acorn-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

  ],
})


export const metadata: Metadata = {
  title: "Sanyam's Portfolio",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${acorn.className}`}>
        <div className='min-h-screen text-white'>

          <div className="fixed top-0 left-0 w-full h-[100vh] bg-custom-gradient bg-cover bg-center z-0"></div>
          <div className="relative z-10">
            <header className="fixed w-full bottom-7 z-50">
              <NavBar />
            </header>
            <main className="z-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}