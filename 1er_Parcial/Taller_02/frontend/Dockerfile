FROM node

WORKDIR /app

COPY package*.json ./
COPY next.config.js ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]