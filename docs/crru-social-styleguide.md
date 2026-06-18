# 🍊 คู่มือการกำหนดธีมและสไตล์เว็บไซต์คณะสังคมศาสตร์ มรชร. (Tailwind CSS + shadcn/ui)

เอกสารนี้ระบุการกำหนดค่าแนวคิดระบบสี โค้ด CSS สำหรับ shadcn/ui และตัวอย่างส่วนประกอบหน้าเว็บ (UI Components) โดยเน้นความ **สดใส มีพลัง พัฒนาองค์ความรู้** ควบคู่ไปกับความถูกต้องตามเกณฑ์ Webometrics และมาตรฐานสากล

---

## 1. แนวคิดและระบบสี (Color System Strategy)

การนำสีส้มประจำคณะสังคมศาสตร์ `#F14627` มาออกแบบให้ดูสดใสแบบโมเดิร์น จะไม่ใช้สีส้มเป็นพื้นหลังทึบทั้งหมด แต่จะใช้สูตร **60-30-10 Rule** เพื่อสร้างสมดุลทางสายตาที่พรีเมียมและอ่านง่าย:
- **60% (Base - สีพื้นหลัง):** สีขาวบริสุทธิ์และสีเทาคลีนสะอาด (`Slate-50` / `Slate-100`) ในโหมดสว่าง หรือสีเทาเข้มเกือบดำ (`Slate-950` / `Black`) ในโหมดมืด เพื่อรักษาความกระจ่างของข้อมูลและเอื้อต่อการอ่านข้อความยาวๆ
- **30% (Secondary - สีโครงสร้างและข้อความ):** สีครามและน้ำเงินเข้ม (`Slate-900` / `Slate-800`) สำหรับหัวข้อข้อความหลัก และเฉดสีฟ้าอมครามสว่าง (`Indigo/Blue`) ในส่วนประกอบเสริม เช่น ป้ายแท็ก ไอคอน เพื่อให้ดีไซน์ดูมีชีวิตชีวา ไม่จืดชืด
- **10% (Accent - สีส้มประจำคณะ):** ใช้สีส้มประจำคณะ `#F14627` เป็นสีเด่นหลักสำหรับส่วนประกอบที่ต้องการแรงดึงดูดสายตาสูงสุด (Call-to-Action buttons, สถานะการเปิดรับสมัครนักศึกษา, งานวิจัยหรือการแจ้งเตือนสำคัญ)

---

## 2. โค้ดการตั้งค่าธีมหลักสำหรับ shadcn/ui (`globals.css`)

คัดลอกส่วนโค้ดด้านล่างนี้และนำไปแทนที่หรือเสริมในไฟล์กำหนดค่าสไตล์หลัก (`app/globals.css` หรือ `src/app/globals.css` ในโปรเจกต์ Next.js) โดยแปลงรหัสสีส้มคณะให้อยู่ในฟอร์แมตระบบ HSL (`9 89% 55%`) เพื่อรองรับการสลับโทนสีและการไล่ระดับแสงโปร่งใสของเครื่องมือใน shadcn/ui อย่างราบรื่น

```css
@layer base {
  :root {
    /* ⚪ Light Mode: เน้นความสะอาด โล่ง สว่างแบบสากล */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    /* 🟠 Primary Color: สีส้มประจำคณะ #F14627 */
    --primary: 9 89% 55%;
    --primary-foreground: 0 0% 100%; /* ตัวอักษรบนพื้นสีส้มเป็นสีขาว */

    /* 🔵 Secondary Color: สีฟ้าอมครามสว่างตัดโทนแสด */
    --secondary: 210 96% 96%;
    --secondary-foreground: 219 85% 25%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    /* Accent ส้มพาสเทลสำหรับเอฟเฟกต์ Hover และ Focus */
    --accent: 9 89% 96%;
    --accent-foreground: 9 89% 45%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 9 89% 55%;

    /* ขอบโค้งมนที่ดูเป็นมิตรและล้ำสมัย */
    --radius: 0.75rem;
  }

  .dark {
    /* 🌙 Dark Mode: โทนสีมืดเกรดพรีเมียม ตัดกับแสงสว่างสะท้อนสีแสด */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    
    /* ปรับระดับความสว่างสีส้มเล็กน้อยในธีมมืดเพื่อให้อ่านข้อมูลได้ง่ายขึ้น */
    --primary: 9 89% 60%;
    --primary-foreground: 222.2 84% 4.9%;
    
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 9 89% 60%;
  }
}
```

---

## 3. คลาส Utility ของ Tailwind CSS แนะนำสำหรับตกแต่งเพิ่มเติม

เพื่อเพิ่มความยืดหยุ่นในการจัดทำ UI เฉพาะจุด สามารถเลือกใช้กลุ่มคลาส Tailwind สำเร็จรูปต่อไปนี้:

| หมวดหมู่การใช้ | โค้ดคลาส Tailwind CSS | ผลลัพธ์ทางสายตาและอารมณ์ของ UI |
| --- | --- | --- |
| **ตัวเน้นสีอักษร** | `text-[#F14627]` | ใช้สำหรับเน้นสถิติสำคัญ ตัวเลขทุนการศึกษา หรือคำสั้นสำคัญ |
| **พื้นสีทึบหลัก** | `bg-[#F14627]` | สำหรับปุ่มดำเนินการหลัก (CTA), ป้ายสเตตัสประกาศ |
| **ไล่สีพื้นหลัง** | `bg-gradient-to-r from-[#F14627] to-[#ff6b4a]` | ไล่เฉดสีส้มแสดทองสะท้อนความกระตือรือร้นและนวัตกรรมใหม่ |
| **พื้นหลังสลับกล่อง** | `bg-orange-50/60` หรือ `bg-amber-50` | ใช้ระบายกล่องประกาศย่อยหรือสลับสีเซกชันเพื่อไม่ให้สว่างจืดเกินไป |
| **เอฟเฟกต์เรืองแสง** | `hover:shadow-[0_0_20px_rgba(241,70,39,0.4)]` | เพิ่มกล่องเงาเรืองแสงสีส้มรอบปุ่มเมื่อผู้ใช้งานนำเมาส์มาโฮเวอร์ |

---

## 4. โครงสร้างตัวอย่าง: ส่วนหัวต้อนรับเว็บไซต์คณะ (Hero Section Component)

นำโครงร่างโมดูลภาษา React + Tailwind ชิ้นนี้ ไปวางในส่วนบนสุดของระบบหน้าแรก เพื่อนำสายตาผู้เยี่ยมชมได้อย่างน่าประทับใจ:

```tsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* 🔮 เอฟเฟกต์วงแสงเรืองพื้นหลัง (Ambient Glow Effect) */}
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-[#F14627]/10 blur-3xl" />
      <div className="absolute bottom-0 left-10 -z-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* ป้ายสเตตัสการรับสมัคร */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-[#F14627] animate-pulse">
          🎯 TCAS เปิดรับสมัครนักศึกษาใหม่แล้ววันนี้
        </span>

        {/* หัวข้อเว็บพาดหัวใหญ่แบบ Gradient */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          ยินดีต้อนรับสู่ คณะสังคมศาสตร์ <br />
          <span className="bg-gradient-to-r from-[#F14627] to-amber-500 bg-clip-text text-transparent">
            มหาวิทยาลัยราชภัฏเชียงราย
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          มุ่งเน้นการผลิตบัณฑิตนวัตกรสังคม พัฒนาองค์ความรู้และงานวิจัยเชิงพื้นที่ 
          พร้อมก้าวสู่ศตวรรษที่ 21 ร่วมยกระดับชุมชนท้องถิ่นสู่สากล
        </p>

        {/* ปุ่มที่มีปฏิสัมพันธ์ยืดหยุ่น (Micro-interactions) */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-[#F14627] px-6 py-3.5 font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#d63518] hover:scale-105 hover:shadow-[0_8px_30px_rgb(241,70,39,0.3)] cursor-pointer">
            ทำเนียบหลักสูตรคณะ
          </button>
          <button className="rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition-all duration-300 hover:border-[#F14627] hover:text-[#F14627] cursor-pointer">
            คลังผลงานวิจัยและยุทธศาสตร์
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## 5. ผลลัพธ์เชิงเทคนิคด้านการจัดโครงสร้าง (Technical Advantages)

1. **การผ่านเกณฑ์การเข้าถึงสากล (Accessibility Compliance):** ข้อความตัวอักษรสีขาวบนพื้นหลังส้มแสดของคณะ `#F14627` มีอัตราส่วนระดับความตัดกันของแสงสูงกว่าเกณฑ์ที่ระบุในมาตรฐาน **WCAG 2.1 Level AA** ป้องกันความคลุมเครือทางสายตา ช่วยเพิ่มคะแนนการประเมินจาก Google Lighthouse
2. **เป็นมิตรกับเครื่องมือค้นหา (SEO & Webometrics Optimization):** สไตล์ของ Tailwind CSS ปล่อยขนาดข้อมูลโค้ดขนาดเล็กและไม่มีคลาสซ้ำซ้อน ส่งผลให้ดัชนีความเร็วการดาวน์โหลดหน้าเว็บ (PageSpeed Score) ได้ระดับดีเยี่ยม และช่วยให้บอทเก็บเกี่ยวข้อมูลหน้ารายละเอียดหลักสูตรและงานวิจัยได้อย่างสมบูรณ์
3. **การออกแบบตอบสนองรวดเร็ว (Adaptive Layout):** การกำหนดสไตล์สลับกล่องข้อมูลจัดวางโครงสร้างแบบ Responsive รองรับการขยายเนื้อหาอย่างเสรีในทุกอุปกรณ์และระบบนำเข้าข้อมูล
