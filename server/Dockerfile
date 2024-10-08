FROM docker.io/node:alpine AS builder

WORKDIR /app/server

COPY ./package.json ./package-lock.json ./tsconfig.json ./
RUN npm install

COPY ./src/ ./src/
RUN npm run build

FROM docker.io/node:alpine AS runner

ENV NODE_ENV=production

WORKDIR /app/server

COPY --from=builder --chmod=444 /app/server/package.json /app/server/package-lock.json ./
RUN npm install

COPY --from=builder --chmod=444 /app/server/build/ ./build/
CMD node ./build/index.js
