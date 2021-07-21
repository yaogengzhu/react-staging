import axiosConfig from './axios_config/index'
import axios from 'axios'
const CancelToken = axios.CancelToken;

class Request {
    constructor() {
        this.cancel = null
    }

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
            data: data.params,
            cancelToken: new CancelToken((c) =>  {
                // executor 函数接收一个 cancel 函数作为参数
                this.cancel = c;
            })
        }
        return Request.getData(Object.assign(axiosConfig, serverCofig))
    }

    get(data) {
        const serverCofig = {
            url: data.url,
            method: 'get',
            data: data.params,
            cancelToken: new CancelToken((c) => {
                // executor 函数接收一个 cancel 函数作为参数
                this.cancel = c;
            })
        }
        return Request.getData(Object.assign({}, axiosConfig, serverCofig))
    }

    cancelToken() {
        this.cancel()
    }
}

export const $request = new Request()

export default $request

