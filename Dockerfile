FROM oven/bun:latest AS build
WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile
RUN bun run build

FROM oven/bun:latest AS prod
WORKDIR /app

COPY --from=build /app ./

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["bun", "run", "start"]