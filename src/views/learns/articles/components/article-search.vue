<template>
  <div class="search min-w-1024px max-w-1300px">
    <div class="search-main ml-100px">
      <div class="search-top flex items-center">
        <div class="search-input ">
          <el-autocomplete v-model="state" :fetch-suggestions="querySearch" clearable class="inline-input"
            placeholder="Search" @select="handleSelect" @input="search()" />
        </div>
        <div class="search-sort">

        </div>
      </div>
      <ul class="search-type">
        <li v-for="(item,index) in typeList" :key="index" @click="handleSelectType(item,index)"
          :class="{ active: activeIndex === index }">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref, onMounted, computed } from 'vue';
import { debounce } from '@/utils/utilsFn';
type Props = {
  articleList: { value: string; link: string; }[];
};
const { articleList } = withDefaults(defineProps<Props>(), {

});

const state = ref('');
const sortBom = ref(0);

// Todo
const typeList = ['All', '1'];
const activeIndex = ref(0);
const activeType = ref('All');
const restaurants = computed(() =>
{
  return articleList;
});
const handleSelectType = (type: string, index: number) =>
{
  activeIndex.value = index;
  activeType.value = type;
  state.value = type;
  searchRequest(state.value, sortBom.value);
};

const searchRequest = (key: string, sort: number) =>
{
  // emit
};

const search = debounce(function ()
{
  if (state.value === '') {
    activeIndex.value = 0;
    activeType.value = 'All';
  }
  searchRequest(state.value, sortBom.value);
});


const handleSelect = (item: any) =>
{
  console.log(item);
};
const querySearch = (queryString: string, cb: any) =>
{
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};
const createFilter = (queryString: string) =>
{
  return (restaurant: any) =>
  {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

</script>

<style scoped lang='scss'>
.search {
  margin: 30px auto 10px;

  .search-input {
    grid-area: input;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 40px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    background: #fff;
    border: 1px solid #eee;
    width: 660px;

    ::v-deep(.el-input__inner) {
      box-sizing: border-box;
      width: 600px;
      padding: 0;

    }

    ::v-deep(.el-input__wrapper) {
      box-shadow: 0 0px 0px transparent;
    }
  }

  .search-type {
    display: flex;
    margin-top: 20px;

    li {
      display: inline-block;
      padding: 0px 14px;
      border-radius: 40px;
      margin-right: 12px;
      transition: all 0.4s ease;
      cursor: pointer;
      font-size: 14px;
      user-select: none;

      &:hover {
        background: $nadeshiko-pink;
        box-shadow: 0 0 10px $nadeshiko-pink;
        color: #fff;
      }
    }

    .active {
      background: $nadeshiko-pink;
      box-shadow: 0 0 10px $nadeshiko-pink;
      color: #fff;
    }
  }
}
</style>
