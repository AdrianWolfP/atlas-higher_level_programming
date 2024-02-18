How to create a new MySQL user


How to manage privileges for a 
user to a database or table


What’s a PRIMARY KEY


What’s a FOREIGN KEY


How to use NOT NULL and UNIQUE constraints


How to retrieve datas from 
multiple tables in one request


What are subqueries


What are JOIN and UNION

a JOIN clause is used to combine rows from 2 or more tables

Inner JOIN: Returns records that have matching values in both tables.
(SELECT column_name
FROM table1
INNER JOIN)

Left JOIN: Returns records from the left table, and matching records from the right table. If there is no match, the results are NULL on the right side.
(SELECT column_name
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;)

Right JOIN: Returns all records from the right table and matches records from the left table. If there is no match, the result is NULL on the left side.
(SELECT column_name
FROM table1
ON table1.column_name = table2.column_name;)