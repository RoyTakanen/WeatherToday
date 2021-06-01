FROM node:14

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4040

CMD ["node", "."]