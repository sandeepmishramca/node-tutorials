FROM node:12.19.0-buster
MAINTAINER 'codingwithamit.com'
ENV NODE_PATH /usr/local/lib/npm
ENV PROJECT_PATH /usr/local/project
ENV NODE_PATH $NODE_PATH:$PROJECT_PATH
EXPOSE 3030
RUN mkdir -p $PROJECT_PATH
COPY app.js $PROJECT_PATH
CMD node $PROJECT_PATH/app.js
