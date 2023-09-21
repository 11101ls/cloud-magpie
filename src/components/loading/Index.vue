<template>
  <!-- 小球穿梭放大 -->
  <div class="loading-ball-container" v-if="isShowLoading">
    <div class="loading-ball-first"></div>
    <div class="loading-ball-item"></div>
    <div class="loading-ball-item"></div>
    <div class="loading-ball-item"></div>
    <div class="loading-ball-item"></div>
    <div class="loading-ball-item"></div>
    <div class="loading-ball-item"></div>
    <div class="loading-ball-item"></div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';
type Props = {
  isShowLoading: Boolean;
};
const { isShowLoading = false } = withDefaults(defineProps<Props>(), {
});
</script>

<style scoped lang='scss'>
$count: 7;
$bgls: $orchid-pink, $nadeshiko-pink, $uranian-blue, $baby-blue-eyes, $pink-avenderr,
  $orchid-pink;

.loading-ball-container {
  margin: auto;
  position: relative;
  width: 10vmin;
  height: 10vmin;


}

.loading-ball-first,
.loading-ball-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $pink-avenderr;
  border-radius: 50%;
  transform: translate(-700%, 0);
  opacity: 0;
}

@for $i from 1 to $count {
  .loading-ball-item:nth-child(#{$i}) {
    animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
    background: nth($bgls, random(length($bgls)));
  }
}

.loading-ball-first {
  animation: scaleMove 3.5s infinite linear;
  z-index: 2;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }

  50% {
    opacity: 1;
    transform: translate(1vw, 0);
  }

  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }

  35% {
    opacity: 1;
    transform: scale(1);
  }

  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }

  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
</style>
