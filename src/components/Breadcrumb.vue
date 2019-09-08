<template>
  <div>
		<ul>
  		<li>
				<span v-if="$route.meta.mainPage">Home</span>
				<a v-else href="#" @click.prevent="$router.push({ name: 'home' })">Home</a>
			</li>  	
			<li v-if="! $route.meta.mainPage">/</li>
			<li v-if="! $route.meta.mainPage">{{ $route.meta.label }}</li>	
		</ul>
	</div>
</template>

<script>
export default { 

}
</script>

<style lang="scss" scoped>
	@import 'Styles/main.scss';
	ul {
		@extend .padding-vertical-20;		
		list-style: 		none;
		display: 				flex;
		flex-direction: row;		
		
		li, span, a {
			@extend .color-mid-grey, .bold, .upper-case, .padding-right-10;
		}
	}
	a {
		text-decoration: none;
	}
</style>