#!/usr/bin/env bash

service mongodb start
mongo load_data.js

source .env/bin/activate
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export FLASK_APP=app.py
python -m flask run --host=0.0.0.0
