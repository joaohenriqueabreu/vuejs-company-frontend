<template>
  <div class="column">
		<div class="row">
			<img :src="logo" />
			<h3>{{ companyName }}</h3>
		</div>
		<p>{{ description }}</p>
  </div>
</template>

<script>
export default {
	computed: {
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