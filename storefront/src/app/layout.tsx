import Providers from "@modules/providers"
import { Tourney } from "next/font/google"
import "styles/globals.css"

const tourney = Tourney({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-tourney",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-mode="light" className={`${tourney.variable}`}>
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
