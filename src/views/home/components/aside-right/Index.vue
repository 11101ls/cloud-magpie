<template>
  <div>
    <TitleCard title="友情链接1" :isGreen="false">
      <template #content>
        <ul class="active">
          <li class="item" v-for="(item, index) in activeList" :key="index" :title="item.pathUrl"
            @click="goUrl(item.pathUrl)">
            <i class="el-icon-link">{{ item.name }}</i>
          </li>
        </ul>
      </template>
    </TitleCard>
    <TitleCard title="友情链接2" :isGreen="false">
      <template #content>
        <ul class="active">
          <li class="item" v-for="(item, index) in activeList" :key="index" :title="item.pathUrl"
            @click="goUrl(item.pathUrl)">
            <i class="el-icon-link">{{ item.name }}</i>
          </li>
        </ul>
      </template>
    </TitleCard>
    <TitleCard title="友情链接3" :isGreen="false">
      <template #content>
        <ul class="active">
          <li class="item" v-for="(item, index) in activeList" :key="index" :title="item.pathUrl"
            @click="goUrl(item.pathUrl)">
            <i class="el-icon-link">{{ item.name }}</i>
          </li>
        </ul>
      </template>
    </TitleCard>
    <TitleCard title="友情链接4" :isGreen="false">
      <template #content>
        <ul class="active">
          <li class="item" v-for="(item, index) in activeList" :key="index" :title="item.pathUrl"
            @click="goUrl(item.pathUrl)">
            <i class="el-icon-link">{{ item.name }}</i>
          </li>
        </ul>
      </template>
    </TitleCard>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';
import TitleCard from '@/components/title-card/Index.vue';
const activeList = reactive([
  {
    name: "GitHub",
    pathUrl: "https://github.com/leandrowhy",
    class: ["iconfont", "icon-github"],
  },
  {
    name: "bilibili",
    pathUrl: "https://space.bilibili.com/39710083",
    class: ["iconfont", "icon-bilibili-line"],
  },
]);
const goUrl = (path: string) =>
{
  window.open(path);
};
</script>

<style scoped lang='scss'>
.active {
  padding: 0 16px;

  .item {
    box-sizing: border-box;
    display: block;
    padding: 5px 12px;
    font-size: 12px;
    color: #768791;
    transition: all 0.4s ease;
    background: hsla(0, 0%, 93.3%, 0.44);
    border-radius: 6px;
    margin-bottom: 12px;
    cursor: pointer;

    i {
      font-size: 12px;

      &::before {
        padding-right: 5px;
      }
    }

    &:hover {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
