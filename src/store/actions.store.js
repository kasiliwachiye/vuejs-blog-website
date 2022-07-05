import { getAllArticle } from "@/services/article/ArticleService";

const actions={
    async action_load_data({commit}){
        try{
            const response=await getAllArticle();
            commit('setData',response.data)
        }catch(error){
            alert('oups! server error')
        }
    },
    action_set_id({commit},payload){
        commit('setId',payload)
    },
    action_update_filter({commit},payload){
        commit('setFilter',payload);            
    }
}
export default actions;