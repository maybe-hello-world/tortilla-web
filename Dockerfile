FROM nginx:alpine
LABEL maintainer="maybe.hello.world@gmail.com"

RUN rm -f /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/conf.d/examplessl.conf

COPY tortilla.conf /etc/nginx/nginx.conf
COPY site/ /usr/share/nginx/static

EXPOSE 80

CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
