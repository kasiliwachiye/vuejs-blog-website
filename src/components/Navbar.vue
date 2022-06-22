<template>
	<nav class="navbar">
		<div class="navbar__container container">
			<div class="navbar__icon-box">
				<Icon class="icon" :icon="['fas', 'newspaper']" />
			</div>
			<h1 class="navbar__title">Expat News</h1>
		</div>
	</nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/*
    Navigation and filter
*/

export default {
	name: "NavBar",
	components: {
		Icon: FontAwesomeIcon,
	},
};
</script>
