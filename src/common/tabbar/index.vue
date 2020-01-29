<template>
  <div id="footer">
    <ul>
      <Router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </Router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabbar: [
        {
          title: "电影",
          path: "/movie",
          icon: "&#xe607;"
        },
        {
          title: "影院",
          path: "/cinema",
          icon: "&#xe66a;"
        },
        {
          title: "我的",
          path: "/mine",
          icon: "&#xe60d;"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
    $color:#e54847;
    #footer{
        width: 100%;
        height: 0.6rem;
        position: fixed;
        left:0;
        bottom: 0;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: .5px solid #d8d8d8;

            li{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: #696969;
                font-size: 0.2rem;
            }
        }
    }
      #footer>ul>.router-link-active{
          color: $color;
      }
    #footer>ul>li>span{
        display: block;
        text-align: center;
    }   
    #footer>ul>li>i{
        font-size: 0.3rem;
        text-align: center;
    }
</style>