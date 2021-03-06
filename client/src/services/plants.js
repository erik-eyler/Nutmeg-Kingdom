import api from './api-config';

export const getAllPlants = async () => {
  const resp = await api.get('/plants');
  return resp.data;
};

export const getOnePlant = async (id) => {
  const resp = await api.get(`/plants/${id}`);
  return resp.data;
};

export const postPlant = async (plantData) => {
  const resp = await api.post('/plants', { plant: plantData });
  return resp.data;
};

export const putPlant = async (id, plantData) => {
  const resp = await api.put(`/plants/${id}`, { plant: plantData });
  return resp.data;
};

export const deletePlant = async (id) => {
  const resp = await api.delete(`/plants/${id}`);
  return resp;
};

export const addSeasonToPlant = async (seasonId, id) => {
  const resp = await api.put(`/seasons/${seasonId}/plants/${id}`);
  return resp.data;
};