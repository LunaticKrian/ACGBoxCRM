<template>
    <template v-for="(item, index) in menuList" :key="item.path">
        <template v-if="!item.children">
            <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <template v-if="item.children && item.children.length === 1">
            <el-menu-item v-if="!item.hidden" :index="item.children[0].path" @click="goRoute">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <template v-if="item.children && item.children.length > 1">
            <el-sub-menu v-if="!item.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <!-- 使用组件递归-->
                <Meun :menu-list="item.children"></Meun>
            </el-sub-menu>
        </template>
    </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
// 获取路由对象：
let $router = useRouter()

// 获取父组件传递过来的路由参数：
defineProps(['menuList'])

// 点击菜单回调：
const goRoute = (vc: any) => {
    // 路由跳转：
    $router.push(vc.index)
}

</script>

<style scoped>

</style>