<template>
	<div class="navbar-filter">
		<form class="navbar-filter__form">
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'calendar-alt']" /> Date:
				</label>
				<select class="select" @change="(e) => update('order', e.target.value)">
					<option v-for="(item, key) in dateOrderList" :key="key" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'arrow-down-short-wide']" /> Type:
				</label>
				<select class="select" @change="(e) => update('type', e.target.value)">
					<option v-for="(item, key) in getTypelist" :key="key" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'arrow-down-a-z']" /> Order:
				</label>
				<select class="select" @change="(e) => update('type', e.target.value)">
					<option v-for="(item, key) in getTypelist" :key="key" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<div class="group">
				<label class="label"> <Icon :icon="['fas', 'search']" /> Search: </label>
				<div class="navbar-filter__input">
					<input class="input" type="text" placeholder="Keyword(s)" v-model="str" />
					<Icon
						v-if="str.length > 0"
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
