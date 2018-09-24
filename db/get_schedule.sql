SELECT scheduleid, leaguename, team1, wdl1, team2, wdl2, TO_CHAR(matchdate :: DATE, 'Mon dd, yyyy') as matchdate, TO_CHAR(matchtime :: time, 'HH:MI PM') as matchtime  
FROM schedule
ORDER BY matchdate;