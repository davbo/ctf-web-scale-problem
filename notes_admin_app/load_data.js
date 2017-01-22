db.notes.drop()
db.notes.insert([
    {"org": "GDS", "author": "davidking", "content": "Create Notes Admin"},
    {"org": "GDS", "author": "davidking", "content": "Be very careful handling user input"},
    {"org": "GDS", "author": "davidking", "content": "Ensure different `org`s are separated"},
    {"org": "GDS", "author": "davidking", "content": "Get coffee"},
    {"org": "GDS", "author": "davidking", "content": "Complete JavaScript tutorial"},
    {"org": "GDS", "author": "davidking", "content": "Read up on W3c schools"},
    {"org": "GDS", "author": "bruntonspall", "content": "Build CTF"},
    {"org": "GDS", "author": "bruntonspall", "content": "Run CTF"},
    {"org": "GDS", "author": "bruntonspall", "content": "Make sure NCSC win at CTF so they have to host."},
    {"org": "GDS", "author": "bruntonspall", "content": "Build CTF"},
    {"org": "GDS", "author": "ruben", "content": "Learn more SQL!"},
    {"org": "GDS", "author": "ruben", "content": "Sanitise user input"},
])
db.notes.insert([
    {"org": "NCSC", "author": "squirrel1", "content": "Steal the GDS flag"},
    {"org": "NCSC", "author": "squirrel2", "content": "Got it ! flag_why_have_1_db_when_you_can_have_2"},
])
