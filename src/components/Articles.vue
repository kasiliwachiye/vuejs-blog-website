<template>
  <div>
    <NavbarVue />
    <!-- inputs -->
    <div class="m-2 flex justify-center">
      <div class="m-2">
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Pick category</option>
          <option>News</option>
          <option>Features</option>
          <option>Interviews</option>
        </select>
      </div>
      <div class="form-control m-2">
        <div class="input-group">
          <input
            type="text"
            placeholder="Search…"
            class="input input-bordered"
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
    <!-- articles -->
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <ArticleCard  />
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import NavbarVue from "@/components/common/Navbar.vue";
import FooterVue from "@/components/common/Footer.vue";
import ArticleCard from "./ArticleCard.vue";

export default {
  name: "ArticlesVue",
  components: { NavbarVue, FooterVue, ArticleCard },
};
</script>

<style></style>
