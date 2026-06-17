-- Create Database Schemas
CREATE SCHEMA IF NOT EXISTS schema_academic;
CREATE SCHEMA IF NOT EXISTS schema_news;
CREATE SCHEMA IF NOT EXISTS schema_research;

-- Set up schema_academic
SET search_path TO schema_academic;

CREATE TABLE IF NOT EXISTS programs (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    degree_level VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO programs (code, name, degree_level, description) VALUES
('SOC-DEV-B', 'สาขาวิชาการพัฒนาสังคม', 'Bachelor', 'ศึกษาการเปลี่ยนแปลงโครงสร้างสังคม การบริการสังคม และการพัฒนาที่ยั่งยืน'),
('SOC-PSY-B', 'สาขาวิชาจิตวิทยาสังคม', 'Bachelor', 'จิตวิทยาเชิงลึกเพื่อการทำงานร่วมกับผู้คนและองค์การในสังคม'),
('SOC-HEC-B', 'สาขาวิชาคหกรรมศาสตร์ประยุกต์', 'Bachelor', 'การนำศาสตร์ด้านอาหาร โภชนาการ และการจัดการเครื่องนุ่งห่มไปประยุกต์ใช้เชิงพาณิชย์'),
('SOC-RDS-D', 'สาขาวิชายุทธศาสตร์การพัฒนาภูมิภาค', 'Doctorate', 'เน้นวิจัยเชิงลึกด้านการพัฒนายุทธศาสตร์ นโยบาย และวิถีความมั่นคงของชุมชนท้องถิ่น')
ON CONFLICT (code) DO NOTHING;

-- Set up schema_news
SET search_path TO schema_news;

CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    publish_date DATE NOT NULL,
    author VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO articles (title, content, category, publish_date, author) VALUES
('โครงการ CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ', 'ความร่วมมือพัฒนาระบบข้อมูลและการส่งเสริมการท่องเที่ยวชุมชนท้องถิ่น', 'Community Service', '2026-06-15', 'ทีมงาน CRRU U2T'),
('ประชาสัมพันธ์การรับสมัครทุนการศึกษา คณะสังคมศาสตร์ ประจำปีการศึกษา 2569', 'เปิดรับสมัครนักศึกษาที่ขาดแคลนทุนทรัพย์เพื่อสนับสนุนค่าบำรุงการศึกษา', 'Scholarship', '2026-06-10', 'ฝ่ายกิจการนักศึกษา'),
('ประกาศประกวดราคาซื้อครุภัณฑ์ห้องปฏิบัติการคอมพิวเตอร์และสื่อประยุกต์', 'ประกวดราคาซื้อครุภัณฑ์สำหรับการพัฒนาการเรียนการสอนห้องคอมพิวเตอร์', 'Procurement', '2026-06-05', 'งานพัสดุและจัดซื้อ')
ON CONFLICT DO NOTHING;

-- Set up schema_research
SET search_path TO schema_research;

CREATE TABLE IF NOT EXISTS repository_items (
    id SERIAL PRIMARY KEY,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    creator VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    description TEXT,
    publisher VARCHAR(255),
    date DATE NOT NULL,
    type VARCHAR(100) NOT NULL,
    format VARCHAR(100),
    language VARCHAR(50),
    rights VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO repository_items (identifier, title, creator, subject, description, publisher, date, type, format, language, rights) VALUES
('oai:crru-social:research/1', 'การพัฒนาชุมชนแบบมีส่วนร่วมในตำบลโชคชัย อำเภอแม่จัน จังหวัดเชียงราย', 'พรพจน์ ศรีพรม', 'การพัฒนาสังคม; บริการสังคม; จังหวัดเชียงราย', 'การศึกษาเชิงปฏิบัติการแบบมีส่วนร่วมในการส่งเสริมวิสาหกิจชุมชน ต.โชคชัย', 'คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย', '2026-05-12', 'Research Paper', 'application/pdf', 'tha', 'Open Access'),
('oai:crru-social:research/2', 'ปัจจัยเชิงจิตวิทยาที่มีอิทธิพลต่อความพร้อมในการปรับตัวเข้าสู่สังคมผู้สูงอายุในภาคเหนือตอนบน', 'จิตวิทยาคลินิกทีม', 'จิตวิทยาสังคม; ผู้สูงอายุ', 'การศึกษาปัจจัยทางจิตวิทยาเชิงบวกในกลุ่มผู้สูงอายุวัยก่อนเกษียณ', 'คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย', '2026-04-18', 'Article', 'application/pdf', 'tha', 'Copyrighted')
ON CONFLICT (identifier) DO NOTHING;
