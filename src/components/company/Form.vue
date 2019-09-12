<template>
  <div>		
		<p>{{ formHeading }}</p>
		<form @change="attemptSubmit">
			<div>
				<label for="name">Company Name</label>
				<input type="text" placeholder="e.g. Your Company Name" v-model="$v.name.$model">
				<div v-if="$v.name.$anyError">
					<div class="error" v-if="! $v.name.required">Field is required</div>
					<div class="error" v-if="! $v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
				</div>
			</div>
			<div>
				<label for="name">Company Spend</label>
				<input type="text" placeholder="e.g. 150000" :value="spendDisplay" @blur="setSpend($event.target.value)">
				<input type="hidden" v-model="$v.spend.$model">
				<div v-if="$v.spend.$anyError">
					<div class="error" v-if="! $v.spend.required">Field is required</div>
					<div class="error" v-if="! $v.spend.numeric">Only numbers allowed</div>										
				</div>
			</div>
			<div>
				<label for="name">Company Spend Ability</label>
				<input type="text" placeholder="e.g. $150000 - $300000" v-model="$v.spendAbility.$model">
				<div v-if="$v.spendAbility.$anyError">
					<div class="error" v-if="! $v.spendAbility.spendRangeValidator">Please use $150.000 - $300.000 format</div>					
					<div class="error" v-if="! $v.spendAbility.spendMaxGtMinValidator">Maximum spend (right side) must be greater than the minimum</div>	
				</div>
			</div>
			<div>
				<label for="name">Notes</label>
				<textarea type="text" placeholder="e.g. Good Tech Company" v-model="notes" @click="showAdditionalNotes"/>
			</div>
			<modal name="additionalNotes" height="375">
  			<div class="modal-area">
					<label for="name">Notes</label>
					<textarea type="text" placeholder="e.g. Good Tech Company" v-model="notes"/>
					<div>
						<button @click.prevent="hideAdditionalNotes">Save</button>
					</div>					
				</div>
			</modal>
		</form>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, numeric, helpers } from 'vuelidate/lib/validators';

const faker = require('faker');

const currencyPrefix = "$ ";

/** Matches two money formatted numbers separated by "-" */
const spendRangePattern 					= /^((\$[ ]?){1}([0-9]{1,}(\.[0-9]{1,2})?){1})([ ]?-[ ]?)((\$[ ]?){1}([0-9]{1,}(\.[0-9]{1,2})?){1})$/;
const spendRangeValidator					= helpers.regex('spendRangeValidator', spendRangePattern);
const spendRangeMaxGtMinValidator = function (spendRange) {		
	/** Skip invalid values provided */
	if (spendRange === undefined || spendRange === '') { return false; } 
	
	/** No need to check regex twice if there were other errors */
	if (! this.$v.spendAbility.spendRangeValidator) { return false; }

	/** Grab groups 3 and 8 (actual numeric values) to compare each other */
	let ranges 		= spendRange.match(spendRangePattern);
	let minSpend 	= parseFloat(ranges[3]);
	let maxSpend 	= parseFloat(ranges[8]);

	return minSpend < maxSpend;
};

export default {	
	data: function () {	
		return { 
 			name: 				'',
			spend: 				'',
			spendAbility: '',
			notes: 				'',		
		}
	},
	mounted: function () {
		/** We don't have a state yet, creating a company operation */
		if (! this.company) { return; } 

		/** We don't want clutter on our state during validation steps, therefore copy state to local company data */		
		Object.assign(this.$data, this.company.activeCompany); 
	},
	computed: {		
		/** Not using module namespace here as we deliberately want data separated from company state during validation */
		...mapState(['company']),				
		formHeading: () => faker.lorem.paragraph(),
		spendDisplay: function () {
			return this.$isNumeric(this.spend) ? currencyPrefix + this.spend : this.spend;			
		}
	},
	methods: {		
		...mapActions('company',['saveCompany']),
		setSpend: function (value) { 
			/** Ignore currency part */			
			this.spend = value.replace(currencyPrefix, "");
			this.$v.spend.$touch();
		},
		showAdditionalNotes: function () {
			this.$modal.show('additionalNotes');
		},
		hideAdditionalNotes: function () {
			this.$modal.hide('additionalNotes');
		},
		attemptSubmit: function () {
			/** Do not submit on for errors */
			if (this.$v.$invalid) { return; }

			this.saveCompany(this.$data);
		}
	},
	validations: {		 
		name: {
			required,
		},
		spend: {
			required,
			numeric
		},
		spendAbility: {
			spendRangeValidator,
			spendRangeMaxGtMinValidator
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
		height: 25px;
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