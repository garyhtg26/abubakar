<template>
<div>
 <Navbar></Navbar>
  <div class="admin-home" style="margin-top:80px;">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper" style="top:80px;">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a style="pointer-events:none;" href="#">Abubakar seller</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
            </div>
            <div class="user-info">
              <span class="user-name">{{profile.name}}
              </span>
              <span class="user-role"> {{email}} </span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." style="    background-color: transparent;
    border-style: solid;
    border-width:thin;
    border-color: #28a745;
    margin-right: -40px;
    border-radius: 100px;">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class=" sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>

              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span>Overview</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Orders</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>

      </nav>
      <!-- sidebar-content  -->
      <main class="page-content">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->




  </div>
</div>
</template>

<script>
  // @ is an alias to /src
  // import Hero from "@/components/Hero.vue";
  import { fb, db } from '../firebase';

  export default {
    name: "admin",
    data() {
      return {
        name: null,
        email: null,
      }
    },
    firestore(){
        const user = fb.auth().currentUser;
        // console.log(user)
        return {
          profile: db.collection('profiles').doc(user.uid),
        }
    },
    components: {
      // Hero
    },
  
    methods: {
      closeMenu() {
        $(".page-wrapper").toggleClass("toggled");
      },
      logout() {
        fb.auth().signOut()
          .then(() => {
            this.$router.replace('/');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    created() {
      let user = fb.auth().currentUser;
      // console.log(user);
      this.email = user.email;
    }
  };

</script>

<style lang="scss" scoped>
#show-sidebar {
  position: inherit !important;
  margin-top:10px !important;
}
a:hover {
  background:rgb(223, 223, 223);
  border-radius: 100px;
  color: #AC9919 !important;
  font-weight: 600;
}
.sidebar-wrapper .sidebar-content {
    /* max-height: calc(100% - 30px); */
    /* height: calc(100% - 30px); */
    overflow-y: unset !important;
    /* position: relative; */
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background-color: white;
}
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-item {
    border-color: #ffffff;
    color: black;
}
.default-theme.sidebar-bg .sidebar-wrapper a:not(.dropdown-item), .default-theme.sidebar-bg .sidebar-wrapper .sidebar-header, .default-theme.sidebar-bg .sidebar-wrapper .sidebar-search input, .default-theme.sidebar-bg .sidebar-wrapper .sidebar-search i {
    color: #232121;
}
.default-theme.sidebar-bg .sidebar-wrapper a[data-v-54c38a05]:not(.dropdown-item), .default-theme.sidebar-bg .sidebar-wrapper .sidebar-header[data-v-54c38a05], .default-theme.sidebar-bg .sidebar-wrapper .sidebar-search input[data-v-54c38a05], .default-theme.sidebar-bg .sidebar-wrapper .sidebar-search i[data-v-54c38a05] {
    color: #232121;
}
.default-theme.sidebar-bg .sidebar-wrapper .sidebar-search .input-group-text {
    background-color: transparent;
}

.default-theme.sidebar-bg .sidebar-wrapper .sidebar-menu ul li a i {
    background-color: #28a745;
    color: white;
}
.default-theme .sidebar-wrapper .sidebar-menu a:hover i, .default-theme .sidebar-wrapper .sidebar-menu a:hover:before, .default-theme .sidebar-wrapper .sidebar-menu li.active a i {
    color: #ffdd00  !important;
    text-shadow: 0px 0px 10px rgba(34, 255, 22, 0.5);
}

</style>
