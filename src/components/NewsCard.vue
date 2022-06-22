<template>
	<article class="news-card">
		<a class="link" :href="`/${id}`" :title="title">
			<figure class="news-card__image">
				<img class="image" src="@/assets/test.jpg" :alt="title" />
			</figure>
		</a>
		<div class="news-card__tag" :style="{ background: color }">
			<Icon :icon="['fas', icon]" /> {{ type }}
		</div>
		<div class="news-card__date">
			<Icon :icon="['fas', 'calendar-alt']" /> <span>{{ processDate() }}</span>
		</div>
		<h2 class="news-card__title">
			<a class="link" :href="`/${id}`" :title="title">{{ processTitle() }}</a>
		</h2>
		<div class="news-card__separator"></div>
		<p class="news-card__description" v-html="processDescription()"></p>
	</article>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/*
    Displays a news in a card
*/

export default {
	name: "NewsCard",
	components: {
		Icon: FontAwesomeIcon,
	},
	props: {
		id: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	},
	methods: {
		processDescription() {
			return this.description.replace("<p>", "").replace("</p>", "");
		},
		processTitle() {
			return this.title.replace("?", " ?");
		},
		processDate() {
			return this.date.split(" ")[0].split("-").reverse().join("-");
		},
	},
};
</script>
