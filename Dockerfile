FROM node:lts-alpine
RUN npm install -g @adonisjs/cli
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN adonis migration:run
RUN adonis seed
EXPOSE 8000
CMD ["adonis", "serve"]
