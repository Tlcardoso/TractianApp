import api from './Api'

const unitsServices = {
  getUnits: () => api.get('/units'),
  getOneUnit: (id: number) => api.get(`/units/${id}`),
}

export default unitsServices