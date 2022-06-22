<template>
	<article class="news-card">
		<figure class="news-card__image">
			<img class="image" src="@/assets/test.jpg" alt="News representation" />
		</figure>
		<div class="news-card__tag"><Icon :icon="['fas', 'leaf']" /> Features</div>
		<h2 class="news-card__title">
			<a class="link" href="#0" title="View article"
				>Expats in Quebec have 6 months to learn French</a
			>
		</h2>
		<div class="news-card__separator"></div>
		<p class="news-card__description" v-html="description"></p>
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
	data() {
		let description =
			'<p><strong><span id="docs-internal-guid-56336bbf-7fff-ed23-ce59-704138eb6063">A clear focus of the Mauritian government&#39;s post-COVID strategy is to maintain a business-friendly environment and boost foreign investment. With this in mind, new measures have been announced by Finance Minister Renganaden Padayachy in the 2022-23 Budget.&nbsp; What are they? And in this post-COVID era, is Mauritius still a competitive destination?</span></strong></p>\r\n';
		description = description.replace("<p>", "").replace("</p>", "");
		return {
			description,
		};
	},
};
</script>
