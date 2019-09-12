import $router from 'Router/router.js'

const lookupCompany = function (state, companyName) {
  return state.companies.find(company => String(company.name).toLowerCase() === String(companyName).toLowerCase());
};

const newCompany = function (companyName) {
  return {
    name:         companyName,
    spend:        '',
    spendAbility: '',
    notes:        '',
    logo_url:     '',
  }
};

const logo = function (state) {
  return state.activeCompany === undefined || state.activeCompany.length > 0 || ! state.activeCompany.logo_url 
    ? 'assets/images/empty.png'  
    : state.activeCompany.logo_url;
};

export default { lookupCompany, newCompany, logo }