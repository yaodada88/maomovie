import {getNowMovies,getMovieMore,getSoonMovie,getMovieDetail} from '@/api/api'
export default {
    state:{
        nowMovieList: JSON.parse(window.sessionStorage.getItem("movieList")) || [],
        soonMovieList:[],
        detailMovie:JSON.parse(window.sessionStorage.getItem("detailMovie")) || []
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
        },
        getMutationMovieDetail(state,params){
            state.detailMovie=params;
        }
    },
    actions:{
        async getActionsNowMovie({commit},params){
           let data = await getNowMovies();
           window.sessionStorage.setItem("MovieList",JSON.stringify(data.movieList))
           commit("getMutationsNowMovie",data.movieList)
        },
        async getActionsMovieMore({commit}){
            let data = await getMovieMore();
            commit("getMutationsMovieMore",data.coming)
        },
        async getActionSoonMovie({commit}){
            let id = window.sessionStorage.getItem("cityId")
            let data = await getSoonMovie(id);
            commit("getMutationSoonMovie",data.coming )
        },
        async getActionMovieDetial({commit},params){
            let id=params.id;
            let data = await getMovieDetail(id);
            console.log(data)
            window.sessionStorage.setItem("detailMovie",JSON.stringify(data.detailMovie))
            commit("getMutationMovieDetail",data.detailMovie);
        }
    },
    namespaced:true
}