from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from notes_mongo import get_notes
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
Bootstrap(app)
app.config['BOOTSTRAP_SERVE_LOCAL'] = True
mongo = MongoClient()


@app.route('/')
def index():
    notes = get_notes(mongo, 'GDS')
    print(notes)
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
