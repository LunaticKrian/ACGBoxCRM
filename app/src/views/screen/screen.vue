<template>
    <div class="container">
        <!-- 数据大屏显示内容区域 -->
        <div class="screen" ref="screen">
            <div class="top">
                <Top></Top>
            </div>

            <div class="bottom">
                <div class="left">
                    <LeftVisit class="visit"></LeftVisit>
                    <LeftSex class="sex"></LeftSex>
                    <LeftAge class="age"></LeftAge>
                </div>
                <div class="center">

                </div>
                <div class="right">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import Top from "@/components/screen/top.vue"
import LeftVisit from "@/components/screen/left-visit.vue";
import LeftSex from "@/components/screen/left-sex.vue";
import LeftAge from "@/components/screen/left-age.vue";

let screen = ref()

onMounted(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
})

// 获取大屏缩放比例：
function getScale(w = 1920, h = 1080) {
    const ww = window.innerWidth / w
    const wh = window.innerHeight / h
    return ww < wh ? ww : wh
}

// 监听视口变化：
window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}

</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url("./images/bg.png") no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }

    .bottom {
      display: flex;

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;

        .visit {
          flex: 1.6;
        }

        .sex {
          flex: 1;
        }

        .age {
          flex: 1;
        }
      }

      .center {
        flex: 2;
      }

      .right {
        flex: 1;
      }
    }
  }
}


</style>