// import axios, { AxiosInstance, AxiosRequestConfig ,} from 'axios';
// import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from '@tanstack/react-query';

// // Create an Axios instance with default configurations
// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: 'https://dev-merchant-api.trestplus.com', // Default base URL
  // baseURL: 'http://localhost:6969', // Default base URL
//   timeout: 10000, // Default timeout for requests (10 seconds)
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });

// // Optional: Add request interceptors for additional configurations
// axiosInstance.interceptors.request.use(
//   (config:any) => {
//     return config;
//   },
//   (error:any) => {
//     return Promise.reject(error); // Handle request errors
//   }
// );

// // Optional: Add response interceptors for global error handling
// axiosInstance.interceptors.response.use(
//   (response:any) => response,
//   (error:any) => {
//     console.error('API Error:', error);
//     return Promise.reject(error); // Handle response errors
//   }
// );

// /**
//  * Utility function for GET requests using React Query
//  * @param queryKey - Unique key for the query
//  * @param endpoint - API endpoint (relative to baseURL)
//  * @param config - Optional Axios configuration overrides
//  * @param options - Optional React Query configuration overrides
//  */
// export const useApiQuery = <TData, TError>(
//   queryKey: string | unknown[],
//   endpoint: string,
//   config?: AxiosRequestConfig,
//   options?: UseQueryOptions<TData, TError>
// ) => {
//   return useQuery<TData, TError>({
//     queryKey,
//     queryFn: async () => {
//       const response = await axiosInstance.get(endpoint, config);
//       return response.data;
//     },
//     ...options, // Spread additional React Query options
//   });
// };

// /**
//  * Utility function for POST/PUT/DELETE requests using React Query
//  * @param endpoint - API endpoint (relative to baseURL)
//  * @param method - HTTP method ('post' | 'put' | 'delete')
//  * @param options - Optional React Query mutation configuration
//  */
// export const useApiMutation = <TData, TError, TVariables>(
//   endpoint: string,
//   method: 'post' | 'put' | 'delete',
//   options?: UseMutationOptions<TData, TError, TVariables>
// ) => {
//   return useMutation<TData, TError, TVariables>({
//     mutationFn: async (variables: TVariables) => {
//       const response = await axiosInstance[method](endpoint, variables);
//       return response.data;
//     },
//     ...options, // Spread additional React Query options
//   });
// };

// export default axiosInstance;


import axios from 'axios';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from '@tanstack/react-query';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'https://dev-merchant-api.trestplus.com',
  // baseURL: 'http://localhost:6969', // Default base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Utility function for GET requests using React Query
 * @param queryKey - Unique key for the query
 * @param endpoint - API endpoint (relative to baseURL)
 * @param options - Optional React Query configuration overrides
 */
export const useApiQuery = <TData, TError>(
  queryKey: readonly unknown[], 
  endpoint: string,
  options?: UseQueryOptions<TData, TError>
) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async (): Promise<TData> => {
      const response = await axiosInstance.get(endpoint);
      return response.data as TData;;
    },
    ...options,
  });
};

/**
 * Utility function for POST/PUT/DELETE requests using React Query
 * @param endpoint - API endpoint (relative to baseURL)
 * @param method - HTTP method ('post' | 'put' | 'delete')
 * @param options - Optional React Query mutation configuration
 */
export const useApiMutation = <TData, TError, TVariables>(
  endpoint: string,
  method: 'post' | 'put' | 'delete',
  options?: UseMutationOptions<TData, TError, TVariables>
) => {
  return useMutation<TData, TError, TVariables>({
    mutationFn: async (variables: TVariables): Promise<TData> => {
      const response = await axiosInstance[method](endpoint, variables);
      return response.data as TData;;
    },
    ...options,
  });
};

export default axiosInstance;
