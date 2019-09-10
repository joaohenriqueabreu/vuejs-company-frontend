<template>
  <div>		
		<p>{{ formHeading }}</p>
		<form action="">
			<div>
				<label for="name">Company Name</label>
				<input type="text" placeholder="e.g. Your Company Name" v-model="name">
			</div>
			<div>
				<label for="name">Company Spend</label>
				<input type="text" placeholder="e.g. $150.000" v-model="spend">
			</div>
			<div>
				<label for="name">Company Spend Ability</label>
				<input type="text" placeholder="e.g. $150.000 - $300.000" v-model="spendAbility">
			</div>
			<div>
				<label for="name">Notes</label>
				<textarea type="text" placeholder="e.g. Good Tech Company" v-model="notes"/>
			</div>
		</form>
	</div>
</template>

<script>
const faker = require('faker');

export default {	
	computed: {		
		formHeading: () => faker.lorem.paragraph();
	}
}
</script>

<style lang="scss" scoped>
  div {
    @extend %column, %bg-white, %rounded-corner, %padding-20;

    form {
      @extend %column;

      div {
        @extend %column, %margin-vertical-10;
      }			

      label {
        @extend %margin-bottom-5, %upper-case, %bold, %color-mid-grey;
      }
      
      .form-item {
        @extend %rounded-corner, %thin-grey-border, %light-grey-shadow, %padding-10;
        &::placeholder {
            @extend %color-light-grey, %font-small, %padding-left-10;
        }	
      }

      input {
        @extend .form-item;
        height: 5vh;
        width: 	50%;		
        
      }

      textarea {
        @extend .form-item;
        height: 20vh;						
      }
    }
  }
	
</style>