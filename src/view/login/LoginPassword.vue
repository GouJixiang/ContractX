<template>
  <div class="login-container bg-center bg-cover bg-login-bg">
    <div
      class="login-box h-full w-1/3 shadow-md bg-gray-200 bg-opacity-30 text-center text-gray-500 flex flex-wrap content-center items-center justify-center" 
    >
        <div class="title w-full">
          <h1 class="font-black text-5xl tracking-wide">Contract Admin</h1>
          <h2 class="text-2xl font-black leading-10"> 记录美好生活 </h2>
        </div>
        <div class="login-div w-2/3 h-4 mt-8 bg-black">
            
        </div>
    </div>
  </div>
  <div class="absolute bottom-0 h-16 w-screen"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.login-container {
  height: calc(100vh - 64px);
  position: relative;

  .login-box {
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translate(0%, -50%);
  }
}
</style>
