export default {
  server_port: process.env.SERVER_PORT,
  current_environment: process.env.NODE_ENV,
  environments: {
    testing: "testing",
    development: "development",
    production: "production"
  }
};
