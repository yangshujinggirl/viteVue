<script setup>

</script>

<template>
  <div class="wrap">
      <img src="./assets/step2_img0.png" class="main_img" alt="Vue logo" />
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: url('./assets/bg2.png');
  background-size: cover;
  position: relative;
}
.main_img {
  width: 375px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(0,-50%);
}
</style>
