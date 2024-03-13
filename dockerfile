FROM node:16-alpine

WORKDIR /home/node/app

COPY pro.js ./

USER node

COPY --chown=node:node . .

EXPOSE 8085

CMD [ "node", "index.js" ]
