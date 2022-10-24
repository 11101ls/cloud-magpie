<script setup lang="ts">
import TabBar from '@/components/tab-bar/Index.vue';
</script>

<template>
    <!-- <el-scrollbar>
            <div class="man"> -->
 <div class="main">
    <!-- <Loading :isShowLoading="true"></Loading> -->
    <TabBar></TabBar>
    <router-view></router-view>
 </div>
    <!-- <router-view #default="{route,Component}">
    <transition :enter-active-class="`animate__animated animate__fadeIn animate__faster	`"
                                    :leave-active-class="'animate__animated animate__fadeOut animate__slower'">
                                    <component :is='Component'></component>
                                </transition>
                                <transition name="fade" mode="out-in">
                                    <component :is='Component'></component>
                                </transition>
                                </router-view>
                                </div>
                                </el-scrollbar> -->

</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.main{
    height: 110%;
    // min-width: 1400px;
}
</style>
