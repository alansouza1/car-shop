FROM node:16.14-alpine

WORKDIR /app

# Layer caching for npm install
COPY package*.json ./
RUN npm install

COPY . .

# Run as non-root user for security
USER node

EXPOSE 3001

CMD ["npm", "run", "dev"]
