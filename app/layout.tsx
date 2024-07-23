import "../styles/globals.css"

import { GeistMono } from "geist/font/mono";

import { Roboto_Mono } from 'next/font/google'

const robotomono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-rmono',
})


export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html className={`${GeistMono.variable} ${robotomono.variable}`} lang="en">
      <head />
      <body>

        <div>

          {children}
        </div>

      </body>

    </html>
  )
}
