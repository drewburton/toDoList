import axios from 'axios'

const apiclient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCategories () {
    return apiclient.get('/lists')
  },
  getList (id) {
    console.log('getting /lists/' + id)
    return apiclient.get('/lists/' + id)
  },
  addCategory (category) {
    apiclient.post('/lists', category)
  },
  removeCategory (id) {
    apiclient.delete('/lists/' + id)
  },
  updateList (list, id) {
    apiclient.patch('/lists/' + id, { content: list })
  }
}
