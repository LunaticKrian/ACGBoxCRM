import {createApp} from 'vue';
import App from '@/App.vue';

// 引入ElementPlus：
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入国际化配置：
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 引入路由组件：
import router from "@/router/index";
// 引入自定义插件（封装全局组件）：
import globalComponents from '@/components/index';
// 引入仓库：
import pinia from "@/store";
// 引入全局样式：
import '@/style/global.scss';
// 引入lottie-web：
import Vue3Lottie from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';

// @ts-ignore
let app = createApp(App)

// @ts-ignore
app.use(Vue3Lottie)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
// @ts-ignore
app.use(globalComponents, {locale: zhCn})
app.mount('#app')