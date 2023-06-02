// 创建用户相关的小仓库：
import {defineStore} from "pinia";
// 引入接口：
import {reqLogin} from "@/api/user";
// 引入数据类型：
import {loginForm, loginResponse} from "@/api/user/type";
import {UserState} from "@/store/modules/type";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token";
// 引入常量路由：
import {constantRoute} from "@/router/router";

// 创建用户小仓库：
let useUserStore = defineStore('User', {
    // 存储数据：
    state: (): UserState => {
        return {
            // 记录登录成功保存的token信息
            token: GET_TOKEN(),
            // 仓库存储生成菜单数组（路由）
            menuRoutes: constantRoute
        }
    },
    // 异步处理逻辑：
    actions: {
        async userLogin(data: loginForm) {
            let result: loginResponse = await reqLogin(data)
            console.log(result)
            // 如果用户登录成功，就是用Pinia存储响应的token信息：
            if (result.code == 200) {
                this.token = (result.data.token as string)
                // 由于Pinia或者Vuex存储的数据其实是JS对象（基于内存），所以需要持久化到本地
                SET_TOKEN((result.data.token as string))
                // 确保返回的是一个成功的Promise对象：
                return 'OK'
            } else {
                // 返回一个失败的Promise对象：
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    // 计算属性：
    getters: {}
})

// 对外暴露小仓库：
export default useUserStore