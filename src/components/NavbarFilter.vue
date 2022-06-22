<template>
	<div class="navbar-filter">
		<p class="navbar-filter__caption">Filter by:</p>
		<form class="navbar-filter__form">
			<select class="select" @change="(e) => update('order', e.target.value)">
				<option v-for="(item, key) in dateOrderList" :key="key" :value="item">
					{{ item }}
				</option>
			</select>
			<select class="select" @change="(e) => update('type', e.target.value)">
				<option v-for="(item, key) in getTypelist" :key="key" :value="item">
					{{ item }}
				</option>
			</select>
			<div class="navbar-filter__input">
				<input class="input" type="text" placeholder="Search" v-model="str" />
				<Icon v-if="str.length === 0" class="icon" :icon="['fas', 'search']" />
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
import { mapActions, mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { sortNewsType, sortNewsNewest, sortNewsOldest } from "@/helpers/utils";

/*
    Navigation and filter
*/

export default {
	name: "NavbarFilter",
	components: {
		Icon: FontAwesomeIcon,
	},
	data() {
		return {
			str: "",
			dateOrderList: ["Newest", "Oldest"],
		};
	},
	methods: {
		...mapActions([
			"updateOrder",
			"updateType",
			"updateSearch",
			"updateFiltered",
		]),
		flushSearch() {
			this.str = "";
			this.updateSearch(this.str);
		},
		update(field, data) {
			if (field === "type") {
				this.updateType(data);
				this.updateFiltered(sortNewsType(this.newsList, data));
			} else if (field === "order") {
				this.updateOrder(data);
				if (data === "Newest") this.updateFiltered(sortNewsNewest(this.newsList));
				else this.updateFiltered(sortNewsOldest(this.newsList));
			}
		},
	},
	computed: mapGetters(["getOrder", "getType", "getTypelist", "newsList"]),
	created() {
		this.updateOrder(this.dateOrderList[0]);
		this.updateSearch(this.str);
	},
	watch: {
		str() {
			this.updateSearch(this.str);
		},
	},
};
</script>
