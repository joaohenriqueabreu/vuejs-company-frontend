import getters from 'Store/companyGetters.js';

const saveCompany = function (state, data) {		
	let company = getters.lookupCompany(state, data.name);
	if (company) {
		Object.assign(state.activeCompany, data);
		return;
	}
	
	/** In case didn't found, create a new one */
	company = getters.newCompany(data.name);
	Object.assign(company, data);

	/** Push new company to state */
	state.companies.push(company);

	/** Make this company the active one */
	state.activeCompany = company;
}

export default { saveCompany };