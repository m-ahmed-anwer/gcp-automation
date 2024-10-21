# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package*.json ./

# Install the dependencies defined in package.json
RUN npm install

# Copy all the application source code into the /app directory
COPY . .

# Build the app for production
RUN npm run build

# Expose port 4173 (Vite preview default)
EXPOSE 8080

# Command to run the Vite preview server on port 8080
CMD ["npm", "run", "preview", "--", "--port", "8080", "--host"]