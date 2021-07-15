import axiosConfig from './axios_config/index'
import axios from 'axios'

class Request {
    static getData(config) {

        const instance = axios.create(config)
        // 添加单次请求的拦截器
        instance.interceptors.request.use(...config.transformRequest)
        instance.interceptors.response.use(...config.transformResponse)
        return instance.request(config)
    }

    post(data) {
        const serverCofig = {
            url: data.url,
            method: 'post',
            data: data.params
        }
        return Request.getData(Object.assign(axiosConfig, serverCofig))
    }

    get(data) {
        const serverCofig = {
            url: data.url,
            method: 'get',
            data: data.params
        }
        // console.log(Request)
        console.log(data, '??')
        return Request.getData(Object.assign({}, axiosConfig, serverCofig))
    }
}

export const $request = new Request()

export default $request

