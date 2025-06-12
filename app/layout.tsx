import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KCS - Professional Accounting Services",
  description:
    "KCS delivers comprehensive accounting and financial services to financial and accounting services firms. Expert bookkeeping, SMSF, financial reporting and taxation services.",
  icons: {
    icon: [
      {
        url: "/KCS.svg",
        sizes: "16x16",
        type: "image/x-icon",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
