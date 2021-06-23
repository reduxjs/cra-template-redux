/* eslint-disable no-throw-literal */
/* eslint-disable default-case */
import {
  CLIENT_ERROR,
  CONNECTION_ERROR,
  NETWORK_ERROR,
  TIMEOUT_ERROR,
  SERVER_ERROR,
} from 'apisauce';

const axiosResponseTransformation = (response) => response.data;

const baseService =
  (request, transformation = axiosResponseTransformation) =>
  async (data) => {
    try {
      const response = await request(data);
      if (response.ok) {
        return transformation(response);
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
      }
    }
  };

export default baseService;
