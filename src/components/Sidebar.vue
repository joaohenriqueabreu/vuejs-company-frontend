<template>
	<div>
		<router-link :to="{ path: 'company/123'}">Company Data</router-link>
		<router-link :to="{ name: 'company.table', params: { slug: 'asd' }}">Company Table</router-link>
		<router-link :to="{ name: 'company', params: { slug: 'asd' }}">Company Page</router-link>
	</div>
</template>

<script>
import VueRouter from 'vue-router';
export default { 	
}
</script>

<style lang="scss" scoped>

</style>