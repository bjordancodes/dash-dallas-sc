SELECT p.playerid, p.playername, p.email, p.address, p.phonenumber, t.teamname, t.teamid, p.altteam1, p.altteam2 FROM players p JOIN teams t on p.teamname = t.teamid
ORDER BY p.playerid;