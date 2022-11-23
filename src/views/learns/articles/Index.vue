<template>
  <div class="articles w-full bg-#f4f5f7 pt-40px">
    <div class="articles-top fixed top-60px w-full z-6 bg-#f4f5f7">
      <ArticleSearch :article-list="tipsList" @searchRequest="searchRequest" />
    </div>
    <div class="contain flex  pb-50px">
      <ArticleMain :class="['contain-main']" :articleList="articleList" />
      <ArticleRight :homeInfo="[]" :is-show="true" :is-green="false" :class="['contain-right']" />
    </div>

  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref, onMounted } from 'vue';
import ArticleSearch from './components/article-search.vue';
import ArticleMain from './components/article-main.vue';
import ArticleRight from './components/article-right.vue';
let tipsList = reactive(
  [{ value: 'vue', link: 'https://github.com/vuejs/vue' },
  { value: 'element', link: 'https://github.com/ElemeFE/element' },
  { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
  { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
  { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
  { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
  { value: 'babel', link: 'https://github.com/babel/babel' }]);

const articleList = ref([{
  id: 1,
  img: '/src/assets/imgs/20190917010840.jpg',
  title: 'title',
  introduction: 'introduction',
  date: '1111-11-11',
  viewsNum: 1,
}, {
  id: 1,
  img: '/src/assets/imgs/20190917010840.jpg',
  title: 'title',
  introduction: 'introduction',
  date: '1111-11-11',
  viewsNum: 1,
}, {
  id: 1,
  img: '/src/assets/imgs/20190917010840.jpg',
  title: 'title',
  introduction: 'introduction',
  date: '1111-11-11',
  viewsNum: 1,
}, {
  id: 1,
  img: '/src/assets/imgs/20190917010840.jpg',
  title: 'title',
  introduction: 'introduction',
  date: '1111-11-11',
  viewsNum: 1,
}]);
const searchRequest = (obj: {}) =>
{
  console.log(obj, 'obj');

};
const getData = () =>
{
};
onMounted(() =>
{
  getData;
});
</script>

<style scoped lang='scss'>
// .articles {}

.contain {
  margin: 100px auto 0;
  max-width: 1300px;
  min-width: 1024px;
}

::v-deep(.contain-main) {
  flex: 1;
  background: #ffffff;
}

::v-deep(.contain-right) {
  margin-left: 16px;
  // background: #ffffff;
  width: 280px;
  z-index: 610;
}
</style>
