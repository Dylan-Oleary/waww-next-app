FROM node:14-alpine

WORKDIR /app

COPY . /app/

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]