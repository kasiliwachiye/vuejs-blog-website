<template>
	<nav class="navbar">
		<div class="navbar__container container">
			<div class="navbar__head">
				<div class="navbar__icon-box">
					<Icon class="icon" :icon="['fas', 'newspaper']" />
				</div>
				<h1 class="navbar__title">Expat Magazine</h1>
			</div>
			<NavbarFilter v-if="filterShown" />
			<button v-else class="navbar__search" @click="() => (filterShown = true)">
				Show filters <Icon class="icon" :icon="['fas', 'list']" />
			</button>
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
	data() {
		return {
			filterShown: false,
		};
	},
};
</script>
