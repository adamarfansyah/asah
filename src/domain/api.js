import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  user: '/user',
  news: '/news',
  categories: '/categories',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
export const login = (data) => callAPI(`${urls.user}?email=${data?.email}`, 'GET');
export const getNewsApi = () => callAPI(`${urls.news}`, 'GET');
export const getNewsByIdApi = (id) => callAPI(`${urls.news}/${id}`, 'GET');
export const getCategoriesApi = () => callAPI(`${urls.categories}`, 'GET');
