import axios from 'axios'

const apiclient = axios.create({
    baseURL: '',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getLists() {
        return apiclient.get('/lists')
    },
    getList(id) {
        return apliclient.get('/lists/' + id)
    }
}