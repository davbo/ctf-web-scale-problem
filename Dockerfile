FROM ubuntu:latest

# Mongo stuff
RUN apt-get update && apt-get install virtualenv mongodb-server -y

# App
COPY notes_admin_app /var/www/notes_admin_app/
WORKDIR /var/www/notes_admin_app
run virtualenv --python=python3 .env
run .env/bin/pip install -r requirements.txt
RUN chmod +x startup.sh

CMD ["/bin/bash", "-l", "-c", "/var/www/notes_admin_app/startup.sh"]
EXPOSE 5000
