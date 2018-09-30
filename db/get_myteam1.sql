SELECT t.teamname as teamname FROM players p JOIN teams t ON p.teamname = t.teamid WHERE email = $1;
