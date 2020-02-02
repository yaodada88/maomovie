import http from "@/utils/http.js"

export const getNowMovies = ()=>http("get","/api/ajax/movieOnInfoList?token=")

export const getCityList = ()=>http("get","/api/dianying/cities.json");

export const getMovieMore=()=>http("get","/api/ajax/moreComingList?token=&movieIds=1228869%2C1237279%2C341823%2C1261203%2C1213293%2C346409%2C336934%2C1279731%2C1196202%2C1298827&optimus_uuid=F6D51CF02EED11EA9F6DDDEEE44C2ACB4C7577FED76941C9A7B326169020106E&optimus_risk_level=71&optimus_code=10")

export const getSoonMovie=(id)=>http("get","/api/ajax/mostExpected?ci="+id+"&limit=10&offset=0&token=")