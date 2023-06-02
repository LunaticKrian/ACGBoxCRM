<template>
    <div class="logo">
        <img v-if="!store.fold" src="../../assets/images/logo.png" alt="">
        <img v-if="store.fold" src="../../assets/images/logo-small.png" alt="">
    </div>
</template>

<script setup lang="ts">
import settingStore from "@/store/modules/setting";

let store = settingStore()

</script>

<style scoped lang="scss">
.logo {
  display: flex;
  width: 100%;

  img {
    height: 50px;
    margin: 10px auto 0;
  }
}
</style>