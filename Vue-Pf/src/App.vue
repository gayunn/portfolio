<!-- 나의 메인 페이지 -->
<template>
  <!-- template 내 태그를 div로 한번 묶어준다. -->
  <div class="section-pf">
    <section class="main">
      <div class="header"></div>
      <div class="contents"></div>
    </section>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'app',
  data() {
    return {
      price1: 60,
      price2: 100,
    };
  },
};
</script>

<!-- style -->
<style></style>
