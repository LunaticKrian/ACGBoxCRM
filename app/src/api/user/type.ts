// 登录接口需要携带参数的TS类型：
export interface loginForm {
    userName: string,
    password: string
}

// 登录接口返回的数据类型：
interface dataType {
    token?: string,
    message?: string
}

export interface loginResponse {
    code: number,
    data: dataType
}

// 服务器响应用户信息相关数据类型：
interface user {
    userName: string,
    nickName: string,
    avatar: string,
    phone: string,
    gender: number,
    country: string,
    province: string,
    leve: number,
    levelName: string,
    userIdentity: number,
    integral: number
}

export interface userResponse {
    code: number,
    data: user
}