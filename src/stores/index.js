import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import secureLS from "secure-ls";
// import acl from './../acl/acl'
import route from "../router.js";
import axios from "axios";
import checkout from "./checkout";
import Swal from "sweetalert2";
var ls = new secureLS({
    encodingType: "aes",
    encryptionSecret: "^77asj12@skdjasdk"
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tabPosition: 1,
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
        payment: {},
        countCart: 0,
        countWish: 0,
        saldo: 0,
        enPopup: { isVisible: true, date: "2020-12-01" },
        popupLogin: false,
        level: null,
    },
    mutations: {
        popupLogin(state, value) {
            state.popupLogin = value
        },
        level(state, value) {
            state.level = value
        },
        tabPosition(state, value) {
            state.tabPosition = value;
        },
        saldo(state, value) {
            state.saldo = value
        },
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
        },
        payment(state, value) {
            state.payment = value
        },
        countCart(state, value) {
            state.countCart = value
        },
        countWish(state, value) {
            state.countWish = value
        },
        enPopup(state, value) {
            state.enPopup = value
        }
    },
    actions: {
        async enPopup({ commit }) {
            const curr = new Date().toISOString().substr(0, 10);
            const last = this.state.enPopup.date;
            if (last === curr) {
                commit("enPopup", {
                    date: curr,
                    isVisible: false
                })
            } else {
                commit("enPopup", {
                    date: curr,
                    isVisible: true
                })
            }
        },
        //   test
        async checkOut({ commit }, data) {
            const res = checkout.getUniq(data);
            commit("cart", res)
        },
        async countCart({ commit }) {
            if (!this.state.Authorization) return;
            axios
                .get('page/count-cart')
                .then(res => {
                    commit('countCart', res.data.data)
                })
        },
        async countWish({ commit }) {
            if (!this.state.Authorization) return;
            axios
                .get('page/count-wishlist')
                .then(res => {
                    commit('countWish', res.data.data)
                })
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
            const phone = users.email.match(/[0-9]/ig)
            const email = users.email.match(/[@]/ig)
            console.log(phone);
            if (!phone && !email) {
                Swal.fire({
                    title: ":( sorry",
                    html: "<p>Mohon masukkan email atau nomor telphone dengan benar<p>",
                    type: "error"
                })
                return
            } else {
                const synth = window.speechSynthesis;
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
                        let sInstance = new SpeechSynthesisUtterance(`Assalamu'alaikum ${res.data.user.name}`);
                        sInstance.pitch = 1;
                        sInstance.rate = 1;
                        synth.speak(sInstance)
                        location.reload()
                    })
                    .catch(error => {
                        console.log(error);
                        // alert(error);
                        Swal.fire({
                            title: "Login Gagal",
                            html: "<p>Maaf, Kami belum mengenal anda, email dan password anda salah,<br> Jika belum punya akun silahkan Klik tombol signup untuk membuat akun baru<p>",
                            type: "error"
                        })
                    });
            }
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
                    commit("authentication", null);
                    commit("Authorization", false);
                    commit('cart', [])
                    commit("user", { role: "public", id: 0 });
                    // route.push('/')
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