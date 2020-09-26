import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        users: [],
    },
    getters: {
        usersStore: state => state.users,
    },
    mutations: {
        usersUpdate(state, user) {
            state.users = user;
        },
    }
});