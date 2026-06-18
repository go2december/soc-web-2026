import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-base-200/40 text-base-content p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm font-semibold text-base-content/60">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span>แผงควบคุมหลังบ้าน</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-base-content tracking-tight">
            Secure Dashboard
          </h1>
          <p className="text-base-content/75 font-semibold">
            ระบบจัดการหลังบ้านและรายงานผลตัวชี้วัด (SSR) สำหรับผู้บริหารและบุคลากร
          </p>
        </div>

        {/* Status Notice using daisyUI/shadcn style alert */}
        <div className="alert alert-error shadow-sm rounded-xl border border-destructive/20 bg-destructive/5 text-destructive text-sm font-semibold flex items-center gap-3 p-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          <span>ต้องการการตรวจสอบสิทธิ์ความปลอดภัย OAuth / SSO ในกระบวนการพัฒนาถัดไป</span>
        </div>

        {/* Actions grid using shadcn/ui Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          <Card className="shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/20 transition-all duration-300 bg-base-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-base-content">จัดการข้อมูลหลักสูตร &amp; บุคลากร</CardTitle>
              <CardDescription className="text-base-content/65 text-sm font-semibold mt-2 leading-relaxed">
                อัปเดตข้อมูลของรายสาขาวิชา จัดการข้อมูลเจ้าหน้าที่หลักสูตรและข้อมูลผู้ใช้ในสังกัด
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/20 transition-all duration-300 bg-base-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-base-content">ระบบตัวชี้วัด &amp; รายงานผล (SSR)</CardTitle>
              <CardDescription className="text-base-content/65 text-sm font-semibold mt-2 leading-relaxed">
                ติดตามผลการดำเนินการประกันคุณภาพการศึกษาตามเป้าหมายตัวชี้วัดของคณะสังคมศาสตร์
              </CardDescription>
            </CardHeader>
          </Card>

        </div>
      </div>
    </div>
  )
}
