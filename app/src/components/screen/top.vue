<template>
    <div class="top">
        <div class="left">
            <button class="lbtn" @click="goHome">首页</button>
        </div>

        <div class="center">
            <div class="title">次元世界数据可视化平台</div>
        </div>

        <div class="right">
            <span class="rbtn">统计报告</span>
            <span class="time">当前系统时间：{{ time }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import moment from "moment";
import {onBeforeUnmount, onMounted, ref} from "vue";

let $route = useRouter()
// 存储当前时间，使用JS插件：moment，安装：npm i moment
let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'))
let timer = ref(0)

// 使用定时器更新系统时间：
onMounted(() => {
    // 组件挂载完成之后就开启定时器：
    timer.value = setInterval(() => {
        time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
    }, 1000)
})

// 当组件销毁的时候定制定时器；
onBeforeUnmount(() => {
    clearInterval(timer.value)
})

// 跳转回主页
const goHome = () => {
    $route.push("/home")
}

</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1.5;
    background: url("@/views/screen/images/dataScreen-header-left-bg.png") no-repeat;
    background-size: 100% 100%;


    .lbtn {
      width: 150px;
      height: 40px;
      float: right;
      background: url("@/views/screen/images/dataScreen-header-btn-bg-l.png") no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: $base-screen-font-color;
      font-size: 18px;
    }
  }

  .center {
    flex: 2;

    .title {
      width: 100%;
      height: 74px;
      background: url("@/views/screen/images/dataScreen-header-center-bg.png") no-repeat;
      background-size: 100% 100%;
      font-size: 30px;
      text-align: center;
      line-height: 74px;
      color: $base-screen-font-color;
    }
  }

  .right {
    flex: 1.5;
    background: url("@/views/screen/images/dataScreen-header-left-bg.png") no-repeat;
    background-size: 100% 100%;
    color: $base-screen-font-color;
    text-align: center;
    line-height: 40px;
    width: 150px;
    height: 40px;

    .rbtn {
      float: left;
      width: 150px;
      height: 40px;
      background: url("@/views/screen/images/dataScreen-header-btn-bg-r.png") no-repeat;
      background-size: 100% 100%;
      font-size: 18px;
    }

    .time {
      font-size: 20px;
    }
  }
}
</style>