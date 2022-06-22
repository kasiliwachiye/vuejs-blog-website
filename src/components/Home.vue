<template>
	<div id="app">
		<Navbar />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

/*
	Main app entry
*/

export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>
