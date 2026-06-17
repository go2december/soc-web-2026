from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Academic Service",
    description="API for Academic profiles, undergraduate and doctoral programs",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"service": "Academic Service", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/programs")
def get_programs():
    return [
        {"id": 1, "name": "สาขาวิชาการพัฒนาสังคม", "level": "Bachelor"},
        {"id": 2, "name": "สาขาวิชาจิตวิทยาสังคม", "level": "Bachelor"},
        {"id": 3, "name": "สาขาวิชาคหกรรมศาสตร์ประยุกต์", "level": "Bachelor"},
        {"id": 4, "name": "สาขาวิชายุทธศาสตร์การพัฒนาภูมิภาค", "level": "Doctorate"}
    ]
