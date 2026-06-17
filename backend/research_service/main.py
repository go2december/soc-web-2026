from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Research & Repository Service",
    description="API for research papers, repository items using Dublin Core metadata",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"service": "Research Service", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/repository")
def get_repository():
    # Returning research items formatted in Dublin Core Metadata Element Set (ISO 15836)
    return [
        {
            "dc:identifier": "oai:crru-social:research/1",
            "dc:title": "การพัฒนาชุมชนแบบมีส่วนร่วมในตำบลโชคชัย อำเภอแม่จัน จังหวัดเชียงราย",
            "dc:creator": "พรพจน์ ศรีพรม",
            "dc:subject": "การพัฒนาสังคม; บริการสังคม; จังหวัดเชียงราย",
            "dc:description": "การศึกษาเชิงปฏิบัติการแบบมีส่วนร่วมในการส่งเสริมวิสาหกิจชุมชน ต.โชคชัย",
            "dc:publisher": "คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย",
            "dc:date": "2026-05-12",
            "dc:type": "Research Paper",
            "dc:format": "application/pdf",
            "dc:language": "tha",
            "dc:rights": "Open Access"
        },
        {
            "dc:identifier": "oai:crru-social:research/2",
            "dc:title": "ปัจจัยเชิงจิตวิทยาที่มีอิทธิพลต่อความพร้อมในการปรับตัวเข้าสู่สังคมผู้สูงอายุในภาคเหนือตอนบน",
            "dc:creator": "จิตวิทยาคลินิกทีม",
            "dc:subject": "จิตวิทยาสังคม; ผู้สูงอายุ",
            "dc:description": "การศึกษาปัจจัยทางจิตวิทยาเชิงบวกในกลุ่มผู้สูงอายุวัยก่อนเกษียณ",
            "dc:publisher": "คณะสังคมศาสตร์ มหาวิทยาลัยราชภัฏเชียงราย",
            "dc:date": "2026-04-18",
            "dc:type": "Article",
            "dc:format": "application/pdf",
            "dc:language": "tha",
            "dc:rights": "Copyrighted"
        }
    ]
