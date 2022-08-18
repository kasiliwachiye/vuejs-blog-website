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
        <div
          class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            class="object-cover w-full h-64"
            alt=""
          />
          <div class="p-5 border border-t-0">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                class="transition-colors duration-200 text-primary hover:text-primary-focus"
                aria-label="Category"
                title="traveling"
                >traveling</a
              >
              <span class="text-gray-600"> — 28 Dec 2020</span>
            </p>
            <router-link
              to="/articledetails/:id"
              aria-label="Category"
              title="Visit the East"
              class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-neutral"
              >Visit the East</router-link
            >
            <p class="mb-2 text-gray-700 text-xs">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <router-link
              to="/articledetails/:id"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-primary-focus"
              >Read more</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import NavbarVue from "@/components/common/Navbar.vue";
import FooterVue from "@/components/common/Footer.vue";

export default {
  name: "ArticlesVue",
  components: { NavbarVue, FooterVue },
};
</script>

<style></style>
