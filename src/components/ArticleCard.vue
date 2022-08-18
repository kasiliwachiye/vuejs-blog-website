<template lang="">
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
</template>
<script>
export default {
  name: 'ArticleCArd'
};
</script>
<style lang="">
</style>
