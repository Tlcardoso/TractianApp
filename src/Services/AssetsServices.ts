import api from './Api'

const assetsService = {
  getAssets: () => api.get('/assets'),
  getOneAsset: (id: number) => api.get(`/assets/${id}`),
  deleteAsset: (id: number) => api.get(`/assets/${id}`),
}

export default assetsService