<template>
  <div class="right">
    <div class="recommend  sticky top-10px  w-full bg-white">
      <p class="recommend-title p-16px pb-10px mb-10px">推荐文章</p>
      <ul class="recommend-list">
        <li class="recommend-list-item flex" v-for="(item,index) in recommendList" :key="index"
          @click="goRouter(item.id,item.img)">
          <img :src="item.img" alt="" class="tx w-50px h-50px mx-10px rounded-100%">
          <div class="recommend-list-item-info flex flex-1 flex-col justify-around relative text-12px">
            <span class="recommend-list-item-info-title box-border w-full pr-20px mb-6px ">{{item.title}}</span>
            <p class="recommend-list-item-info-count">{{item.views}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';

const recommendList = reactive([{
  title: 'title',
  id: 1,
  img: "/src/assets/imgs/20190917010840.jpg",
  views: 'stte'
}]);
const goRouter = (id: number, url: string) =>
{

};
</script>

<style scoped lang='scss'>
.right {
  top: 0px;

}

.recommend {
  &-title {
    font-size: 16px;
    font-weight: 800;
    border-bottom: 1px solid #eee;
  }

  &-list {
    &-item {
      padding: 6px 8px;
      cursor: pointer;
      transition: all 0.4s ease;

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background: #f3f3f3;
        border-radius: 5px;
      }
    }
  }
}

.recommend-list-item-info {
  &-title {
    color: $color-grey;
    font-size: 11px;
    line-height: 15px;
  }

  &-count {
    overflow: hidden;
    color: $color-c3;
  }
}
</style>

