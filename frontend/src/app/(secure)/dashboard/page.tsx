import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 text-slate-400 text-sm">
          <Link href="/" className="hover:text-indigo-400">หน้าหลัก</Link>
          <span>/</span>
          <span className="text-white font-medium">แผงควบคุมหลักบ้าน</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            Secure Dashboard
          </h1>
          <p className="text-slate-400">ระบบจัดการหลังบ้านและรายงานผลตัวชี้วัด (SSR) สำหรับผู้บริหารและบุคลากร</p>
        </div>

        {/* Status Notice */}
        <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5 text-red-300 text-sm flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
          <span>ต้องการการตรวจสอบสิทธิ์ความปลอดภัย OAuth / SSO ในกระบวนการพัฒนาถัดไป</span>
        </div>

        {/* Actions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/40">
            <h3 className="text-lg font-bold text-slate-200">จัดการข้อมูลหลักสูตร & บุคลากร</h3>
            <p className="text-slate-400 text-sm mt-1">อัปเดตข้อมูลของรายสาขาวิชา จัดการข้อมูลเจ้าหน้าที่หลักสูตร</p>
          </div>
          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/40">
            <h3 className="text-lg font-bold text-slate-200">ระบบตัวชี้วัด & รายงานผล (SSR)</h3>
            <p className="text-slate-400 text-sm mt-1">ติดตามผลการดำเนินการประกันคุณภาพการศึกษาตามเป้าหมายตัวชี้วัดคณะ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
