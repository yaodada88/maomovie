import http from "@/utils/http.js"

export const getNowMovies = ()=>http("get","/api/ajax/movieOnInfoList?token=")