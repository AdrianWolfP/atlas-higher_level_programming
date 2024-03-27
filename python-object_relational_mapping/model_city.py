#!/usr/bin/python3

import sqlalchemy
from sqlalchemy import Column, Integer, String
from aqlalchemy.ext.declarative import declartive_base

Base = declarative_base()

class City(Base):
    """City class that inherits from Base"""
    __tablename__ = "cities"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    name = Column(String(128), nullable=False)
    state_id = Column(Integer, ForeignKey('states.id'), nullable=False)