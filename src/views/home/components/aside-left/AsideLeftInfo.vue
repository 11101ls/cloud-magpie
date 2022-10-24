<template>
  <div class="aside-info bg-white rounded-15px overflow-hidden">
    <div class="clock w-full h-130px ">
      <div class="clockanm w-full h-full bg-black  bg-opacity-40 flex justify-center items-center">
        <span class="time text-white text-40px">{{ valdata }}</span>
      </div>
    </div>
    <div class="aside-left-title">LS的小破站</div>
    <div class="aside-left-tips">
      记录捡破烂途中日常所得
    </div>
    <div class="aside-left-types flex justify-center items-center">
      <div class="item relative box-border flex flex-col justify-evenly items-center flex-1 h-56px"
        v-for="(item,index) in tags" :key="index">
        <p class="title">{{ item }}</p>
        <span class="text">{{ index }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref, onMounted } from 'vue';
const valdata = ref();
// onMounted(() =>
// {
const tags = reactive(["文章", "动漫", "评论", "浏览"]);
let valDate = ref(0);
setInterval(() =>
{
  valdata.value = formatDate(new Date());

}, 1000);

// });
const formatDate = (date: Date) =>
{
  let hour = date.getHours().toString().padStart(2, "0");
  let min = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");
  return `${hour}:${min}:${second}`;
};
</script>

<style scoped lang='scss'>
.aside-info {
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);
}

.clock {
  background: url("@/assets/imgs/20190917010840.jpg");
  background-size: cover;

  .clockanm {
    .time {
      text-shadow: 0.8px 0 5px #333;
      // cursor: default;
      user-select: none;
    }
  }
}

.aside-left-title {
  color: $nadeshiko-pink;
  padding: 8px 16px;
  font-weight: 600;
}

.aside-left-tips {
  font-size: 12px;
  line-height: 18px;
  padding: 0 16px 10px;
}

.aside-left-types {
  .item {
    border-top: 1px solid #eee;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      width: 1px;
      height: 70%;
      background: #eee;
    }

    &:last-child::before {
      display: none;
    }
  }
}
</style>
