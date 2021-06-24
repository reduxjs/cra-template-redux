/* eslint-disable no-throw-literal */
import {
  CLIENT_ERROR,
  CONNECTION_ERROR,
  NETWORK_ERROR,
  TIMEOUT_ERROR,
  SERVER_ERROR,
} from 'apisauce';
import apiClient from './apiClient';

const makeApiCall = (request) => async (data) => {
  try {
    const response = await request(apiClient, data);
    if (response.ok) {
      return response.data;
    } else {
      throw { response };
    }
  } catch (error) {
    switch (error.response.problem) {
      case NETWORK_ERROR:
        throw Error('networkError');
      case CLIENT_ERROR:
        throw Error('clientError');
      case TIMEOUT_ERROR:
        throw Error('timeoutError');
      case CONNECTION_ERROR:
        throw Error('connectionError');
      case SERVER_ERROR:
        throw Error('serverError');
      default:
        throw Error('unknownError');
    }
  }
};

export default makeApiCall;
