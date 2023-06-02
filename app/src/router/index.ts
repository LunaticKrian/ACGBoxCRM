// 通过vue-router插件实现模板路由配置：
import {createRouter, createWebHashHistory} from 'vue-router';
// 引入定义的常量路由：
import {constantRoute} from "@/router/router";

// 创建路由器：
let router = createRouter({
    // 路由模式：
    history: createWebHashHistory(),
    // 配置路由：
    routes: constantRoute,
    // 配置滚动行为：
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

// 对外暴露路由对象：
export default router;