FROM node:10

RUN mkdir -p /src/app/
WORKDIR /src/app/

# make npm test run only once non-interactively
ENV CI=true

COPY package.json ./src/app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
