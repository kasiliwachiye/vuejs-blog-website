<template>
	<div class="navbar-filter">
		<p class="navbar-filter__caption">Filter by:</p>
		<form class="navbar-filter__form" @submit.prevent="searchTitle">
			<select class="select" v-model="dateOrder">
				<option
					v-for="(item, key) in dateOrderList"
					:key="key"
					:value="item"
					:selected="item === dateOrder"
				>
					{{ item }}
				</option>
			</select>
			<select class="select" v-model="type">
				<option
					v-for="(item, key) in typeList"
					:key="key"
					:value="item"
					:selected="item === type"
				>
					{{ item }}
				</option>
			</select>
			<div class="navbar-filter__input">
				<input class="input" type="text" placeholder="Search" v-model="search" />
				<Icon v-if="search.length === 0" class="icon" :icon="['fas', 'search']" />
				<Icon
					v-else
					class="icon icon--remove"
					:icon="['fas', 'times-circle']"
					@click.prevent="flushSearch"
				/>
			</div>
		</form>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/*
    Navigation and filter
*/

export default {
	name: "NavbarFilter",
	components: {
		Icon: FontAwesomeIcon,
	},
	data() {
		const dateOrderList = ["Newest", "Oldest"];
		const typeList = ["-- News type --"];
		return {
			search: "",
			dateOrderList,
			typeList,
			dateOrder: dateOrderList[0],
			type: typeList[0],
		};
	},
	methods: {
		searchTitle() {
			console.log("Search title " + this.search);
		},
		flushSearch() {
			this.search = "";
		},
	},
	watch: {
		dateOrder() {
			console.log("Selected date order: ", this.dateOrder);
		},
		type() {
			console.log("Selected news type: ", this.type);
		},
	},
};
</script>
