FROM node:14.15.0

WORKDIR /var/www
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
