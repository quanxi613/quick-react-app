import { get, post } from '../utils/api'


export function getUserInfo(params) {
  return post('/user/getMyData', params)
}


export function login(params) {
  return post('/user/login', params)
}
