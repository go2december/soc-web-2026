---
title: "Task: Implement Strategy QA API"
tags: ["#task/backend"]
loaded_skills: ["@backend-specialist"]
---

> [!important] Ponytail Rule Activated
> ก่อนจะเริ่มเขียนโค้ด ให้คิดแบบ Lazy Senior Dev เสมอ:
> 1. ฟังก์ชันนี้จำเป็นต้องเขียนขึ้นมาใหม่ไหม?
> 2. มี Library หรือฟังก์ชันเดิมในระบบที่ใช้แทนได้เลยหรือเปล่า?
> 3. เขียนโค้ดให้สั้นที่สุด พื้นผิวของโค้ดน้อย = บั๊กน้อย

## แผนการดำเนินงาน
1. **Infrastructure & Routing Setup**:
   - เพิ่มการตั้งค่าคอนเทนเนอร์ `strategy_service` ใน `docker-compose.yml` โดยกำหนดพอร์ตเป็น `:8004` และใช้ฐานข้อมูลร่วมกัน
   - ปรับปรุง [nginx.conf](file:///e:/web2026/soc-web-2026/nginx/nginx.conf) เพื่อเพิ่มเส้นทางการเรียกใช้งาน `/api/v1/strategy/*` ให้ชี้ไปยังคอนเทนเนอร์ดังกล่าว

2. **Database Migration**:
   - เพิ่ม `schema_strategy` ใน [db-init/init.sql](file:///e:/web2026/soc-web-2026/db-init/init.sql)
   - จัดสร้างตารางเก็บข้อมูลตัวชี้วัด (SSR metrics) และตารางข้อมูลผู้บริหาร/บุคลากร

3. **FastAPI Backend Implementation**:
   - พัฒนา FastAPI App สำหรับ `strategy_service` ในรูปแบบเดียวกับ Service อื่นๆ
   - สร้าง Endpoint สำหรับดึงข้อมูล SSR และข้อมูลบุคลากร

4. **Integration & Testing**:
   - บิวด์คอนเทนเนอร์และยืนยันการตั้งค่า
   - ทดสอบเรียกดูข้อมูลผ่าน Nginx (Reverse Proxy) ไปยังพอร์ต `:8004`
