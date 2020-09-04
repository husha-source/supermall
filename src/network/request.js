import axios from 'axios'

//ES6 promise封装axios
export function request(options) {
    //1、创建axios的实例对象
    const instance = axios.create({
      // baseURL: 'http://123.207.32.32:8000',
      baseURL: './',
      timeout: 5000
    })

    //2、axios拦截器
    //2.1 请求拦截的作用
    instance.interceptors.request.use(res => {
      return res
    }, err => {
      console.log(err);
    })

    //2.2 响应拦截的作用
    instance.interceptors.response.use(res=>{
      return res.data
    }, err => {
      console.log(err);
    })

    //3、通过实力发送网络请求
    return instance(options)
}