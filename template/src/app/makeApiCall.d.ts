import { ApiResponse, ApisauceInstance } from 'apisauce';

type RequestFunction = (apiClient: ApisauceInstance, payload?: any) => Promise<ApiResponse<any>>;

type ApiRequestFunction = (payload?: any) => Promise<any>;

declare const makeApiCall: (request: RequestFunction) => ApiRequestFunction;

export default makeApiCall;
