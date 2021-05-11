<template>
  <div>
    <Navbar></Navbar>
    <div class="admin-home" style="margin-top: 70px;">
      <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <a
          id="show-sidebar"
          @click="closeMenu"
          class="btn btn-sm btn-dark"
          href="#"
        >
          <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper" style="top: 80px;">
          <div class="sidebar-content">
            <!-- sidebar-brand  -->
            <div class="sidebar-item sidebar-brand">
              <a style="pointer-events: none;" href="#">Abubakar seller</a>
              <div id="close-sidebar" @click="closeMenu">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <!-- sidebar-header  -->
            <div class="sidebar-item sidebar-header">
              <div class="user-pic">
                <img
                  class="img-responsive img-rounded"
                  src="/img/user.png"
                  alt="User picture"
                />
              </div>

              <div class="user-info">
                <span class="user-name">{{ this.$store.state.user.name }}</span>
                <span class="user-role"></span>
                <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            <!-- sidebar-search  -->
            <div class="sidebar-item sidebar-search">
              <div style="display: flex; align-items: center;" class="">
                <div style="margin-right: 15px; width: 80%;">
                  <b-progress
                    :value="80"
                    variant="success"
                    height="8px"
                    :animated="animate"
                    style=""
                  ></b-progress>
                </div>
                <div class="">
                  <span class="user-poin">80</span>
                  <span class="max-poin">/100</span>
                </div>
              </div>
            </div>
            <div
              class="sidebar-item sidebar-badge p-3"
              data-testid="sidebar-shop-badge"
            >
              <div
                data-testid="lblSellerSidebarShopStatus"
                class="badge-status is-rm"
              >
                <div class="badge">
                  <img
                    :src="$store.state.level"
                    class="badge-icon css-5wtm34 e3y88g10"
                    aria-hidden="true"
                    role="presentation"
                  />
                  <span class="css-1jgdxj6">Upgrade</span>
                </div>
              </div>
            </div>
            <div class="css-1kxo03c block" style="margin-top: -15px;">
              <div
                data-testid="sidebar-shop-balance-container"
                class="css-15ql0fj"
              >
                <div class="css-1jijh37">
                  <div class="css-n6y9a7" data-testid="txtSellerSidebarSaldo">
                    Saldo
                  </div>
                  <div>
                    <a
                      href="https://www.tokopedia.com/deposit.pl?nref=dside"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="css-8p1ojt"
                    >
                      <span
                        class="css-q3ujs5 mr-2"
                        data-testid="txtSellerSidebarValueSaldo"
                      >
                        {{ $store.state.saldo | currency }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->

            <!-- sidebar-menu  -->
            <div class="sidebar-item sidebar-menu" style="overflow: auto;">
              <ul>
                <li>
                  <router-link to="/admin/overview">
                    <i class="fa fa-chart-line"></i>
                    <span>Overview</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/chat">
                    <i class="fa fa-comment"></i>
                    <span>Chat</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/products">
                    <i class="fa fa-archive"></i>
                    <span>Produk</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/orders">
                    <i class="fa fa-shopping-cart"></i>
                    <span>Penjualan</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/komplain">
                    <i class="fa fa-frown-o"></i>
                    <span>Komplain</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/ads">
                    <i class="fa fa-bullhorn"></i>
                    <span>Promo</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/profile">
                    <i class="fa fa-cog"></i>
                    <span>Pengaturan</span>
                  </router-link>
                </li>
              </ul>
              <div style="height: 120px;"></div>
            </div>

            <!-- sidebar-menu  -->
          </div>
        </nav>
        <!-- sidebar-content  -->
        <main class="page-content">
          <el-collapse-transition>
            <router-view />
          </el-collapse-transition>
        </main>
        <!-- page-content" -->
      </div>
      <!-- page-wrapper -->
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'admin',
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      data: {},
      animate: true,
      isLoggedIn: false,
      image: require('@/assets/images/nav/background2.png'),
    }
  },
  mounted() {
    const id = this.$store.state.user.id
    this.getData(id)
  },
  methods: {
    closeMenu() {
      $('.page-wrapper').toggleClass('toggled')
    },
    getData(id) {
      this.$store.commit('loading', true)
      Axios.get(`/users/${id}`)
        .then((res) => {
          this.data = Object.assign({}, res.data.data)
          this.address = Object.assign({}, res.data.address)
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
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.state.Authorization ? next(true) : next('/')
    })
  },
}
</script>
<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(153, 153, 153);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #00b33c;
}
//
#show-sidebar {
  margin-top: 80px !important;
  z-index: 99;
}
a:hover {
  background: rgb(223, 223, 223);
  border-radius: 100px;
  color: #ac9919 !important;
  font-weight: 600;
}
@media (max-width: 839px) {
  .admin-home{
    margin-top: 220px !important;
  }
  .sidebar{
    top: 200px !important;
  }
}
.sidebar-wrapper .sidebar-content {
  /* max-height: calc(100% - 30px); */
  /* height: calc(100% - 30px); */
  // overflow: auto !important;
  overflow-y: auto !important;
  /* position: relative; */
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: white;
}
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-item {
  border-color: #ffffff;
  color: black;
  // overflow: auto;
}
.default-theme.sidebar-bg .sidebar-wrapper a:not(.dropdown-item),
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-header,
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-search input,
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-search i {
  color: #232121;
}
.default-theme.sidebar-bg
  .sidebar-wrapper
  a[data-v-54c38a05]:not(.dropdown-item),
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-header[data-v-54c38a05],
.default-theme.sidebar-bg
  .sidebar-wrapper
  .sidebar-search
  input[data-v-54c38a05],
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-search i[data-v-54c38a05] {
  color: #232121;
}
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-search .input-group-text {
  background-color: transparent;
}

.default-theme.sidebar-bg .sidebar-wrapper .sidebar-menu ul li a i {
  background-color: #28a745;
  color: white;
}
.default-theme .sidebar-wrapper .sidebar-menu a:hover i,
.default-theme .sidebar-wrapper .sidebar-menu a:hover:before,
.default-theme .sidebar-wrapper .sidebar-menu li.active a i {
  color: #ffdd00 !important;
  text-shadow: 0px 0px 10px rgba(34, 255, 22, 0.5);
}
.user-poin {
  line-height: 22px;
  font-weight: 700;
  -webkit-transition: opacity 0s ease 0.15s, visibility 0s ease 0.15s;
  transition: opacity 0s ease 0.15s, visibility 0s ease 0.15s;
  color: rgba(49, 53, 59, 0.96);
  font-size: 15px;
  cursor: pointer;
}
.max-poin {
  color: #9fa6b0;
  font-size: 10px;
}
.sidebar-badge {
  visibility: visible;
  opacity: 1;
  display: inline-block;
  -webkit-transition: none;
  transition: none;
  border-bottom: 1px solid #f3f4f5;
  padding: 16px 0;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.badge-status {
  padding: 6px 8px;
  width: 100%;
  border-radius: 8px;
  text-align: left;
  font-weight: 700;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 16px;
  font-size: 0.75rem;
  background-color: #f3f4f5;
  color: #6c727c;
  cursor: pointer;
}
.badge {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.badge-icon {
  width: 100px;
  display: inline-block;
  margin-right: 5px;
}
.css-1jgdxj6 {
  font-size: 10px;
  color: #03ac0e;
  line-height: 16px;
}

// saldo
.css-1kxo03c {
  visibility: visible;
  opacity: 1;
  display: inline-block;
  -webkit-transition: none;
  transition: none;
}
.css-15ql0fj {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f5;
}
.css-1jijh37 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  padding: 2px 4px;
}
.css-n6y9a7 {
  font-size: 0.875rem;
}
.css-8p1ojt {
  line-height: 22px;
  /* font-weight: 700; */
  -webkit-transition: opacity 0s ease 0.15s, visibility 0s ease 0.15s;
  transition: opacity 0s ease 0.15s, visibility 0s ease 0.15s;
  color: rgba(49, 53, 59, 0.96);
  font-size: 1.15625rem;
  cursor: pointer;
}
.css-q3ujs5 {
  font-size: 0.875rem;
  color: #31353b;
  font-weight: 800;
}
.css-1kxo03c.block {
  display: block;
  padding: 20px;
}
</style>
