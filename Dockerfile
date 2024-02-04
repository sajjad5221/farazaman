# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Next.js project to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port on which Next.js runs
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]