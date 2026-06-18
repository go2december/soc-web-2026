import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: {
    template: "%s | คณะสังคมศาสตร์ มรชร.",
    default: "คลังข้อมูลและแพลตฟอร์มกลาง คณะสังคมศาสตร์ มรชร."
  },
  description: "ระบบคลังข้อมูล วิจัย และหลักสูตรวิชาการ คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย - แพลตฟอร์มกลางเพื่อบริการและเผยแพร่องค์ความรู้แก่สังคม",
  keywords: ["คณะสังคมศาสตร์", "มรชร", "มหาวิทยาลัยราชภัฏเชียงราย", "CRRU", "Social Sciences", "หลักสูตรพัฒนาสังคม", "จิตวิทยาสังคม", "คลังงานวิจัย"],
  authors: [{ name: "Faculty of Social Sciences, CRRU" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://localhost"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "คลังข้อมูลและแพลตฟอร์มกลาง คณะสังคมศาสตร์ มรชร.",
    description: "ระบบคลังข้อมูล วิจัย และหลักสูตรวิชาการ คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย",
    url: "https://localhost",
    siteName: "Faculty of Social Sciences, CRRU",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "คลังข้อมูลและแพลตฟอร์มกลาง คณะสังคมศาสตร์ มรชร.",
    description: "ระบบคลังข้อมูล วิจัย และหลักสูตรวิชาการ คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
