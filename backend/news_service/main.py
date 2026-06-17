from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from datetime import date, datetime

from shared_core.db import get_db
from shared_core.auth import get_current_user
from news_service.models import Article

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

# Pydantic Schemas
class ArticleBase(BaseModel):
    title: str
    content: str
    category: str
    publish_date: date
    author: Optional[str] = None

class ArticleCreate(ArticleBase):
    pass

class ArticleResponse(ArticleBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

@app.get("/")
def read_root():
    return {"service": "News & PR Service", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/news", response_model=List[ArticleResponse])
def get_news(db: Session = Depends(get_db)):
    articles = db.query(Article).all()
    return articles

@app.post("/news", response_model=ArticleResponse, status_code=status.HTTP_201_CREATED)
def create_article(
    article_in: ArticleCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    db_article = Article(**article_in.model_dump())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article
