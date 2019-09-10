<template>
  <div>		
		<p>{{ formHeading }}</p>
		<form action="">
			<div>
				<label for="name">Company Name</label>
				<input type="text" placeholder="e.g. Your Company Name" v-model="$v.name.$model">
				<div class="error" v-if="! $v.name.required">Field is required</div>
				<div class="error" v-if="! $v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
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
				<textarea type="text" placeholder="e.g. Good Tech Company" v-model="notes" @click="showAdditionalNotes"/>
			</div>
			<modal name="additionalNotes" height="350">
  			<div class="modal-area">
					<label for="name">Notes</label>
					<textarea type="text" placeholder="e.g. Good Tech Company" v-model="notes"/>
					<div>
						<button @click="hideAdditionalNotes">Save</button>
					</div>					
				</div>
			</modal>
		</form>
	</div>
</template>

<script>
const faker = require('faker');

export default {	
	data: function () {
		return {			
			name: 				'',
			spend: 				'',
			spendAbility: [],
			notes: 				''
		}
	},
	computed: {		
		formHeading: () => faker.lorem.paragraph()
	},
	methods: {
		showAdditionalNotes: function () {
			this.$modal.show('additionalNotes');
		},
		hideAdditionalNotes: function () {
			this.$modal.hide('additionalNotes');
		}
	},
	validations: {
		name: {
			required: true,
			minLength: 3,
		},
		spend: {
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
form {
	@extend %column;

	div {
		@extend %column, %margin-vertical-10;
	}			

	label {
		@extend %margin-bottom-5, %upper-case, %bold, %color-mid-grey;
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

	button {
		@extend %bg-purple, %color-white, %padding-10, %rounded-corner, %bold, %upper-case;
		border: none;
		cursor: pointer;
		width: 5vw;
	}

	.error {
		@extend %font-small, %bold;
		color: red;
	}

	.form-item {
		@extend %rounded-corner, %thin-grey-border, %light-grey-shadow, %padding-10;
		&::placeholder {
			@extend %color-light-grey, %font-small, %padding-left-10;
		}	
	}

	.modal-area {
		@extend %column, %padding-40;
		label {
			@extend %padding-bottom-20;
		}
		div {
			align-items: flex-end;
		}		
	}
}
	
</style>
</style>