import { getAllArticle } from "@/services/article/ArticleService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store =new Vuex.Store({
    state:{
        data:[],
        type:'',
        search:'',
        sort:'',
        id:null
    },
    mutations:{
        setData(state,data){
            state.data=data;
        },
        setId(state,id){
            state.id=id;
        },
        setFilter(state,payload){
            if(payload.type)state.type=payload.type;
            if(payload.search)state.search=payload.search;
            if(payload.sort)state.sort=payload.sort;
        },
    },
    actions:{
        async action_load_data({commit}){
            try{
                const response=await getAllArticle();
                commit('setData',response.data)
            }catch(error){
                alert('oups!500 internal error')
            }
        },
        action_set_id({commit},payload){
            commit('setId',payload)
        },
        action_update_filter({commit},payload){
            commit('setFilter',payload);            
        }
    },
    getters:{
        allData(state){
            return state;
        },
        filteredData(state){
            let response={...state};
            if(state.type!=''){
                response.data=response.data.filter(d=>d.type==state.type)
            }
            if(state.search){
                let key=state.search.toLowerCase()
                response.data=response.data.filter(d=>(d.title.toLowerCase().includes(key)||
                d.introduction.toLowerCase().includes(key)||
                d.body.toLowerCase().includes(key)))
            }
            if(state.sort){
                state.sort=='asc'&&response.data.sort((a, b) => a.name > b.name ? 1 : -1);
                state.sort=='dsc'&&response.data.sort((a, b) => a.name < b.name ? 1 : -1);              
            }
            return response;
        },
        oneArticle(state){
            return state.data.find(a=>a.id==state.id);
        },
        types(state){
            return state.data.reduce((previous,current)=>{
                if(!previous.includes(current.type)) previous.push(current.type)
                return previous
            },[])
        }
        
    },
    modules:{

    }
});
export default store;