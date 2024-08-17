import "../styles/globals.css"

import { GeistMono } from "geist/font/mono";

import { Roboto_Mono } from 'next/font/google'
import { Noto_Serif } from 'next/font/google'

const robotomono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-rmono',
})
const notoserif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],

})


export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html className={`${GeistMono.variable} ${robotomono.variable} ${notoserif.variable}`} lang="en">
      <head />
      <body>

        <div>

          {children}
        </div>

      </body>

    </html>
  )
}
