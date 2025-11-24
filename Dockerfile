FROM node:25-slim

WORKDIR /app

RUN  npm install 

COPY Requirements*.json .
RUN npm install

COPY . .

ENTRYPOINT [ "node","src" ]

