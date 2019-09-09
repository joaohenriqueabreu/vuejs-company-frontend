import Vue          from "vue";
import VueRouter    from "vue-router";
import routes       from 'Router/routes.js';

Vue.use(VueRouter);

  export default new VueRouter({      
    /** Can remove '#' tag after domain, need to use a history catcher serve as described on:
      * @see https://router.vuejs.org/guide/essentials/history-mode.html
      * mode: 'history'   
      * */
    routes: routes  
  });