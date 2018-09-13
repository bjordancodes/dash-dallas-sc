UPDATE schedule SET leaguename = $1, team1 = $2, wdl1 = $3, team2 = $4, wdl2 = $5, matchdate = $6, matchtime = $7
WHERE scheduleid = $8;