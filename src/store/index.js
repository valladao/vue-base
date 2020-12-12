import Vue from 'vue'
import Vuex from 'vuex'

// Modules importation
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        test
    }

})