FROM nginx:1.19.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY server.conf /etc/nginx/conf.d/
COPY build /usr/share/nginx/html
