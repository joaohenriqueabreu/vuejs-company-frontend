import 'Styles/_colors.scss';
import 'Styles/_breakpoints.scss';
import 'Styles/main.scss';

/** Base libraries */
import Vue        from 'vue';
import Vuex       from 'vuex';
import VueRouter  from 'vue-router';

/** Base view layout */
import App        from './App.vue';

/** Views */
import Home       from 'Pages/Home.vue';
import Company    from 'Pages/Company.vue';
import NotFound   from 'Pages/NotFound.vue';

import CompanyPage from 'Pages/CompanyPage.vue';
import CompanyData from 'Pages/CompanyData.vue';

/** General purpose Utils */
import AppUtils   from 'Mixins/AppUtils.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

/** Components */
Vue.component('Home',           require ('Pages/Home.vue').default);
Vue.component('Navbar',         require ('Components/Navbar.vue').default);
Vue.component('Breadcrumb',     require ('Components/Breadcrumb.vue').default);
Vue.component('Sidebar',        require ('Components/Sidebar.vue').default);
Vue.component('Footer',         require ('Components/Footer.vue').default);

Vue.component('CompanySearch',  require ('Components/CompanySearch.vue').default);

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
        path:       '/',         
        name:       'company', 
        component:  CompanyPage,
        meta:       { label: 'Company Page' }
      },
      { 
        path:       '/company/:slug/data', 
        name:       'company.data', 
        component:  CompanyData,
        meta:       { label: 'Company Data'}
      },
      { 
        path:       '/table', 
        name:       'company.table', 
        component:  CompanyPage,
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

new Vue({
  el:     '#app',  
  router: router,
  mixins: [AppUtils],
  render: createElement => createElement(App)      
});
