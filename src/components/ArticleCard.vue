<template>
  <div
    class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
  >
    <img
      :src="article.images"
      v-html="article.images"
      class="object-cover w-full h-64"
      alt=""
    />
    <div class="p-5 border border-t-0">
      <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
        <a
          class="transition-colors duration-200 text-primary hover:text-primary-focus"
          aria-label="Category"
          v-html="article.type"
          ></a
        >
        <span class="text-gray-600" > — {{ article.date }}</span>
      </p>
      <router-link
        to="/articledetails/:id"
        aria-label="Title"
        v-html="article.title"
        class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-neutral"
        ></router-link
      >
      <p class="mb-2 text-gray-700 text-xs" v-html="article.introduction">
      </p>
      <router-link
        :to="'/articledetails/' + article.id"
        aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-primary-focus"
        >Read more</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleCArd',
  props: ['article'],
};
</script>
<style>
</style>
