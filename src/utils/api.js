import axios from 'axios'

import { localStorageKey } from './consts'


/**
 * responseHandler
 *
 * @param {Object} response - resp from server
 */
function responseHandler(resp) {
  const respData = resp.data
  if (respData.resCode == 1) {
    return respData.data
  } else if (respData.resCode == 2) {
    window.location.href = '#/login'
    return Promise.reject(respData)
  } else {
    console.error(respData.resMsg)
    return Promise.reject(respData)
  }
}

/**
 * get
 *
 * @param {String} url - request url
 * @param {Object} options - request options
 */
export function get(url, options = {}) {
  if (!options.headers) {
    options.headers = {}
  }
  options.headers.token = localStorage.getItem(localStorageKey.token)
  options.headers.identity = localStorage.getItem(localStorageKey.identity)
  return axios.get(url, options)
    .then(responseHandler)
}

/**
 * post
 *
 * @param {String} url - request url
 * @param {Object} data - request data, JSON object
 * @param {Object} options - request options
 */
export function post(url, data = {}, options = {}) {
  // Since backend only support form data post,
  // we always convert data to `application/x-www-form-urlencoded format`
  if (!options.headers) {
    options.headers = {}
  }
  options.headers.token = localStorage.getItem(localStorageKey.token)
  options.headers.identity = localStorage.getItem(localStorageKey.identity)
  return axios.create({headers: {'content-type': 'application/json'}}).post(url, data, options)
    .then(responseHandler)
}
