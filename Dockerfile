FROM openjdk:26-ea-24-jdk-slim-bookworm

WORKDIR /app

RUN npm install firebase

COPY . .
RUN sudo apt update 



