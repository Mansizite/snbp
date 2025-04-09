import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

