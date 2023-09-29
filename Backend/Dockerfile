FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000
EXPOSE 4000
EXPOSE 4444

CMD [ "npm", "run", "start" ]
