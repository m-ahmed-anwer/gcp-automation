# Stage 1: Build the Vite app
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Expose port 5757
EXPOSE 5757

# Start nginx
CMD ["npm","run","preview"]
