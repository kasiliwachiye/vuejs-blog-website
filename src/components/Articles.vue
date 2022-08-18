<template>
  <div>
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
          <option value="">Pick category</option>
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
    <button
      class="btn btn-outline m-2"
      @click="sortDesc"
    >
      Recent
    </button>
    <button
      class="btn btn-outline m-2"
      @click="sortAsc"
    >
      Older
    </button>
    <!-- articles -->
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
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

<style></style>
