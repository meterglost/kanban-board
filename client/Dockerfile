FROM docker.io/node:alpine AS builder

WORKDIR /app/client

COPY package.json package-lock.json tsconfig.json ./
RUN npm install

COPY *.config.ts ./
COPY src/ src/
COPY public/ public/
RUN npm run build

FROM docker.io/nginx:alpine AS runner

COPY --from=builder /app/client/dist/ /var/www/kanban/public/

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak
