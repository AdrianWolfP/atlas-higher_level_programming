-- display scores and how common
SELECT score, COUNT(*) AS number FROM second_table GROUP BY score ORDER BY score DESC;