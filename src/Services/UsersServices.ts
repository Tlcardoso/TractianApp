import api from './Api'

const usersServices = {
  getUsers: () => api.get('/users'),
}

export default usersServices