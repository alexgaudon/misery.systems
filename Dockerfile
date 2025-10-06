FROM node:22-alpine AS build
WORKDIR /app

 COPY package*.json ./
 RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS prod
WORKDIR /app

COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app ./

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]