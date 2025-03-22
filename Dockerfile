FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3040

EXPOSE 3040

CMD ["npm", "start"]
