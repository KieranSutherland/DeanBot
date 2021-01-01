FROM node

COPY . /usr/src/app
RUN cd /usr/src/app && npm install
# need to cd in to access resources folder normally
CMD cd /usr/src/app && node main.js