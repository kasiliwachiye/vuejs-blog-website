<template>
	<div class="news-list container">
		<ul v-if="filteredNews.length > 0" class="news-list__list">
			<li v-for="(value, key) in filteredNews" :key="key">
				<NewsCard
					:id="value.id"
					:title="value.title"
					:description="value.introduction"
					:image="value.images"
					:type="value.type"
					:date="value.date"
					:color="types[value.type].color"
					:icon="types[value.type].icon"
				/>
			</li>
		</ul>
		<div v-else class="news-list__empty">
			<div class="box">
				<Icon class="icon" :icon="['fas', 'warning']" />
				<p class="caption">No articles</p>
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapGetters } from "vuex";
import NewsCard from "@/components/NewsCard.vue";

/*
    Displays news list according to current filters
*/

export default {
	name: "NewsList",
	components: {
		NewsCard,
		Icon: FontAwesomeIcon,
	},
	computed: mapGetters(["filteredNews", "types"]),
};
</script>
