FROM node:25-slim

WORKDIR /app

RUN  npm install 

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "node","src/app.js" ]

