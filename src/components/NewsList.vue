<template>
	<div class="news-list">
		<!-- Filtered news card list -->
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
		<!-- Loading spinner when news not done fetching -->
		<div v-else-if="news.length === 0" class="news-list__loading">
			<LoadingSpinner />
			<p class="caption">Please wait...</p>
		</div>
		<!-- When no articles meet the selected filters -->
		<div v-else class="news-list__empty">
			<div class="box">
				<Icon class="icon" :icon="['fas', 'warning']" />
				<p class="caption">No articles</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NewsCard from "@/components/NewsCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

/*
    Displays news list according to applied filters
*/

export default {
	name: "NewsList",
	components: {
		NewsCard,
		Icon: FontAwesomeIcon,
		LoadingSpinner,
	},
	// Get store variables we use here
	computed: mapGetters(["news", "filteredNews", "types"]),
};
</script>
