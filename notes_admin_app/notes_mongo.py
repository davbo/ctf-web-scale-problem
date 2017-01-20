from pymongo.message import query
from bson.codec_options import DEFAULT_CODEC_OPTIONS

def get_notes(client, org):
    q = query(0, 'notes', 0, 100, '{"org": "'+ org +'"}', None, DEFAULT_CODEC_OPTIONS)
    db = client.get_database('test')
    return db.send_message(q)
