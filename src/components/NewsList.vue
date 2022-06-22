<template>
	<div class="news-list container">
		<ul class="news-list__list">
			<li v-for="(item, key) in getFiltered" :key="key">
				<NewsCard
					:id="item.id"
					:title="item.title"
					:description="item.introduction"
					:type="item.type"
					:date="item.date"
					:color="color[item.type] || 'red'"
					:icon="icon[item.type] || 'leaf'"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewsCard from "@/components/NewsCard.vue";

/*
    Displays news list according to current filters
*/

export default {
	name: "NewsList",
	components: {
		NewsCard,
	},
	data() {
		return {
			color: {},
			icon: {},
		};
	},
	created() {
		this.fetchNews()
			.then(({ color, icon }) => {
				this.color = { ...color };
				this.icon = { ...icon };
			})
			.catch((err) => console.error(err));
	},
	methods: {
		...mapActions(["fetchNews"]),
	},
	computed: mapGetters(["getFiltered"]),
};
</script>
