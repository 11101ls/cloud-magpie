<template>
  <div class="title-box">
    <div class="sidetip relative text-14px w-4/5 h-30px t-16px" :class="{ 'bot-red': !isGreen }">
      <span :class="{ 'title': isGreen }">{{ title }}</span>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';

type Props = {
  isGreen?: Boolean;
  title: string;
};
const { title, isGreen = true } = withDefaults(defineProps<Props>(), {

});

console.log(isGreen, title);

</script>

<style scoped lang='scss'>
.title-box {
  width: 100%;
  background: #fff;
  border-radius: 15px;
  margin-top: 16px;
  padding-bottom: 20px;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);

  .sidetip {
    border-bottom: 1px solid #e8e8e8;
    margin: 0 16px;
    margin-bottom: 16px;
    text-indent: 8px;
    color: $color-deep
  }

  .bot-red::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 60px;
    height: 3px;
    background: $pink-avenderr;
    //  $nadeshiko-pink;
    border-radius: 10px;
  }

}

.title {
  position: relative;
  border-left: 3px solid $nadeshiko-pink;
  padding: 0 4px;
  font: 700 14px;
  text-indent: 6px;
  color: $color-black;
}
</style>
