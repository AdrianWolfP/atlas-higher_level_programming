#!/usr/bin/python3

from sqlalchemy import Column, Integer, String
from aqlalchemy.ext.declarative import declartive_base

Base = declarative_base()

class State(Base):
    """State class that inherits from Base"""
    __table__name = "states"

    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)