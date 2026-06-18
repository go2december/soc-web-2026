import Link from "next/link"
import { GraduationCap, Sparkles, BookOpen, Briefcase, ArrowRight } from "lucide-react"

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

function getHighlightSubjects(code: string): string[] {
  if (code.includes("DEV-01")) return ["การจัดการนวัตกรรมสังคม", "การจัดการวิสาหกิจเพื่อสังคม", "การพัฒนาร่วมสมัย"]
  if (code.includes("PSY-01")) return ["จิตวิทยาพฤติกรรมมนุษย์", "จิตวิทยาองค์การและการปรึกษา", "การทดสอบทางจิตวิทยา"]
  if (code.includes("HEC-01")) return ["อาหารเพื่อสุขภาพขั้นสูง", "ธุรกิจเสื้อผ้าและแฟชั่น", "โภชนศาสตร์ครอบครัว"]
  if (code.includes("DEV-PHD")) return ["ระเบียบวิธีวิจัยขั้นสูง", "การวิเคราะห์แผนและนโยบาย", "ยุทธศาสตร์การพัฒนาชุมชน"]
  return ["การปฏิบัติการภาคสนาม", "ทักษะศตวรรษที่ 21"]
}

function getCareers(code: string): string[] {
  if (code.includes("DEV-01")) return ["นักพัฒนานวัตกรรมสังคม", "เจ้าหน้าที่พัฒนาสังคม", "ผู้จัดการโครงการพัฒนาเอกชน (NGO)"]
  if (code.includes("PSY-01")) return ["นักจิตวิทยาการปรึกษา", "นักจิตวิทยาองค์การ", "เจ้าหน้าที่คัดเลือกบุคลากร (HR)"]
  if (code.includes("HEC-01")) return ["ผู้ประกอบการธุรกิจอาหาร/แฟชั่น", "นักโภชนาการ", "นักออกแบบงานอาหารสร้างสรรค์"]
  if (code.includes("DEV-PHD")) return ["อาจารย์มหาวิทยาลัย/นักวิชาการ", "นักบริหารแผนยุทธศาสตร์ภาครัฐ", "นักวิจัยนโยบายสาธารณะ"]
  return ["ผู้เชี่ยวชาญเฉพาะด้าน", "ผู้ประกอบการอิสระ"]
}

export default async function AcademicPage() {
  const programs = await getPrograms()
  
  const bachelors = programs.filter(p => p.degree_level === "ปริญญาตรี")
  const doctorals = programs.filter(p => p.degree_level === "ปริญญาเอก")

  return (
    <div className="min-h-screen bg-base-200/30 text-base-content py-12 px-4 sm:px-6 lg:px-8 selection:bg-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <section className="text-center space-y-4 max-w-2xl mx-auto py-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            <GraduationCap className="w-3.5 h-3.5" />
            หลักสูตรวิชาการคณะสังคมศาสตร์
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight">
            Academic Programs
          </h1>
          <p className="text-sm sm:text-base text-base-content/70 font-semibold leading-relaxed">
            เลือกเรียนในหลักสูตรนวัตกรรมยุคใหม่ ที่เน้นปฏิบัติการจริง ตอบสนองความต้องการตลาดแรงงาน และการยกระดับชุมชนในระดับสากล
          </p>
        </section>

        {/* Breadcrumb */}
        <div className="flex gap-2 text-xs font-bold text-base-content/50 border-b border-base-200 pb-4">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span className="text-base-content/75">หลักสูตรการศึกษา</span>
        </div>

        {/* 📚 Bachelor's Degree Section */}
        {bachelors.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-primary rounded-full"></span>
              <h2 className="text-2xl font-black text-secondary tracking-tight">ระดับปริญญาตรี (Bachelor's Degree)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bachelors.map((prog) => (
                <div 
                  key={prog.id} 
                  className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <div className="card-body p-8 gap-5">
                    <div className="flex justify-between items-start">
                      <span className="badge badge-primary font-bold px-3 py-1 text-[10px]">
                        {prog.degree_level}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-base-content/40">{prog.code}</span>
                    </div>
                    
                    <h3 className="card-title text-xl font-extrabold text-base-content leading-snug">{prog.name}</h3>
                    <p className="text-xs text-base-content/65 leading-relaxed font-semibold">{prog.description}</p>
                    
                    {/* Highlight Subjects */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-base-content/40 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-teal-600" /> วิชาเรียนไฮไลท์:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {getHighlightSubjects(prog.code).map((subj, idx) => (
                          <span key={idx} className="badge badge-outline border-base-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Careers */}
                    <div className="space-y-2 border-t border-base-200/60 pt-4 mt-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-base-content/40 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-primary" /> โอกาสทางอาชีพหลัก:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {getCareers(prog.code).map((career, idx) => (
                          <span key={idx} className="bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-1 rounded-md">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 📚 Doctoral Degree Section */}
        {doctorals.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-base-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-accent rounded-full"></span>
              <h2 className="text-2xl font-black text-secondary tracking-tight">ระดับปริญญาเอก (Ph.D. Programs)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctorals.map((prog) => (
                <div 
                  key={prog.id} 
                  className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-md hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <div className="card-body p-8 gap-5">
                    <div className="flex justify-between items-start">
                      <span className="badge badge-accent text-white font-bold px-3 py-1 text-[10px]">
                        {prog.degree_level}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-base-content/40">{prog.code}</span>
                    </div>
                    
                    <h3 className="card-title text-xl font-extrabold text-base-content leading-snug">{prog.name}</h3>
                    <p className="text-xs text-base-content/65 leading-relaxed font-semibold">{prog.description}</p>
                    
                    {/* Highlight Subjects */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-base-content/40 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-teal-600" /> วิชาเรียนไฮไลท์:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {getHighlightSubjects(prog.code).map((subj, idx) => (
                          <span key={idx} className="badge badge-outline border-base-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Careers */}
                    <div className="space-y-2 border-t border-base-200/60 pt-4 mt-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-base-content/40 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-accent" /> โอกาสทางอาชีพหลัก:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {getCareers(prog.code).map((career, idx) => (
                          <span key={idx} className="bg-accent/5 text-accent text-[10px] font-bold px-2.5 py-1 rounded-md">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic CTA for Admission */}
        <section className="card bg-primary/5 border border-primary/20 p-8 md:p-12 text-center rounded-3xl mt-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-black text-base-content">สนใจเข้าศึกษาต่อคณะสังคมศาสตร์?</h3>
            <p className="text-sm text-base-content/75 font-semibold leading-relaxed">
              เราเปิดรับสมัครผ่านช่องทาง TCAS หลากหลายรอบ มีระบบทุนการศึกษาเรียนดีและขาดแคลนทุนทรัพย์ 
              และระบบแนะแนวสำหรับนักเรียนนักศึกษาอย่างเป็นกันเอง
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://admission.crru.ac.th" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary font-bold shadow-sm"
              >
                เข้าสู่เว็บไซต์รับสมัคร มรชร.
              </a>
              <Link href="/news" className="btn btn-ghost font-bold border-base-300">
                ดูข่าวการรับสมัครล่าสุด
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
