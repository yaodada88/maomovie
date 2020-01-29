<template>
    <div class="header">
        <slot></slot>
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        }
    }
}
</script>
<style lang="scss">
     $color:#e54847;
     .header{
         width: 100%;
         height: 0.64rem;
         background: $color;
         display: flex;
         justify-content: center;
         align-items: center;
         position: fixed;
         top:0;
         left:0;
         color:#fff;
         p{
             font-size: 0.25rem;
         }
         i{
             position: absolute;
             left:0.2rem;
             font-size: .3rem;
         }
     }
</style>