# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build application
COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built files and package manifests
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies
RUN npm ci --production

# Expose port and start
EXPOSE 3000
CMD ["npm", "start"]
