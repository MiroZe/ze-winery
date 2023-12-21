const baseURL = import.meta.env.PROD
  ? ''
  : 'http://localhost:3000';

export { baseURL };