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
    return apiclient.get('/lists/' + id)
  },
  addCategory (category) {
    apiclient.post('/lists', category)
      .then(response => { console.log(response) })
  },
  removeCategory (id) {
    apiclient.delete('/lists/' + id)
  }
}
