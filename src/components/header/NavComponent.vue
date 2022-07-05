<template>
    <nav class="navbar navbar-expand-lg sticky-top shadow-xs navbar-light bg-light">
        <router-link to="/">
            <img src="../../assets/images/logo.png" id="logo" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" v-if="$route.name=='home'">
            <ul class="navbar-nav ml-auto">
                <li class="d-flex justify-contnent-center align-items-center mr-5">
                    <p id="filter">Filter: </p>
                </li>
                <li class="nav-item mr-2 d-flex align-items-center my-2">
                    <p id="calendar" :class="sort?'active':'inactive'">
                        <i class="fa fa-arrow-up" v-if="sort=='asc'"></i>
                        <i class="fa fa-arrow-down" v-if="sort=='dsc'"></i>
                        <i class="fa fa-calendar fa-2x" @click="sortChange"></i>
                    </p>
                </li>
                <li class="nav-item ml-2 my-2">
                    <auto-complete-component :items="types" @valueChange="typeChange" />
                </li>
                <li class="nav-item ml-2 my-2">
                    <div class="form-group">
                        <input type="text" v-model="search" @keypress="searchChange" name="search" id="search"
                            placeholder="Search here" class="form-control">
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AutoCompleteComponent from './AutoCompleteComponent.vue'
export default {
  components: {AutoCompleteComponent },
  data(){
    return {
        type:null,
        search:null,
        sort:null
    }
  },
  methods:{
    ...mapActions(['action_update_filter']),
    typeChange(value){
        console.log(value)
        this.action_update_filter({type:value,search:this.search,sort:this.sort})
    },
    searchChange() {
        console.log(this.search)
        this.action_update_filter({ type: this.type, search: this.search, sort: this.sort })
    },
    sortChange() {
        if(this.sort==null) this.sort='asc'
        else this.sort=this.sort=='asc'?'dsc':'asc'
        console.log(this.sort)
        this.action_update_filter({ type: this.type, search: this.search, sort: this.sort })
    }
  },
  computed:{
      ...mapGetters(['types','filteredData'])
  }
}
</script>

<style>


#logo{
    width: 100px;
}
#filter{
    color: teal;
    font-weight: bold;
}
.active{
    color: teal;
    cursor: pointer;
}
.inactive{
    color:grey;
    cursor: pointer;
}
</style>