import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "คลังข้อมูลและแพลตฟอร์มกลาง คณะสังคมศาสตร์ มรชร.",
  description: "ระบบสารสนเทศคณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body>
        <main className="min-h-screen bg-background text-foreground">
          {children}
        </main>
      </body>
    </html>
  )
}
