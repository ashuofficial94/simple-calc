FROM node
RUN mkdir -p /home/app
COPY . /home/app
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]