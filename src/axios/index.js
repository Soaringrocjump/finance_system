/*引入Vue框架*/
import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';
import qs from 'qs'
import router from '../router'
import { Loading, Message } from 'element-ui'
// axios.defaults.timeout = 5000
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //传参格式转换JSON格式
    if (config.method === 'post') {
        if(typeof(config.data) == "object"){
            config.data = JSON.stringify(config.data);
        }
    }
    let token = sessionStorage.getItem('authorization')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.authorization = token;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});
//添加响应拦截器
axios.interceptors.response.use(
        response => {
            if (response.status === 200) {

            }
            return response
        },
        err => {
            if (err && err.response) {
                if (err.response.status === 401) {
                    sessionStorage.removeItem("authorization")
                    location.href = window.location.origin + '/#/login'
                    Message.error({ message: 'token失效' })
                }
            }
            return Promise.reject(err)
        }
    )
    /*使用axios插件*/
    let auzation = sessionStorage.getItem('authorization')
    console.log(auzation + '8888')
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;
Vue.prototype.HOME = 'http://47.99.185.0:8765/'

