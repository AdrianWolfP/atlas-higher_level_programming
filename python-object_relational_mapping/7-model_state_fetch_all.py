#!/usr/bin/python3
"""Lists all states in database"""

import sys
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == "__main__":
    engine = create_engine('mysql=mysqldb://{}:{}@localhost/{}'.format
                           (sys.argv[1], sys.argv[2], sys.srgv[3]),
                            pool_pre_ping=True)
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    sesh = Session()

    for id, name in sesh.query(State.id, State.name):
        print(f'{id}: {name}')