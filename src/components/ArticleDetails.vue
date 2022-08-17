<template>
  <div>
    <NavbarVue />
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p
            class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary"
          >
            News
          </p>
        </div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          The quick, brown fox jumps over a lazy dog
        </h2>
        <p class="text-base text-gray md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div class="mx-auto lg:max-w-2xl">
        <div
          class="relative w-full transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <p class="text-base mt-5 text-gray md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
    </div>
    <FooterVue />
  </div>
</template>
<script>
import NavbarVue from "./common/Navbar.vue";
import FooterVue from "./common/Footer.vue";
export default {
  name: "ArticleDetails",
  components: { NavbarVue, FooterVue },
};
</script>
<style></style>
