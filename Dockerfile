# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package*.json ./

# Install the dependencies defined in package.json
RUN npm install

# Copy all the application source code into the /app directory
COPY . .

# Build the app
RUN npm run build

# Expose port 4173
EXPOSE 4173

# Start nginx
CMD ["npm","run","preview"]