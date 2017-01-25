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
    {"org": "GDS", "author": "bruntonspall", "content": "Make sure NCSC win at CTF so they don't complain this time"},
    {"org": "GDS", "author": "davidillsley", "content": "TODO: switch off the PSN"},
    {"org": "GDS", "author": "ruben", "content": "Learn more SQL!"},
    {"org": "GDS", "author": "ruben", "content": "Sanitise user input"},
    {"org": "GDS", "author": "davidstent", "content": "Figure out why my anti-virus keeps complaining about my binary exploits"},
    {"org": "GDS", "author": "davidstent", "content": "Why does my debugger keep crashing"},
])
db.notes.insert([
    {"org": "NCSC", "author": "squirrel1", "content": "Steal the GDS flag"},
    {"org": "NCSC", "author": "squirrel2", "content": "My new favourite recipe: https://gchq.github.io/CyberChef/?recipe=%5B%7B%22op%22%3A%22ROT13%22%2C%22args%22%3A%5Btrue%2Ctrue%2C%2213%22%5D%7D%2C%7B%22op%22%3A%22XOR%22%2C%22args%22%3A%5B%7B%22option%22%3A%22Hex%22%2C%22string%22%3A%22db2%22%7D%2C%22Standard%22%2Cfalse%5D%7D%2C%7B%22op%22%3A%22To%20Base64%22%2C%22args%22%3A%5B%22A-Za-z0-9%2B%2F%3D%22%5D%7D%5D"},
    {"org": "NCSC", "author": "squirrel2", "content": "Got the flag ! qHu1doRorm6Ed7VrqV3qXapthGiucLpdt2CzXatsul2ubLJwhDA="},
])
