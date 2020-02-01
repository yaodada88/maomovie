import {getCityList} from '@/api/api'

export default {
    namespaced:true,
    state:{
        cityList: JSON.parse(window.sessionStorage.getItem("cityList")) || [],
        hotList: JSON.parse(window.sessionStorage.getItem("hotList")) || [],
        cityNm:"北京",
        cityId:1
    },
    mutations:{
        getMutationsCityList(state,params){
            state.cityList=params.cityList
            state.hotList=params.hotList
        },
        handleMutationsCityTo(state,params){
            state.cityNm=params.nm;
            state.cityId=params.id;
        }
    },
    actions:{
        async getActionsCityList({commit}){
            let data = await getCityList();
            var city_list=[];
            var hot_list=[]
            //热门城市
            var hotCts=data.cts.slice(0,10);
            for(var i=0;i<hotCts.length;i++){
                hot_list.push({nm:hotCts[i].nm,id:hotCts[i].id});
            }
            //城市列表
            for(var i=0;i<data.cts.length;i++){
                var firstLetter = data.cts[i].py.slice(0,1).toUpperCase();
                if(toIndex(firstLetter)){
                    for(var j=0;j<city_list.length;j++){
                        if(city_list[j].index==firstLetter){
                            city_list[j].list.push({nm:data.cts[i].nm,id:data.cts[i].id});
                            break;
                        }
                    }
                }else{
                    city_list.push({index:firstLetter,list:[{nm:data.cts[i].nm,id:data.cts[i].id}]});
                }
            }

            // 判断当前首字符是否在city_list中存在
            function toIndex(firstLetter){
                for(var i=0;i<city_list.length;i++){
                    if(firstLetter==city_list[i].index){
                        return true;
                    }
                }
                return false;
            }
            
            //城市排序
            city_list.sort((a,b)=>{
                if(a.index>b.index){
                    return 1
                }else{
                    return -1
                }
            })
            window.sessionStorage.setItem("cityList",JSON.stringify(city_list));
            window.sessionStorage.setItem("hotList",JSON.stringify(hot_list));
            commit("getMutationsCityList",{cityList:city_list,hotList:hot_list});
        }
    }
   
}