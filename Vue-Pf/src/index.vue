<!-- 나의 메인 페이지 -->
/
<template>
  <div id="portfolio">
    <h1>
      김가윤
    </h1>
  </div>
</template>
<script>
import HelloWorld from './components/pretendard.vue';

export default {
  name: 'portfolio',
  components: {
    pretendard,
  },
};
</script>

<style>
#portfolio {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;

  margin: 0;
  padding: 0;
  
}
</style>
