<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

    <Tabbar v-if="this.$route.meta.tabbarFlag" />
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
<style>
#app,.page{
  height: 100%;
}
</style>
