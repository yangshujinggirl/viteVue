<script setup>
    import { ref, toRefs,reactive } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
     const route = useRoute();
     const {scope,list} = route.query;
     const newList = JSON.parse(list)
    //  const lists = toRefs(list)
    // const scope = ref(0);
    let gameList =[
      {
        url:'/src/assets/1.png',
        text:'FTTR',
      },{
        url:'/src/assets/2.png',
        text:'WIFI6',
      },{
        url:'/src/assets/3.png',
        text:'智能门铃',
      },{
        url:'/src/assets/4.png',
        text:'户外监控',
      },{
        url:'/src/assets/5.png',
        text:'智能摄像头',
      },{
        url:'/src/assets/6.png',
        text:'水浸报警器',
      },{
        url:'/src/assets/7.png',
        text:'燃气报警器',
      },{
        url:'/src/assets/8.png',
        text:'烟雾报警器',
      },{
        url:'/src/assets/9.png',
        text:'智能电视',
      },{
        url:'/src/assets/10.png',
        text:'5G手机',
      },{
        url:'/src/assets/11.png',
        text:'5G套餐',
      },{
        url:'/src/assets/12.png',
        text:'智能音箱',
      },{
        url:'/src/assets/13.png',
        text:'智能体脂秤',
      },{
        url:'/src/assets/14.png',
        text:'智能手表',
      },{
        url:'/src/assets/15.png',
        text:'联通宽带',
      },{
        url:'/src/assets/16.png',
        text:'PAD',
      },{
        url:'/src/assets/17.png',
        text:'游戏主机',
      },{
        url:'/src/assets/18.png',
        text:'固定IP',
      },{
        url:'/src/assets/19.png',
        text:'上行提速',
      },{
        url:'/src/assets/20.png',
        text:'宠物定位器',
      },{
        url:'/src/assets/21.png',
        text:'扫地机器人',
      },{
        url:'/src/assets/22.png',
        text:'智能牙刷',
      },{
        url:'/src/assets/23.png',
        text:'智能马桶',
      },{
        url:'/src/assets/24.png',
        text:'智能门锁',
      },{
        url:'/src/assets/25.png',
        text:'智能投影仪',
      },{
        url:'/src/assets/26.png',
        text:'NAS',
      },{
        url:'/src/assets/27.png',
        text:'感应夜灯',
      },{
        url:'/src/assets/28.png',
        text:'智能跑步机',
      },{
        url:'/src/assets/29.png',
        text:'全屋组网',
      },{
        url:'/src/assets/30.png',
        text:'空气净化器',
      },{
        url:'/src/assets/31.png',
        text:'智能温控',
      },{
        url:'/src/assets/32.png',
        text:'联通云盘',
      },{
        url:'/src/assets/33.png',
        text:'5G视频彩铃',
      },{
        url:'/src/assets/34.png',
        text:'智能打印机',
      },{
        url:'/src/assets/35.png',
        text:'智能汽车',
      },{
        url:'/src/assets/36.png',
        text:'VR眼镜',
      }
    ]
</script>

<template>
  <div class="wrap">
    <p class="scope-wrap"><span class="numer">{{scope}}</span><span class="percent">98%</span></p>
      <ul class="game_list">
        <li class="item"  v-for="itemData in newList">
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
