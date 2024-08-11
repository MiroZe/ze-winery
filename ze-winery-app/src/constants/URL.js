const baseURL = import.meta.env.PROD
  ? 'https://ze-winery-server.onrender.com'
  : 'http://localhost:3000';

export { baseURL };