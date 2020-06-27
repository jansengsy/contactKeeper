FROM node:10

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
