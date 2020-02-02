<template>
  <div class="movieTop">
    <div class="soonMovie">
      <p class="soonTitle">近期最受期待</p>
      <div class="soonMovieList">
        <div class="soonMovieItem" v-for="(item,index) in soonMovie" :key="index">
          <div class="soonMovieImg">
            <img :src="item.img | toPath('128.180')" />
            <span class="wish-bg"></span>
            <span class="wish">
              <span class="wish-num">{{item.wish}}</span>人想看
            </span>
          </div>
          <h5 class="line-ellipsis">{{item.nm}}</h5>
          <p class="soonData">{{item.comingTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "soon",
  created() {
    this.getSoonMovie();
  },
  computed: {
    ...Vuex.mapState({
      soonMovie: state => state.movie.soonMovieList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getSoonMovie: "movie/getActionSoonMovie"
    })
  }
};
</script>
<style lang="scss" scoped>
.soonMovie {
  padding: 0.15rem 0;
  padding-left: 0.2rem;
  background: #fff;
  margin-bottom: 0.12rem;
  font-size: 0.18rem;
  color: #333;
  .soonTitle {
    margin-bottom: 0.15rem;
  }
  .soonMovieList {
    overflow: scroll;
    white-space: nowrap;
    
    .soonMovieItem {
      display: inline-block;
      width: 1.15rem;
      overflow: hidden;
      margin-right: 0.1rem;
      .soonMovieImg {
        width: 1.15rem;
        height: 1.55rem;
        position: relative;
        margin-right: 6px;
        background-color: #e1e1e1;
        background-size: 100% 100%;
        img {
          width: 100%;
          height: 100%;
        }
        .wish-bg {
          display: inline-block;
          width: 100%;
          height: 0.4rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background-image: -webkit-linear-gradient(
            top,
            rgba(77, 77, 77, 0),
            #000
          );
          background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
        }
        .wish {
          position: absolute;
          left: 0.08rem;
          bottom: 4px;
          color: #faaf00;
          font-size: 0.14rem;
          font-weight: 600;
        }
      }
      .line-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.17rem;
        color: #222;
        margin: 6px  0;
      }
      .soonData{
          color: #999;
          font-size: .14rem;
      }
    }
  }
}
</style>