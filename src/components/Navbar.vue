<template>
	<nav class="navbar">
		<div class="navbar__container container">
			<!-- Title -->
			<div class="navbar__head">
				<div class="navbar__icon-box">
					<Icon class="icon" :icon="['fas', 'newspaper']" />
				</div>
				<h1 class="navbar__title">Expat Magazine</h1>
			</div>
			<!-- Filters -->
			<NavbarFilter v-if="news" :trigger="triggerOn" />
			<!-- Show filter button (mobile only) -->
			<button
				v-if="news"
				class="navbar__trigger"
				title="Toggle filters"
				@click="triggerSwitch"
			>
				<Icon class="icon" :icon="['fas', 'bars']" />
			</button>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NavbarFilter from "@/components/NavbarFilter.vue";

/*
    Navigation bar and filter
*/

export default {
	name: "NavBar",
	components: {
		Icon: FontAwesomeIcon,
		NavbarFilter,
	},
	data() {
		return {
			triggerOn: false,
		};
	},
	methods: {
		triggerSwitch() {
			this.triggerOn = !this.triggerOn;
		},
	},
	computed: mapGetters(["news"]),
};
</script>
