import "../styles/globals.css"

import { GeistMono } from "geist/font/mono";




export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html className={`${GeistMono.variable}`} lang="en">
      <head />
      <body>

        <div>

          {children}
        </div>

      </body>

    </html>
  )
}
