FROM node:10

RUN mkdir -p /src/server
WORKDIR /src/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]