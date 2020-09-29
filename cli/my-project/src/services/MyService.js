import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://localhost:8000/api/v1',

  baseURL: 'http://api.thetpainghtut.com/api/v1',
  headers: {'Accept': 'application/json'}
});

export default{
  getPosts(){
    return apiClient.get('/posts')
  },
  getTags(){
    return apiClient.get('/tags')
  }
}

