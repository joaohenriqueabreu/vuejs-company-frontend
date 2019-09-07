import 'Styles/main.scss';
/** Base libraries */
import Vue        from 'vue';
import Vuex       from 'vuex';
import VueRouter  from 'vue-router';

/** Entry point */
import App       from './App.vue';

/** Views */
import Home       from 'Pages/Home.vue';
import Company    from 'Pages/Company.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

/** Components */
Vue.component('Navbar',   require ('Components/Navbar.vue').default);
Vue.component('Footer',   require ('Components/Footer.vue').default);

const routes = [
  { path: '/',              component: Home},
  { path: '/company/:id',   component: Company }
];

const router = new VueRouter({
  routes,
  mode: 'history' /* Nice URL mode to not display "#" after domain */
})

new Vue({
  render: createElement => createElement(App),  
  router,
  el: '#app',  
});
