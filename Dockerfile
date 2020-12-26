FROM node

ARG buildDir

COPY $buildDir/ /usr/src/app
RUN cd /usr/src/app && npm install
CMD node usr/src/app/main.js