FROM node:19.5.0-alpine

WORKDIR /app
COPY pro.html ./
RUN npm install
EXPOSE 5000
CMD ["npm","run","start"]
