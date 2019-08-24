<template>
  <div id="app">
    <Header />
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- keep-alive 加载优化  -->
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>


<style>
</style>
