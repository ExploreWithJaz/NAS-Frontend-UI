# Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else npm install; fi

# Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only what’s needed
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Install only production deps
RUN npm ci --omit=dev

EXPOSE 3000

LABEL io.casaos.category="Development"
LABEL io.casaos.name="Vault UI"
LABEL io.casaos.description="My custom Next.js web app running in Docker"
LABEL io.casaos.icon="https://raw.githubusercontent.com/ExploreWithJaz/NAS-Frontend-UI/master/public/vault-icon.png"
LABEL io.casaos.port="3000"

CMD ["npm", "start"]
