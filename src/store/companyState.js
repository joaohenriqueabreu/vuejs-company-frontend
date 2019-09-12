const faker = require('faker');

const companies = [
	{
		logo_url:	'assets/images/microsoft.png',
		name:     'Microsoft',
		notes:    faker.lorem.paragraph()
	}        
];           

export default {
	activeCompany: 	companies[0],
	companies: 			companies
};
  