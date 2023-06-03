import axios, { AxiosResponse } from 'axios';
import { ClientToken, getValue } from '.';

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * @constant httpClient
 * @description axios instance
 */

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
    timeout: 15_000,
});

/**
 * @constant httpClient.interceptors.request
 * @description axios request interceptor
 */
httpClient.interceptors.request.use(
    async (config) => {
        const token = getValue(ClientToken);
        if (token && config && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * @function Request
 * @description function to make http request using axios instance
 * @param {string} url i.e "product/${id}"
 * @param {string} method i.e POST
 * @param {string} data {name: 'John', age: 47}
 * @return {promise} 
 */

const Request = async (
    url: string,
    method: MethodType = 'GET',
    data?: any,
    contentType?: string,
): Promise<AxiosResponse<any>> => {
    const config = {
        method,
        url,
        data,
        headers: {
            'Content-Type': contentType || 'application/json',
        },
    };

    try {
        const response = await httpClient.request(config);
        return response;
    } catch (error) {
        throw error;
    }
};

export default Request;
