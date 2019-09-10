<template>
  <div>
		<ul>
			<router-link :to="{name: 'home'}" v-slot="{ href, route, navigate}">
				<li><a :href="href" @click="navigate">Home</a></li>				
			</router-link>						
			<router-link :to="{name: $router.name}" v-slot="{ href, route, navigate}">								
				<li v-if="route.name !== 'home'">
					<span>/</span>
					<a :href="href" @click="navigate">{{ route.meta.label }}</a>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default { 

}
</script>

<style lang="scss" scoped>
	ul {
		@extend %padding-vertical-20;		
		list-style: 		none;
		display: 				flex;
		flex-direction: row;		
		font-size:			0.8em;				

		span {
			@extend %padding-horizontal-10;
		}

		li, span, a {
			@extend %color-mid-grey, %upper-case;			
		}
	}
	a {
		text-decoration: none;
	}
</style>