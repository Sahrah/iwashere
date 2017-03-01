# iwashere

text
geodaten
(lagedaten)


# DB ansprechen
meteor mongo
show collections

# Collection "tasks" erweitern
db.tasks.update({}, {$set: {breitengrad: 0}}, {laengengrad: 0});
