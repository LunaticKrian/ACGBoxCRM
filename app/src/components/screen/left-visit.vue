<template>
    <div class="box">
        <div class="top">
            <p class="right">站点访问总数 <span style="color: burlywood">999999</span> 次</p>
            <p class="title">实时访问量</p>
            <p class="bg"></p>
        </div>
        <div class="number">
            <span v-for="(item, index) in p" :key="index">{{ item }}</span>
        </div>
        <!-- 使用Echarts展示图形图表 -->
        <!-- 安装 npm i echarts -->
        <!-- 安装水球图的Echarts插件 npm i echarts-liquidfill -->
        <div class="echarts" ref="charts"></div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'

let p = ref('617893人')
let charts = ref();

onMounted(() => {
    // 获取echarts类的实例：
    let mycharts = echarts.init(charts.value)
    // 设置实例的配置项：
    mycharts.setOption({
        //系列:决定你展示什么样的图形图标
        series: {
            type: 'liquidFill',//系列
            data: [0.6, 0.4, 0.2],//展示的数据
            waveAnimation: true,//动画
            animationDuration: 3,
            animationDurationUpdate: 0,
            radius: '100%',//半径
            outline: {//外层边框颜色设置
                show: true,
                borderDistance: 8,
                itemStyle: {
                    color: 'skyblue',
                    borderColor: '#294D99',
                    borderWidth: 8,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            },
        }
    })
})
</script>

<style scoped lang="scss">
.box {
  background: url("@/views/screen/images/dataScreen-main-lb.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;

  .top {
    margin-left: 20px;

    .title {
      margin-top: 20px;
      display: inline-block;
      color: white;
      font-size: 23px;
    }

    .bg {
      width: 68px;
      height: 7px;
      background: url("@/views/screen/images/dataScreen-title.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 8px;
    }

    .right {
      float: right;
      color: white;
      font-size: 20px;
      margin-right: 20px;
      margin-top: 40px;
    }
  }

  .number {
    margin-top: 40px;
    display: flex;
    padding: 10px;

    span {
      flex: 1;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: url("@/views/screen/images/total.png") no-repeat;
      background-size: 100% 100%;
      color: $base-screen-font-color;
    }
  }

  .echarts {
      margin-top: 10px;
    width: 100%;
    height: 260px;
  }
}
</style>