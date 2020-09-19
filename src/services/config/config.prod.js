export default {
  isDevelopment: false,
  isProduction: true,
  environment: 'production',
  base: process.env.PUBLIC_URL
    || '',
  api: {
    reviews: 'https://interview-task-api.bookiply.io/reviews/'
  }
};
