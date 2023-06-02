// 对Axios进行二次封装，封装的目的是使用他的请求和响应拦截器：
import axios from "axios";
import {ElMessage} from "element-plus";

// 1.利用axios对象的create方法创建axios实例，可以进行自定义配置（记录路径，请求响应超时事件）
let request = axios.create({
    // 设置请求的基础路径：
    baseURL: process.env.VUE_APP_BASE_API,  // 从配置文件中读取配置项
    // 设置请求的响应超时时间：
    timeout: 5000
})

// 2.给request对象添加请求拦截器：
request.interceptors.request.use((config) => {
    // config配置对象具有一个headers属性，通过配置这个对象属性携带公共参数提交服务器：


    // 返回配置对象，只有将配置对象返回才能正常发送请求：
    return config
})

// 3.响应拦截器，response请求成功的响应对象
request.interceptors.response.use((response) => {
    // 成功的回调：
    return response.data
}, (error) => {
    // 失败的回调，处理HTTP网络错误：
    let message = ''
    let status = error.response.status
    switch (status) {
        case 401:
            message = 'token 失效！'
            break
        case 403:
            message = '无法问权限！'
            break
        case 404:
            message = '请求地址错误！'
            break
        case 500:
            message = '服务器内部错误！'
            break
        default:
            message = '网络异常，请稍后尝试！'
            break
    }
    // 提示错误信息：
    ElMessage({
        type: 'error',
        message: message
    })
    // 放回一个Promise拒绝对象，终止Promise链：
    return Promise.reject(error)
})

// 4.对外暴露request对象：
export default request