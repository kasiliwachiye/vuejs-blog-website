<template>
	<div class="article-display">
		<div v-if="article">
			<div class="article-display__head">
				<h1 class="article-display__title">{{ processTitle() }}</h1>
				<figure class="article-display__image">
					<img class="image" v-lazy="`/assets/test.webp`" :alt="processTitle()" />
				</figure>
			</div>
			<p class="article-display__intro" v-html="processDescription()"></p>
			<p class="article-display__body" v-html="processBody()"></p>
		</div>
		<LoadingNews :id="id" @finish="finishedLoading" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingNews from "@/components/LoadingNews.vue";

/*
	Article page
*/

export default {
	name: "ArticleDisplay",
	components: {
		LoadingNews,
	},
	data() {
		return {
			article: null,
			id: this.$route.params.id,
		};
	},
	// Get store variables we use here
	computed: mapGetters(["news"]),
	watch: {
		// news() {
		// 	if (this.news.length > 0) {
		// 		const id = this.$route.params.id;
		// 		for (let i = 0; i < this.news.length; i++)
		// 			if (this.news[i].id === parseInt(id)) {
		// 				this.article = { ...this.news[i] };
		// 				break;
		// 			}
		// 	}
		// },
	},
	methods: {
		finishedLoading(article) {
			console.log(article);
		},
		// Remove p tag because parent is already a p tag
		processDescription() {
			return this.article.introduction.replace("<p>", "").replace("</p>", "");
		},
		// Adjust spacing
		processTitle() {
			return this.article.title.replace("?", " ?").replace("!", " !");
		},
		// Only display date, not time
		processDate() {
			return this.date.split(" ")[0].split("-").reverse().join("-");
		},
		processBody() {
			return this.article.body
				.replace(
					'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><p>',
					""
				)
				.replace("</p>\r\n</body></html>\n", "");
		},
	},
};
</script>
