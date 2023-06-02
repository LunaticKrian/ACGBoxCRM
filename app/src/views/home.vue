<template>
    <div>
        <el-carousel indicator-position="outside" height="400px" :interval="time">
            <el-carousel-item v-for="(item) in bannerList" :key="item">
                <img class="banner" :src="item" alt="">
            </el-carousel-item>
        </el-carousel>

        <el-card>
            <div class="box">
                <img class="avatar" src="@/assets/images/logo-small.png" alt=""/>
                <div>
                    <!-- 显示时间 -->
                    <!--                    <div class="timeshow" id="time">-->
                    <!--                        2000&nbsp;年&nbsp;0&nbsp;月&nbsp;00&nbsp;日&nbsp;<span class="weekday">星期一</span><br><span-->
                    <!--                            class="time-text">00:00:00</span>-->
                    <!--                    </div>-->
                    <div class="bottom">
                        <!-- 提示语 -->
                        <div class="title">{{ getTimeStatus() }}好！{{ userName }} ~</div>
                        <div class="slogan">Those who go up the mountain should never look down on those who come down ......</div>
                    </div>
                </div>
            </div>
        </el-card>

        <div class="sites">
            <Site></Site>
        </div>

        <div class="icon-bottom">
            <svg-icon name="WebApplication" width="500px" height="500px"></svg-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import {getTimeStatus} from "@/utils/time"
import SvgIcon from "@/components/commons/SvgIcon.vue";
import Site from "@/components/site/site.vue"
import * as bannerList from "@/assets/images/home"

let userName = '登山的人'
let userStore = useUserStore()
let time = 10000

</script>

<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;

  .avatar {
    width: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 30px;

    .title {
      font-size: 25px;
      font-weight: 800;
      margin-bottom: 30px;
      color: rgb(96, 98, 102);
    }

    .slogan {
      font-size: 15px;
      font-style: italic;
      font-weight: 700;
      color: rgb(96, 98, 102)
    }
  }
}

.icon-bottom {
  display: flex;
  justify-content: center;
}

.banner {
  width: 100%;
}
</style>