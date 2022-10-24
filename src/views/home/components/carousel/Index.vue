<template>
  <div class="carousel">
    <el-carousel trigger="click" height="600px" :interval="5000" ref="carousel" @change="updateCar">
      <el-carousel-item v-for="(item,index) in bannerArry" :key="item.id">
        <div class="carousel-info" @mouseover.stop="addFilter(index)" @mouseout.stop="moveFilter(index)">
          <p class="tj">
            <i class="el-icon-caret-right" style="color: red"></i>
            推荐文章
          </p>
          <p class="title" :title="item.title">{{ item.title }}</p>
          <span class="btn-right" @click="goRouter(item.id, item.img)" title="文章详情">
            READ MORE
          </span>
          <div class="tag-bot">
            <!-- <div class="el-icon-collection-tag"> -->
            <!-- | -->
            <span class="hash" @click="next(index)" title="next 下一篇">Next</span>
            <!-- </div> -->
          </div>
        </div>
        <img :src=item.img alt="" :ref="el=>bgImgRefs[index]=el">
      </el-carousel-item>
    </el-carousel>
    <div class="car-card">
      <img v-for="(item, index) in bannerArry" :key="index" :src="item.img" @mouseover.stop="update(index)"
        :class="{ 'is-active': index === activeIndex }" />

    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';
import { debounce } from '@/utils/utilsFn';
const carousel = ref<HTMLFormElement>();
const bgImgRefs: any = [];

console.log(carousel, '---');
const activeIndex = ref(0);
const bannerArry = [
  {
    id: 1,
    title: '图片一',
    img: "https://hbimg.huabanimg.com/05453c879fb6e8a2751dedfcd38b9cad33148d876d6e6-U9fGnX_fw658/format/webp"
  }, {
    id: 2,
    title: '图片二',
    img: "https://hbimg.huabanimg.com/42f3fbfcb70c48941fddc3e6624bf82d843f1200dce9f-O6aIry_fw658/format/webp"
  }, {
    id: 3,
    title: '图片三',
    img: "https://hbimg.huabanimg.com/7da0b00c5752e33dccfa0cc41ac90b30afacc43e58dca-S0StoF_fw658/format/webp"

  }, {
    id: 4,
    title: '图片四',
    img: "https://hbimg.huabanimg.com/776f2ab07f9ddf76e3082cf17ade36eb71af9126642ad-BQEg8E_fw658/format/webp"
  }
];
// 
const updateCar = (nowIndex: number, oldIndex: number) =>
{
  activeIndex.value = nowIndex;
};
// 添加模糊效果
const addFilter = (index: number) =>
{
  bgImgRefs[index].style = 'filter: blur(5px)';
};
const moveFilter = (index: number) =>
{
  bgImgRefs[index].style = '';
};
const goRouter = (id: number, src: string) =>
{

};
const update = debounce(
  (index: number) =>
  {
    activeIndex.value = index;
    carousel.value?.setActiveItem(index);
  }, 500
);
const next = (index: number) =>
{
  if (++index >= 3) {
    index = 0;
  }
  activeIndex.value = index;
  carousel.value?.setActiveItem(index);
};
</script>

<style scoped lang='scss'>
.carousel {
  position: relative;
  margin: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 1);
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    transition: all 0.4s ease;
  }

  .el-carousel--horizontal {
    // height: 100%;
    overflow: hidden;
  }

  // 切换效果
  .el-carousel__container .is-animating {
    animation: carousel-out 1s ease-in-out;

    & button {
      animation: none;
    }
  }

  .el-carousel__container .is-active {
    animation: carousel-in 1s ease-in-out;

    & button {
      animation: none;
    }
  }

  // 左右指示器
  ::v-deep(.el-carousel__arrow--left) {


    border-radius: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 75px 0 75px 75px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.7);
    background: transparent;
  }

  ::v-deep(.el-carousel__arrow--right) {
    width: 0;
    height: 0;
    border-radius: 0;
    right: 0;
    border-style: solid;
    border-width: 75px 75px 75px 0;
    border-color: transparent rgba(255, 255, 255, 0.7) transparent transparent;
    // border-top: 100px solid transparent;
    // border-right: 100px solid rgba(255, 255, 255, 0.7);
    // border-bottom: 100px solid transparent;
    // border-left: 75px solid transparent;
    background: transparent;

  }

  ::v-deep(.el-carousel__arrow) .el-icon-arrow-left,
  ::v-deep(.el-carousel__arrow) .el-icon-arrow-right {
    display: none;
  }

  ::v-deep(.el-carousel__arrow) {
    & .el-icon {
      opacity: 0;
    }
  }
}

.carousel-info {
  position: absolute;
  left: 100px;
  bottom: 15%;
  color: #ffffff;
  width: 35%;
  height: 270px;
  padding: 16px;
  overflow: hidden;
  z-index: 100;

  &:hover {
    background: rgba($color: #000000, $alpha: 0.1);

    .btn-right {
      transform: translateX(0);
    }

    .tag-bot .hash {
      color: #fff;
    }

    & {
      box-shadow: 0 0 30px #000;
      transition: all 0.4s ease;
    }
  }

  .tj {
    font-family: element-icons;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
  }

  .title {
    margin-top: 24px;
    width: 100%;
    height: 105px;
    font-size: 36px;
    line-height: 54px;
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .tag-bot {

    // & .el-icon-collection-tag {
    //   display: flex;
    //   justify-content: space-around;
    //   align-items: center;
    //   width: 111px;
    //   height: 46px;
    //   color: #bebebe;
    //   margin: 14px 10px;
    //   transform: translateY(100%);
    //   transition: all 0.4s ease;

    //   &::before {
    //     font-size: 22px;
    //   }
    // }

    .hash {
      color: transparent;
      cursor: pointer;
    }

  }

  .btn-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 110px;
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 2em;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #aff, #f0f, #aff);
    background-size: 300%;
    animation: glow 8s linear infinite;
    transform: translateX(-140%);
    transition: all 0.4s ease;

    &::before {
      position: absolute;
      content: '';
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      z-index: -1;
      background: inherit;
      background-size: inherit;
      border-radius: 4em;
      opacity: 0;
      transition: 0.5s;
    }

    &:hover::before {
      opacity: 1;
      filter: blur(20px);
      animation: glow 8s linear infinite;
    }
  }
}

.car-card {
  position: absolute;
  display: flex;
  right: 10px;
  bottom: 30px;
  height: 68px;
  z-index: 100;

  img {
    width: 128px;
    margin: 0 10px;
    cursor: pointer;
  }

  .is-active {
    transition: all 0.4s ease;
    transform: scale(1.15);
  }
}

//  ::v-deep(.el-carousel__container){
//   height: 300px !important;
// }
@keyframes carousel-out {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }

  100% {
    opacity: 0;
    transform: translateX(-300px) scale(1.5);
  }
}

@keyframes carousel-in {
  0% {
    opacity: 0;
    transform: translateX(300px) scale(1.5);
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes glow {
  100% {
    background-position: 300%;
  }
}

// .el-carousel__item  {
//     height: auto;
// }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
