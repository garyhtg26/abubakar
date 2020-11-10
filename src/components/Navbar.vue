<template>
  <div class="hello">
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
     <div style="background-color: rgb(21 95 57);" class="container-fluid" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <router-link class="logo navbar-brand " to="/">Abubakar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div style="background:white;border-radius:20px;" class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style="position:relative; margin:-50px;" class="navbar-nav" >
            <li class="nav-item">
           
              <b-dropdown class="mx-5 ">
    <!-- Using 'button-content' slot -->
    <template slot="button-content" class="btn-kategori nohover">
           <a to="/" class="kategori-text" >Kategory</a>
       
    </template>
    <b-dropdown-item to="/kategori/sepeda"><i><img src="https://s4.bukalapak.com/athena/471/s-263-263/img_subcategory.jpeg.webp" style="display: inline; width:25px; height:25px;"></i> Motor</b-dropdown-item>
    <b-dropdown-item to="/kategori/sepeda"><i><img src="https://s4.bukalapak.com/athena/7/s-263-263/img_subcategory.jpeg.webp" style="display: inline; width:25px; height:25px;"></i> Handphone</b-dropdown-item>
    <b-dropdown-item to="/kategori/sepeda"><i><img src="https://s4.bukalapak.com/athena/64/s-263-263/img_subcategory.jpeg.webp" style="display: inline; width:25px; height:25px;"></i> Sepeda</b-dropdown-item>
    <b-dropdown-item to="/kategori/sepeda"><i><img src="https://s4.bukalapak.com/athena/61/s-263-263/img_subcategory.jpeg.webp" style="display: inline; width:25px; height:25px;"></i> Olahraga</b-dropdown-item>
    <b-dropdown-item to="/kategori/sepeda"><i><img src="https://s4.bukalapak.com/athena/510/s-263-263/img_subcategory.jpeg.webp" style="display: inline; width:25px; height:25px;"></i> Elektronik</b-dropdown-item>
</b-dropdown>
            </li>
          

          </ul>
          
          <div  class="input-group md-form form-sm form-2 pl-1">
  <input style="  border:white; margin-right:50px; margin-left:10px;" class="form-control my-0 " type="text" placeholder="Cari Produk" aria-label="Search">
  <div class="input-group-append">
    <span class="input-group-search" id="basic-text1">
      <router-link to="/search">
      <i style="color:#495057;" class="button fa fa-search "
        aria-hidden="true"></i>
      </router-link>
    </span>
  </div>
          </div>
        </div>
        <div class="mr-4"></div>
        <router-link to="/wishlist" class="btn-header">
          <div style="cursor: pointer;margin-right:30px; margin-left:28px;color:black !important; " class="nav btn-header" left>
    <!-- Using 'button-content' slot -->
 
        <i class="btn-nav nohover fa fa-heart"></i>
       

   
          </div>
        </router-link>

        <div class="btn-header">
          <div style="cursor: pointer;margin-right:30px; margin-left:20px;" class="nav">
            <a data-toggle="modal" data-target="#miniCart">
              <i class="btn-nav nohover fa fa-shopping-cart"></i>
            </a>
          </div>
          
        </div>

        <div v-if="!$store.state.Authorization" class="btn-login-register">
          <b-button  class="btn-masuk " data-toggle="modal" data-target="#login"><a  style="color:#AC9919;font-weight:100 !important;">Masuk</a></b-button>
          <b-button  class="btn-daftar " data-toggle="modal" data-target="#login"><a  style=" font-weight:100 !important;">Daftar</a></b-button>
        </div>
        <!-- //login -->
        <div v-if="$store.state.Authorization" class="btn-login-profile mr-3">
<b-nav-item-dropdown no-caret style="color:#454545;" class="btn-header"  :text="username" left>
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
        <i class=" fa fa-envelope"></i>
        <span class="badge badge-pill badge-danger notify">0</span>
    </template>
    <b-dropdown-item  >Chat</b-dropdown-item>
    <b-dropdown-item  >Diskusi</b-dropdown-item>
    <b-dropdown-item  >Ulasan</b-dropdown-item>
</b-nav-item-dropdown>
<b-nav-item-dropdown no-caret style="color:#454545;" class="btn-header"  :text="username" left>
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
        <i class="fa fa-store-alt"></i>
        
    </template>
     <b-dropdown-item to="/profile">Buka Toko</b-dropdown-item>
    

</b-nav-item-dropdown>
<b-nav-item-dropdown no-caret style="color:#454545;" class="btn-header"  :text="username" right>
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
        <i class="fa fa-user"></i>
        <a style="padding-left:10px">user</a>
    </template>
     <b-dropdown-item to="/profile">Edit Profile</b-dropdown-item>
    <b-dropdown-item @click="logout" >Logout</b-dropdown-item>

</b-nav-item-dropdown>
        </div>
     </div>

</nav>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{},
  data(){
    return {
        isLoggedIn: false,
        image: require('@/assets/images/nav/background2.png')

    }
  },
  methods: {
    logout() {

      this.$store.dispatch("logout");

    },
    

  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
  font-family: 'RamadhanKarim';
  src: url('/assets/fonts/RamadhanKarim.ttf')  format('truetype');
}
  
   a{
     font-family: Arial, Helvetica, sans-serif;

   }
 

   .input-group-search {
     padding: 10px;
     position: absolute;
     margin-left: -40px; 
    z-index: 3;

   }
   /deep/ .nav-link {
     background-color: transparent !important;
     margin: 5px !important;
   }

/deep/.form-control:focus {
    border: 0;
    border-color: white !important;
    box-shadow: transparent;
    -webkit-box-shadow: 0 0 0 0.2 rem rgba(247 ,251, 255,200 / 25%) !important;
    box-shadow: 0 0 black !important;
}

   /deep/.btn-kategori {
     background-color: #C6B01B !important;
    border-color: #C6B01B !important;
    border-radius: 20px !important;
   }
   /deep/.btn-secondary:hover,
   /deep/.btn-secondary:focus,
   /deep/.btn-secondary
     {
       border-radius: 20px !important;
    color: #fff;
    background-color: #C6B01B !important;
    border-color: #C6B01B !important;
}
   .kategori {
     box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px;
     background:#C6B01B;
      color:white !important ;
      border-radius:20px;
      font-size:18px;
      font-family: 'Quicksand';
      padding: 8px;
      z-index: 1;
      position: relative;
   }
    .kategori-text {
     
      color:white !important ;
      
      font-size:18px;
      font-family: 'Quicksand';
      
   }
   /deep/ .logo:hover,
   /deep/ .logo:focus,
   .logo {
     color:white; 
     font-size:50px;
     font-weight: bold;
     font-family: 'RamadhanKarim';
         margin-right: 50px;
   }
  .button {
    display: block;
    text-decoration: none;

    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

  .button:hover,
  .button:focus {
    color: black;
}
.btn-nav {
 
  color: white;
  border-color: white ;
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
.btn-login-profile{
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

.btn-header{
  margin-right: -10px;
}
/deep/.btn-masuk:hover,
/deep/.btn-masuk:focus,
.btn-masuk{
background: white !important;
border-color: #AC9919 !important;
border-radius: 20px;
}
/deep/.btn-daftar:hover,
/deep/.btn-daftar:focus,
.btn-daftar{
  background: #AC9919 !important;
  border-color:#AC9919 !important;
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
</style>
