import axios from 'axios';
let authorization = sessionStorage.getItem("authorization");
const instance=axios.create({
 /* baseURL:"http://192.168.0.176:8765/",*/
  baseURL:"http://47.99.185.0:8765/",
  timeout:1000,
  headers:{
    token: authorization,
    'content-type':'application/json;charset=UTF-8'
  }
});
export default instance;
