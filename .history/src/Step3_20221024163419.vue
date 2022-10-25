<script setup>
    import { ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const username = ref('');
    const onSubmit = (values) => {
      console.log('submit', username.value, values);
      router.push('/step3')
    };
</script>

<template>
  <div class="wrap">
      <img src="./assets/step2_img0.png" class="main_img" alt="Vue logo" />
      <ul class="game_list">
        <li class="item">
          <img src="./assets/step2_img0.png" class="main_img" alt="Vue logo" />
        </li>
      </ul>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: url('./assets/bg2.png');
  background-size: cover;
  position: relative;
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;
}
.game_list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 110px;
  height: 130px;

}
</style>
