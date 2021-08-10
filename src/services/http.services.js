import axios from 'axios';



const baseURL = "https://dev-tsugi.currikistudio.org";

const http = axios.create({ baseURL: `${baseURL}/` });

function getAuthHeader() {

  let authHeader = { 'Content-Type': 'application/x-www-form-urlencoded' };
 
  return authHeader;
}

function get(url, headers = {}, params = {}) {
  return http.get(url, {
    params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function put(url, data, headers = {}) {
  return http.put(url, data, { headers: { ...getAuthHeader(), ...headers } });
}

function remove(url, data, headers = {}) {
  return http.delete(url, {
    headers: { ...getAuthHeader(), ...headers },
    data,
  });
}



export default {
  http,
  get,
  post,
  put,
  remove,
  baseURL
};
