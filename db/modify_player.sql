UPDATE players SET playername = $1, email = $2, address = $3, phonenumber = $4, username = $5, rsvp = $7
WHERE playerid = $6;