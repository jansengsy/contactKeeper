FROM node:10

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
