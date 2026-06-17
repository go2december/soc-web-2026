from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date as dt_date, datetime

from shared_core.db import get_db
from shared_core.auth import get_current_user
from research_service.models import RepositoryItem

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

# Pydantic Schemas
class RepositoryItemBase(BaseModel):
    identifier: str
    title: str
    creator: str
    subject: Optional[str] = None
    description: Optional[str] = None
    publisher: Optional[str] = None
    date: dt_date
    type: str
    format: Optional[str] = None
    language: Optional[str] = None
    rights: Optional[str] = None

class RepositoryItemCreate(RepositoryItemBase):
    pass

class RepositoryItemResponse(BaseModel):
    id: int
    identifier: str = Field(serialization_alias="dc:identifier")
    title: str = Field(serialization_alias="dc:title")
    creator: str = Field(serialization_alias="dc:creator")
    subject: Optional[str] = Field(None, serialization_alias="dc:subject")
    description: Optional[str] = Field(None, serialization_alias="dc:description")
    publisher: Optional[str] = Field(None, serialization_alias="dc:publisher")
    date: dt_date = Field(serialization_alias="dc:date")
    type: str = Field(serialization_alias="dc:type")
    format: Optional[str] = Field(None, serialization_alias="dc:format")
    language: Optional[str] = Field(None, serialization_alias="dc:language")
    rights: Optional[str] = Field(None, serialization_alias="dc:rights")
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
        populate_by_name = True

@app.get("/")
def read_root():
    return {"service": "Research Service", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/repository", response_model=List[RepositoryItemResponse], response_model_by_alias=True)
def get_repository(db: Session = Depends(get_db)):
    items = db.query(RepositoryItem).all()
    return items

@app.post("/repository", response_model=RepositoryItemResponse, response_model_by_alias=True, status_code=status.HTTP_201_CREATED)
def create_repository_item(
    item_in: RepositoryItemCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    # Check if identifier already exists
    existing = db.query(RepositoryItem).filter(RepositoryItem.identifier == item_in.identifier).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Identifier '{item_in.identifier}' already exists"
        )
    
    db_item = RepositoryItem(**item_in.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
