import Vue from 'vue'
import Vuex from 'vuex'
import Api from 'axios'
import VueAxios from 'vue-axios'

Api.defaults.baseURL = 'http://' + location.host + '/'+ window.VueRouterUrl;

Vue.use(Vuex)
Vue.use(VueAxios, Api)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'

// STATE
const state = {
    baseURL: 'http://' + location.host + '/'+ window.VueRouterUrl,
    test: {
        test1: {
            counter: 0
        }
    },
    counter: 0,
    customers: []
}

const getters = {
    titles: state => {
        var allTitles = state.customers.map((item) => {
            return item.ContactTitle
        })

        return allTitles.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
    },
    customerIds: state => {
        return state.customers.map((item) => {
            return item.CustomerID
        })
    }
}

// MUTATIONS
const mutations = {
    [MAIN_SET_COUNTER](state, obj) {
        state.test.test1.counter = obj.counter
    },
    edit (state, customer) {
        var foundCustomer = state.customers.find((cust) => {
            return cust.CustomerID === customer.CustomerID
        })

        var index = state.customers.indexOf(foundCustomer)

        state.customers[index] = customer
    },
    add (state, customer) {
        state.customers.push(customer)
    },
    remove (state, index) {
        state.customers.splice(index, 1)
    },
    load (state, customersJson) {
        state.customers = JSON.parse(customersJson)
    }
}

// ACTIONS
const actions = ({
    setCounter({ commit }, obj) {
        commit(MAIN_SET_COUNTER, obj)
    },
    async fetch({ commit }) {
        console.log(Vue.$http);
        let response = await Api.get('/api/SampleData/WeatherForecasts')
        console.log(response.data);
        commit('load', JSON.stringify(response.data));
    },
    add (context, customer) {
        return new Promise((resolve, reject) => {
            if (context.getters.customerIds.indexOf(customer.CustomerID) > -1) {
                reject('This Customer ID exists!')
            } else if (customer.CustomerID === '') {
                reject('Customer ID cannot be empty!')
            } else {
                context.commit('add', customer)
                resolve(context.getters.customerIds.indexOf(customer.CustomerID))
            }
        })
    },
    remove (context, customer) {
        return new Promise((resolve, reject) => {
            var foundCustomer = context.state.customers.find((cust) => {
                return cust.CustomerID === customer.CustomerID
            })

            var index = context.state.customers.indexOf(foundCustomer)

            if (!customer || index < 0) {
                reject('Customer not found!')
            } else {
                context.commit('remove', index)
                resolve(Object.assign({}, foundCustomer))
            }
        })
    }
})

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
