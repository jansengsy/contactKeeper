FROM node:10

RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]