FROM node:22

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps

# Build TypeScript

# Copy source
COPY tsconfig.json ./
COPY api-server/ ./api-server/
COPY src/lib/oracle/types.ts ./src/lib/oracle/types.ts

# Compile TypeScript
RUN npx tsc --project tsconfig.json --outDir ./dist

# Expose port
EXPOSE 3001

# Health check

# Start
CMD ["node", "--loader", "ts-node/esm", "api-server/index.ts"]
