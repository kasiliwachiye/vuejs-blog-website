<template>
	<footer class="social-area">
		<ul class="social-area__list container">
			<li v-for="(item, key) in list" :key="key">
				<a class="link" :href="item.link" :title="item.title">
					<Icon :icon="item.icon" />
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/*
    Navigation and filter
*/

export default {
	name: "SocialArea",
	components: {
		Icon: FontAwesomeIcon,
	},
	data() {
		return {
			list: [
				{
					title: "View my Facebook profile",
					link: "https://www.facebook.com/Manjaka13",
					icon: ["fab", "facebook"],
				},
				{
					title: "Check my repos",
					link: "https://github.com/Manjaka13",
					icon: ["fab", "github"],
				},
				{
					title: "Connect with LinkedIn",
					link: "https://www.linked.com/in/harijaona-rajaonson",
					icon: ["fab", "linkedin"],
				},
			],
		};
	},
};
</script>
