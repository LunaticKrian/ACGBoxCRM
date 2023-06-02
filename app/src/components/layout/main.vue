<template>
    <router-view v-slot="{ Component }">
        <!-- 设置路由切换的过度动画 -->
        <transition name="fade">
            <component :is="Component" v-if="flag"/>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import settingStore from "@/store/modules/setting";
import {nextTick, ref, watch} from "vue";

const store = settingStore()

// 控制当前组件是否销毁重建：
let flag = ref(true);

// 监听数据是否变化，变化则说明用户点击了刷新按钮：
watch(() => store.refresh, () => {
    // 点击刷新按钮，路由组件销毁：
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: all 1s;
}

.fade-enter-to {
    opacity: 1;
}
</style>