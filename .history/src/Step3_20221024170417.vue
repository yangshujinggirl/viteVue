<script setup>
    import { ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const username = ref('');
    const onSubmit = (values) => {
      console.log('submit', username.value, values);
      router.push('/step3')
    };
    const gameList =[
      {
        url:'/src/assets/game0.png',
        unSelectUrl:'./assets/game0_0.png'
      }, {
        url:'/src/assets/game1.png',
        unSelectUrl:'./assets/game1_0.png'
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
      <img src="./assets/step3_bg0.png" class="main_img" alt="Vue logo" />
      <ul class="game_list">
        <li class="item"  v-for="itemData in gameList">
          <img :src="itemData.url" class="main_img" alt="Vue logo" />
        </li>
      </ul>
      <img src="./assets/step3_bg2.png" class="main_img" alt="Vue logo" />
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: url('./assets/bg3.png');
  background-size: cover;
  /* position: relative; */
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;
  overflow: auto;
}
.game_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.item {
  width: 90px;
  height: 110px;
}
.item img {
  width: 100%;
}
</style>
