export default {
  isDevelopment: true,
  isProduction: false,
  environment: 'development',
  base: process.env.PUBLIC_URL
    || `http://localhost:${process.env.PORT}`,
  api: {
    reviews: 'https://interview-task-api.bookiply.io/reviews'
  }
};
