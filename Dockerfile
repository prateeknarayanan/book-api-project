FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "start"]
EXPOSE 8080

FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "start"]
EXPOSE 3000

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf