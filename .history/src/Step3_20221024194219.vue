<script setup>
    import { ref, reactive } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const scope = ref(0);
    let showPopoverFlag = reactive({});
    const handleChange = (value) => {
      showPopoverFlag = {...showPopoverFlag, [value.url]:!showPopoverFlag[value.url]}

    };
    const onSelect=(item)=>{
      console.log('item',item);
      scope.value +=item.scope;
      console.log(scope)
    }
    const goPage=()=>{
       router.push({
        path: 'step4',
        query: {
          scope:scope.value,
        },
      })
    }
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
    const statusMap=[
      {
        scope:5,
        text:'使用中',
        className:'used icon0'
      },{
        scope:4,
        text:'吃灰中',
        className:'unUsed icon1',
      },{
        scope:3,
        text:'被种草',
        className:'unUsed icon2',
      },{
        scope:2,
        text:'摇摆中',
        className:'unUsed icon3',
      },{
        scope:1,
        text:'无需求',
        className:'unUsed icon4',
      },
    ]
</script>

<template>
  <div class="wrap">
      <img src="./assets/step3_bg0.png" class="bg0" alt="Vue logo" />
      <ul class="game_list">
        <li class="item"  v-for="itemData in gameList">
          <van-popover
          overlay-class="status-popver"
          v-model:show="showPopoverFlag[itemData.url]" placement="bottom" :actions="statusMap" @select="onSelect">
            <template #reference>
              <img :src="itemData.url" class="main_img" alt="Vue logo" @click="()=>handleChange(itemData)"/>
            </template>
          </van-popover>
        </li>
      </ul>
      <img src="./assets/step3_bg2.png" class="bg2" alt="Vue logo" />
      <img src="./assets/step3_bg1.png" class="bg1" alt="Vue logo" @click="goPage"/>
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
  padding: 0 0  70px 0;
  box-sizing: border-box;
  overflow: auto;
}
.bg0 {
  width: 360px;
}
.bg1 {
  width: 240px;
  height: 45px
}
.bg2 {
  display: block;
  margin: 0 auto 20px;
  width: 85px;
  height: 20px;
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
