FROM nginx

COPY nginx.conf /etc/nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html

ADD content .