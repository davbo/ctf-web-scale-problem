FROM       ubuntu:latest

# Mongo stuff
RUN apt-get update && apt-get install mongodb-server -y
RUN service mongodb start
RUN mkdir -p /data/db

COPY notes_admin_app /var/www/notes_admin_app/
WORKDIR /var/www/notes_admin_app

EXPOSE 27017
ENTRYPOINT ["/usr/bin/mongod"]
