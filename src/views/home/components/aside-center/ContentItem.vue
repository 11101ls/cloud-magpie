<template>
  <div class="item reactive w-full bg-white rounded-16px overflow-hidden cursor-pointer mb-16px "
    @click="goRouter(item.id,item.img)">
    <div class="card-cover relative overflow-hidden" :title="item.title">
      <img :src="item.img" alt="" class="item-bg-img w-full h-266px block">
      <div
        class="bot-title absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 flex flex-col items-center opacity-100">
        <span
          class="label flex items-center h-24px px-12px rounded-6px bg-red-600 text-white text-14px">{{item.partitions}}</span>
        <p class="title text-30px mx-60px mt-10px text-white text-center">{{item.title}}</p>
      </div>
      <div class="bot-ftitle absolute flex justify-center items-center top-0 left-0 w-full h-full min-w-550px z-3">
        <p class="title text-center text-18px opacity-0 text-gray-400 leading-30px">{{item.introduction}}</p>
      </div>
    </div>
    <div class="card-footer  flex items-center  justify-between px-20px py-10px">
      <ul class="card-footer-tips inline-block mr-8px text-#666">
        <li>
          {{item.date}}
        </li>
        <li>
          {{ item.viewsNum }}
        </li>
      </ul>
      <span class="desc text-black box-border hover:border-#666">
        详情
        <i class="iconfont icon-V"></i>
      </span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';

type Props = {
  item: {
    id: number;
    viewsNum: number;
    img: string,
    title: string,
    partitions: string,
    introduction: string,
    date: string,

  },

};
const { item } = withDefaults(defineProps<Props>(), {

});
console.log(item.img);

const goRouter = (id: number, url: string) =>
{
  console.log(id, url);

};
// const {item}=defineProps
</script>

<style scoped lang='scss'>
.item {
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .card-cover:hover {
    .item-bg-img {
      filter: blur(3px);
      transition: all 0.5s;
    }

    .bot-title {
      opacity: 0;
      transition: all 0.5s;
    }

    .bot-ftitle .title {
      opacity: 1;
      transition: all 0.5s;
    }

  }

  .item-bg-img {
    transition: all 0.5s;
  }

  .bot-title {
    transition: all 0.3s;
    min-width: 550px;
    line-height: 40px;

    .title {
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
    }


  }

  .bot-ftitle {
    .title {
      transition: all 0.5s;
    }
  }

  .desc {
    user-select: none;
    border-bottom: 1px solid #fff;

    &:hover {
      border-color: #777;
    }
  }

  .card-footer-tips {
    li {
      display: inline-block;
      margin-right: 8px;
      color: #717171;
    }

    i {
      margin-right: 5px;
    }
  }
}
</style>
