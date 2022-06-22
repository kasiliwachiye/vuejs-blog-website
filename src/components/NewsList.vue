<template>
	<div class="news-list container">
		<ul class="news-list__list">
			<li v-for="(item, key) in news" :key="key">
				<NewsCard
					:id="item.id"
					:title="item.title"
					:description="item.introduction"
					:type="item.type"
					:date="item.date"
					:color="color[item.type]"
					:icon="icon[item.type]"
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
			news: [],
			color: {},
			icon: {},
		};
	},
	created() {
		http
			.get("news")
			.then((result) => {
				result.forEach((item) => {
					if (!this.color[item.type])
						this.color[item.type] = this.generateRandomColor();
					if (!this.icon[item.type]) this.icon[item.type] = this.generateIcon();
					this.news.push(item);
				});
				localStorage.setItem("color", JSON.stringify(this.color));
				localStorage.setItem("icon", JSON.stringify(this.icon));
				localStorage.setItem("news", JSON.stringify(this.news));
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
