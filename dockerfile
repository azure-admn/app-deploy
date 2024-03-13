FROM node:16

WORKDIR /app
COPY pro.html ./
RUN npm install
EXPOSE 5000
CMD ["npm","run","start"]
