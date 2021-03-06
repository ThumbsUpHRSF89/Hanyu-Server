FROM node:8.9.4-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --no-cache git

EXPOSE 8004

CMD [ "npm", "run", "startdocker" ]
