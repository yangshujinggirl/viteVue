<script setup>
    import { ref } from 'vue';
    const username = ref('');
    const onSubmit = (values) => {
      console.log('submit', username.value, values);
    };
</script>

<template>
  <div class="wrap">
      <img src="./assets/step2_img0.png" class="main_img" alt="Vue logo" />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </van-cell-group>
        <div>
          <van-button block type="primary" native-type="submit"></van-button>
        </div>
      </van-form>
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
.main_img {
  width: 300px;
  margin-bottom: 48px;
}
.van-form {
  /* width: 250px; */
  padding: 0 62px;
  margin: 0 auto;
  background: url('./assets/step2_bg3.png') no-repeat left center;
  background-size: cover;
}
.van-cell-group--inset,
.van-button {
  width: 100%;
  height: 45px;
}
.van-cell-group--inset {
  margin: 0;
  background-color:transparent;
  background: url('./assets/step2_bg0.png');
  background-size: cover;
  margin-bottom: 20px;
}
.van-cell {
  background-color:transparent;
  padding-top: 10px;
}
.van-button {
  background: url('./assets/step2_bg1.png');
  background-size: cover;
}
</style>
