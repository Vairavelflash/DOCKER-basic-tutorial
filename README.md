# DOCKER-basic-tutorial
To run node js file :

1.npm install ----- install all dependencies
2.npm run start ----- see package.json for start

DOCKER installation and commands:

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker ps CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
0d0a8edc62b6 doc-web-app "docker-entrypoint.s…" 17 seconds ago Up 15 seconds 0.0.0.0:49160->8080/tcp, :::49160->8080/tcp hardcore_keller

vairavel@vairavel-Inspiron-15-3567:/Desktop/node-web-app$ docker logs 0d0a8edc62b6 Running on http://0.0.0.0:8080
vairavel@vairavel-Inspiron-15-3567:/Desktop/node-web-app$ docker exec -it 0d0a8edc62b6 /bin/bash
root@0d0a8edc62b6:/usr/src/app# ls
Dockerfile package-lock.json server.js node_modules package.json root@0d0a8edc62b6:/usr/src/app#
