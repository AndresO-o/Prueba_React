# ---- Etapa 1: build ----
FROM node:22-alpine AS build

WORKDIR /app

# Habilita pnpm vía corepack (viene con Node, no hay que instalar nada extra)
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

# Copiamos solo lo necesario para instalar deps primero (mejor cache de capas)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Ahora sí copiamos el resto del código
COPY . .
RUN pnpm run build

# ---- Etapa 2: servir con Nginx ----
FROM nginx:1.27-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]