FROM node:alpine
WORKDIR /bot
RUN apk add git
COPY package.json package-lock.json ./
RUN npm install #--only=production
COPY src resources tsconfig.json ./
RUN npm run build
# COPY --from=0 / /
#RUN apk add ffmpeg 
# RUN apk add --update ffmpeg
CMD ["node", "start"]

