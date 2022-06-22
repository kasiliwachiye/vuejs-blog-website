<template>
	<div class="navbar-filter">
		<form class="navbar-filter__form">
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'arrow-down-a-z']" /> Order by:
				</label>
				<select
					class="select"
					@change="(e) => updateField('order', e.target.value)"
				>
					<option
						v-for="(value, key) in orderList"
						:key="key"
						:value="value"
						:selected="value === order"
					>
						{{ value }}
					</option>
				</select>
			</div>
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'arrow-down-short-wide']" /> Type:
				</label>
				<select class="select" @change="(e) => updateField('type', e.target.value)">
					<option
						v-for="(value, key) in types"
						:key="key"
						:value="key"
						:selected="value === type"
					>
						{{ key }}
					</option>
				</select>
			</div>
			<div class="group">
				<label class="label"> <Icon :icon="['fas', 'search']" /> Search: </label>
				<div class="navbar-filter__input">
					<input
						class="input"
						type="text"
						placeholder="Keyword(s)"
						v-model="search"
					/>
					<Icon
						v-if="search.length > 0"
						class="icon icon--remove"
						:icon="['fas', 'times-circle']"
						@click.prevent="flushSearch"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	sortNewsDate,
	sortNewsType,
	sortNewsKeyword,
	sortNewsTitle,
} from "@/helpers/utils";
import { defaultType } from "@/helpers/const";

/*
    Navigation and filter
*/

export default {
	name: "NavbarFilter",
	components: {
		Icon: FontAwesomeIcon,
	},
	data() {
		const dateOrder = ["Newest article", "Oldest article"];
		const titleOrder = ["A-Z title", "Z-A title"];
		return {
			dateOrder,
			titleOrder,
			orderList: [...dateOrder, ...titleOrder],
			order: dateOrder[0],
			type: defaultType,
			search: "",
		};
	},
	methods: {
		...mapActions(["updateFilteredNews"]),
		// Flush keyword search bar
		flushSearch() {
			this.search = "";
		},
		// Updates a filter field
		updateField(field, data) {
			if (field === "type") this.type = data;
			else if (field === "order") this.order = data;
			this.filterNews();
		},
		// Sort news list
		filterNews() {
			let filtered = [...this.news];
			if (this.search.length > 0)
				filtered = sortNewsKeyword(filtered, this.search);
			filtered = sortNewsType(filtered, this.type);
			// Select an order (by date or title)
			if (this.dateOrder.includes(this.order))
				filtered = sortNewsDate(filtered, this.order);
			else if (this.titleOrder.includes(this.order))
				filtered = sortNewsTitle(filtered, this.order);
			// Update
			this.updateFilteredNews(filtered);
		},
	},
	computed: mapGetters(["types", "news", "filteredNews"]),
	watch: {
		search() {
			this.filterNews();
		},
		news() {
			if (this.news.length > 0) this.filterNews();
		},
	},
};
</script>
