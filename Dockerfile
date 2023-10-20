FROM node:21.0.0

WORKDIR /usr/src/app

COPY . .

EXPOSE 8000

CMD [ "node", "index.js" ]