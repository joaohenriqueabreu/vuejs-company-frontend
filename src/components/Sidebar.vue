<template>
	<div>
		<router-link v-for="option in sidebarOptions" 
			:to="{ name: option.name, params: {slug: $route.params.slug} }" v-slot="{ href, navigate }"
			v-bind:key="option.label"> 			
			<a :href="href" @click="navigate">{{ option.label }}</a>
		</router-link>
	</div>
</template>

<script>
export default { 	
	data: function () {
		return {
			sidebarOptions: [
				{name: 'company.data', 	label: 'Company Data'},
				{name: 'company', 			label: 'Company Table'},
				{name: 'company', 			label: 'Company Page'},
			]
		}		
	}			
}
</script>

<style lang="scss" scoped>
	@import 'Styles/main.scss';
	div {		
		@extend .rounded-corner, .bg-white;
		display: 					flex;
		flex-direction: 	column;
		justify-content: 	center;				
		border: 					1px solid $lightGrey;	

		a, span {
			@extend .padding-20;				
			text-decoration: none;
			border-bottom:	1px solid $lightGrey;	
		}
	}
</style>