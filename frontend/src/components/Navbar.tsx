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
    <nav className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/80 backdrop-blur-md selection:bg-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar h-16 p-0 flex justify-between">
          {/* Logo / Brand */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.png" alt="Faculty Logo" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-base-content tracking-tight leading-tight transition-colors group-hover:text-primary">
                  คณะสังคมศาสตร์
                </span>
                <span className="text-[9px] text-base-content/60 font-bold tracking-wider uppercase leading-none mt-0.5">
                  faculty of social sciences
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="menu menu-horizontal gap-1 p-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary hover:bg-primary/15"
                        : "text-base-content/75 hover:text-base-content hover:bg-base-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/academic"
              className="btn btn-primary btn-sm h-9 px-4 font-bold text-xs rounded-lg shadow-sm hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              สมัครเรียน / TCAS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/academic"
              className="btn btn-primary btn-xs font-bold rounded-md px-2.5 py-1"
            >
              TCAS
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-sm btn-square text-base-content"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-base-200 bg-base-100/95 backdrop-blur-md px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="menu w-full gap-1 p-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold py-3 px-4 rounded-lg block transition-colors ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary hover:bg-primary/15"
                      : "text-base-content/85 hover:text-base-content hover:bg-base-200"
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

