# DOCKER-basic-tutorial
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker build -t vairavel/node-web-app
"docker build" requires exactly 1 argument.
See 'docker build --help'.

Usage:  docker build [OPTIONS] PATH | URL | -

Build an image from a Dockerfile
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker build -t doc-web-app .  Sending build context to Docker daemon  20.48kB
Step 1/7 : FROM node:14
 ---> 31421e72129c
Step 2/7 : WORKDIR /usr/src/app
 ---> Using cache
 ---> 59e2baa0da49
Step 3/7 : COPY package*.json ./
 ---> 7a9c8939b048
Step 4/7 : RUN npm install
 ---> Running in 5286db36cb9b
npm WARN docker_web_app@1.0.0 No description
npm WARN docker_web_app@1.0.0 No repository field.

added 50 packages from 37 contributors and audited 50 packages in 1.893s
found 0 vulnerabilities

Removing intermediate container 5286db36cb9b
 ---> f169e1120f17
Step 5/7 : COPY . .
 ---> 7ff3605cbe41
Step 6/7 : EXPOSE 8080
 ---> Running in b7ccaea9a9c5
Removing intermediate container b7ccaea9a9c5
 ---> 7d75dcf3c8d3
Step 7/7 : CMD [ "node", "server.js" ]
 ---> Running in 47b4af590291
Removing intermediate container 47b4af590291
 ---> b9f226e31aa8
Successfully built b9f226e31aa8
Successfully tagged doc-web-app:latest
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker images                  REPOSITORY      TAG       IMAGE ID       CREATED          SIZE
doc-web-app     latest    b9f226e31aa8   11 seconds ago   947MB
node2-web-app   latest    708152c119cc   19 minutes ago   947MB
node            14        31421e72129c   3 days ago       944MB
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker run -p 49160:8080 -d doc-web-app
0d0a8edc62b65eb8b2ed65410aa60c0da7dc81f51af21cd48b612eb472ed5104
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker ps                      CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                                         NAMES
0d0a8edc62b6   doc-web-app   "docker-entrypoint.s…"   17 seconds ago   Up 15 seconds   0.0.0.0:49160->8080/tcp, :::49160->8080/tcp   hardcore_keller
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker logs 0d0a8edc62b6       Running on http://0.0.0.0:8080
vairavel@vairavel-Inspiron-15-3567:~/Desktop/node-web-app$ docker exec -it 0d0a8edc62b6 /bin/bash
root@0d0a8edc62b6:/usr/src/app# ls
Dockerfile    package-lock.json  server.js
node_modules  package.json
root@0d0a8edc62b6:/usr/src/app# 
