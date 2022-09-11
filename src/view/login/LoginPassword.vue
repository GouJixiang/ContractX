<template>
  <div class="login-body">
    <div class="container overflow-hidden">
      <div class="left-box h-full w-1/2">
        <n-carousel autoplay dot-type="line">
          <img class="carousel-img" src="src/assets/网络错误.png" />
          <img class="carousel-img" src="src/assets/搜索无结果.png" />
          <img class="carousel-img" src="src/assets/暂无记录.png" />
          <img class="carousel-img" src="src/assets/权限不足.png" />
        </n-carousel>
      </div>
      <div class="right-box h-full w-1/2">
        <div class="title-box">
          <n-avatar round :size="48" src="src/assets/logo.jpg" />
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
                  <n-button class="ml-6">{{ code }}</n-button>
                </n-form-item>
                <n-form-item>
                  <n-checkbox label="记住我" />
                </n-form-item>
                <n-space justify="center">
                  <n-button id="submitBtn">登录</n-button>
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
                  <n-checkbox label="记住我" />
                </n-form-item>
                <n-space justify="center">
                  <n-button id="submitBtn">登录</n-button>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref('获取验证码')
const showLabel = ref<Boolean>(false)
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

#submitBtn {
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
</style>
