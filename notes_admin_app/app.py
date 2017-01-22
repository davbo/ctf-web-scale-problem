from flask import Flask, render_template, request, jsonify
from flask_bootstrap import Bootstrap
from notes_mongo import get_stats
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
Bootstrap(app)
app.config['BOOTSTRAP_SERVE_LOCAL'] = True
db = MongoClient().test


@app.route('/get_stats')
def load_stats():
    org = request.args.get('org')
    stats = get_stats(db, org)
    return jsonify(stats)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, extra_files=['templates/index.html'])
