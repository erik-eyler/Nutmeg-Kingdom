import api from './api-config';

export const getAllSeasons = async () => {
  const resp = await api.get('/seasons');
  return resp.data;
};