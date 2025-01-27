FROM node:19-alpine
WORKDIR /backend
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g migrate-mongo
COPY . .
EXPOSE 3000
