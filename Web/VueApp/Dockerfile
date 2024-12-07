# Stage 1: Build the application
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nuxt application
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/.output ./

# Expose the port Nuxt will run on
EXPOSE 3000

# Command to start the application
CMD ["node", "server/index.mjs"]
