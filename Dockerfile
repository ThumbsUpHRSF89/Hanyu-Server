FROM node:8.9.4-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8004

CMD [ "npm", "start" ]
