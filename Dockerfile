FROM node:12.7.0-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --silent

COPY . /app

RUN ls -lah /app

RUN npm run build

FROM nginx:1.17.2 as runtime

COPY --from=builder /app/build /usr/share/nginx/html

COPY config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
