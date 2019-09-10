import 'Styles/_colors.scss';
import 'Styles/_breakpoints.scss';
import 'Styles/main.scss';

/** Base libraries */
import Vue           from 'vue';
import RouteManager  from 'Router/router.js';
import StoreManager  from 'Store/store.js';

/** Base view layout */
import App          from './App.vue';

/** General purpose Utils */
import VModal       from 'vue-js-modal';
import Vuelidate    from 'vuelidate'
import AppUtils     from 'Mixins/AppUtils.vue';

Vue.use(VModal);
Vue.mixin(AppUtils);
Vue.use(Vuelidate);

/** Components */
Vue.component('Navbar',             require ('Components/Navbar.vue').default);
Vue.component('Profile',            require ('Components/Profile.vue').default);
Vue.component('Breadcrumb',         require ('Components/Breadcrumb.vue').default);
Vue.component('Sidebar',            require ('Components/Sidebar.vue').default);
Vue.component('NavFooter',          require ('Components/Footer.vue').default);

/** Company Page view components */
Vue.component('CompanySearch',      require ('Components/company/CompanySearch.vue').default);
Vue.component('CompanyActivities',  require ('Components/company/Activities.vue').default);
Vue.component('CompanyDescription', require ('Components/company/Description.vue').default);
Vue.component('SimilarCompanies',   require ('Components/company/SimilarCompanies.vue').default);
Vue.component('SpendHistory',       require ('Components/company/SpendHistory.vue').default);
Vue.component('SpendHistoryGraph',  require ('Components/company/SpendHistoryGraph.vue').default);

/** Company data page components */
Vue.component('CompanyForm',        require('Components/company/Form.vue').default);

/** Initialize vue */
new Vue({
  el:     '#app',  
  router: RouteManager,  
  store:  StoreManager,    
  render: createElement => createElement(App)      
});
