import axios from 'axios'

export default {
  // 注册
  register: function (data) {
    return axios.post('/api/user/addUser', data)
  },
  // 查询
  getUser: function (data) {
    return axios.post('/api/user/userMsg', data)
  },
  // 查询
  getUserList: function () {
    return axios.get('/api/user/search')
  }
}
