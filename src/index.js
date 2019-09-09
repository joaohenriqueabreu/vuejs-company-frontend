import 'Styles/_colors.scss';
import 'Styles/_breakpoints.scss';
import 'Styles/main.scss';

/** Base libraries */
import Vue          from 'vue';
import Vuex         from 'vuex';
import VueRouter    from 'vue-router';

/** Base view layout */
import App          from './App.vue';

/** Views */
import Home         from 'Pages/Home.vue';
import Company      from 'Pages/CompanyManager.vue';
import NotFound     from 'Pages/NotFound.vue';

import CompanyInfo  from 'Pages/CompanyInfo.vue';
import CompanyData  from 'Pages/CompanyData.vue';
import CompanyTable from 'Pages/CompanyTable.vue';

/** General purpose Utils */
import AppUtils     from 'Mixins/AppUtils.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.mixin(AppUtils);

/** Components */
Vue.component('Home',               require ('Pages/Home.vue').default);
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

const routes = [
  { 
    path:       '/', 
    name:       'home', 
    component:  Home, 
    meta:       { mainPage: true }
  },
  { 
    path:       '/company/:slug',     
    component:  Company,      
    children:   [
      { 
        path:       '',         
        name:       'company', 
        component:  CompanyInfo,
        meta:       { label: 'Company Page' }
      },
      { 
        path:       'data',
        name:       'company.data', 
        component:  CompanyData,
        meta:       { label: 'Company Data'}
      },
      { 
        path:       'table', 
        name:       'company.table', 
        component:  CompanyTable,
        meta:       { label: 'Company Table'}
      },
    ]
  },  
  {
    path:       '*',
    name:       '404',
    component:  NotFound,
    meta:       { mainPage: true }
  }
];

const router = new VueRouter({      
  /** Can remove '#' tag after domain, need to use a history catcher serve as described on:
    * @see https://router.vuejs.org/guide/essentials/history-mode.html
    * mode: 'history'   
    * */
  routes: routes  
});

const store = new Vuex.Store({
  state: {
    company: {
      logo: 'assets/images/microsoft.png',
      name: 'Microsoft',
      description: 'asda asd asdas sada sdas dasdas das dasd adas das'
    }
  }, 
  mutations: { },
  actions: { }
});

new Vue({
  el:     '#app',  
  router: router,  
  store:  store,  
  render: createElement => createElement(App)      
});
