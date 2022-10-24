<template>
  <div class="aside-left">
    <AsideLeftInfo v-if="isShow"></AsideLeftInfo>
    <TitleCard title="传世经典" :isGreen="isGreen">
      <template #content>
        <ul class="article">
          <li class="item" v-for="(item,index) in enterType" :key="index" :title="item.title"
            @click="goRouter(item.id,item.img)">
            <img class="tx" src="../../../../assets/imgs/20190917010840.jpg" alt="" />
            <div class="article-info">
              <span class="title">{{ item.title }}</span>
              <p class="cont">{{ item.views }} views</p>
            </div>
          </li>
        </ul>
      </template>

    </TitleCard>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "vue";
import AsideLeftInfo from "./AsideLeftInfo.vue";
import TitleCard from '@/components/title-card/Index.vue';

type Props = {
  isShow: Boolean,
  isGreen: Boolean,
  homeInfo: [];
};
const { isGreen, isShow } = withDefaults(defineProps<Props>(), {

});
const enterType = reactive([{
  title: 'title',
  id: 1,
  img: "@/assets/imgs/20190917010840.jpg",
  views: 'stte'
}]);
const goRouter = (id: number, url: string) =>
{

};
</script>

<style scoped lang='scss'>
.article .item {
  display: flex;
  padding: 6px 8px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: $bg-page;
    border-radius: 5px;
  }
}

.tx {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 100%;
}

.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  font-size: 12px;
}

.title {
  box-sizing: border-box;
  width: 100%;
  padding-right: 20px;
  margin-bottom: 6px;
  color: $color-deep;
  font-size: 11px;
  line-height: 15px;
}

.cont {
  overflow: hidden;
  color: #c3ccd3;
}
</style>
