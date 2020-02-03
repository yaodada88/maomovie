<template>
  <div>
    <Header :title="detailMovie.nm">
      <i class="iconfont" @touchstart="back">&#xe601;</i>
    </Header>
    <div class="detailWrapper">
      <div class="movie-filter"></div>
      <div class="poster-bg" :style="{background:'url('+detailMovie.videoImg+')'}"></div>
      <div class="movieDetail">
        <div class="poster">
          <img :src="detailMovie.img | toPath('128.180')" />
        </div>
        <div class="content">
          <div class="contentTit line-ellipsis">{{detailMovie.nm}}</div>
          <div class="title-en-name line-ellipsis">{{detailMovie.enm}}</div>
          <div class="score line-ellipsis">
            {{detailMovie.sc}}
            <span class="snum">({{detailMovie.snum}}人评)</span>
          </div>
          <div class="type line-ellipsis">
            <span>{{detailMovie.cat}}</span>
            <div class="type-group">
            </div>
          </div>
          <div class="src line-ellipsis"><span>{{detailMovie.fra}}</span>/<span>{{detailMovie.dur}}</span> 分钟</div>
          <div class="pubDesc line-ellipsis">{{detailMovie.pubDesc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "movieDetail",
  created() {
    console.log(this.detailMovie);
  },
  computed: {
    ...Vuex.mapState({
      detailMovie: state => state.movie.detailMovie
    })
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
.detailWrapper {
  margin-top: 0.64rem;
  height: 2.4rem;
  position: relative;
  cursor: pointer;
  .movie-filter {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #333;
  }
  .poster-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.55;
  }
  .movieDetail {
    height: 2rem;
    padding: 0.24rem 0.32rem 0.24rem 0.2rem;
    display: flex;
    .poster {
      img {
        width: 1.5rem;
        height: 1.9rem;
        box-sizing: border-box;
      }
    }
    .content {
      overflow-x: hidden;
      margin-left: .2rem;
      line-height: 1;
      color: #fff;
      -webkit-box-flex: 1;
      flex: 1;
      .contentTit {
        font-size: 0.28rem;
        margin-top: 2px;
        font-weight: 700;
      }
      .line-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .title-en-name {
        margin-top: 0.14rem;
        font-size: 0.16rem;
        color: #fff;
        opacity: 0.8;
      }
      .score {
        font-size: 0.22rem;
        font-weight: 700;
        color: #fc0;
        margin-top: 0.14rem;
      }
      .snum,
      .type,.src,.pubDesc {
        margin-top: 0.14rem;
        font-size: 0.15rem;
        color: #fff;
        opacity: 0.8;
        .type-group {
          display: inline-block;
          width:.5rem;
          opacity: 0.85;
        }
      }
    }
  }
}
.type > span {
  vertical-align: top;
}
</style>