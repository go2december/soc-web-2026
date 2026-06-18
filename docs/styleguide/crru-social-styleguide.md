# 🍊 คู่มือการกำหนดธีมและสไตล์เว็บไซต์คณะสังคมศาสตร์ มรชร. (Tailwind CSS + daisyUI v5 + shadcn/ui)

เอกสารนี้ระบุการกำหนดค่าแนวคิดระบบสี โค้ด CSS สำหรับ Tailwind CSS v4, daisyUI v5, shadcn/ui และตัวอย่างส่วนประกอบหน้าเว็บ (UI Components) โดยเน้นความ **สดใส มีพลัง พัฒนาองค์ความรู้** ควบคู่ไปกับความถูกต้องตามเกณฑ์ Webometrics และมาตรฐานสากล

---

## 1. แนวคิดและระบบสี (Color System Strategy)

การนำสีส้มประจำคณะสังคมศาสตร์ `#F14627` มาออกแบบให้ดูสดใสแบบโมเดิร์น จะไม่ใช้สีส้มเป็นพื้นหลังทึบทั้งหมด แต่จะใช้สูตร **60-30-10 Rule** เพื่อสร้างสมดุลทางสายตาที่พรีเมียมและอ่านง่าย:
- **60% (Base - สีพื้นหลัง):** สีขาวบริสุทธิ์และสีเทาคลีนสะอาด (`Slate-50` / `Slate-100` / `base-200`) ในโหมดสว่าง หรือสีเทาเข้มเกือบดำ ในโหมดมืด เพื่อรักษาความกระจ่างของข้อมูลและเอื้อต่อการอ่านข้อความยาวๆ
- **30% (Secondary - สีโครงสร้างและข้อความ):** สีครามและน้ำเงินเข้ม (`base-content` / `Slate-900`) สำหรับหัวข้อข้อความหลัก และเฉดสีฟ้าอมครามสว่าง (`#f0f6ff` / `#1e3a8a`) ในส่วนประกอบเสริม เช่น ป้ายแท็ก ไอคอน เพื่อให้ดีไซน์ดูมีชีวิตชีวา ไม่จืดชืด
- **10% (Accent - สีส้มประจำคณะ):** ใช้สีส้มประจำคณะ `#F14627` เป็นสีเด่นหลักสำหรับส่วนประกอบที่ต้องการแรงดึงดูดสายตาสูงสุด (ปุ่มหลัก CTA, สถานะการเปิดรับสมัครนักศึกษา, งานวิจัยหรือการแจ้งเตือนสำคัญ)

---

## 2. ระบบฟอนต์และตัวอักษร (Typography System - Modern & Energetic)

เราใช้ระบบฟอนต์คู่แบบ **Modern & Energetic** เพื่อสร้างความรู้สึกสดใส ล้ำสมัย มีพลังของความเป็นนวัตกรรมและเทคโนโลยีใหม่ๆ:
- **Heading (หัวข้อหลัก/รอง):** ใช้ฟอนต์ **Prompt** (ความกว้างโค้งล่ำ สดใสเมื่อทำหนา เหมาะเป็นสไตล์หัวข้อที่ดึงดูดสายตา)
- **Body (เนื้อหาหลัก):** ใช้ฟอนต์ **Noto Sans Thai** (ฟอนต์แบบไร้หัวระดับสากลจาก Google อ่านง่าย สบายตา แม้แสดงบนอุปกรณ์พกพาขนาดเล็ก)

### การติดตั้งและใช้งานผ่าน Next.js (layout.tsx & globals.css)
1. นำเข้าแบบ Dynamic ผ่าน `next/font/google` ใน `layout.tsx`:
   ```tsx
   import { Prompt, Noto_Sans_Thai } from "next/font/google"
   
   const promptFont = Prompt({
     subsets: ["latin", "thai"],
     weight: ["300", "400", "500", "600", "700", "800", "900"],
     variable: "--font-prompt",
     display: "swap",
   })
   
   const notoFont = Noto_Sans_Thai({
     subsets: ["latin", "thai"],
     weight: ["300", "400", "500", "600", "700"],
     variable: "--font-noto-sans-thai",
     display: "swap",
   })
   ```
2. ประกาศตัวแปร CSS Variable และตั้งคลาสใน `@theme inline` ของ `globals.css`:
   ```css
   @theme inline {
     --font-sans: var(--font-noto-sans-thai), ui-sans-serif, system-ui, sans-serif;
     --font-heading: var(--font-prompt), var(--font-noto-sans-thai), ui-sans-serif, system-ui, sans-serif;
   }
   ```
3. กำหนดความสอดคล้องของแท็กเบสผ่าน `@layer base` ใน `globals.css`:
   ```css
   html {
     @apply font-sans; /* เนื้อหาทั้งหมดใช้ Noto Sans Thai */
   }
   h1, h2, h3, h4, h5, h6 {
     @apply font-heading font-bold; /* หัวข้อทั้งหมดใช้ Prompt และตัวหนา */
   }
   ```

---

## 3. โค้ดการตั้งค่าธีมหลักสำหรับ daisyUI v5 และ shadcn/ui (`globals.css`)

โครงสร้างการกำหนดค่าธีมแบบ CSS-first ใน Tailwind CSS v4 สำหรับ daisyUI 5 และการเชื่อมโยงระบบตัวแปรสีเข้ากับ shadcn/ui:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

/* 🌼 ลงทะเบียนปลั๊กอินและธีม daisyUI 5 */
@plugin "daisyui" {
  themes: crru-theme;
}

@plugin "daisyui/theme" {
  name: "crru-theme";
  default: true;
  --color-primary: #F14627;
  --color-primary-content: #ffffff;
  --color-secondary: #f0f6ff;
  --color-secondary-content: #1e3a8a;
  --color-base-100: #ffffff;
  --color-base-200: #f8fafc;
  --color-base-300: #e2e8f0;
  --color-base-content: #0f172a;
  --radius-selector: 0.75rem;
  --radius-field: 0.5rem;
}

/* ⚙️ ค่ากำหนดตัวแปรสีสำหรับ shadcn/ui */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0.014 285.82);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0.014 285.82);
  
  --primary: oklch(0.588 0.199 27.33); /* #F14627 */
  --primary-foreground: oklch(1 0 0);
  
  --secondary: oklch(0.97 0.014 254.6);
  --secondary-foreground: oklch(0.265 0.063 259.85);
  --radius: 0.75rem;
}
```

---

## 4. คลาสและส่วนประกอบของ daisyUI 5 แนะนำสำหรับตกแต่ง

การสร้างองค์ประกอบหน้าเว็บอย่างเป็นระบบและสากล โดยดึงคลาสสำเร็จรูปของ daisyUI มาจัดแต่ง:

| หมวดหมู่การใช้งาน | คลาสของ daisyUI / Tailwind | ผลลัพธ์และการใช้งาน |
| --- | --- | --- |
| **ปุ่มหลัก (CTA)** | `btn btn-primary` | ปุ่มดำเนินการหลัก สีส้มคณะ ขอบมน มีเอฟเฟกต์โฮเวอร์ |
| **ปุ่มรอง** | `btn btn-outline` หรือ `btn-ghost` | สำหรับการดำเนินการรอง เช่น ปุ่มข้าม หรือลิงก์ย่อย |
| **กล่องข้อความ/การ์ด** | `card bg-base-100 shadow-sm border` | กล่องแสดงข้อมูลหลักสูตรหรือข่าวสารที่คลีนและสะอาดตา |
| **ป้ายกำกับ/สถานะ** | `badge badge-primary` | สำหรับแสดงหมวดหมู่ข่าวสาร หรือระดับปริญญาของหลักสูตร |
| **กล่องแจ้งเตือน** | `alert alert-error` | สำหรับแสดงประกาศเตือนสำคัญ เช่น ปัญหาความปลอดภัย |

---

## 5. โครงสร้างตัวอย่าง: ส่วนหัวต้อนรับและปุ่มนำทาง (daisyUI Components)

### ตัวอย่าง: Navbar Component
```tsx
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 border-b border-base-200">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-base-content">CRRU Social Sciences</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><Link href="/academic" className="font-bold">หลักสูตร</Link></li>
          <li><Link href="/news" className="font-bold">ข่าวสาร</Link></li>
        </ul>
      </div>
    </nav>
  )
}
```

### ตัวอย่าง: Hero Section Component
```tsx
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="hero py-20 bg-base-200/40">
      <div className="hero-content text-center max-w-2xl">
        <div>
          <span className="badge badge-primary badge-outline py-3 px-4 text-xs font-bold">
            📢 TCAS69 เปิดรับสมัครแล้ววันนี้
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-base-content mt-6">
            ยินดีต้อนรับสู่ คณะสังคมศาสตร์
          </h1>
          <p className="py-6 text-base-content/70 font-semibold leading-relaxed">
            มุ่งเน้นการผลิตบัณฑิตนวัตกรสังคม พัฒนาองค์ความรู้และงานวิจัยเชิงพื้นที่ ร่วมยกระดับชุมชนท้องถิ่นสู่สากล
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/academic" className="btn btn-primary font-bold">หลักสูตรการศึกษา</Link>
            <Link href="/news" className="btn btn-ghost border-base-300 font-bold">ข่าวสารกิจกรรม</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## 6. ผลลัพธ์เชิงเทคนิคด้านการจัดโครงสร้าง (Technical Advantages)

1. **การผ่านเกณฑ์การเข้าถึงสากล (Accessibility Compliance):** daisyUI 5 ออกแบบระบบสีและธีมให้สีปุ่มและตัวอักษรเป็นไปตามมาตรฐานอัตราส่วนความต่างสี **WCAG 2.1 Level AA** ทำให้ผ่านการตรวจสอบ Google Lighthouse ได้ง่าย
2. **ประสิทธิภาพและความเร็ว (Performance Optimization):** การใช้ปลั๊กอินและส่วนประกอบสำเร็จรูปของ daisyUI แทนการจัดแต่ง CSS ดิบจำนวนมาก ช่วยลดปริมาณคลาส Tailwind ทำให้ CSS ที่ถูกประมวลผลออกมารีโหลดได้ไวขึ้น
3. **การเปลี่ยนโหมดสว่าง/มืดที่ง่ายดาย (Adaptive Theme):** รองรับแอตทริบิวต์ `data-theme` ในการกำหนดธีม ทำให้ Next.js/React สามารถจัดการระบบธีมสีสว่างสีมืดร่วมกับ shadcn/ui ได้อย่างสมบูรณ์แบบ
