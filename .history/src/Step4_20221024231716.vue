<script setup>
    import { ref, toRefs,reactive } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
     const route = useRoute();
     const {scope,list} = route.query;
     const newList = JSON.parse(list)
</script>

<template>
  <div class="wrap">
    <p class="scope-wrap"><span class="numer">{{scope}}</span><span class="percent">98%</span></p>
      <ul class="game_list">
        <li class="item"  v-for="itemData in newList">
          <div :style="{backgroundColor:itemData.bgColor}" class="icons-wrap">
            <img :src="itemData.url" class="main_img" alt="Vue logo"/>
          </div>
          <p class="icon-text">{{itemData.text}}</p>
        </li>
      </ul>
          <img src="./assets/step4_save.png" class="bg2" alt="Vue logo" />
      <img src="./assets/step4_footer.png" class="bg1" alt="Vue logo" @click="goPage"/>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: url('./assets/bg3.png');
  background-size: cover;
  text-align: center;
  padding: 0 0  40px 0;
  box-sizing: border-box;
  overflow: auto;
}
.scope-wrap {
  width: 290px;
  height: 123px;
  background: url('./assets/scope.png');
  background-size: cover;
  margin: 0 auto;
  position: relative;
}
.numer {
  font-size: 36px;
  color: #544bff;
  font-weight:700;
  position: absolute;
  right: 40px;
  top: 45px;
}
.percent {
  color: #544bff;
  font-size: 28px;
  font-weight: bold;
  position:absolute;
  bottom: 16px;
  right:149px;
}
.bg1 {
  width: 360px;
}
.bg2 {
  display: block;
  margin: 0 auto 20px;
  width: 112px;
}
.game_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0 20px;
}
.item {
  width: 90px;
  height: 110px;
}
.icons-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto ;
  text-align: center;
  background: #ccc;
}
.icon-text {
  font-size: 14px;
  margin: 0;
}
.item img {
  width: 100%;
}
.van-popover__action-text {
  position: relative;
}
.van-popover__action-text:before{
  position:absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  content:'';
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 2px;
}
.van-hairline--bottom:after {
  border: 0;
}
</style>
