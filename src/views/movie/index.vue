<template>
  <div class="movie page">
    <Header />
    <div class="container">
      <div class="nav">
        <router-link tag="div" class="city" to="/city">北京</router-link>
        <div class="movieToggle">
          <router-link tag="div" to="being">正在热映</router-link>
          <router-link tag="div" to="soon">即将上映</router-link>
        </div>
        <router-link tag="div" class="search" to="/search">
          <i class="iconfont">&#xe628;</i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "movie",
  created() {
    this.getNowMovies();
  },
  methods: {
    ...Vuex.mapActions({
      getNowMovies: "movie/getActionsNowMovie"
    })
  }
};
</script>
<style lang="scss" scoped>
$color: #e54847;
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 0.64rem;
  padding-bottom: 0.6rem;
  overflow: auto;
  .nav {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.56rem;
    position: fixed;
    left:0;
    top: .64rem;
    width: 100%;
    font-size: 0.2rem;
    color: #666;
    background: #fff;
    z-index: 9;
    .city {
      position: absolute;
      left: 0.2rem;
    }
    .search {
      position: absolute;
      right: 0.2rem;
      i {
        font-size: 0.24rem;
        font-weight: 900;
        color: $color;
      }
    }
    .movieToggle {
      width: 2rem;
      display: flex;
      justify-content: space-between;
      .router-link-active {
        color: $color;
        border-bottom: 4px solid $color;
      }
      div {
        font-weight: 900;
        text-align: center;
        width: 100%;
        line-height: 0.56rem;
      }
    }
  }
}
.movieTop{
  padding-top: .56rem;
}
</style>