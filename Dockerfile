FROM node:22

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

# Start
CMD ["node", "--loader", "ts-node/esm", "api-server/index.ts"]
