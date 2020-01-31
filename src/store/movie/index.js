import {getNowMovies} from '@/api/api'
export default {
    state:{
        nowMovieList:[]
    },
    mutations:{
        getMutationsNowMovie(state,params){
            state.nowMovieList=params;
        }
    },
    actions:{
        async getActionsNowMovie({commit},params){
           let data = await getNowMovies(params)
           commit("getMutationsNowMovie",data.movieList)
        }
    },
    namespaced:true
}