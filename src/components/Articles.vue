<template>
  <div class="articles-container">
    <NavbarVue />
    <!-- inputs -->
    <div class="m-2 flex justify-center">
      <div class="m-2">
        <select
          name="type"
          class="select select-bordered w-full max-w-xs"
          id=""
          v-model="type"
        >
          <option value="">Pick type</option>
          <option
            :value="item"
            v-for="(item, key) in categoryOptions"
            v-bind:key="key"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form-control m-2">
        <div class="input-group">
          <input
            type="text"
            v-model="search"
            class="input input-bordered"
            placeholder="Search…"
          />
          <button class="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    Sort
    <button class="btn btn-outline m-2" @click="sortDesc">Recent</button>
    <button class="btn btn-outline m-2" @click="sortAsc">Older</button>
    <!-- articles -->
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <p v-if="filteredData.length < 1">No articles found 💩</p>
        <ArticleCard
          :article="item"
          v-for="(item, key) in filteredData"
          v-bind:key="key"
        />
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import NavbarVue from "@/components/common/Navbar.vue";
import FooterVue from "@/components/common/Footer.vue";
import ArticleCard from "./ArticleCard.vue";
import moment from "moment";
import data from "../data.json";

export default {
  name: "ArticlesVue",
  components: { NavbarVue, FooterVue, ArticleCard },
  data() {
    return {
      data: data,
      asc: true,
      desc: false,
      search: "",
      type: "",
    };
  },
  computed: {
    // map through article and pick out types(categories)
    categoryOptions: function () {
      return [...new Set(this.data.map((item) => item.type))];
    },
    filteredData: function () {
      return this.filterByTitle(this.filterByCategory(this.data));
    },
  },
  methods: {
    sortAsc: function () {
      this.asc = true;
      // set to opposite of asc
      this.desc = !this.asc;
      return this.data.sort((i, j) => moment(i.date) - moment(j.date));
    },
    sortDesc: function () {
      this.desc = true;
      // set to opposite of desc
      this.asc = !this.desc;
      return this.data.sort((i, j) => moment(j.date) - moment(i.date));
    },
    filterByCategory: function (data) {
      return data.filter((item) => {
        return item.type.toLowerCase().match(this.type.toLowerCase());
      });
    },
    filterByTitle: function (data) {
      return data.filter((item) => {
        return item.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.articles-container {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1366' height='768' preserveAspectRatio='none' viewBox='0 0 1366 768'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1116%26quot%3b)' fill='none'%3e%3cpath d='M1247.768%2c354.177C1269.411%2c354.07%2c1289.839%2c342.678%2c1300.068%2c323.605C1309.807%2c305.446%2c1305.34%2c283.964%2c1294.976%2c266.154C1284.685%2c248.468%2c1268.206%2c234.722%2c1247.768%2c233.725C1225.546%2c232.641%2c1203.13%2c241.949%2c1191.846%2c261.123C1180.42%2c280.539%2c1182.963%2c304.815%2c1194.568%2c324.125C1205.813%2c342.836%2c1225.938%2c354.285%2c1247.768%2c354.177' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1172.559707651228 257.71003882755883L1119.583504248666 103.37832962642383 1024.1406807375656 209.378323868486z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M640.9790276039561 458.345020486133L738.68206997263 621.3017671404481 821.7279149953582 477.4621442035918z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M210.64 430.75 a177.95 177.95 0 1 0 355.9 0 a177.95 177.95 0 1 0 -355.9 0z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1116'%3e%3crect width='1366' height='768' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}
</style>
