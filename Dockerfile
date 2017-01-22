FROM alpine:edge


RUN apk add --update python3 bash
RUN python3 -m ensurepip && pip3 install --upgrade pip

RUN \
echo http://dl-4.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
apk add --no-cache mongodb && \
rm /usr/bin/mongosniff /usr/bin/mongoperf && \
mkdir -p /data/db



# App
COPY notes_admin_app /var/www/notes_admin_app/
WORKDIR /var/www/notes_admin_app
RUN pip install -qr requirements.txt
RUN chmod +x startup.sh

ENTRYPOINT [ "/var/www/notes_admin_app/startup.sh" ]
CMD ["/bin/bash", "-l", "-c", "-x", "/var/www/notes_admin_app/startup.sh"]
