<template>
  <div class="column">
		<div class="row">
			<img :src="logo" />
			<h3>{{ company.name }}</h3>
		</div>
		<p>{{ company.notes }} and {{ company.spend }} also {{ company.spendAbility }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
	computed: {
		...mapState(['company']),
		logo () {
			return this.$store.state.company.logo;
		},
		companyName () {
			return this.$store.state.company.name;
		},
		description () {
			return this.$store.state.company.description;
		}
	}
}
</script>

<style>

</style>