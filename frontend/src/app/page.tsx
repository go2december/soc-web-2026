import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-4rem)] bg-base-200/40 selection:bg-primary/20">
      <section className="relative w-full flex flex-col items-center justify-center py-20 lg:py-28">
        
        {/* Soft Background Accent */}
        <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 -z-10 h-72 w-72 rounded-full bg-orange-400/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl text-center flex flex-col items-center">
          
          {/* Logo container */}
          <div className="mb-8 relative w-28 h-28 md:w-36 md:h-36">
            <Image
              src="/logo.png"
              alt="Faculty of Social Sciences Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Status Badge - daisyUI style */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            CRRU Social Sciences Platform v1.0.0
          </span>

          {/* Hero Headline */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black text-base-content tracking-tight leading-tight max-w-4xl">
            ยินดีต้อนรับสู่ คณะสังคมศาสตร์ <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              มหาวิทยาลัยราชภัฏเชียงราย
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-base-content/70 leading-relaxed font-semibold">
            มุ่งเน้นการผลิตบัณฑิตนวัตกรสังคม พัฒนาองค์ความรู้และงานวิจัยเชิงพื้นที่
            พร้อมก้าวสู่ศตวรรษที่ 21 ร่วมยกระดับชุมชนท้องถิ่นสู่สากล
          </p>

          {/* Quick Action Grid using daisyUI cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
            
            <Link 
              href="/academic" 
              className="card bg-base-100 shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body items-start text-left p-8 gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl text-3xl leading-none">📚</div>
                <h3 className="card-title text-xl font-bold text-base-content">หลักสูตรการศึกษา</h3>
                <p className="text-base-content/65 text-sm font-semibold leading-relaxed">
                  ปริญญาตรีและปริญญาเอก ด้านการพัฒนาสังคม จิตวิทยา และยุทธศาสตร์การพัฒนาภูมิภาค
                </p>
                <div className="card-actions justify-end w-full mt-4">
                  <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:underline">
                    ดูรายละเอียดหลักสูตร →
                  </span>
                </div>
              </div>
            </Link>

            <Link 
              href="/news" 
              className="card bg-base-100 shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body items-start text-left p-8 gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl text-3xl leading-none">📰</div>
                <h3 className="card-title text-xl font-bold text-base-content">ข่าวประชาสัมพันธ์</h3>
                <p className="text-base-content/65 text-sm font-semibold leading-relaxed">
                  อัปเดตข่าวสารกิจกรรมการบริการสังคม ทุนการศึกษา และประกาศประกวดราคาจัดซื้อจัดจ้าง
                </p>
                <div className="card-actions justify-end w-full mt-4">
                  <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:underline">
                    อ่านข่าวสารประชาสัมพันธ์ →
                  </span>
                </div>
              </div>
            </Link>

            <Link 
              href="/dashboard" 
              className="card bg-base-100 shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body items-start text-left p-8 gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl text-3xl leading-none">📊</div>
                <h3 className="card-title text-xl font-bold text-base-content">ระบบจัดการหลังบ้าน</h3>
                <p className="text-base-content/65 text-sm font-semibold leading-relaxed">
                  รายงานผลตัวชี้วัดประกันคุณภาพการศึกษาตามเป้าหมาย (SSR) และความปลอดภัยของระบบ
                </p>
                <div className="card-actions justify-end w-full mt-4">
                  <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:underline">
                    เข้าสู่ระบบจัดการ →
                  </span>
                </div>
              </div>
            </Link>

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
