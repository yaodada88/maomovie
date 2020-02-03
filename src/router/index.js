import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from './movie'
import Cinema from './cinema'
import Mine from './mine';
import City from './city';
import Search from './search'
import MovieDetail from './movieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/movie"
  },
  Movie,
  Cinema,
  Mine,
  City,
  Search,
  MovieDetail,
  {
    path:"**",
    redirect:"/movie"
  }
]

const router = new VueRouter({
  routes
})

export default router
