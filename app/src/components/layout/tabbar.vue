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
                <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
                    <el-icon style="vertical-align: top; margin-right: 3px">
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{item.meta.title}}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 顶部右侧静态 -->
        <div class="tabbar-right">
            <el-button type="primary" size="default" @click="" :icon="Refresh" circle></el-button>
            <el-button type="primary" size="default" @click="" :icon="FullScreen" circle></el-button>
            <el-button type="primary" size="default" @click="" :icon="Setting" circle></el-button>
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
import {ArrowDown, ArrowRight, FullScreen, Refresh, Setting} from "@element-plus/icons-vue";
import settingStore from "@/store/modules/setting";
import {useRoute} from "vue-router";

let store = settingStore()
let $route = useRoute()

// 点击图标更换:
let changeIcon = () => {
    store.fold = !store.fold
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