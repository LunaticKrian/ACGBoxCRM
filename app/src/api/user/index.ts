// 引入request依赖，统一管理用户相关接口：
import request from '@/api/request';
import {loginForm, loginResponse, userResponse} from "@/api/user/type";

// 统一管理接口：
enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
}

// 暴露请求函数：
/**
 * 用户登录接口方法
 * @param data 提交的POST参数
 */
export const reqLogin = (data: loginForm) => request.post<any, loginResponse>(API.LOGIN_URL, data)

/**
 * 获取用户信息接口方法
 */
export const reqUserInfo = () => request.get<any, userResponse>(API.USERINFO_URL)