// /**
//  * Created by jump on 2018/9/18.
//  */
// import axios from 'axios'

// export function fetch(config){
//     return new Promise((resolve,reject) =>{
//         const instance = axios.create({
//             headers:{
//               'Content-Type': 'application/json',
//             },
//             timeout: 10000,
//             // baseURL: '', //测试服务地址
//         });
//         // instance.interceptors.request.use(function (config) {
//         //     // 在发送请求之前做些什么
//         //     return config;
//         //   }, function (error) {
//         //     // 对请求错误做些什么
//         //     return Promise.reject(error);
//         //   });
//         instance(config).then(res =>{
//             resolve(res);
//         }).catch(err => {
//             console.log(err);
//             alert("网络出错，请重试");
//             reject(err);
//         })
        
//     });
// }



