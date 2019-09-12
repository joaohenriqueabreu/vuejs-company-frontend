<template>
  <div>
		<div>
			<img :src="logo" />
			<h3>{{ activeCompany.name }}</h3>
		</div>
		<p>{{ activeCompany.notes }}</p>
		<p> Spend: {{ activeCompany.spend }} and Spend Ability: {{ activeCompany.spendAbility }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
	computed: {
		...mapState('company', ['activeCompany']),
		...mapGetters('company', ['logo'])		
	}
}
</script>

<style lang="scss" scoped>
	img {
		height: 10vh;
	}
</style>