<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in sites" :key="index">
                <el-card shadow="hover">
                    <a :href="item.url" target="_blank">
                        <div class="display">
                            <img class="logo" :src="item.icon" alt="">
                            <div class="info">
                                <div class="title">{{ item.title }}</div>
                                <div class="description"> {{ item.description }}</div>
                            </div>
                        </div>
                    </a>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import getSites from "@/components/site/site";


const sites = getSites()


</script>

<style scoped lang="scss">
.container {
  margin-top: 30px;

  .display {
    color: rgb(96, 98, 102);
    display: flex;
    align-items: center;

    .logo {
      width: 60px;
    }

    .info {
      margin-left: 20px;

      .title {
        font-size: 17px;
        font-weight: 700;
      }

      .description {
        margin-top: 13px;
        font-style: italic;
          font-size: 10px;
      }
    }
  }
}
</style>