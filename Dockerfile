FROM nginx:alpine
LABEL maintainer="maybe.hello.world@gmail.com"

RUN rm -f /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/conf.d/examplessl.conf

RUN mkdir -p /etc/nginx/ssl

COPY tortilla.conf /etc/nginx/nginx.conf
COPY site/ /usr/share/nginx/static

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
