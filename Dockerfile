FROM node:25-slim

WORKDIR /app

RUN  npm install 

COPY . .
RUN sudo apt update && sudo apt install firebase 



