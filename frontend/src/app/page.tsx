import Link from "next/link"
import Image from "next/image"
import { 
  Award, 
  BookOpen, 
  Globe, 
  Users, 
  HeartHandshake, 
  Utensils, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Calendar 
} from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)] bg-base-200/30 selection:bg-primary/20">
      
      {/* 🚀 Hero Section (Asymmetric & Eye-Friendly) */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden">
        {/* Soft Background Accent Glows (Very Low Opacity, Not Blinding) */}
        <div className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/3 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                TCAS69 เปิดรับสมัครนักศึกษาใหม่แล้ววันนี้!
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-base-content tracking-tight leading-tight">
                ออกแบบสังคมแห่งอนาคต <br />
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  สร้างนวัตกรรมด้วยตัวคุณ
                </span>
              </h1>

              <p className="text-base sm:text-lg text-base-content/75 font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
                เรียนรู้เชิงลึก ลงมือปฏิบัติจริง ร่วมขับเคลื่อนและยกระดับชุมชนท้องถิ่นสู่สากล 
                กับคณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link 
                  href="/academic" 
                  className="btn btn-primary px-8 font-bold shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all"
                >
                  ค้นหาหลักสูตรที่ใช่ <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link 
                  href="/news" 
                  className="btn btn-ghost border-base-300 hover:bg-base-200/50 px-6 font-bold"
                >
                  กิจกรรมและประกาศคณะ
                </Link>
              </div>
            </div>

            {/* Right Column: Pride Points Cards (Interactive Stack) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Card 1: Employability */}
              <div className="card bg-base-100/90 backdrop-blur-xs p-6 shadow-sm border border-base-300/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-2xl">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base-content text-base">โอกาสได้งานและเติบโตสูงสุด</h3>
                    <p className="text-sm text-base-content/65 font-semibold mt-1">
                      หลักสูตรเน้นการทำงานจริง จบแล้วมีงานทำหรือก้าวสู่การเป็นผู้ประกอบการได้ทันที
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Interactive Practical */}
              <div className="card bg-base-100/90 backdrop-blur-xs p-6 shadow-sm border border-base-300/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-2xl">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-teal-500/10 text-teal-600 rounded-xl">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base-content text-base">การเรียนรู้เชิงพื้นที่และนวัตกรรม</h3>
                    <p className="text-sm text-base-content/65 font-semibold mt-1">
                      ไม่ใช่แค่ทฤษฎีในห้องเรียน แต่ได้ร่วมพัฒนาโครงการชุมชนท้องถิ่นเพื่อสร้างนวัตกรรมร่วมสมัย
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Global Connect */}
              <div className="card bg-base-100/90 backdrop-blur-xs p-6 shadow-sm border border-base-300/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-2xl">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-indigo-500/10 text-indigo-600 rounded-xl">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base-content text-base">เครือข่ายบริการชุมชนสู่สากล</h3>
                    <p className="text-sm text-base-content/65 font-semibold mt-1">
                      โครงการยกระดับยุทธศาสตร์ภูมิภาค งานวิจัยเชิงพื้นที่ และเครือข่ายการเรียนรู้สู่สากล
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 🔮 Section 2: Explore Pathways (Course Overview) */}
      <section className="bg-base-100/50 py-16 lg:py-20 border-y border-base-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-primary font-extrabold uppercase tracking-wider">Academic Options</span>
            <h2 className="text-3xl md:text-4xl font-black text-base-content tracking-tight">
              เลือกเส้นทางวิชาชีพของคุณ
            </h2>
            <p className="text-sm sm:text-base text-base-content/65 font-semibold leading-relaxed">
              ค้นพบหลักสูตรปริญญาตรีและปริญญาเอกที่ออกแบบเพื่อพัฒนาทักษะชีวิต ทักษะสังคม และความเป็นนวัตกร
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Path 1: Social Dev */}
            <div className="card bg-base-100 border border-base-300/50 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 rounded-2xl">
              <div className="card-body p-8 gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="card-title text-xl font-extrabold text-base-content">การพัฒนาสังคมและนโยบาย</h3>
                <p className="text-sm text-base-content/65 leading-relaxed font-semibold">
                  เรียนรู้โครงสร้างสังคม การจัดทำยุทธศาสตร์ และนโยบายพัฒนาชุมชนท้องถิ่นอย่างยั่งยืน
                </p>
                <div className="border-t border-base-200/60 pt-4 mt-2">
                  <span className="text-[11px] text-base-content/40 font-bold block uppercase tracking-wider">อาชีพในอนาคต:</span>
                  <span className="text-xs text-base-content/75 font-semibold block mt-1">
                    นักพัฒนานวัตกรรมสังคม, เจ้าหน้าที่พัฒนาชุมชน, ที่ปรึกษานโยบายภาครัฐและเอกชน
                  </span>
                </div>
              </div>
            </div>

            {/* Path 2: Psychology */}
            <div className="card bg-base-100 border border-base-300/50 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 rounded-2xl">
              <div className="card-body p-8 gap-4">
                <div className="w-12 h-12 bg-teal-500/10 text-teal-600 flex items-center justify-center rounded-2xl">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="card-title text-xl font-extrabold text-base-content">จิตวิทยาสังคมและการปรึกษา</h3>
                <p className="text-sm text-base-content/65 leading-relaxed font-semibold">
                  ศึกษาพฤติกรรมมนุษย์ จิตวิทยาองค์กร และศาสตร์การแนะแนวช่วยเหลือส่งเสริมความเข้าใจในสังคม
                </p>
                <div className="border-t border-base-200/60 pt-4 mt-2">
                  <span className="text-[11px] text-base-content/40 font-bold block uppercase tracking-wider">อาชีพในอนาคต:</span>
                  <span className="text-xs text-base-content/75 font-semibold block mt-1">
                    นักจิตวิทยาองค์กร, ผู้เชี่ยวชาญพัฒนาทรัพยากรมนุษย์, เจ้าหน้าที่ฝ่ายบุคคล (HR)
                  </span>
                </div>
              </div>
            </div>

            {/* Path 3: Applied Science / Home Ec */}
            <div className="card bg-base-100 border border-base-300/50 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 rounded-2xl">
              <div className="card-body p-8 gap-4">
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 flex items-center justify-center rounded-2xl">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="card-title text-xl font-extrabold text-base-content">คหกรรมศาสตร์และการบริการ</h3>
                <p className="text-sm text-base-content/65 leading-relaxed font-semibold">
                  การจัดการนวัตกรรมอาหาร โภชนาการ และการออกแบบเครื่องแต่งกายเชิงพาณิชย์สร้างรายได้
                </p>
                <div className="border-t border-base-200/60 pt-4 mt-2">
                  <span className="text-[11px] text-base-content/40 font-bold block uppercase tracking-wider">อาชีพในอนาคต:</span>
                  <span className="text-xs text-base-content/75 font-semibold block mt-1">
                    ผู้ประกอบการธุรกิจอาหาร/เครื่องแต่งกาย, นักวิชาการโภชนาการ, นักพัฒนาผลิตภัณฑ์สร้างสรรค์
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-12">
            <Link 
              href="/academic" 
              className="group text-sm font-bold text-primary flex items-center gap-1.5 hover:underline"
            >
              ดูข้อมูลรายหลักสูตรและเกณฑ์การรับสมัครทั้งหมด 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 🔮 Section 3: News & Vibe Preview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs text-primary font-extrabold uppercase tracking-wider">News & Activities</span>
              <h2 className="text-3xl font-black text-base-content tracking-tight">ข่าวสารและประชาสัมพันธ์</h2>
            </div>
            <Link 
              href="/news" 
              className="btn btn-ghost border-base-300 font-bold text-xs rounded-lg shadow-2xs hover:bg-base-200/50"
            >
              ข่าวสารทั้งหมด
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <div className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-sm transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="card-body p-6 gap-4">
                <span className="badge badge-primary font-bold px-3 py-1 text-xs">กิจกรรมบริการสังคม</span>
                <h4 className="font-extrabold text-base-content text-base line-clamp-2 leading-snug">
                  โครงการ CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ
                </h4>
                <p className="text-xs text-base-content/65 line-clamp-3 leading-relaxed font-semibold">
                  โครงการบริการสังคมเพื่อการยกระดับเศรษฐกิจสังคมรายตำบล บูรณาการพัฒนาศักยภาพผู้ประกอบการและการจัดการผลิตภัณฑ์ชุมชน
                </p>
                <div className="flex items-center gap-2 text-[10px] text-base-content/40 font-bold border-t border-base-200/60 pt-4 mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2026-06-15</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-sm transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="card-body p-6 gap-4">
                <span className="badge badge-primary font-bold px-3 py-1 text-xs">ทุนการศึกษา</span>
                <h4 className="font-extrabold text-base-content text-base line-clamp-2 leading-snug">
                  การรับสมัครทุนการศึกษา คณะสังคมศาสตร์ ประจำปี 2569
                </h4>
                <p className="text-xs text-base-content/65 line-clamp-3 leading-relaxed font-semibold">
                  เปิดรับสมัครทุนการศึกษาสำหรับนักศึกษาคณะสังคมศาสตร์ที่เรียนดีแต่ขาดแคลนทุนทรัพย์ ประจำปีการศึกษา 2569
                </p>
                <div className="flex items-center gap-2 text-[10px] text-base-content/40 font-bold border-t border-base-200/60 pt-4 mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2026-06-10</span>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-sm transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="card-body p-6 gap-4">
                <span className="badge badge-accent font-bold px-3 py-1 text-xs text-white">ข่าวจัดซื้อจัดจ้าง</span>
                <h4 className="font-extrabold text-base-content text-base line-clamp-2 leading-snug">
                  ประกาศประกวดราคาซื้อครุภัณฑ์คอมพิวเตอร์และสื่อประยุกต์
                </h4>
                <p className="text-xs text-base-content/65 line-clamp-3 leading-relaxed font-semibold">
                  ประกาศประกวดราคาซื้อครุภัณฑ์สำหรับใช้งานปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเทคโนโลยีสารสนเทศของคณะสังคมศาสตร์
                </p>
                <div className="flex items-center gap-2 text-[10px] text-base-content/40 font-bold border-t border-base-200/60 pt-4 mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2026-06-05</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-8 border-t border-base-200 bg-base-100 text-base-content/60 text-xs font-semibold mt-auto">
        <aside>
          <p>© {new Date().getFullYear()} Faculty of Social Sciences, Chiang Rai Rajabhat University. All rights reserved.</p>
        </aside>
      </footer>
    </main>
  )
}
