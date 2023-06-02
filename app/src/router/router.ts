// 对外暴露配置的路由信息：
import login from "@/views/login.vue";
import home from "@/views/home.vue";
import screen from "@/views/screen/screen.vue"
import permission from "@/views/permission.vue";
import image_shark from "@/views/openAPI/image_shark.vue";
import random_word from "@/views/openAPI/random_word.vue";
import error_404 from "@/views/error/error_404.vue";
import layout from "@/views/layout.vue";
import about from "@/views/about.vue";
import chat from "@/views/chat.vue"

export const constantRoute = [
    // 登录路由：
    {
        path: '/login',
        component: login,
        // 命名路由：
        name: 'login',
        meta: {
            title: '登录',
            hidden: true,
        }
    },
    // 首页路由：
    {
        path: '/',
        component: layout,
        name: 'layout',
        meta: {
            hidden: false,
        },
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: home,
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled'
                }
            }
        ]
    },
    {
        path: '/screen',
        component: screen,
        name: 'screen',
        meta: {
            title: '数据大屏',
            hidden: false,
            icon: 'Platform'
        }
    }
    ,
    {
        path: '/open',
        component: layout,
        name: 'open',
        meta: {
            title: '开放 API',
            hidden: false,
            icon: 'Promotion'
        },
        redirect: '/open/random_word',
        children: [
            {
                path: '/open/random_word',
                component: random_word,
                name: 'random-word',
                meta: {
                    title: '随机一言',
                    hidden: false,
                    icon: 'Comment'
                }
            },
            {
                path: '/open/image_shark',
                component: image_shark,
                name: 'image-shark',
                meta: {
                    title: '图床',
                    hidden: false,
                    icon: 'PictureFilled'
                }
            }
        ]
    },
    // 站点设置
    {
        path: "/",
        component: layout,
        name: 'setting',
        meta: {
            title: '站点设置',
            hidden: false,
            icon: 'Tools'
        },
        children: [
            {
                path: '/permission',
                component: permission,
                name: 'permission',
                meta: {
                    title: '权限管理',
                    hidden: false,
                    icon: 'WarnTriangleFilled'
                }
            },
        ]
    },
    // 聊天室：
    {
        path: "/",
        component: layout,
        children: [
            {
                path: '/chat',
                component: chat,
                name: 'chat',
                meta: {
                    title: "聊天室",
                    hidden: false,
                    icon: 'Comment'
                }
            }
        ]
    },
    // 关于我们：
    {
        path: "/",
        component: layout,
        children: [
            {
                path: '/about',
                component: about,
                name: 'about',
                meta: {
                    title: "关于我们",
                    hidden: false,
                    icon: 'SwitchFilled'
                }
            }
        ]
    },
    // 404:
    {
        path: '/404',
        component: error_404,
        name: '404',
        meta: {
            title: '404',
            hidden: true
        }
    },
    // 上述路由规则都没有被匹配时，重定向到404：
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any',
        meta: {
            title: '任意路由',
            hidden: true
        }
    }
]