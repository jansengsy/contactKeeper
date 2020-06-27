FROM node:10

RUN mkdir -p /srv/server
WORKDIR /srv/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]