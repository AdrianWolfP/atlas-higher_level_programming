-- display best score and name from table
SELECT score, name FROM second_table
WHERE score >= 10 
ORDER BY score DESC, name;