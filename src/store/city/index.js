import {getCityList} from '@/api/api'

export default {
    namespaced:true,
    state:{
        cityList:[],
        hotList:[]
    },
    mutations:{
        getMutationsCityList(data,params){
            data.cityList=params.cityList
            data.hotList=params.hotList
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
                hot_list.push(hotCts[i].nm);
            }
            //城市列表
            for(var i=0;i<data.cts.length;i++){
                var firstLetter = data.cts[i].py.slice(0,1).toUpperCase();
                if(toIndex(firstLetter)){
                    for(var j=0;j<city_list.length;j++){
                        if(city_list[j].index==firstLetter){
                            city_list[j].list.push(data.cts[i].nm);
                            break;
                        }
                    }
                }else{
                    city_list.push({index:firstLetter,list:[data.cts[i].nm]});
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
            commit("getMutationsCityList",{cityList:city_list,hotList:hot_list});
        }
    }
   
}