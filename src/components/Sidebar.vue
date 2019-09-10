<template>
	<div>		
		<div class="bar-items">
			<router-link v-for="option in sidebarOptions" 
				:to="{ name: option.name, params: {slug: $route.params.slug} }" v-slot="{ href, navigate }"
				v-bind:key="option.label"> 			
				<a :href="href" @click="navigate">{{ option.label }}</a>
			</router-link>
		</div>
	</div>
</template>

<script>
export default { 	
	data: function () {
		return {
			sidebarOptions: [
				{name: 'company.data', 	label: 'Company Data'},
				{name: 'company.table', label: 'Company Table'},
				{name: 'company', 			label: 'Company Page'},
			]
		}		
	}			
}
</script>

<style lang="scss" scoped>
	.bar-items {		
		@extend %column, %rounded-corner, %bg-white, %full-width, %thin-grey-border;							
		height:	fit-content;		

		a, span {
			@extend %padding-20;				
			text-decoration: 	none;
			border-bottom:		1px solid $lightGrey;	
		}
	}
</style>