const getters={
    allData(state){
        return state;
    },
    filteredData(state){
        let response={...state};
        const checkType=(data)=>{
            console.log(data.type,data)
            return (data.type==state.type)||(state.type=='');
        }
        const checkSearch=(data)=>{
            let key=state.search.toLowerCase()
            return data.title.toLowerCase().includes(key)||
            data.introduction.toLowerCase().includes(key)||
            data.body.toLowerCase().includes(key)||
            key==''
        }
        response.data=response.data.filter(d=>checkType(d)&&checkSearch(d))
        if(state.sort){
            state.sort=='asc'&&response.data.sort((a, b) => a.date > b.date ? 1 : -1);
            state.sort=='dsc'&&response.data.sort((a, b) => a.date < b.date ? 1 : -1);              
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