import Vue          from 'vue';
import Vuex         from 'vuex';

Vue.use(Vuex);

export default new Vuex.store({
    state: {
        company: {
            logo: 'assets/images/microsoft.png',
            name: 'Microsoft',
            description: 'asda asd asdas sada sdas dasdas das dasd adas das'
        }
    }
});
  