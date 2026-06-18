import Link from "next/link"
import { Calendar, User, Tag, ArrowRight, Newspaper, Bookmark } from "lucide-react"

export const dynamic = "force-dynamic"

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  category: string;
  publish_date: string;
  author?: string;
}

const FALLBACK_NEWS: NewsArticle[] = [
  { id: 1, title: "โครงการ CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ", content: "โครงการบริการสังคมเพื่อการยกระดับเศรษฐกิจสังคมรายตำบล บูรณาการพัฒนาศักยภาพผู้ประกอบการและการจัดการผลิตภัณฑ์ชุมชน เพื่อให้ชุมชนสามารถยกระดับรายได้และมีทักษะในการขับเคลื่อนเศรษฐกิจฐานรากอย่างมีระบบร่วมกับคณะและนักศึกษาสายตรง", category: "กิจกรรมบริการสังคม", publish_date: "2026-06-15", author: "ฝ่ายประชาสัมพันธ์ คณะสังคมศาสตร์" },
  { id: 2, title: "ประชาสัมพันธ์การรับสมัครทุนการศึกษา คณะสังคมศาสตร์ ประจำปีการศึกษา 2569", content: "เปิดรับสมัครทุนการศึกษาสำหรับนักศึกษาคณะสังคมศาสตร์ที่เรียนดีแต่ขาดแคลนทุนทรัพย์ ประจำปีการศึกษา 2569 ผู้สนใจสามารถยื่นคำขอรับทุนการศึกษาได้ที่สำนักงานคณบดีหรือขอข้อมูลและแบบฟอร์มเอกสารได้ฟรี", category: "ทุนการศึกษา", publish_date: "2026-06-10", author: "งานพัฒนานักศึกษา" },
  { id: 3, title: "ประกาศประกวดราคาซื้อครุภัณฑ์ห้องปฏิบัติการคอมพิวเตอร์และสื่อประยุกต์", content: "ประกาศประกวดราคาซื้อครุภัณฑ์สำหรับใช้งานปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเทคโนโลยีสารสนเทศของคณะสังคมศาสตร์ เพื่ออำนวยความสะดวกในการเรียนการสอนวิจัยและการสร้างนวัตกรรมระดับสูง", category: "ข่าวจัดซื้อจัดจ้าง", publish_date: "2026-06-05", author: "พัสดุคณะสังคมศาสตร์" }
]

async function getNews(): Promise<NewsArticle[]> {
  const url = `${process.env.NEWS_SERVICE_URL || "http://news_service:8002"}/news`
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error(`Status ${res.status}`)
    return await res.json()
  } catch (err) {
    console.warn(`[News SSR] Failed to fetch. Using fallback data. Error:`, err)
    return FALLBACK_NEWS
  }
}

function getCategoryBadge(category: string): string {
  if (category.includes("บริการสังคม")) return "badge-primary"
  if (category.includes("ทุนการศึกษา")) return "badge-outline border-primary text-primary"
  return "badge-accent text-white"
}

export default async function NewsPage() {
  const newsItems = await getNews()
  
  const featuredItem = newsItems[0]
  const regularItems = newsItems.slice(1)

  return (
    <div className="min-h-screen bg-base-200/30 text-base-content py-12 px-4 sm:px-6 lg:px-8 selection:bg-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <section className="text-center space-y-4 max-w-2xl mx-auto py-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            <Newspaper className="w-3.5 h-3.5" />
            ข้อมูลประกาศและข่าวสารประชาสัมพันธ์
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight">
            News &amp; PR
          </h1>
          <p className="text-sm sm:text-base text-base-content/70 font-semibold leading-relaxed">
            ติดตามข่าวสารกิจกรรม ผลงานวิชาการ การบริการสังคม ทุนการศึกษา และประกาศจัดซื้อจัดจ้างของคณะสังคมศาสตร์
          </p>
        </section>

        {/* Breadcrumb */}
        <div className="flex gap-2 text-xs font-bold text-base-content/50 border-b border-base-200 pb-4">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span className="text-base-content/75">ข่าวสารและประชาสัมพันธ์</span>
        </div>

        {/* 🌟 Featured News (Large Spotlight Card) */}
        {featuredItem && (
          <section className="space-y-4">
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-base-content/40 flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5 text-primary" /> ข่าวเด่นประชาสัมพันธ์
            </h2>
            
            <div className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-sm transition-all duration-300 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Text Side */}
                <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`badge font-bold px-3 py-1 text-xs ${getCategoryBadge(featuredItem.category)}`}>
                        {featuredItem.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-base-content/40 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {featuredItem.publish_date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-base-content tracking-tight leading-snug">
                      {featuredItem.title}
                    </h3>
                    
                    <p className="text-sm text-base-content/70 leading-relaxed font-semibold">
                      {featuredItem.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-base-200/60 pt-6 mt-4">
                    <div className="flex items-center gap-2 text-xs text-base-content/50 font-bold">
                      <User className="w-3.5 h-3.5 text-teal-600" />
                      <span>{featuredItem.author || "ฝ่ายประชาสัมพันธ์"}</span>
                    </div>
                    <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                      อ่านต่อรายละเอียดข่าว <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Styled Pattern/Color blocks Side (Aesthetic Placeholders) */}
                <div className="lg:col-span-4 bg-primary/5 border-l border-base-200/30 min-h-[220px] flex items-center justify-center relative overflow-hidden p-8">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl" />
                  <div className="relative text-center space-y-2">
                    <Newspaper className="w-16 h-16 text-primary/30 mx-auto" />
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-base-content/30 block">Faculty Vibe</span>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* 📰 Regular News Grid */}
        {regularItems.length > 0 && (
          <section className="space-y-6 pt-6">
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-base-content/40">ข่าวประชาสัมพันธ์อื่นๆ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularItems.map((item) => (
                <div 
                  key={item.id} 
                  className="card bg-base-100 border border-base-300/40 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <div className="card-body p-8 gap-5 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                        <span className={`badge font-bold px-3 py-1 text-[10px] ${getCategoryBadge(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-base-content/40 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {item.publish_date}
                        </span>
                      </div>
                      
                      <h3 className="card-title text-lg font-extrabold text-base-content leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-base-content/65 leading-relaxed font-semibold line-clamp-3">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-base-200/60 pt-4 mt-2">
                      <div className="flex items-center gap-2 text-[10px] text-base-content/40 font-bold">
                        <User className="w-3.5 h-3.5 text-teal-600" />
                        <span>{item.author || "ฝ่ายประชาสัมพันธ์"}</span>
                      </div>
                      <button className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline">
                        รายละเอียดเพิ่มเติม <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}

