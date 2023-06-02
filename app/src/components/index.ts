import SvgIcon from "@/components/commons/SvgIcon.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 封装全局组件对象：
const globalComponent = {}

// 对外暴露插件对象：
export default {
    install(app: any) {
        // 1. 全局注册SvgIcon组件
        app.component('svg-icon', SvgIcon)
        // 2. 载入所有svg icon
        const requireContext = require.context('@/assets/icons', false, /\.svg$/)
        requireContext.keys().forEach(requireContext)

        // 注册全部的全局组件：
        Object.keys(globalComponent).forEach(key => {
            // 使用app注册全局组件：
            // @ts-ignore
            app.component(key, globalComponent[key])
        })

        // 组成ElementPlus图标：
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}