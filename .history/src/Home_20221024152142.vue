<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="wrap">
      <img src="./assets/home_img0.png" class="main_img" alt="Vue logo" />
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: url('./assets/bg1.png');
  background-size: cover;
  position: relative;
}
.main_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.logo:hover {
  filter: drop-shadow(0 0 2rem #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2rem #42b883aa);
}
</style>
