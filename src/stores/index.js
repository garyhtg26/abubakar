import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import secureLS from "secure-ls";
// import acl from './../acl/acl'
import route from "../router.js";
import axios from "axios";
import checkout from "./checkout";
var ls = new secureLS({
    encodingType: "aes",
    encryptionSecret: "^77asj12@skdjasdk"
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authentication: null,
        Authorization: false,
        user: {},
        role: "public",
        loading: false,
        tests: {
            authentication: null,
            Authorization: false,
            user: {}
        },
        cart: [],
    },
    mutations: {
        authentication(state, val) {
            state.authentication = val;
        },
        loading(state, value) {
            state.loading = value;
        },
        Authorization(state, value) {
            state.Authorization = value;
        },
        user(state, val) {
            state.user = val;
        },
        role(state, value) {
            state.role = value;
        },
        tests(state, value) {
            state.tests = value;
        },
        cart(state, value) {
            state.cart = value;
        }
    },
    actions: {
        //   test
        async checkOut({ commit }, data) {
            const res = checkout.getUniq(data);
            commit("cart", res)
        },
        async loginTest({ commit }, users) {
            axios
                .post("/auth/login", users)
                .then(res => {
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + res.data.bearer;
                    commit("tests", {
                        authentication: res.data.bearer,
                        role: res.data.user.role,
                        Authorization: true
                    });
                    commit("user", res.data.user);
                    route.push("/test/dashboard");
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        },
        //   end
        async login({ commit }, users) {
            axios
                .post("/auth/login", users)
                .then(res => {
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + res.data.bearer;
                    // acl.change(res.data.user.role)
                    commit("authentication", res.data.bearer);
                    commit("Authorization", true);
                    commit("user", res.data.user);
                    commit("role", res.data.user.role);
                    
                        location.reload()
               

                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        },

        async logout({ commit }) {
            axios
                .get("/auth/logout")
                .then(res => {
                    commit("authentication", null);
                    commit("Authorization", false);
                    commit('cart', [])
                    commit("user", { role: "public", id: 0 });
                    
                        location.reload()
               
                })
                .catch(error => {
                    console.log(error);
                    commit("authentication", null);
                    commit("Authorization", false);
                    commit("user", { role: "public", id: 0 });
                 
                        location.reload()
                   
                });
        },
        async isAuth({ state }) {
            return state.user.role;
        },
        async checkAuth({ commit }) {
            axios
                .get("/user")
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    route.push("/login");
                });
        }
    },
    modules: {},

    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
});