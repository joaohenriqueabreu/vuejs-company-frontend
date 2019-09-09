import { createLocalVue , mount } from '@vue/test-utils';
import VueRouter 			from "vue-router";
import routes 				from "Router/routes.js"
import CompanySearch	from 'Components/company/CompanySearch.vue';

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('searching for company changes route', () => {    
	const router = new VueRouter({ routes })
	const wrapper = mount(CompanySearch, { localVue, router});

	it('changes the route on enter', () => {
		const searchInput = wrapper.find('input');
		searchInput.setValue('intrincately');
		searchInput.trigger('keyup.enter');
		expect(wrapper.vm.$route.path).toContain('company/intrincately');
	});
});