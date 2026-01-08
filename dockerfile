FROM node:18-alpine

WORKDIR /app

# Copy source code
COPY src ./src

EXPOSE 3000

CMD ["node", "src/app.js"]


