<template>
  <div class="center infinite-list" v-infinite-scroll="load" :infinite-scroll-immediate="false"
    :infinite-scroll-disabled="disabled" :infinite-scroll-delay="500">

    <ContentItem v-for="(item,index) in list" :key="index" :item="item" :class="['infinite-list-item']"></ContentItem>
    <div class="load">
      <Loading :isShowLoading='true' />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';
import ContentItem from './ContentItem.vue';
const list = reactive([{
  id: 1,
  img: '../../../../assets/imgs/20190917010840.jpg',
  title: 'title',
  partitions: 'partitions',
  introduction: 'introduction',
  date: '2002-22-22',
  viewsNum: 1

}, {
  id: 1,
  img: '../../../../assets/imgs/20190917010840.jpg',
  title: 'title',
  partitions: 'partitions',
  introduction: 'introduction',
  date: '2002-22-22',
  viewsNum: 1

}, {
  id: 1,
  img: '../../../../assets/imgs/20190917010840.jpg',
  title: 'title',
  partitions: 'partitions',
  introduction: 'introduction',
  date: '2002-22-22',
  viewsNum: 1

}, {
  id: 1,
  img: '../../../../assets/imgs/20190917010840.jpg',
  title: 'title',
  partitions: 'partitions',
  introduction: 'introduction',
  date: '2002-22-22',
  viewsNum: 1

}, {
  id: 1,
  img: '../../../../assets/imgs/20190917010840.jpg',
  title: 'title',
  partitions: 'partitions',
  introduction: 'introduction',
  date: '2002-22-22',
  viewsNum: 1

}]);
// 
const isLoading = ref(false);
const load = () =>
{
  // count.value += 2;
  getDate;
};
// 判断是否加载完成
const noMore = () =>
{
  return false;
};
// 数据完成后停止加载
const disabled = () =>
{
  return isLoading || noMore;
};
const getDate = () =>
{

};

</script>

<style scoped lang='scss'>
.infinite-list {
  // height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto
}
.load {
  height: 120px;
  display: flex;
  align-items: center;
}
</style>
