<template>
    <div class="login-container">
        <el-row>
            <el-col :span="9" :xs="0"></el-col>
            <el-col :span="6" :xs="24">
                <el-form class="login-form">
                    <h1>Hello !</h1>
                    <h3>这是一个开发平台的登录页面 ~</h3>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type='password' :show-password='true' :prefix-icon="Lock"
                                  v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" class="login-btn" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="9" :xs="0"></el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
// 引入图标组件：
import {User, Lock} from '@element-plus/icons-vue';
import {reactive, ref} from "vue";
// 引入用户相关仓库：
import useUserStore from "@/store/modules/user";
import {loginForm} from "@/api/user/type";
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
import {getTimeStatus} from "@/utils/time";

// 获取路由器：
let $router = useRouter()

// 使用仓库：
let useStore = useUserStore();

// 控制按钮加载效果：
let loading = ref(false)

// 收集账号和密码数据：
let loginForm = reactive({
    userName: '',
    password: ''
})

// 登录按钮回调函数：
const login = async () => {
    // 修改按钮加载状态：
    loading.value = true
    // 使用仓库中的方法：
    try {
        await useStore.userLogin(loginForm)
        // 使用编程式导航跳转到展示数据的主页：
        $router.push("/")
        loading.value = false
        // 登录成功的提示信息：
        ElNotification({
            type: 'success',
            message: '欢迎回来！',
            title: `HI，${getTimeStatus()}好 ~ `
        })
    } catch (error) {
        loading.value = false
        // 登录失败的提示信息：
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }
}

</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  // vh：当前视图窗口的显示单位
  height: 100vh;
  background: url("@/assets/images/background.png") no-repeat;
  background-size: cover;
}

.login-form {
  position: relative;
  top: 30vh;
  background-color: rgba(110, 117, 119, 0.4);
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgb(80, 80, 80);

  h1 {
    font-size: 40px;
    font-weight: bolder;
    color: whitesmoke;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: whitesmoke;
    margin: 20px 0;
  }

  .login-btn {
    width: 100%;
  }
}
</style>