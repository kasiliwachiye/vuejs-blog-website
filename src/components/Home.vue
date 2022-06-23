<template>
	<div id="app">
		<Navbar />
		<NewsList />
		<SocialArea />
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";
import NewsList from "@/components/NewsList.vue";
import SocialArea from "@/components/SocialArea.vue";

/*
	Main app entry
*/

export default {
	name: "App",
	components: {
		Navbar,
		NewsList,
		SocialArea,
	},
	methods: { ...mapActions(["getNews"]) },
	created() {
		this.getNews();
	},
};
</script>
