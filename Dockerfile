FROM node:14

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json ./

USER node

RUN yarn && yarn cache clean

COPY --chown=node:node . .

RUN git clone https://github.com/vishnubob/wait-for-it.git