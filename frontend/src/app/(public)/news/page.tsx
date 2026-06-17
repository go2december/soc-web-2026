import Link from "next/link"

export default function NewsPage() {
  const newsItems = [
    { title: "โครงการ CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ", category: "กิจกรรมบริการสังคม", date: "2026-06-15" },
    { title: "ประชาสัมพันธ์การรับสมัครทุนการศึกษา คณะสังคมศาสตร์ ประจำปีการศึกษา 2569", category: "ทุนการศึกษา", date: "2026-06-10" },
    { title: "ประกาศประกวดราคาซื้อครุภัณฑ์ห้องปฏิบัติการคอมพิวเตอร์และสื่อประยุกต์", category: "ข่าวจัดซื้อจัดจ้าง", date: "2026-06-05" }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 text-slate-400 text-sm">
          <Link href="/" className="hover:text-indigo-400">หน้าหลัก</Link>
          <span>/</span>
          <span className="text-white font-medium">ข่าวสารและประชาสัมพันธ์</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            News & PR
          </h1>
          <p className="text-slate-400">ประชาสัมพันธ์กิจกรรม, ทุนการศึกษา, และข่าวสารจัดซื้อจัดจ้าง</p>
        </div>

        {/* News Items */}
        <div className="space-y-4 mt-8">
          {newsItems.map((item, index) => (
            <div key={index} className="p-6 border border-slate-800 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">{item.category}</span>
                <h3 className="text-lg font-bold text-slate-200">{item.title}</h3>
              </div>
              <div className="text-sm text-slate-500 whitespace-nowrap">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
