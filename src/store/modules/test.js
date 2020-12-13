export default {

    namespaced: true,

	state: {

		message: 'Hello from VUEX Novo',
		count: 0

	},

	mutations: {
		
		increment(state) {
			state.count ++
		}

	},

	getters: {},

	actions: {}

}