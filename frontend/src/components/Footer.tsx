import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-base-100 border-t border-base-200 text-base-content/75 text-sm selection:bg-primary/20">
      
      {/* Upper Footer: Quick Links & Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand / Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Faculty Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-base-content leading-tight">
                  คณะสังคมศาสตร์
                </span>
                <span className="text-[9px] text-base-content/60 font-bold tracking-wider uppercase leading-none mt-0.5">
                  faculty of social sciences
                </span>
              </div>
            </Link>
            <p className="text-xs text-base-content/60 font-semibold leading-relaxed max-w-sm">
              มุ่งเน้นผลิตบัณฑิตนวัตกรสังคม พัฒนาองค์ความรู้วิจัยเชิงพื้นที่ และยกระดับการพัฒนาชุมชนท้องถิ่นสู่ระดับสากล 
              มหาวิทยาลัยราชภัฏเชียงราย
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle btn-sm text-base-content/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V2h-3c-2.5 0-5 1.5-5 4v2z" />
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle btn-sm text-base-content/60 hover:text-red-600 hover:bg-red-50 flex items-center justify-center"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.5 6.2c-.2-1-.9-1.8-1.9-2C19.8 4 12 4 12 4s-7.8 0-9.6.2c-1 .2-1.7 1-1.9 2C.2 8 .2 12 .2 12s0 4 .3 5.8c.2 1 .9 1.8 1.9 2C4.2 20 12 20 12 20s7.8 0 9.6-.2c1-.2 1.7-1 1.9-2 .3-1.8.3-5.8.3-5.8s0-4-.3-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
              <a 
                href="mailto:social@crru.ac.th" 
                className="btn btn-ghost btn-circle btn-sm text-base-content/60 hover:text-teal-600 hover:bg-teal-50 flex items-center justify-center"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-base-content/40">หลักสูตรวิชาการ</h3>
            <ul className="space-y-2.5 font-semibold text-xs">
              <li>
                <Link href="/academic" className="hover:text-primary transition-colors flex items-center gap-1">
                  สาขาวิชาการพัฒนาสังคม
                </Link>
              </li>
              <li>
                <Link href="/academic" className="hover:text-primary transition-colors flex items-center gap-1">
                  สาขาวิชาจิตวิทยาสังคม
                </Link>
              </li>
              <li>
                <Link href="/academic" className="hover:text-primary transition-colors flex items-center gap-1">
                  สาขาวิชาคหกรรมศาสตร์ประยุกต์
                </Link>
              </li>
              <li>
                <Link href="/academic" className="hover:text-primary transition-colors flex items-center gap-1">
                  ยุทธศาสตร์การพัฒนาภูมิภาค (ป.เอก)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Internal Systems (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-base-content/40">ระบบและบริการภายใน</h3>
            <ul className="space-y-2.5 font-semibold text-xs">
              <li>
                <Link href="/dashboard" className="hover:text-primary transition-colors">
                  ระบบจัดการหลังบ้าน / SSR
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  ข่าวจัดซื้อจัดจ้าง
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  ข่าวสารทุนการศึกษา
                </Link>
              </li>
              <li>
                <a 
                  href="http://localhost/api/v1/academic/programs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  ระบบ API คลังข้อมูล <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-base-content/40">ติดต่อคณะ</h3>
            <ul className="space-y-3 text-xs font-semibold text-base-content/70">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>เลขที่ 80 ม.9 ต.บ้านดู่ อ.เมือง จ.เชียงราย 57100</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <span>053-776-000 ต่อ 1234</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>social@crru.ac.th</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator line */}
        <hr className="border-base-200 my-10" />

        {/* Lower Footer: Copyright & Partner links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-base-content/40">
          <div>
            © {new Date().getFullYear()} คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center font-bold">
            <a 
              href="https://crru.ac.th" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary flex items-center gap-1 transition-colors"
            >
              เว็บไซต์หลัก มรชร. <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://admission.crru.ac.th" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary flex items-center gap-1 transition-colors"
            >
              รับสมัครนักศึกษา <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://reg.crru.ac.th" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary flex items-center gap-1 transition-colors"
            >
              สำนักทะเบียนฯ <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
