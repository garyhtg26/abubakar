/* import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js'; */
import 'bootstrap';
import './assets/app.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bsCustomFileInput from 'bs-custom-file-input'
window.bsCustomFileInput = bsCustomFileInput;

import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;



import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import Navbar from './components/Navbar.vue'
import SellerNav from './components/SellerNav.vue'
import Hero from './components/Hero.vue'
import FlashSale from './sections/FlashSale.vue'
import LagiPopuler from './sections/LagiPopuler.vue'
import TopUp from './sections/TopUp.vue'
import EditProfile from './profile/EditProfile.vue'
import DaftarTransaksi from './profile/DaftarTransaksi.vue'
import Komplain from './profile/Komplain.vue'
import Chat from './profile/Chat.vue'
import AddToCart from './components/AddToCart.vue'
import MiniCart from './components/MiniCart.vue'
import Footer from './components/Footer.vue'
import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from 'swiper';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.css'
import VueCardCarousel from "vue-card-carousel";
import VueCarousel from 'vue-carousel';


import axios from "axios";

import VueCurrencyFilter from "vue-currency-filter";

Vue.use(VueCurrencyFilter)
Vue.use(VueCarousel);
Vue.use(axios)
Vue.use(VueCardCarousel)

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper,Swiper /* { default options with global component } */)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)


Vue.config.productionTip = false;

Vue.component('Navbar', Navbar);
Vue.component('SellerNav', SellerNav);
Vue.component('Footer', Footer);
Vue.component('Hero', Hero);
Vue.component('FlashSale', FlashSale);
Vue.component('AddToCart', AddToCart);
Vue.component('MiniCart', MiniCart);
Vue.component('LagiPopuler', LagiPopuler);
Vue.component('EditProfile', EditProfile);
Vue.component('DaftarTransaksi', DaftarTransaksi);
Vue.component('Komplain', Komplain);
Vue.component('Chat', Chat);
Vue.component('TopUp', TopUp);
// Vue.component({Navbar, Hero, FlashSale, AddToCart, MiniCart});

if (store.state.authentication) {
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + store.state.authentication;
}
axios.defaults.baseURL = 'https://backend.abubakar.id/api/'

Vue.use(VueCurrencyFilter, {
  symbol: "Rp.",
  thousandsSeparator: ".",
  fractionCount: 0,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
});

let app = '';

$(document).ready(function(){
  bsCustomFileInput.init();
  $('.custom-file-input').on('change', function (e) {
    //get the file name
    var fileName = e.target.files[0].name;
    console.log(fileName)
    //replace the "Choose a file" label
    $('.custom-file-label').html(fileName);
  });
})

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");

  }

});
