import { create } from 'apisauce';
import { setupCache } from 'axios-cache-adapter';

// import { store } from './store';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const client = create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  adapter: cache.adapter,
});

client.addRequestTransform((request) => {
  // Here grab your jwt from your redux store
  // You may use selectors for this!
  // const state = store.getState();
  // const token = state.auth.token;
  // request.headers.authorization = `Bearer ${token}`;
});

export default client;
