#!/bin/bash

set -v
set -x


mkdir /data
mkdir /data/db

[ "$(stat -c %U /data/db)" = mongodb ] || chown -R mongodb /data/db

mongod --fork --logpath mongo.log

mongo load_data.js

export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export FLASK_APP=app.py
export LISTENING_PORT=${PORT:-"5000"}

python3 -m flask run --host=0.0.0.0 --port=$LISTENING_PORT
