<template>
  <div id="app">
    <router-view />
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "./common/tabbar";
export default {
  components: {
    Tabbar
  }
};
</script>
<style lang="scss">
</style>
