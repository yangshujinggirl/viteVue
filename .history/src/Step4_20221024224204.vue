<script setup>
    import { ref, reactive } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
     const route = useRoute();
     const {scope,list} = route.query;
     console.log('scope',scope)
    // const scope = ref(0);
    let gameList =[
      {
        url:'/src/assets/game0.png',
        unSelectUrl:'./assets/game0_0.png',
      }, {
        url:'/src/assets/game1.png',
        unSelectUrl:'./assets/game1_0.png',
      },{
        url:'/src/assets/game2.png',
        unSelectUrl:'./assets/game2_0.png'
      },{
        url:'/src/assets/game3.png',
        unSelectUrl:'./assets/game3_0.png'
      },{
        url:'/src/assets/game4.png',
        unSelectUrl:'./assets/game4_0.png'
      },{
        url:'/src/assets/game5.png',
        unSelectUrl:'./assets/game5_0.png'
      },{
        url:'/src/assets/game6.png',
        unSelectUrl:'./assets/game6_0.png'
      },{
        url:'/src/assets/game7.png',
        unSelectUrl:'./assets/game7_0.png'
      },{
        url:'/src/assets/game8.png',
        unSelectUrl:'./assets/game8_0.png'
      },{
        url:'/src/assets/game9.png',
        unSelectUrl:'./assets/game9_0.png'
      },{
        url:'/src/assets/game10.png',
        unSelectUrl:'./assets/game10_0.png'
      },{
        url:'/src/assets/game11.png',
        unSelectUrl:'./assets/game11_0.png'
      },{
        url:'/src/assets/game12.png',
        unSelectUrl:'./assets/game12_0.png'
      },{
        url:'/src/assets/game13.png',
        unSelectUrl:'./assets/game13_0.png'
      },{
        url:'/src/assets/game14.png',
        unSelectUrl:'./assets/game14_0.png'
      },{
        url:'/src/assets/game15.png',
        unSelectUrl:'./assets/game15_0.png'
      },{
        url:'/src/assets/game16.png',
        unSelectUrl:'./assets/game16_0.png'
      },{
        url:'/src/assets/game17.png',
        unSelectUrl:'./assets/game17_0.png'
      },{
        url:'/src/assets/game18.png',
        unSelectUrl:'./assets/game18_0.png'
      },{
        url:'/src/assets/game19.png',
        unSelectUrl:'./assets/game19_0.png'
      },{
        url:'/src/assets/game20.png',
        unSelectUrl:'./assets/game20_0.png'
      },{
        url:'/src/assets/game21.png',
        unSelectUrl:'./assets/game21_0.png'
      },{
        url:'/src/assets/game22.png',
        unSelectUrl:'./assets/game22_0.png'
      },{
        url:'/src/assets/game23.png',
        unSelectUrl:'./assets/game23_0.png'
      }
    ]
</script>

<template>
  <div class="wrap">
    <p class="scope-wrap"><span class="numer">{{scope}}</span><span class="percent">98%</span></p>
      <ul class="game_list">
        <li class="item"  v-for="itemData in list">
          <div :style="{backgroundColor:itemData.bgColor}" class="icons-wrap">
            <img :src="itemData.url" class="main_img" alt="Vue logo" @click="()=>handleChange(itemData)"/>
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
