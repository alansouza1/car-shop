FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Use --host to allow external access within Docker
CMD ["npm", "run", "dev", "--", "--host"]
