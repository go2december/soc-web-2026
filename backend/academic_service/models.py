from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime
from shared_core.db import Base

class Program(Base):
    __tablename__ = "programs"
    __table_args__ = {"schema": "schema_academic"}

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(50), unique=True, nullable=False, index=True)
    name = Column(String(255), nullable=False)
    degree_level = Column(String(50), nullable=False)
    description = Column(Text)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)
