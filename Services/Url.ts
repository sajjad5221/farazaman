const production = {
  url: process.env.production_url,
};
const development = {
  url: "http://localhost:8000",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
