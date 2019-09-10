<template>
  <div>
		<button @click="$modal.show('hello-world')"></button>
		<modal name="hello-world">
  		hello, world!
		</modal>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>