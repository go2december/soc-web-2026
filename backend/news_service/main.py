from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="News & PR Service",
    description="API for news, PR, scholarship, activities, and procurement",
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
    return {"service": "News & PR Service", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/news")
def get_news():
    return [
        {"id": 1, "title": "CRRU U2T ต.โชคชัย และ ต.หนองป่าก่อ", "category": "Community Service", "date": "2026-06-15"},
        {"id": 2, "title": "ทุนการศึกษา คณะสังคมศาสตร์ ประจำปี 2569", "category": "Scholarship", "date": "2026-06-10"},
        {"id": 3, "title": "ประกาศประกวดราคาจัดซื้อจัดจ้างครุภัณฑ์", "category": "Procurement", "date": "2026-06-05"}
    ]
