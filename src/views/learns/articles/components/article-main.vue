<template>
  <div class="main infinite-list m-h-70vh" v-infinite-scroll="load">
    <ul class="list p-16px">
      <li v-for="(item,index) in articleList" :key="index" class="article-item" @click="goRouter(item.id,item.img)">
        <div class="article-item-img">
          <img :src="item.img" alt="">
        </div>
        <div class="article-item-info flex flex-col justify-between box-border h-100px">
          <p class="article-item-info-title">{{item.title}}</p>
          <p class="article-item-info-into">{{item.introduction}}</p>
          <div class="article-item-info-tips flex items-center text-#768791">
            <span class="tips clock">
              <i class="iconfont icon-rili"></i>
              {{item.date}}
            </span>
            <span class="tips views">
              <i class="iconfont icon-liulan"></i>
              {{item.viewsNum}}
            </span>
            <span>
              <i class="iconfont icon-pinglun"></i>
              {{0}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <Loading :isShowLoading='true' />
  </div>

</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';

type Props = {
  articleList: {
    id: number;
    img: string,
    title: string,
    introduction: string,
    date: string,
    viewsNum: number;
  }[],
};
const { articleList } = withDefaults(defineProps<Props>(), {

});




const load = () => { };
const goRouter = (id: number, url: string) =>
{
  console.log(id, url);


};
</script>

<style scoped lang='scss'>
.article-item {
  padding: 16px;
  margin-top: 10px;
  display: flex;
  border: 1px solid transparent;
  border-bottom: 1px solid #eee;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(167, 167, 167);
    background: #ebebeb;
  }

  &-img {
    position: relative;
    width: 160px;
    height: 100px;

    //   background: #ecf5ff;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &-info {
    padding: 2px 0 2px 16px;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &-title {
      -webkit-line-clamp: 1;
      font-weight: 600;
      font-size: 18px;
      color: #717171;
    }

    &-intor {
      font-size: 14px;
      color: #768791;
    }

    &-tips {
      .tips {
        padding-right: 15px;
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        color: #a0a0a0;
      }
    }

  }
}
</style>
