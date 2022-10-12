<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <div class="flex-grow-left" />
      <el-menu-item index="/home">LOGO</el-menu-item>
      <div class="flex-grow" />
      <!-- <el-menu-item index="/index">首页</el-menu-item> -->
      <template v-for="(routeItem,index) in routes" :key="index">
        <el-sub-menu :index="routeItem.path" v-if="routeItem.children">
          <template #title>{{routeItem.meta!.title}}</template>
          <el-menu-item :index="item.path" v-for="item in routeItem.children" :key="item.path">{{item.meta!.title}}</el-menu-item>
          
          <!-- <el-sub-menu index="2-4" v-if="item?.children">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu> -->
        </el-sub-menu>
        <el-menu-item :index="routeItem.path" v-else>{{routeItem.meta!.title}}</el-menu-item>
      </template>
     
    </el-menu>
  </div>
  
  <!-- <div class="h-6" /> -->
  
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const routes=router.options.routes



const activeIndex = ref('/index');
const handleSelect = (key: string, keyPath: string[]) =>
{
  console.log(key, keyPath);
};
</script> 
<style lang="scss" scoped>
.header{
    // display: flex;
    // align-items: center;
    .flex-grow-left {
        flex: .1;
      }
    .flex-grow{
      flex: .5;
    }
         
  }
  ::v-deep(.el-menu--horizontal>.el-menu-item),::v-deep(.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title),::v-deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title){
    border: none;
  }
</style>
