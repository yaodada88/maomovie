<template>
    <div>
        <Header />
    </div>
</template>
<script>
import {getNowMovies} from '@/api/api'
export default {
    name:"movie",
    async created(){
        let data =await getNowMovies();
        console.log(data);
        
    }
}
</script>