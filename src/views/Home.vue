<template>
	<NewsList />
</template>

<script>
import NewsList from "@/components/NewsList.vue";

/*
	Main app entry
*/

export default {
	name: "App",
	components: {
		NewsList,
	},
};
</script>
