#This file only for prodaction
#It's build and expose the site

FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 8080
CMD node ./dist/server/entry.mjs