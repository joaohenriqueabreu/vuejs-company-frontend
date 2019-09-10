import Vue  from 'vue';
import Vuex from 'vuex';

import CompanyStore from 'Store/company.js';
import UserStore    from 'Store/user.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        company:	CompanyStore,
        user:    	UserStore
    }
});