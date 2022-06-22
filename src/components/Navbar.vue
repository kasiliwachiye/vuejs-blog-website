<template>
	<nav class="navbar">
		<div class="navbar__container container">
			<div class="navbar__head">
				<div class="navbar__icon-box">
					<Icon class="icon" :icon="['fas', 'newspaper']" />
				</div>
				<h1 class="navbar__title">Expat Magazine</h1>
			</div>
			<NavbarFilter />
		</div>
	</nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NavbarFilter from "@/components/NavbarFilter.vue";

/*
    Navigation and filter
*/

export default {
	name: "NavBar",
	components: {
		Icon: FontAwesomeIcon,
		NavbarFilter,
	},
};
</script>
