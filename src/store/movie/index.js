import {getNowMovies,getMovieMore,getSoonMovie} from '@/api/api'
export default {
    state:{
        nowMovieList: JSON.parse(window.sessionStorage.getItem("movieList")) || [],
        soonMovieList:[]
    },
    mutations:{
        getMutationsNowMovie(state,params){
            state.nowMovieList=params;
        },
        getMutationsMovieMore(state,params){
            state.nowMovieList=[...state.nowMovieList,...params];
        },
        getMutationSoonMovie(state,params){
            state.soonMovieList=params;
        }
    },
    actions:{
        async getActionsNowMovie({commit},params){
           let data = await getNowMovies();
           window.sessionStorage.setItem("MovieList",JSON.stringify(data.movieList))
           commit("getMutationsNowMovie",data.movieList)
           console.log(data)
        },
        async getActionsMovieMore({commit}){
            let data = await getMovieMore();
            commit("getMutationsMovieMore",data.coming)
        },
        async getActionSoonMovie({commit}){
            let id = window.sessionStorage.getItem("cityId")
            let data = await getSoonMovie(id);
            commit("getMutationSoonMovie",data.coming )
        }
    },
    namespaced:true
}