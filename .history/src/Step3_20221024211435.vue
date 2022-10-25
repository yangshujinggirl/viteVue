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
        text:'FTTR',
      },{
        url:'/src/assets/icons/2.png',
        text:'WIFI6',
      },{
        url:'/src/assets/icons/3.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/4.png',
        text:'户外监控',
      },{
        url:'/src/assets/icons/5.png',
        text:'智能摄像头',
      },{
        url:'/src/assets/icons/6.png',
        text:'水浸报警器',
      },{
        url:'/src/assets/icons/7.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/8.png',
        text:'烟雾报警器',
      },{
        url:'/src/assets/icons/9.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/10.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/11.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/12.png',
        text:'智能音箱',
      },{
        url:'/src/assets/icons/13.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/14.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/15.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/16.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/17.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/18.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/19.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/20.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/21.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/22.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/23.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/24.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/25.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/26.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/27.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/28.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/29.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/30.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/31.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/32.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/33.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/34.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/35.png',
        text:'智能门铃',
      },{
        url:'/src/assets/icons/36.png',
        text:'智能门铃',
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
              <div :style="{background:selectValus[itemData.url]||classMap[5]}" class="icons-wrap">
                <img :src="itemData.url" class="main_img" alt="Vue logo" @click="()=>handleChange(itemData)"/>
              </div>
              <p class="icon-text">{{itemData.text}}</p>
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
.icons-wrap {
  width: 40px;
  height: 40px;
  margin: 0 auto ;
}
.icon-text {
  font-size: 14px;
  margin: 0;
}
.item img {
  width: 100%;
}
</style>
