<template>
    <svg :style="{width, height}">
        <use :xlink:href="`#${name}`" :fill="color"/>
    </svg>
</template>

<script setup lang="ts">
// name: svg名称; color: svg填充颜色
defineProps({
    name: String,
    color:String,
    width: {
        type: String,
        default: '200px'
    },
    height: {
        type: String,
        default: '200px'
    }
})
</script>

<style scoped>

</style>
