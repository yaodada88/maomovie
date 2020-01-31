<template>
  <div class="city">
    <BScroll ref="bscroll">
      <div>
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_item" v-for="(item,index) in hotList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="city_list" ref="city_list">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <h2 class="city_item_title">{{item.index}}</h2>
            <div class="city_item_list" v-for="(list,idx) in item.list" :key="idx">
              <div class="city_item_index">{{list}}</div>
            </div>
          </div>
        </div>
      </div>
    </BScroll>
    <div class="city_index">
      <ul>
        <li v-for="(item,index) in cityList" :key="index" @touchstart="handleTo(index)">{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "city",
  created() {
    this.getCityList();
  },
  computed: {
    ...Vuex.mapState({
      hotList: state => state.city.hotList,
      cityList: state => state.city.cityList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getCityList: "city/getActionsCityList"
    }),
    handleTo(index){
        let top= this.$refs.city_list.getElementsByTagName("h2")[index].offsetTop;
        this.$refs.bscroll.handleTo(top);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 10rem;
}
.city,
.city_list {
  background: #ebebeb;
  height: 100%;
  font-size: 0.18rem;
  .hot_title,
  .city_item_title {
    padding-left: 0.2rem;
    line-height: 0.4rem;
  }
  .hot_city_list,
  .city_item_list {
    background: #f5f5f5;
    padding-bottom: 0.1rem;
    padding-right: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    .hot_city_item {
      border: 1px solid #e6e6e6;
      width: 1.2rem;
      height: 0.41rem;
      background: #fff;
      border-radius: 4px;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
      text-align: center;
      line-height: 0.41rem;
    }
  }
}
.city_item_index {
  line-height: 0.55rem;
  height: 0.55rem;
  margin-left: 0.2rem;
  width: 100%;
  border-bottom: 2px solid #c8c7cc;
}
.city_index {
  position: fixed;
  right: 0;
  top: 1.4rem;
  color: #333;
}
.city_index > ul > li {
  padding: 4px;
}
</style>