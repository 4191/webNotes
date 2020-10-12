//Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
import axios from 'axios';

//全局配置
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//可以根据不同请求配置header
// axios.defaults.headers.post['Accept'] = '*/*';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
//自定义实例默认值：
//const instance = axios.create({
//     baseURL: 'https://api.example.com'
// });
//配置优先级：config参数>实例>库的默认值
//详细配置：http://www.axios-js.com/

export default function request(url, data = {}, type = 'GET', config = {}) {
    return new Promise((resolve, reject) => {
        let promise;
        switch (type) {
            case 'GET':
                promise = axios.get(url, {
                    params: data,
                });
                break;
            case 'POST':
                promise = axios.post(url, data, config); //config是配置项：比如post请求需要拼url，config={params: data,},下载数据流设置响应类型config={responseType:'blob'}
                break;
            case 'PUT':
                promise = axios.put(url, data, config);
                break;
            case 'DELETE':
                promise = axios.delete(url, {
                    params: data,
                });
                break;
            default:
                promise = axios.get(url, {
                    params: data,
                });
        }
        promise
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                //生产环境会自动去掉
                console.log('request -> error', error);
                //错误抛出，需要自行处理
                reject(error);
            });
    });
}
