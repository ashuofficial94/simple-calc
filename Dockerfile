FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
RUN npm cache clean --force
RUN npm install
RUN npm test
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]