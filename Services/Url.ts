const production = {
  url: process.env.production_url, // Set the production URL using an environment variable
};

const development = {
  url: "http://localhost:8000", // Set the development URL
};

// Determine the configuration based on the environment (development or production)
export const config =
  process.env.NODE_ENV === "development" ? development : production;
