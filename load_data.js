db.notes.drop()
db.notes.insert([
    {"org": "GDS", "author": "davidking", "content": "Create Notes Admin"},
    {"org": "GDS", "author": "davidking", "content": "Be very careful handling user input"},
    {"org": "GDS", "author": "davidking", "content": "Ensure different `org`s are separated"},
    {"org": "GDS", "author": "davidking", "content": "Get coffee"},
])
db.notes.insert([
    {"org": "NCSC", "author": "squirrel1", "content": "Steal the GDS flag"},
    {"org": "NCSC", "author": "squirrel2", "content": "flag_12342353252"},
])
