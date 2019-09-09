import 'Styles/_colors.scss';
import 'Styles/_breakpoints.scss';
import 'Styles/main.scss';

/** Base libraries */
import Vue                  from 'vue';
import RouteManager         from 'Router/router.js';
import CompanyStoreManager  from 'Store/company.js';

/** Base view layout */
import App          from './App.vue';

/** General purpose Utils */
import AppUtils     from 'Mixins/AppUtils.vue';

Vue.mixin(AppUtils);

/** Components */
Vue.component('Navbar',             require ('Components/Navbar.vue').default);
Vue.component('Breadcrumb',         require ('Components/Breadcrumb.vue').default);
Vue.component('Sidebar',            require ('Components/Sidebar.vue').default);
Vue.component('Footer',             require ('Components/Footer.vue').default);

Vue.component('CompanySearch',      require ('Components/company/CompanySearch.vue').default);
Vue.component('CompanyActivities',  require ('Components/company/Activities.vue').default);
Vue.component('CompanyDescription', require ('Components/company/Description.vue').default);
Vue.component('SimilarCompanies',   require ('Components/company/SimilarCompanies.vue').default);
Vue.component('SpendHistory',       require ('Components/company/SpendHistory.vue').default);
Vue.component('SpendHistoryGraph',  require ('Components/company/SpendHistoryGraph.vue').default);

new Vue({
  el:     '#app',  
  router: RouteManager,  
  store:  CompanyStoreManager,  
  render: createElement => createElement(App)      
});
