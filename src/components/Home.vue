<template>
	<div id="app">
		<Navbar />
		<NewsCard />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NewsCard from "@/components/NewsCard.vue";

/*
	Main app entry
*/

export default {
	name: "App",
	components: {
		Navbar,
		NewsCard,
	},
};
</script>
