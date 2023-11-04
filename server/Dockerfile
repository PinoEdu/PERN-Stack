FROM node:18.17.1 AS Production

ENV NODE_ENV=Production

WORKDIR /usr/src/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

