<template>
  <div class="hello">
    <nav
      class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light"
    >
      <div
        style="background-color: rgb(21 95 57);"
        class="container-fluid"
        v-bind:style="{ 'background-image': 'url(' + image + ')' }"
      >
        <div class="logores">
          <router-link class="logo navbar-brand" to="/">
            <!-- Abubakar -->
            <img
              :src="require('@/assets/images/logo.png')"
              alt="Abubakar"
              width="200px"
              style="margin-top: -18px;"
            />
          </router-link>
        </div>

        <div style="background: white; border-radius: 20px;" class="search">
          <ul style="position: relative; margin: -50px;" class="navbar-nav">
            <li class="nav-item">
              <b-dropdown class="mx-5 my-class" menu-class="menus">
                <!-- Using 'button-content' slot -->
                <template slot="button-content" class="btn-kategori nohover">
                  <a to="/" class="kategori-text">Kategori</a>
                </template>
                <b-dropdown-item
                  :to="`/kategori/${x.name}`"
                  v-for="x in categories"
                  :key="x.id"
                >
                  <i>
                    <img
                      :src="x.photo"
                      style="display: inline; width: 25px; height: 25px;"
                    />
                  </i>
                  {{ x.name }}
                </b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>

          <div
            class="input-group md-form form-sm form-2 pl-1"
            style="overflow: hidden;"
            @mouseleave="isLeave = true"
            @mouseenter="isLeave = false"
          >
            <el-select
              v-model="searchTXT"
              v-on:keyup.enter="search"
              style="
                border-color: white !important;
                border-radius: 20px;
                width: 98%;
                cursor: alias !important;
              "
              filterable
              remote
              allow-create
              reserve-keyword
              placeholder="Cari Produk"
              :remote-method="remoteMethod"
              :loading="loading"
              @change="search"
              @visible-change="onSearching"
              default-first-option
              autocomplete
              loading-text="Orang sabar disayang tuhan ya :)"
            >
              <el-option
                v-for="(item, index) in options"
                :key="`${index}_${item}`"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
            <div class="input-group-append">
              <span class="input-group-search" id="basic-text1">
                <i
                  @click="search"
                  style="color: #495057;"
                  class="button fa fa-search"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div class="navbutton">
          <div
            class="btn-header ml-4"
            v-if="$store.state.Authorization"
            style="margin-right: 8px; color: white; cursor: pointer;"
            @click="$router.push('/wishlist')"
          >
            <i class="fa fa-heart"></i>
            <span
              v-if="$store.state.countWish != 0"
              class="badge badge-pill badge-danger notify"
            >
              {{ $store.state.countWish }}
            </span>
          </div>

          <div
            class="btn-header"
            v-if="$store.state.Authorization"
            style="color: white; cursor: pointer;"
            @click="show = true"
          >
            <i class="fa fa-shopping-cart"></i>
            <span
              v-if="$store.state.countCart != 0"
              class="badge badge-pill badge-danger notify"
            >
              {{ $store.state.countCart }}
            </span>
          </div>

          <div v-if="!$store.state.Authorization" class="btn-login-register">
            <b-button
              class="btn-masuk"
              data-toggle="modal"
              data-target="#login"
              @click="$store.commit('tabPosition', 0)"
            >
              <a style="color: #ac9919; font-weight: 100 !important;">Masuk</a>
            </b-button>
            <b-button
              class="btn-daftar"
              data-toggle="modal"
              data-target="#login"
              @click="$store.commit('tabPosition', 1)"
            >
              <a style="font-weight: 100 !important;">Daftar</a>
            </b-button>
          </div>
          <!-- //login -->
          <div v-if="$store.state.Authorization" class="btn-login-profile mr-3">
            <b-nav-item-dropdown
              no-caret
              style="color: #454545;"
              class="btn-header"
              left
            >
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <i class="fa fa-envelope"></i>
                <span class="badge badge-pill badge-danger notify">1</span>
              </template>

              <b-dropdown-item :to="`/admin/chat`">
                Chat
              </b-dropdown-item>
              <!-- <b-dropdown-item>Diskusi</b-dropdown-item> -->
              <b-dropdown-item to="/admin/komplain">Ulasan</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              no-caret
              style="color: #454545;"
              class="btn-header"
              @show="getStore"
              right
            >
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <i class="fa fa-store-alt"></i>
              </template>
              <b-dropdown-item v-if="user.store_id == null" to="/seller">
                Buka Toko
              </b-dropdown-item>

              <b-dropdown-form v-else style="width: 300px;" right>
                <div class="container">
                  <div class="row">
                    <div class="span4 well">
                      <div class="row">
                        <div class="span1 ml-3">
                          <img
                            style="
                              height: 51px;
                              width: 60px;
                              border-radius: 20px;
                            "
                            :src="store.logo"
                          />
                        </div>
                        <div class="span3 mb-2 ml-2" style="margin-top: -5px;">
                          <h4 style="font-weight: 600;">{{ store.name }}</h4>

                          <span
                            v-if="store.provinsi"
                            class="badge badge-warning mr-1"
                          >
                            {{ store.provinsi.province }}
                          </span>
                          <span class="badge badge-info">Raja Abubakar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <b-list-group-item to="/admin/overview" class="seetoko mt-2">
                  Lihat Toko
                </b-list-group-item>
              </b-dropdown-form>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              no-caret
              style="color: #454545;"
              class="btn-header"
              right
            >
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <img :src="this.$store.state.user.profile" class="avatar" />
                <span class="ml-2">{{ this.$store.state.user.name }}</span>
              </template>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </div>
      </div>
    </nav>
    <cart-nav-vue :show="show" :onClosed="close" />
  </div>
</template>

<script>
import Axios from 'axios'
import CartNavVue from './CartNav.vue'
// import Dropdown from 'vue-simple-search-dropdown';
export default {
  name: 'Navbar',
  props: {
    msg: String,
    // categories: Array,
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  components: {
    CartNavVue,
  },
  data() {
    return {
      products: [],
      data: [],
      isLoggedIn: false,
      image: require('@/assets/images/nav/background2.png'),
      categories: [],
      searchTXT: null,
      store: {},
      show: false,
      select: 1,
      //
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [],
      isLeave: false,
    }
  },

  mounted() {
    const id = this.$store.state.user.id
    this.getData(id)
    this.getCategories()
    this.$store.dispatch('countCart')
    this.$store.dispatch('countWish')
    //
  },
  methods: {
    close(val) {
      this.show = false
    },

    onSearching(event) {
      console.log(event)
      if (!event && !this.isLeave) {
        console.log(this.searchTXT)
        this.search()
      }
    },
    getData(id) {
      this.$store.commit('loading', true)
      Axios.get(`/user`)
        .then((res) => {
          this.data = Object.assign({}, res.data.data)
          // this.address = Object.assign({}, res.data.address);
          this.snack = {
            model: true,
            color: 'green accent-4',
            text: res.data.message,
          }
          this.$store.commit('loading', false)
        })
        .catch((error) => {
          this.snack = {
            model: true,
            color: 'green accent-4',
            text: error,
          }
        })
      // getData() {
      //   Axios.get("/page/home").then((res) => {
      //     this.products = res.data.products;
      //     this.data = res.data.data;
      //   });
    },
    getCategories() {
      Axios.get('page/categories?type=products&withoutChild=true').then(
        (res) => {
          this.categories = res.data.data
        },
      )
    },
    logout() {
      this.$store.dispatch('logout')
    },
    getStore() {
      if (this.user.store_id !== null && !this.store.name) {
        Axios.get('stores').then((res) => {
          this.store = res.data.data
        })
      }
    },
    search() {
      this.$router.push(
        '/search?keyword=' + this.searchTXT.replace(/[\s]/g, '-'),
      ) //.replace(/\s/g,'-')
      // .push({
      //   name: "search",
      //   query: { keyword: this.searchTXT.replace(/\s/g,'+') },
      // }); //
    },
    remoteMethod(query) {
      this.searchTXT = query
      this.loading = true
      if (query !== '') {
        Axios.post('page/search-products', { query: query }).then((res) => {
          this.options = res.data
          this.loading = false
        })
      } else {
        this.options = []
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/deep/.el-input__inner {
  border-color: white !important;
}
.menus {
  width: 300px;
  height: 600px;
  overflow: auto;
}
.my-class /deep/ .dropdown-menu {
  max-height: 500px;
  max-width: 500px;
  overflow-y: auto;
}
@font-face {
  font-family: 'RamadhanKarim';
  src: url('/assets/fonts/RamadhanKarim.ttf') format('truetype');
}

a {
  font-family: Arial, Helvetica, sans-serif;
}
/deep/.dropdown-item:active {
  background-color: transparent !important;
  color: black !important;
}
.input-group-search {
  padding: 10px;
  position: absolute;
  margin-left: -40px;
  z-index: 3;
}
/deep/.el-input--suffix .el-input__inner {
  padding-right: 30px;
  border-radius: 20px;
  cursor: auto;
}
/deep/ .nav-link {
  background-color: transparent !important;
  margin: 5px !important;
}

/deep/.form-control:focus {
  border: 0;
  border-color: white !important;
  box-shadow: transparent;
  -webkit-box-shadow: 0 0 0 0.2 rem rgba(247, 251, 255, 200 / 25%) !important;
  box-shadow: 0 0 black !important;
}

/deep/.btn-kategori {
  background-color: #c6b01b !important;
  border-color: #c6b01b !important;
  border-radius: 20px !important;
}
/deep/.btn-secondary:hover,
/deep/.btn-secondary:focus,
/deep/.btn-secondary {
  border-radius: 20px !important;
  color: #fff;
  background-color: #c6b01b !important;
  border-color: #c6b01b !important;
}
.search {
  flex-basis: 100%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
}

@media (max-width: 839px) {
  .search {
    width: 600px;
    margin-bottom: 20px;
  }
  .container-fluid {
    place-content: center;
  }
  .logo {
    margin-right: -15px !important;
  }
  .navbutton {
    margin-bottom: 20px;
    font-size: x-large;
    display: grid;
    grid-column-gap: 20px;
    margin-top: 10px;
  }
}
.navbutton {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  list-style: none;
}

.kategori {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px;
  background: #c6b01b;
  color: white !important ;
  border-radius: 20px;
  font-size: 18px;
  font-family: 'Quicksand';
  padding: 8px;
  z-index: 1;
  position: relative;
}
.kategori-text {
  color: white !important ;

  font-size: 18px;
  font-family: 'Quicksand';
}
/deep/ .logo:hover,
/deep/ .logo:focus,
.logo {
  color: white;
  font-size: 50px;
  font-weight: bold;
  font-family: 'RamadhanKarim';
  margin-right: 50px;
}
.button {
  display: block;
  text-decoration: none;

  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.button:hover,
.button:focus {
  color: black;
}
.btn-nav {
  color: white;
  border-color: white;
}
.btn-login-register {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 158px;
  margin: 0px 0px 0px 14px;
}
.btn-login-profile {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
}
/deep/ .nav {
  padding: 0rem 0.2rem !important;
}
.notify {
  position: relative;
  top: -9px;
  display: inline-block;
  padding: 0.25em 0.6em;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  border-radius: 3rem;
  color: #fff;
  background-color: #fa3434;
}
.btn-header {
  margin-right: -10px;
}
/deep/.btn-masuk:hover,
/deep/.btn-masuk:focus,
.btn-masuk {
  background: white !important;
  border-color: #ac9919 !important;
  border-radius: 20px;
}
/deep/.btn-daftar:hover,
/deep/.btn-daftar:focus,
.btn-daftar {
  background: #ac9919 !important;
  border-color: #ac9919 !important;
  border-radius: 20px;
}

.container-fluid {
  background: white;
  padding-left: 50px;
  padding-right: 25px;
  width: 100%;

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  top: 0px;
  right: 0px;
  left: 0px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px -1px;
  position: fixed;
}
.btn-outline-success {
  color: #066b21;
  background: white;
  border-color: #066b21;
}
.btn-success {
  background: #066b21;
  border-color: #066b21;
}
.nohover:hover,
.nohover:link,
.nohover:visited,
.nohover:active,
.nohover:focus {
  pointer-events: none;
}

.dropdown-toggle::after {
  display: none !important;
}
.avatar {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.seetoko {
  border-radius: 50px;
  background-color: #28a745;
  color: white;
  font-weight: 600;
  text-align: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
