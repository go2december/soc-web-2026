import type { Metadata } from "next"
import { Prompt, Noto_Sans_Thai } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const promptFont = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
})

const notoFont = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย",
    default: "คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย"
  },
  description: "ระบบคลังข้อมูล วิจัย และหลักสูตรวิชาการ คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย - เพื่อบริการและเผยแพร่องค์ความรู้แก่สังคม",
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
    <html lang="th" className={`${promptFont.variable} ${notoFont.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
