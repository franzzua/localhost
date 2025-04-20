FROM node:20-alpine

RUN apk add exiftool

WORKDIR /app

COPY exiftool.mjs /app/

CMD ["exiftool.mjs"]