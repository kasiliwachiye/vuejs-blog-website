const mutations={
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
}
export default mutations;