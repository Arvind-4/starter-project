FROM node:18-alpine AS build

RUN apk add --no-cache libc6-compat
WORKDIR /apps/www

COPY ./apps/www/package.json ./
RUN npm i
COPY ./apps/www ./
RUN npm run build


FROM node:18-alpine

RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser 
WORKDIR /apps/www

COPY --from=build --chown=nextuser:nextuser /apps/www/public ./public
COPY --from=build --chown=nextuser:nextuser /apps/www/.next/standalone ./
COPY --from=build --chown=nextuser:nextuser /apps/www/.next/static ./.next/static
USER nextuser
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production
CMD ["node", "server.js"]