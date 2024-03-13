FROM node:16

WORKDIR /app
COPY pro.js ./
RUN npm install
EXPOSE 5000
CMD ["npm","run","start"]
