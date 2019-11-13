FROM node

WORKDIR /app

RUN npm install -g graphql-cli

ENTRYPOINT [ "" ]