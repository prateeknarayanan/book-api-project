FROM node:alpine AS front-end
WORKDIR /usr/src/app
COPY --from=back-end ./react/package.json ./
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000

FROM nginx
COPY --from=front-end ./nginx/default.conf /etc/nginx/conf.d/default.conf