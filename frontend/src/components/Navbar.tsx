"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "หน้าแรก", path: "/" },
    { label: "หลักสูตรการศึกษา", path: "/academic" },
    { label: "ประชาสัมพันธ์", path: "/news" },
    { label: "จัดการระบบ", path: "/dashboard" }
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar h-16 p-0 flex justify-between">
          {/* Logo / Brand */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="CRRU Logo" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-base-content tracking-wide uppercase">
                  CRRU Social Sciences
                </span>
                <span className="text-[10px] text-muted-foreground font-semibold">มรชร. คณะสังคมศาสตร์</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            <ul className="menu menu-horizontal gap-1 p-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`font-bold px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-primary text-primary-content hover:bg-primary/95"
                        : "text-base-content/80 hover:text-base-content hover:bg-base-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-square text-base-content"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-base-200 bg-base-100 px-4 py-4 space-y-1 shadow-lg">
          <ul className="menu w-full gap-1 p-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold py-3 px-4 rounded-lg block ${
                    isActive(item.path)
                      ? "bg-primary text-primary-content hover:bg-primary/95"
                      : "text-base-content/80 hover:text-base-content hover:bg-base-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

