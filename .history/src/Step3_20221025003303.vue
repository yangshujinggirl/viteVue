<script setup>
    import { toRefs, ref, reactive } from 'vue';
    import './Step.css';
    import './Step3.css';
    import { useRouter } from 'vue-router';
    import usePub2 from './utils/pub-use';

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

    const goPage=()=>{
       router.push({
        path: 'step4',
        query: {
          scope:scope.value,
          list:JSON.stringify(infoState.list)
        },
      })
    }
    let gameList =[
      {
        url:'1.png',
        text:'FTTR',
      },{
        url:'2.png',
        text:'WIFI6',
      },{
        url:'3.png',
        text:'智能门铃',
      },
      {
        url:'4.png',
        text:'户外监控',
      },{
        url:'5.png',
        text:'智能摄像头',
      },{
        url:'6.png',
        text:'水浸报警器',
      },{
        url:'7.png',
        text:'燃气报警器',
      },{
        url:'8.png',
        text:'烟雾报警器',
      },{
        url:'9.png',
        text:'智能电视',
      },{
        url:'10.png',
        text:'5G手机',
      },{
        url:'11.png',
        text:'5G套餐',
      },{
        url:'12.png',
        text:'智能音箱',
      },{
        url:'13.png',
        text:'智能体脂秤',
      },{
        url:'14.png',
        text:'智能手表',
      },{
        url:'15.png',
        text:'联通宽带',
      },{
        url:'16.png',
        text:'PAD',
      },{
        url:'17.png',
        text:'游戏主机',
      },{
        url:'18.png',
        text:'固定IP',
      },{
        url:'19.png',
        text:'上行提速',
      },{
        url:'20.png',
        text:'宠物定位器',
      },{
        url:'21.png',
        text:'扫地机器人',
      },{
        url:'22.png',
        text:'智能牙刷',
      },{
        url:'23.png',
        text:'智能马桶',
      },{
        url:'24.png',
        text:'智能门锁',
      },{
        url:'25.png',
        text:'智能投影仪',
      },{
        url:'26.png',
        text:'NAS',
      },{
        url:'27.png',
        text:'感应夜灯',
      },{
        url:'28.png',
        text:'智能跑步机',
      },{
        url:'29.png',
        text:'全屋组网',
      },{
        url:'30.png',
        text:'空气净化器',
      },{
        url:'31.png',
        text:'智能温控',
      },{
        url:'32.png',
        text:'联通云盘',
      },{
        url:'33.png',
        text:'5G视频彩铃',
      },{
        url:'34.png',
        text:'智能打印机',
      },{
        url:'35.png',
        text:'智能汽车',
      },{
        url:'36.png',
        text:'VR眼镜',
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
    const onSelect=(selectValue,item)=>{
      scope.value +=selectValue.scope;
      const arr = infoState.list.map((el)=> {
        if(el.url === item.url) {
          el = {...el, bgColor:classMap[selectValue.scope]}
        }
        return el;
      })
      infoState.list = arr;
    }
    const infoState =reactive({
      list:gameList
    })
</script>

<template>
  <div class="step3-wrap">
      <img src="./assets/step3_bg0.png" class="bg0" alt="Vue logo" />
      <ul class="game_list">
        <li class="item"  v-for="itemData in infoState.list" >
          <van-popover
          class="status-popver"
          v-model:show="showPopoverFlag[itemData.url]" placement="bottom" :actions="statusMap" @select="(value)=>onSelect(value,itemData)">
            <template #reference>
              <div :style="{backgroundColor:itemData.bgColor}" class="icons-wrap">
                <img :src="usePub2(itemData.url)" class="main_img" alt="Vue logo" @click="()=>handleChange(itemData)"/>
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
