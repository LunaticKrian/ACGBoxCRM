<template>
    <div class="layout-container">
        <!-- 左侧侧边栏菜单 -->
        <div class="layout-slider" :class="{fold:store.fold}">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu :default-active="$router.path" class="layout-slider-menu"
                         background-color="rgb(248, 248, 250)" :collapse="store.fold">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <!-- 顶部导航 -->
        <div class="layout-top" :class="{fold:store.fold}">
            <Tabbar></Tabbar>
        </div>

        <!-- 内容展示区 -->
        <div class="layout-main" :class="{fold:store.fold}">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import useUserStore from "@/store/modules/user";
import Logo from '@/components/layout/logo.vue'
import Menu from '@/components/layout/meun.vue'
import Tabbar from '@/components/layout/tabbar.vue'
import Main from "@/components/layout/main.vue";
import settingStore from "@/store/modules/setting";

let userStore = useUserStore()
let store = settingStore()
let $router = useRoute()


</script>

<script lang="ts">
export default {
    name: "Menu"
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  background-color: $base-color;

  .layout-slider {
    // 使用全局样式，可以控制左侧菜单大小
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background-color;
    transition: all 0.4s;

    &.fold {
      width: $base-menu-min-width;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - 60px);

      .layout-slider-menu {
        margin-top: 20px;
      }
    }
  }

  .layout-top {
    position: fixed;
    width: calc(100% - $base-menu-width - 40px);
    height: $base-menu-top-height;
    top: $base-menu-top;
    left: $base-menu-width;
    transition: all 0.4s;
    margin: 0 20px;

    &.fold {
      width: calc(100vw - $base-menu-min-width - 40px);
      left: $base-menu-min-width;
    }
  }

  .layout-main {
    position: absolute;
    // 使用计算方式得到宽度：
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-menu-top-height - $base-menu-top - $base-menu-bottom);
    background-color: rgb(255, 255, 255);
    left: $base-menu-width;
    top: calc($base-menu-top-height + $base-menu-top + $base-menu-bottom);
    padding: 20px;
    overflow: auto;
    transition: all 0.4s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}

</style>