SELECT t.teamname as altteam2 FROM players p JOIN teams t ON p.altteam2 = t.teamid WHERE email = $1;
