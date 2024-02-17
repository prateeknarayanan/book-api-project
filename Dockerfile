FROM node:alpine AS back-end
WORKDIR /usr/src/app
COPY ./node/package.json /usr/src/app
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 8080

FROM node:alpine AS front-end
WORKDIR /usr/src/app
COPY --from=back-end /usr/src/app
COPY ./react/package.json ./
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000

FROM nginx
COPY --from=front-end /usr/src/app
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf