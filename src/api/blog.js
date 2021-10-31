import axios from '@/config/axios';
const BaseUrl = process.env.VUE_APP_BASEURL;

export function getBlogList() {
  return axios(BaseUrl + '/blog/list?limit=9999&offset=0&categoryId=0');
}

export function getBlogPostById(id) {
  return axios(BaseUrl + '/blog/' + id);
}
