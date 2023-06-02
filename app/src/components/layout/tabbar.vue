<template>
    <div class="tabbar">
        <!-- 顶部左侧静态 -->
        <div class="tabbar-left">
            <!-- 顶部侧边展开闭合图标 -->
            <el-icon style="margin-right: 20px" @click="changeIcon">
                <component :is="!store.fold ? 'Fold' : 'Expand'"></component>
            </el-icon>

            <!-- 左侧面包屑导航条 -->
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title"
                                    :to="item.path">
                    <el-icon style="vertical-align: top; margin-right: 3px">
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 顶部右侧静态 -->
        <div class="tabbar-right">
            <el-button type="primary" size="default" @click="toRefresh" :icon="Refresh" circle></el-button>
            <el-button type="primary" size="default" @click="toFullScreen" :icon="FullScreen" circle></el-button>


            <!-- 抽屉栏 -->
            <!-- :append-to-body="true" :modal-append-to-body="false" 两个属性解决抽屉窗口被覆盖的问题 -->
            <el-drawer v-model="drawer" direction="rtl" title="站点设置" :with-header="true" :append-to-body="true"
                       :modal-append-to-body="false">

                <hr/>

                <el-form>
                    <el-form-item label="主题颜色">
                        <el-color-picker v-model="color" show-alpha :predefine="predefineColors"/>
                    </el-form-item>
                    <el-form-item label="夜晚模式">
                        <el-switch size="default" v-model="dark" active-icon="MoonNight" inactive-icon="Sunny"
                                   inline-prompt @change="changeDark"/>
                    </el-form-item>
                </el-form>

                <hr/>

            </el-drawer>

            <el-button type="primary" size="default" @click="drawer = true" :icon="Setting" circle></el-button>

            <img src="@/assets/images/logo-small.png" style="width: 32px; margin: 0 20px" alt="">

            <!-- 下拉菜单 -->
            <el-dropdown>
                    <span class="el-dropdown-link">
                      Admin
                      <el-icon class="el-icon--right">
                        <arrow-down/>
                      </el-icon>
                    </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import {ArrowDown, ArrowRight, FullScreen, Refresh, Setting} from "@element-plus/icons-vue";
import settingStore from "@/store/modules/setting";
import {useRoute} from "vue-router";


const store = settingStore()
const $route = useRoute()
const drawer = ref(false)

const color = ref('rgb(222,177,207)')
const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])

// 收集黑夜模式的数据：
const dark = ref(true)

// 点击图标更换:
const changeIcon = () => {
    store.fold = !store.fold
}

// 全屏按钮回调函数：
const toFullScreen = () => {
    // DOM对象有一个属性fullscreenElement，可以用来判断当前是否是一个全屏状态【true：全屏；false：不是全屏】
    const full = document.fullscreenElement
    if (!full) {
        // 切换全屏模式：
        document.documentElement.requestFullscreen()
    } else {
        // 退出全屏模式：
        document.exitFullscreen()
    }
}

// 刷新回调：
const toRefresh = () => {
    store.refresh = !store.refresh
}

// 改变暗黑主题：
const changeDark = () => {
    // 获取HTML根标签：
    let html = document.documentElement
    // 判断HTML标签是否有类名dark：
    dark.value ? html.className = 'dark' : html.className = ''
}

</script>

<script lang="ts">
export default {
    name: 'tabbar'
}
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(150deg, rgba(138, 226, 241), rgb(246, 204, 231));
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  .tabbar-left {
    display: flex;
    align-items: center;
    margin: 20px;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
    margin: 20px;
  }

}


</style>