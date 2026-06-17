import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-radial from-slate-900 via-slate-950 to-black text-white selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border border-slate-800 rounded-full bg-slate-900/50 text-indigo-400 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            CRRU Social Sciences Platform v1.0.0
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            ระบบคลังข้อมูลและแพลตฟอร์มกลาง
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            ยินดีต้อนรับสู่ระบบสารสนเทศ คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย
            ออกแบบด้วยสถาปัตยกรรมแบบ Microservices เพื่อความคล่องตัวและประสิทธิภาพสูงสุด
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Academic */}
          <Link href="/academic" className="group relative block p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
            <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative space-y-4">
              <div className="text-indigo-400 text-3xl font-semibold">Academic</div>
              <h3 className="text-xl font-bold text-slate-200">หลักสูตรการศึกษา</h3>
              <p className="text-slate-400 text-sm">ปริญญาตรีและปริญญาเอก ด้านการพัฒนาสังคม จิตวิทยา และยุทธศาสตร์การพัฒนา</p>
            </div>
          </Link>

          {/* Card 2: News & PR */}
          <Link href="/news" className="group relative block p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
            <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative space-y-4">
              <div className="text-indigo-400 text-3xl font-semibold">News & PR</div>
              <h3 className="text-xl font-bold text-slate-200">ประชาสัมพันธ์</h3>
              <p className="text-slate-400 text-sm">ข่าวสารกิจกรรมการบริการสังคม ทุนการศึกษา สมัครงาน และข่าวจัดซื้อจัดจ้าง</p>
            </div>
          </Link>

          {/* Card 3: Backoffice Dashboard */}
          <Link href="/dashboard" className="group relative block p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
            <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative space-y-4">
              <div className="text-indigo-400 text-3xl font-semibold">Dashboard</div>
              <h3 className="text-xl font-bold text-slate-200">จัดการข้อมูล</h3>
              <p className="text-slate-400 text-sm">ระบบจัดการหลังบ้าน รายงานตัวชี้วัด (SSR) และความปลอดภัยสำหรับบุคลากร</p>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-12 text-slate-500 text-sm">
          © {new Date().getFullYear()} Faculty of Social Sciences, Chiang Rai Rajabhat University. All rights reserved.
        </div>
      </div>
    </div>
  )
}
