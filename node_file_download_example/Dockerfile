# It will pull latest node image from Docker Node repository 
FROM node
# Provided maintainer info
MAINTAINER 'codingwithamit.com'
# Creating node_modules environment variable NODE_PATH
ENV NODE_PATH /usr/local/lib/node_modules/npm/bin
# Creating a directory where our application source file will be place 
ENV PATH $PATH:$NODE_PATH
# This command will enable 3000 port to access outside of container
EXPOSE 3000
# Creating app direct to place source file 
RUN mkdir -p /root/app/views
# Copy source file to container /root/app directory 
COPY app.js /root/app
# Copy views/dashboard.ejs file to /root/app/views directory 
COPY views/dashboard.ejs /root/app/views
# Defining work directory from where application is going to start
WORKDIR /root/app
# This commands will install express and ejs packages required for application
RUN npm install express
RUN npm install ejs
# This is entry point to start application
CMD node app.js

