---
title: "System Architecture & Development Plan: Faculty of Social Sciences (CRRU)"
aliases: ["CRRU Social Platform", "Microservices Design"]
tags: ["#project/crru-social", "#architecture", "#microservices", "#nextjs", "#fastapi", "#docker"]
author: "Pornpot Sriprom"
date: "2026-06-17"
version: "1.0.0"
---

# แผนการพัฒนาระบบคลังข้อมูลและแพลตฟอร์มกลาง คณะสังคมศาสตร์ มรชร.

> [!abstract] รายละเอียดโครงการ
> เอกสารพิมพ์เขียว (Blueprint) สำหรับการพัฒนาระบบสารสนเทศคณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย ออกแบบด้วยสถาปัตยกรรมแบบ **Microservices** เพื่อความยืดหยุ่น รองรับเกณฑ์ **Webometrics (SEO & Openness)** และเป็นไปตามมาตรฐาน Cybersecurity ของมหาวิทยาลัย

---

## 1. องค์ประกอบเนื้อหาหลัก (Content Core)
โครงสร้างเนื้อหาบนเว็บไซต์อ้างอิงจากบริการหลักของคณะ[cite: 1] โดยแบ่งกลุ่มข้อมูลออกเป็น:

* **[[Academic Profiles]]:** ข้อมูลหลักสูตรปริญญาตรีและปริญญาเอก (เช่น สาขาวิขาการพัฒนาสังคม, จิตวิทยาสังคม, คหกรรมศาสตร์ประยุกต์, ยุทธศาสตร์การพัฒนาภูมิภาค)[cite: 1]
* **[[Research & Repository]]:** คลังปัญญา บทความวิชาการ และโครงงานวิจัย[cite: 1]
* **[[Area-Based Services]]:** โครงการบริการสังคม เช่น โครงการ CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ[cite: 1]
* **[[News & PR]]:** ประชาสัมพันธ์กิจกรรม, ทุนการศึกษา, สมัครงาน และข่าวจัดซื้อจัดจ้าง[cite: 1]
* **[[Strategy & QA]]:** ข้อมูลบุคลากร, ผู้บริหาร, และระบบรายงานผลตัวชี้วัด (SSR)[cite: 1]

---

## 2. สถาปัตยกรรมระบบ (Microservices Architecture)

> [!info] Technology Stack
> * **Frontend:** Next.js (App Router, SSR), Tailwind CSS, shadcn/ui
> * **Backend API:** FastAPI (Python)
> * **Database:** PostgreSQL (แบ่ง Logical Schema)
> * **Infrastructure:** Docker, Docker Compose, Nginx (API Gateway)

### 2.1 Network & Routing Diagram
```text
[ Client / Google Bot ]
          │ (HTTPS / Port 443)
          ▼
   [ Nginx Reverse Proxy / API Gateway ]
          │
          ├──────────────────────────────────────────┐
          ▼ (Port 3000)                              ▼ (Routing /api/v1/*)
 [ Next.js Frontend ]                     [ Microservices Backend ]
          │                                          │
          │                                          ├─> :8001 (Academic)
          │                                          ├─> :8002 (News & PR)
          │                                          ├─> :8003 (Research)
          │                                          ├─> :8004 (Strategy)
          │                                          └─> :8005 (Auth/SSO)
          ▼                                          ▼
 [ SEO & Webometrics ]                   [ PostgreSQL Database ]
```
