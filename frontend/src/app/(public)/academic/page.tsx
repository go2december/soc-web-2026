import Link from "next/link"

export const dynamic = "force-dynamic"

interface Program {
  id: number;
  code: string;
  name: string;
  degree_level: string;
  description?: string;
}

const FALLBACK_PROGRAMS: Program[] = [
  { id: 1, code: "DEV-01", name: "สาขาวิชาการพัฒนาสังคม", degree_level: "ปริญญาตรี", description: "ศึกษาการเปลี่ยนแปลงโครงสร้างสังคม การบริการสังคม และการพัฒนาที่ยั่งยืน" },
  { id: 2, code: "PSY-01", name: "สาขาวิชาจิตวิทยาสังคม", degree_level: "ปริญญาตรี", description: "จิตวิทยาเชิงลึกเพื่อการทำงานร่วมกับผู้คนและองค์การในสังคม" },
  { id: 3, code: "HEC-01", name: "สาขาวิชาคหกรรมศาสตร์ประยุกต์", degree_level: "ปริญญาตรี", description: "การนำศาสตร์ด้านอาหาร โภชนาการ และการจัดการเครื่องนุ่งห่มไปประยุกต์ใช้เชิงพาณิชย์" },
  { id: 4, code: "DEV-PHD", name: "สาขาวิชายุทธศาสตร์การพัฒนาภูมิภาค", degree_level: "ปริญญาเอก", description: "เน้นวิจัยเชิงลึกด้านการพัฒนายุทธศาสตร์ นโยบาย และวิถีความมั่นคงของชุมชนท้องถิ่น" }
]

async function getPrograms(): Promise<Program[]> {
  const url = `${process.env.ACADEMIC_SERVICE_URL || "http://academic_service:8001"}/programs`
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error(`Status ${res.status}`)
    return await res.json()
  } catch (err) {
    console.warn(`[Academic SSR] Failed to fetch. Using fallback data. Error:`, err)
    return FALLBACK_PROGRAMS
  }
}

export default async function AcademicPage() {
  const programs = await getPrograms()

  return (
    <div className="min-h-screen bg-base-200/40 text-base-content p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Hero */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
            Academic Programs
          </h1>
          <p className="mt-4 text-base-content/70 font-semibold max-w-xl mx-auto">
            ข้อมูลหลักสูตรปริญญาตรีและปริญญาเอก คณะสังคมศาสตร์ มรชร.
          </p>
        </section>

        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm font-semibold text-base-content/60">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span>หลักสูตรการศึกษา</span>
        </div>

        {/* Program list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {programs.map((prog) => (
            <div 
              key={prog.id} 
              className="card bg-base-100 shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="card-body p-8 gap-4">
                <div className="flex items-center justify-between w-full">
                  <span className="badge badge-primary font-bold px-3 py-1 text-xs">
                    {prog.degree_level}
                  </span>
                  <span className="text-xs font-mono font-bold text-base-content/40">{prog.code}</span>
                </div>
                <h3 className="card-title text-2xl font-bold text-base-content leading-snug">{prog.name}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed font-semibold">{prog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
