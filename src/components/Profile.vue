<template>
  <div>
		<img :src="browserImage">
    <img :src="profileImage">
  </div>
</template>

<script>
export default {
  computed: {
		browserImage: function () {
			return this.$store.state.user.browser_img_url;
		},
		profileImage: function () {
			return this.$store.state.user.photo_url;
		}
	}
}
</script>

<style lang="scss" scoped>
	div {
		@extend %row;
		align-items: 			center;
		height: 					100%;		

		img {
			@extend %margin-right-10;
			max-width:	50px;
		}
	}
</style>