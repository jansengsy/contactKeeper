FROM node:10

RUN mkdir -p /src/app/
WORKDIR /src/app/

ENV CI=true

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
