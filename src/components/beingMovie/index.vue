<template>
<BScroll ref="movieWrapper">
  <div class="movieList movieTop">
    <Loading  v-if="this.loadingFlag"/>
    <div class="movieItem" 
    v-for="(item,index) in movieList" 
    :key="index"
    @tap="handleToPath({id:item.id,nm:item.nm})">
      <div class="moviePic">
        <img :src="item.img | toPath('128.180')" />
      </div>
      <div class="movieDes">
        <div class="movieInfo">
          <h2>{{item.nm}}</h2>
          <p>
            观众评:
            <span class="movieSc">{{item.sc}}</span>
          </p>
          <p class="star">主演: <span>{{item.star}}</span></p>
          <p>{{item.showInfo}}</p>
        </div>
        <div :class="item.globalReleased?'movieBtn':'movieBtnTo '">{{item.globalReleased?"购票":"预售"}}</div>
      </div>
    </div>
  </div>
  
  </BScroll>
 
</template>
<script>
import Vuex from 'vuex'
export default {
  name: "being",
  data() {
    return {
      loadingFlag:true
    }
  },

  computed:{
    ...Vuex.mapState({
      movieList:state=>state.movie.nowMovieList
    })
  },
  watch: {
    movieList(){
      this.$refs.movieWrapper.update();
    }
  },
  methods:{
    handleToPath(obj){
      this.$router.push("/movieDetail");
      this.$store.dispatch("movie/getActionMovieDetial",obj)
    }
  },
  mounted(){
    this.$refs.movieWrapper.getMovieMore();
   
  },
  updated() {
     this.$refs.movieWrapper.getih();
      this.loadingFlag=false;
  },
};
</script>
<style lang="scss">
.movieList{
  background: #fff;
  margin-top: .56rem;
  padding-bottom: 1.8rem;
}
.movieItem {
  height: 1.5rem;
  padding-left: 0.2rem;
  width: 4.5rem;
  display: flex;
  align-items: center;
  .moviePic {
    width: 1.1rem;
    height: 1.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .movieDes {
    margin-left: 0.1rem;
    padding: 0.12rem 0;
    height: 0.9rem;
    width: 100%;
    height: 1.25rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    color: #333;
    align-items: center;
    .movieInfo {
      h2 {
        line-height: 0.32rem;
        margin-bottom: 0.07rem;
        font-size: .23rem;
        font-weight: 700;
      }
      p{
          font-size: .17rem;
          line-height: .28rem;
      }
      .star{
        width: 2.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .movieSc{
        font-weight: 700;
        color: #faaf00;
        font-size: .19rem;
      }
    }
    .movieBtn{
        width: .65rem;
        height: .4rem;
        background:#e54847;
        color:#fff;
        font-size: .17rem;
        text-align: center;
        line-height: .4rem;
        border-radius: 5px;
    }
    .movieBtnTo{
      width: .65rem;
        height: .4rem;
        background:#3c9fe6;
        color:#fff;
        font-size: .17rem;
        text-align: center;
        line-height: .4rem;
        border-radius: 5px;
    }
  }
}
</style>