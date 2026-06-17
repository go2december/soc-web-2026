from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Date, DateTime
from shared_core.db import Base

class Article(Base):
    __tablename__ = "articles"
    __table_args__ = {"schema": "schema_news"}

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    category = Column(String(100), nullable=False)
    publish_date = Column(Date, nullable=False)
    author = Column(String(100))
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)
