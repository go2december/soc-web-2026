import Link from "next/link"

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
  { id: 1, title: "โครงการ CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ", content: "โครงการบริการสังคมเพื่อการยกระดับเศรษฐกิจสังคมรายตำบล บูรณาการพัฒนาศักยภาพผู้ประกอบการและการจัดการผลิตภัณฑ์ชุมชน", category: "กิจกรรมบริการสังคม", publish_date: "2026-06-15" },
  { id: 2, title: "ประชาสัมพันธ์การรับสมัครทุนการศึกษา คณะสังคมศาสตร์ ประจำปีการศึกษา 2569", content: "เปิดรับสมัครทุนการศึกษาสำหรับนักศึกษาคณะสังคมศาสตร์ที่เรียนดีแต่ขาดแคลนทุนทรัพย์ ประจำปีการศึกษา 2569", category: "ทุนการศึกษา", publish_date: "2026-06-10" },
  { id: 3, title: "ประกาศประกวดราคาซื้อครุภัณฑ์ห้องปฏิบัติการคอมพิวเตอร์และสื่อประยุกต์", content: "ประกาศประกวดราคาซื้อครุภัณฑ์สำหรับใช้งานปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเทคโนโลยีสารสนเทศของคณะสังคมศาสตร์", category: "ข่าวจัดซื้อจัดจ้าง", publish_date: "2026-06-05" }
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

export default async function NewsPage() {
  const newsItems = await getNews()

  return (
    <div className="min-h-screen bg-base-200/40 text-base-content p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Hero */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
            News &amp; PR
          </h1>
          <p className="mt-4 text-base-content/70 font-semibold max-w-xl mx-auto">
            ข่าวสารและประชาสัมพันธ์ คณะสังคมศาสตร์ มรชร.
          </p>
        </section>

        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm font-semibold text-base-content/60">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span>ข่าวสารและประชาสัมพันธ์</span>
        </div>

        {/* News Items */}
        <div className="flex flex-col gap-6 mt-4">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="card bg-base-100 shadow-xs border border-base-300/60 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="card-body p-8 gap-4">
                <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                  <span className="badge badge-primary font-bold px-3 py-1 text-xs">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-base-content/40">{item.publish_date}</span>
                </div>
                <h3 className="card-title text-2xl font-bold text-base-content leading-snug">{item.title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed font-semibold max-w-3xl">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

