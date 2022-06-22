<template>
	<div class="news-list container">
		<ul class="news-list__list">
			<li v-for="(value, key) in filteredNews" :key="key">
				<NewsCard
					:id="value.id"
					:title="value.title"
					:description="value.introduction"
					:type="value.type"
					:date="value.date"
					:color="types[value.type].color"
					:icon="types[value.type].icon"
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
	created() {
		this.getNews();
	},
	methods: {
		...mapActions(["getNews"]),
	},
	computed: mapGetters(["filteredNews", "types"]),
};
</script>
