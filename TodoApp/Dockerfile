FROM node:13.14-alpine3.10 AS build

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.10-alpine
COPY --from=build /app/dist/todoapp /usr/share/nginx/html