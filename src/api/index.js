import { apiHelper } from './apiHepler';

export const getItems = async (params) => apiHelper('get', 'items', params);

export const updateItems = async (id, item) => apiHelper('put', `items/${id}`, item);