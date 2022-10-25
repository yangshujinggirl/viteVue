<script setup>
    import { ref, reactive } from 'vue';
    import './Step.css';
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const scope = ref(0);
    let showPopoverFlag = reactive({});
    let selectValus = reactive({});
    const handleChange = (value) => {
      showPopoverFlag = {...showPopoverFlag, [value.url]:!showPopoverFlag[value.url]}

    };
    const classMap={
      5:'#f42f5e',
      4:'#e2bd23',
      3:'#80d681',
      2:'#5cb5ff',
      1:'#3086fd',
    }
    const onSelect=(selectValue,item)=>{
      console.log('item',selectValue,item);
      scope.value +=selectValue.scope;
      selectValus = {...selectValus, [item.url]:classMap[selectValue.scope]}
      console.log('selectValus',selectValus)
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
        url:'/src/assets/icons/1.png',
        text:'智能门铃',
      }, {
        url:'/src/assets/1.png',
        unSelectUrl:'./assets/1_0.png',
      },{
        url:'/src/assets/2.png',
        unSelectUrl:'./assets/2_0.png'
      },{
        url:'/src/assets/3.png',
        unSelectUrl:'./assets/3_0.png'
      },{
        url:'/src/assets/4.png',
        unSelectUrl:'./assets/4_0.png'
      },{
        url:'/src/assets/5.png',
        unSelectUrl:'./assets/5_0.png'
      },{
        url:'/src/assets/6.png',
        unSelectUrl:'./assets/6_0.png'
      },{
        url:'/src/assets/7.png',
        unSelectUrl:'./assets/7_0.png'
      },{
        url:'/src/assets/8.png',
        unSelectUrl:'./assets/8_0.png'
      },{
        url:'/src/assets/9.png',
        unSelectUrl:'./assets/9_0.png'
      },{
        url:'/src/assets/10.png',
        unSelectUrl:'./assets/10_0.png'
      },{
        url:'/src/assets/11.png',
        unSelectUrl:'./assets/11_0.png'
      },{
        url:'/src/assets/12.png',
        unSelectUrl:'./assets/12_0.png'
      },{
        url:'/src/assets/13.png',
        unSelectUrl:'./assets/13_0.png'
      },{
        url:'/src/assets/14.png',
        unSelectUrl:'./assets/14_0.png'
      },{
        url:'/src/assets/15.png',
        unSelectUrl:'./assets/15_0.png'
      },{
        url:'/src/assets/16.png',
        unSelectUrl:'./assets/16_0.png'
      },{
        url:'/src/assets/17.png',
        unSelectUrl:'./assets/17_0.png'
      },{
        url:'/src/assets/18.png',
        unSelectUrl:'./assets/18_0.png'
      },{
        url:'/src/assets/19.png',
        unSelectUrl:'./assets/19_0.png'
      },{
        url:'/src/assets/20.png',
        unSelectUrl:'./assets/20_0.png'
      },{
        url:'/src/assets/21.png',
        unSelectUrl:'./assets/21_0.png'
      },{
        url:'/src/assets/22.png',
        unSelectUrl:'./assets/22_0.png'
      },{
        url:'/src/assets/23.png',
        unSelectUrl:'./assets/23_0.png'
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
        <li class="item"  v-for="itemData in gameList" >
          <van-popover
          class="status-popver"
          v-model:show="showPopoverFlag[itemData.url]" placement="bottom" :actions="statusMap" @select="(value)=>onSelect(value,itemData)">
            <template #reference>
              <div :style="{background:selectValus[itemData.url]||classMap[5]}">
                <img :src="itemData.url" class="main_img" alt="Vue logo" @click="()=>handleChange(itemData)"/>
              </div>
              <p>{{itemData.text}}</p>
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
</style>
