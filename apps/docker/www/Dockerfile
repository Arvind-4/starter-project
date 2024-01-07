# FROM node:lts-alpine as dependencies

# WORKDIR /apps/www
# COPY ./apps/www/package.json ./
# RUN npm install


# FROM node:lts-alpine as builder

# WORKDIR /apps/www
# COPY ./apps/www/ ./
# COPY --from=dependencies /apps/www/node_modules ./node_modules
# RUN npm run build


# FROM node:lts-alpine as runner

# ARG APP=/apps/www
# ENV APP_USER=nextjs
# RUN addgroup -S $APP_USER \
#     && adduser -S $APP_USER -G $APP_USER \
#     && mkdir -p ${APP}
# RUN chown -R $APP_USER:$APP_USER ${APP}
# WORKDIR /apps/www
# COPY --from=builder /apps/www/next.config.js ./
# COPY --from=builder /apps/www/public ./public
# COPY --from=builder /apps/www/.next ./.next
# COPY --from=builder /apps/www/node_modules ./node_modules
# COPY --from=builder /apps/www/package.json ./package.json
# USER $APP_USER
# CMD [ "npm", "start" ]












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
# copy the standalone folder inside the .next folder generated from the build process 
COPY --from=build --chown=nextuser:nextuser /apps/www/.next/standalone ./
# copy the static folder inside the .next folder generated from the build process 
COPY --from=build --chown=nextuser:nextuser /apps/www/.next/static ./.next/static
# set non root user
USER nextuser
USER nextuser
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production
CMD ["node", "server.js"]