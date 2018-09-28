SELECT t.teamname as altteam1 FROM players p JOIN teams t ON p.altteam1 = t.teamid WHERE email = $1;
