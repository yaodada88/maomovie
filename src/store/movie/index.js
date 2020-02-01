import {getNowMovies,getMovieMore} from '@/api/api'
export default {
    state:{
        nowMovieList: JSON.parse(window.sessionStorage.getItem("movieList")) || []
    },
    mutations:{
        getMutationsNowMovie(state,params){
            state.nowMovieList=params;
        },
        getMutationsMovieMore(state,params){
            state.nowMovieList=[...state.nowMovieList,...params];
        }
    },
    actions:{
        async getActionsNowMovie({commit},params){
           let data = await getNowMovies(params);
           window.sessionStorage.setItem("MovieList",JSON.stringify(data.movieList))
           commit("getMutationsNowMovie",data.movieList)
        },
        async getActionsMovieMore({commit}){
            let data = await getMovieMore();
            commit("getMutationsMovieMore",data.coming)
        }
    },
    namespaced:true
}