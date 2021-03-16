FROM alpine:latest
RUN npm install
RUN npm test
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]