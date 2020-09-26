import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        users: [],
        welcomeUser: '',
    },
    getters: {
        usersStore: state => state.users,
        welcomeUser: state => state.welcomeUser,
    },
    mutations: {
        usersUpdate(state, user) {
            state.users = user;
        },
        setwelcomeUser(state, welcomeUser) {
            state.welcomeUser = welcomeUser;
        },
    }
});