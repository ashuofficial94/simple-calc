FROM alpine:latest
RUN apk add --no-cache nodejs npm
RUN npm install
RUN npm test
WORKDIR /app
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]