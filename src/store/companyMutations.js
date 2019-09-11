export default {
	updateCompany: function (state, data) {	
		console.log(state);
		Object.assign(state, data);
	}
}