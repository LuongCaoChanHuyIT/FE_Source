import api from '../axios'

export const userRepository = {
  async getAll() {
    const { data } = await api.get('/users')
    return data
  },

  async getById(id: number) {
    const { data } = await api.get(`/users/${id}`)
    return data
  },

  async create(payload: any) {
    const { data } = await api.post('/users', payload)
    return data
  },
}
