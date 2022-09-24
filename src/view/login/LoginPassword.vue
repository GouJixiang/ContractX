<template>
  <div class="login-body">
    <div class="container overflow-hidden">
      <div class="left-box h-full w-1/2">
        <n-carousel autoplay dot-type="line" centered-slides="true">
          <img class="carousel-img" src="../../assets/carousel1.svg" />
          <img class="carousel-img" src="../../assets/carousel2.svg" />
          <img class="carousel-img" src="../../assets/carousel3.svg" />
          <img class="carousel-img" src="../../assets/carousel4.svg" />
        </n-carousel>
      </div>
      <div class="right-box h-full w-1/2">
        <div class="title-box">
          <n-avatar round :size="48" :src="logo" />
          <h1>Contract Admin</h1>
        </div>
        <div class="login-form w-2/3 flex justify-center">
          <n-tabs type="line" size="large" justify-content="space-evenly">
            <n-tab-pane name="手机登录">
              <n-form :show-label="showLabel">
                <n-form-item>
                  <n-input-group-label>中国 +86</n-input-group-label>
                  <n-input type="text" placeholder="手机号码" clearable />
                </n-form-item>
                <n-form-item>
                  <n-input type="text" placeholder="验证码"></n-input>
                  <n-button
                    class="ml-4"
                    :disabled="smsCodeDisabled"
                    @click="handleGetSmsCode"
                    >{{ code }}</n-button
                  >
                </n-form-item>
                <n-form-item>
                  <n-space justify="space-between" class="w-full">
                    <n-checkbox label="下次自动登录" />
                  </n-space>
                </n-form-item>
                <n-space justify="center">
                  <n-button class="submitBtn">登录</n-button>
                </n-space>
              </n-form>
            </n-tab-pane>
            <n-tab-pane name="密码登录">
              <n-form :show-label="showLabel">
                <n-form-item>
                  <n-input type="text" placeholder="用户名" clearable />
                </n-form-item>
                <n-form-item>
                  <n-input
                    type="password"
                    show-password-on="mousedown"
                    placeholder="密码"
                  />
                </n-form-item>
                <n-form-item>
                  <n-space justify="space-between" class="w-full">
                    <n-checkbox label="下次自动登录" />
                    <a class="cursor-pointer" @click="showForgetModel = true"
                      >忘记密码</a
                    >
                  </n-space>
                </n-form-item>
                <n-space justify="center">
                  <n-button class="submitBtn">登录</n-button>
                </n-space>
              </n-form>
            </n-tab-pane>
          </n-tabs>
        </div>
        <n-divider class="font-normal" title-placement="center"
          >第三方登录</n-divider
        >
        <n-space>
          <n-icon size="32" class="icon-hover">
            <qq-circle-filled />
          </n-icon>
          <n-icon size="32" class="icon-hover">
            <logo-wechat />
          </n-icon>
          <n-icon size="32" class="icon-hover">
            <github />
          </n-icon>
        </n-space>
      </div>
    </div>
  </div>

  <!-- 忘记密码模态框 -->
  <n-modal
    v-model:show="showForgetModel"
    class="forgetPwdPop"
    preset="card"
    title="忘记密码"
    size="huge"
    :bordered="false"
  >
    <template #header-extra></template>
    <n-form :show-label="showLabel" v-if="forgetFormVaild">
      <n-form-item>
        <n-input placeholder="手机号码或邮箱" />
      </n-form-item>
      <n-form-item>
        <n-input placeholder="验证码" />
        <n-button
          class="ml-4"
          :disabled="smsCodeDisabled"
          @click="handleGetSmsCode"
          >{{ code }}</n-button
        >
      </n-form-item>
    </n-form>

    <n-form :show-label="showLabel" v-else>
      <n-form-item>
        <n-input placeholder="新密码" />
      </n-form-item>
      <n-form-item>
        <n-input placeholder="重复新密码" />
      </n-form-item>
    </n-form>

    <n-space justify="center" class="w-full">
      <n-button class="submitBtn" @click="handleForgetFormVaild">确认</n-button>
    </n-space>
  </n-modal>

  <!-- 主题切换按钮 -->
  <div class="change-theme-box">
    <n-switch>
      <template #checked> 深色 </template>
      <template #unchecked> 浅色 </template>
    </n-switch>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import logo from '@/assets/logo.jpg'
import { ref } from 'vue'

const code = ref<string>('获取验证码')
const smsCodeDisabled = ref<boolean>(false)
const showLabel = ref<Boolean>(false)
const showForgetModel = ref<boolean>(false)
const forgetFormVaild = ref<boolean>(true)

axios
  .post('/mock/login/pwd', {
    username: 'yangxy',
    password: 'yangxy',
  })
  .then((data: any) => {
    console.log(data)
  })

/** 获取手机验证码 */
function handleGetSmsCode() {
  let sec = 59
  code.value = '60s'
  smsCodeDisabled.value = true
  const interval = setInterval(() => {
    code.value = sec + 's'
    if (sec-- == 0) {
      clearInterval(interval)
      code.value = '获取验证码'
      smsCodeDisabled.value = false
    }
  }, 1000)
}

/** 忘记密码按钮事件 */
function handleForgetFormVaild() {
  forgetFormVaild.value = !forgetFormVaild.value
}
</script>

<style lang="scss">
.login-body {
  height: 100vh;
  background-color: #f0f3fa;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1000px;
    height: 600px;
    display: flex;
    background-color: white;
    border-radius: 20px 20px;
    -moz-box-shadow: 0px 5px 20px #6b8499;
    -webkit-box-shadow: 0px 5px 20px #6b8499;
    box-shadow: 0px 5px 20px #6b8499;

    .left-box {
      background-color: #306acc;

      .carousel-img {
        height: 100%;
      }
    }

    .right-box {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;

      .title-box {
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        color: #306acc;
        margin: 20px 0px;
      }
    }
  }
}

.submitBtn {
  background-color: #306acc;
  color: #fff;
  width: 100px;
}

.icon-hover {
  color: #306acc;

  &:hover {
    color: #566b8e;
  }
}

.forgetPwdPop {
  width: 600px;
  height: 300px;
  border-radius: 20px 20px;
}

.change-theme-box {
  position: absolute;
  top: 50px;
  right: 50px;
}
</style>
