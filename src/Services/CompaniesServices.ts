import api from './Api'

const companiesServices = {
  getCompanies: () => api.get('/companies'),
  getOneCompanie: (id: number) => api.get(`/companies/${id}`),
}

export default companiesServices