FROM node:12.17

WORKDIR /home/app

COPY . ./

RUN yarn && yarn cache clean

ENV PORT=8080
EXPOSE 8080

CMD ["yarn", "start:dev"]
