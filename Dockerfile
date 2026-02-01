FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps

# Copy source
COPY api-server/ ./api-server/
COPY src/lib/oracle/types.ts ./src/lib/oracle/types.ts

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001/health || exit 1

# Start
CMD ["node", "--loader", "ts-node/esm", "api-server/index.ts"]
