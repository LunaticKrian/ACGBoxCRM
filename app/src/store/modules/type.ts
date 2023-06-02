import type { RouteRecordRaw} from "vue-router";

// 定数据库类型：
export interface UserState {
    token: string | null
    menuRoutes: RouteRecordRaw[]
}