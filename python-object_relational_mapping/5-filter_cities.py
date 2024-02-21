#!/usr/bin/python3
""" Script that takes name of state as an argument
    lists all cities of that state from database"""

import MySQLdb
from sys import argv

if __name__ == "__main__":

    db = MySQLdb.connect(user=argv[1], passwd=argv[2], db=argv[3])
    
    cur = db.cursor()

    cur.execute("SELECT cities.name FROM cities JOIN \
                states ON cities.state_id = state.id WHERE states.name \
                LIKE BINARY %(name)s GROUP BY cities.name", {'name': argv[4]})
    
    results = cur.fetchall()

    if results is not None:
        print(", ".join([record[0] for record in results]))
    
    cur.close()
    db.close()