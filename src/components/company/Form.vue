<template>
  <div>
		<!-- Lorem ipsum generator -->
		<p>{{ formHeading }}</p>
	</div>
</template>

<script>
const faker = require('faker');

export default {	
	computed: {
		formHeading: () => faker.lorem.paragraph()
	}
}
</script>

<style>

</style>