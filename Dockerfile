FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8080

FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000

FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf