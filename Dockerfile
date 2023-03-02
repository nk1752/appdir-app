FROM node:18-alpine AS development

WORKDIR /app
ENV DEPLOY_ENV=prod

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS production

#RUN addgroup -g 1001 viva && adduser -u 1001 -G viva -D viva
RUN addgroup -g 1001 -S viva && adduser -u 1001 -S viva -G viva
USER viva

WORKDIR /app

COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/.next ./.next
COPY --from=development /app/server.js ./server.js
COPY --from=development /app/public ./public
COPY --from=development /app/next.config.js ./next.config.js


ENV NODE_ENV=production
# DEPLOY_ENV can also be set at runtime by passing env variable
# ex: docker run -e DEPLOY_ENV=test -p 3000:3000 container_name
ENV DEPLOY_ENV prod

EXPOSE 3000

CMD ["node", "server.js"]