<template>
  <div class="article-details-container">
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
            v-html="article.type"
          ></p>
        </div>
        <h2
          class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto uppercase title-text"
          v-html="article.title"
        ></h2>
        <p
          class="text-base text-gray md:text-lg intro-text"
          v-html="article.introduction"
        ></p>
        <p class="text-gray-600 date-text" v-html="article.date"></p>
      </div>
      <div class="mx-auto lg:max-w-2xl">
        <div
          class="relative w-full transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            :src="article.images"
            alt=""
          />
        </div>
        <p
          class="text-base mt-5 text-gray md:text-lg body-text"
          v-html="article.body"
        ></p>
      </div>
    </div>
    <FooterVue />
  </div>
</template>
<script>
import NavbarVue from "./common/Navbar.vue";
import FooterVue from "./common/Footer.vue";
import data from "../data.json";

export default {
  name: "ArticleDetails",
  components: { NavbarVue, FooterVue },
  data() {
    return {
      id: this.$route.params.id,
      data: data,
      article: {},
    };
  },
  created() {
    this.article = this.data.filter((item) => {
      return item.id == this.id;
    });
    this.article = this.article[0];
    console.log(this.article);
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Neue Haas Display Light";
  src: url(../fonts/NeueHaasDisplayLight.ttf);
}

.article-details-container {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1366' height='768' preserveAspectRatio='none' viewBox='0 0 1366 768'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1104%26quot%3b)' fill='none'%3e%3cpath d='M630.5725093590693 344.81128618442114L623.9662162495124 155.63180343796972 434.786733503061 162.23809654752657 441.39302661261786 351.41757929397795z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M143.93222376566118 264.98568887343595L197.66728004861616 380.2208889462034 312.90248012138363 326.4858326632484 259.1674238384286 211.25063259048096z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1087.3642064558533 507.21853100016733L1120.0230902541566 354.28737186789795 989.2959802481428 394.25466029515786z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M365.8153734061058 413.14311430780197L385.8078820601514 526.5262651660403 545.8863540204861 439.8459267558526z' fill='rgba(194%2c 223%2c 255%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1104'%3e%3crect width='1366' height='768' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}

.date-text {
  text-align: right;
}

.intro-text {
  text-align: left;
}

.body-text {
  font-family: "Neue Haas Display Light";
  text-align: left;
}
</style>
