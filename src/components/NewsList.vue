<template>
	<div class="news-list container">
		<ul class="news-list__list">
			<li v-for="(item, key) in newsList" :key="key">
				<NewsCard
					:id="item.id"
					:title="item.title"
					:description="item.introduction"
					:type="item.type"
					:date="item.date"
					:color="typeColor[item.type]"
					:icon="typeIcon[item.type]"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";
import http from "@/service/http.js";

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
			newsList: [],
			typeColor: {},
			typeIcon: {},
		};
	},
	created() {
		http
			.get("newsList")
			.then((result) => {
				result.forEach((news) => {
					if (!this.typeColor[news.type])
						this.typeColor[news.type] = this.generateRandomColor();
					if (!this.typeIcon[news.type])
						this.typeIcon[news.type] = this.generateIcon();
					this.newsList.push(news);
				});
				this.newsList = [...result];
			})
			.catch((err) => console.error(err));
	},
	methods: {
		random() {
			return Math.floor(Math.random() * 180) + 1;
		},
		generateRandomColor() {
			return `rgb(${this.random()}, ${this.random()}, ${this.random()})`;
		},
		generateIcon() {
			const rand = Math.floor(Math.random() * 2) + 1;
			return rand === 0 ? "leaf" : rand === 1 ? "star" : "gears";
		},
	},
};
</script>
