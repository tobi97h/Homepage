# syntax=docker/dockerfile:1
FROM node AS builder

WORKDIR /app

COPY . ./

RUN npm install

RUN node gen.js


FROM nginx

RUN rm -rf /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/content ./

COPY nginx.conf /etc/nginx
