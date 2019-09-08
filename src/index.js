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

Vue.use(Vuex);
Vue.use(VueRouter);

/** Components */
Vue.component('Home',       require ('Pages/Home.vue').default);
Vue.component('Navbar',     require ('Components/Navbar.vue').default);
Vue.component('Breadcrumb', require ('Components/Breadcrumb.vue').default);
Vue.component('Sidebar',    require ('Components/Sidebar.vue').default);
Vue.component('Footer',     require ('Components/Footer.vue').default);

const routes = [
  { 
    path:       '/', 
    name:       'home', 
    component:  Home, 
    meta:       { mainPage: true }
  },
  { 
    path:       '/company/:id', 
    name:       'company', 
    component:  Company,
    meta:       { label: 'Company Page' },  
    children:   [
      { 
        path:       '/data', 
        name:       'company.data', 
        component:  Company,
        meta:       { label: 'Company Data'}
      },
      { 
        path:       '/table', 
        name:       'company.table', 
        component:  Company,
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
  base: __dirname,
  routes: routes  
});

new Vue({
  el:     '#app',  
  router: router,
  render: createElement => createElement(App)  
});
