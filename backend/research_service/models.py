from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Date, DateTime
from shared_core.db import Base

class RepositoryItem(Base):
    __tablename__ = "repository_items"
    __table_args__ = {"schema": "schema_research"}

    id = Column(Integer, primary_key=True, index=True)
    identifier = Column(String(255), unique=True, nullable=False, index=True)
    title = Column(String(255), nullable=False)
    creator = Column(String(255), nullable=False)
    subject = Column(String(255))
    description = Column(Text)
    publisher = Column(String(255))
    date = Column(Date, nullable=False)
    type = Column(String(100), nullable=False)
    format = Column(String(100))
    language = Column(String(50))
    rights = Column(String(100))
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)
