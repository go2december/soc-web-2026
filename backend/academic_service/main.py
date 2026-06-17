from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

from shared_core.db import get_db
from shared_core.auth import get_current_user
from academic_service.models import Program

app = FastAPI(
    title="Academic Service",
    description="API for Academic profiles, undergraduate and doctoral programs",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class ProgramBase(BaseModel):
    code: str
    name: str
    degree_level: str
    description: Optional[str] = None

class ProgramCreate(ProgramBase):
    pass

class ProgramResponse(ProgramBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

@app.get("/")
def read_root():
    return {"service": "Academic Service", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/programs", response_model=List[ProgramResponse])
def get_programs(db: Session = Depends(get_db)):
    programs = db.query(Program).all()
    return programs

@app.post("/programs", response_model=ProgramResponse, status_code=status.HTTP_201_CREATED)
def create_program(
    program_in: ProgramCreate, 
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    # Check if program code already exists
    existing = db.query(Program).filter(Program.code == program_in.code).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Program code '{program_in.code}' already exists"
        )
    
    db_program = Program(**program_in.model_dump())
    db.add(db_program)
    db.commit()
    db.refresh(db_program)
    return db_program
