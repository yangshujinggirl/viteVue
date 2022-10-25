<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
      <img src="./assets/bg1.png" class="logo vue" alt="Vue logo" />
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2rem #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2rem #42b883aa);
}
</style>
