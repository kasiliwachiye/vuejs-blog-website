<template>
    <div class="autocomplete">
        <input v-model="search" @input="onChange" type="text" class="form-control" placeholder="Types" />
        <ul v-show="isOpen" class="autocomplete-results">
            <li v-for="(result, i) in results" :key="i" class="autocomplete-result" @click="setResult(result)">
                {{ result }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AutocompleteComponent',
    props: {
        items: {
            type: Array,
            required: false,
            default: () => [],
        },
    },
    data() {
        return {
            search: '',
            results: [],
            isOpen: false,
        };
    },
    methods: {
        filterResults() {
            this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
        },
        onChange() {
            this.filterResults();
            this.isOpen = true;
        },
        setResult(result){
            this.search = result;
            this.isOpen = false;
            this.$emit('valueChange',result)
        },
        handleClickOutside(event) {
            console.log("outside")
            if (!this.$el.contains(event.target)) {
                this.isOpen = false;
            }
        }
    },
}
</script>


<style scoped>

.autocomplete {
    position: relative;
}

.autocomplete-results {
    padding: 0;
    margin: 0;
    height: 120px;
    min-height: 1em;
    max-height: 6em;
    overflow: auto;
    position: absolute;
    z-index: 10;
    width:100%;
    color:white;
}

.autocomplete-result {
    background: rgba(0, 0, 0, 0.516);
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
    
}

.autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
}
/* width */
::-webkit-scrollbar {
    width: 0px;
}
</style>