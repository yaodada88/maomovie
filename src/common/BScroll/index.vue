<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            tap:true,
            pullUpLoad:true
        })
    },
    methods:{
        handleTo(t){
            this.scroll.scrollTo(0,-t);
        },
        getMovieMore(){
            this.scroll.on("pullingUp",()=>{
                this.$store.dispatch("movie/getActionsMovieMore")
            })
        },
        update(){
            this.scroll.finishPullUp();
        },
        getih(){
            this.scroll.refresh();
        }
    }
}
</script>
<style scoped>
    .wrapper{
        height: 100%;
    }
</style>