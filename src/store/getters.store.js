const getters={
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
    
}
export default getters;