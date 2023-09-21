<script setup lang="ts">
import Carousel from './components/carousel/Index.vue';
import AsideLeft from './components/aside-left/Index.vue';
import AsideCenter from './components/aside-center/Index.vue';
import AsideRight from './components/aside-right/Index.vue';
import { onMounted, ref } from 'vue';
let asideLeftRef = ref<HTMLElement>();
onMounted(() =>
{
    // console.log(asideLeftRef, 'asideLeftRef');
    // console.log(asideLeftRef.value!.getBoundingClientRect().top);

});



</script>

<template>
<div class="home">
    <Carousel></Carousel>
    <div class="main container flex w-3/4 min-w-1350px">
        <aside class="home-left w-260px" ref="asideLeftRef">
            <AsideLeft :isShow="true" :isGreen="false" :homeInfo="[]"></AsideLeft>
        </aside>
        <div class="home-center flex-1 mb-60px">
            <AsideCenter></AsideCenter>
        </div>
        <aside class="home-right w-320px">
            <AsideRight></AsideRight>
        </aside>

    </div>
</div>
</template>
<style lang="scss" scoped>
.home {
    background: #f4f5f7;

    // height: 2000px;
}

.home-left,
.home-right {
    display: inline-block;
    position: sticky;
    height: fit-content;
    top: -160px
}

.home-left {
    top: -135px;
}

.home-right {
    top: -280px;
}

.home-center {
    margin: 0 60px;
    overflow: unset;
}
</style>
