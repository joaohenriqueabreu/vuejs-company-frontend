import Vue  from 'vue';
import Vuex from 'vuex';

import CompanyState 		from 'Store/companyState.js';
import UserState    		from 'Store/userState.js';

import CompanyMutations from 'Store/companyMutations.js';
import CompanyActions 	from 'Store/companyActions.js';
import CompanyGetters 	from 'Store/companyGetters.js';

Vue.use(Vuex);

const companyModule = {
	namespaced: true,
	state: 			CompanyState,
	actions:	 	CompanyActions,
	mutations: 	CompanyMutations,
	getters:		CompanyGetters,
};

const userModule = {
	namespaced: true,
	state:			UserState
};

export default new Vuex.Store({
	modules: {
		company: companyModule,
		user: 	 userModule,
	}    
});