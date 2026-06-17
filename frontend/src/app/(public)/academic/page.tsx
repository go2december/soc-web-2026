import Link from "next/link"

export default function AcademicPage() {
  const programs = [
    { name: "สาขาวิชาการพัฒนาสังคม", level: "ปริญญาตรี", desc: "ศึกษาการเปลี่ยนแปลงโครงสร้างสังคม การบริการสังคม และการพัฒนาที่ยั่งยืน" },
    { name: "สาขาวิชาจิตวิทยาสังคม", level: "ปริญญาตรี", desc: "จิตวิทยาเชิงลึกเพื่อการทำงานร่วมกับผู้คนและองค์การในสังคม" },
    { name: "สาขาวิชาคหกรรมศาสตร์ประยุกต์", level: "ปริญญาตรี", desc: "การนำศาสตร์ด้านอาหาร โภชนาการ และการจัดการเครื่องนุ่งห่มไปประยุกต์ใช้เชิงพาณิชย์" },
    { name: "สาขาวิชายุทธศาสตร์การพัฒนาภูมิภาค", level: "ปริญญาเอก", desc: "เน้นวิจัยเชิงลึกด้านการพัฒนายุทธศาสตร์ นโยบาย และวิถีความมั่นคงของชุมชนท้องถิ่น" }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 text-slate-400 text-sm">
          <Link href="/" className="hover:text-indigo-400">หน้าหลัก</Link>
          <span>/</span>
          <span className="text-white font-medium">หลักสูตรการศึกษา</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Academic Profiles
          </h1>
          <p className="text-slate-400">ข้อมูลหลักสูตรปริญญาตรีและปริญญาเอก คณะสังคมศาสตร์ มรชร.</p>
        </div>

        {/* Program list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {programs.map((prog, index) => (
            <div key={index} className="p-6 border border-slate-800 rounded-xl bg-slate-900/40 hover:border-slate-700 transition-colors">
              <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-indigo-500/20 text-indigo-400 mb-3 border border-indigo-500/30">
                {prog.level}
              </span>
              <h3 className="text-xl font-bold text-slate-200">{prog.name}</h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
