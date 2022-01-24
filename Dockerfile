FROM node:14.15.0

WORKDIR /var/www
COPY . .

EXPOSE $PORT

CMD ["npm", "start"]
