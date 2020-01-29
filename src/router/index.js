import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from './movie'
import Cinema from './cinema'
import Mine from './mine'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/movie"
  },
  Movie,
  Cinema,
  Mine,
  {
    path:"**",
    redirect:"/movie"
  }
]

const router = new VueRouter({
  routes
})

export default router
