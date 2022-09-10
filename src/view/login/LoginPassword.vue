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
            <n-tab-pane name="登录">
              <n-form>
                <n-form-item>
                  <n-input />
                </n-form-item>
                <n-form-item>
                  <n-input />
                </n-form-item>
              </n-form>
            </n-tab-pane>
            <n-tab-pane name="注册"> 注册 </n-tab-pane>
          </n-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
