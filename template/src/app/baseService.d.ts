import { ApiOkResponse, ApiResponse } from 'apisauce';

type RequestFunction<TInput, TOutput> = (payload?: TInput) => ApiResponse<TOutput>;

type ResponseTransformFunction<TInput, TOutput> = (response: ApiOkResponse<TInput>) => TOutput;

type ApiRequestFunction<TInput, TOutput> = (payload?: TInput) => TOutput;

declare const baseService: <TInput, TRawResponse, TOutput>(request: RequestFunction<TInput, TRawResponse>, transform: ResponseTransformFunction<TRawResponse, TOutput>) => ApiRequestFunction<TInput, TOutput>;

export default baseService;
