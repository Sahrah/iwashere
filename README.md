# iwashere

text
geodaten
(lagedaten)


# DB
meteor mongo
show collections

# Collection "tasks" erweitern
db.tasks.update({}, {$set: {breitengrad: 0}}, {laengengrad: 0});

# Laenge des Posts auf 140 Zeichen begrenzt
