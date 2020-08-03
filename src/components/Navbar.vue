<template>
  <div class="hello">
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
        <router-link class="logo navbar-brand" to="/">Abubakar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav" style="padding-left:10px;">
            <li class="nav-item">
              <router-link to="/" class="kategori nav-link ml-5">Kategory</router-link>
            </li>
          

          </ul>
          
          <div  class="input-group md-form form-sm form-2 pl-1">
  <input style="border-radius: 100px !important;" class="form-control mx-5 my-0 py-1 " type="text" placeholder="Cari Produk" aria-label="Search">
  <div class="input-group-append">
    <span class="input-group-search" id="basic-text1"><i class="button fa fa-search "
        aria-hidden="true"></i></span>
  </div>
          </div>
        </div>
        <div class="mr-4"></div>
        <div class="btn-header">
          <b-nav-item-dropdown no-caret style="color:black !important; " class="nav" left>
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
        <i class="btn-outline-success nohover fa fa-heart-o"></i>
       
    </template>
    <b-dropdown-item  >Chat</b-dropdown-item>
    <b-dropdown-item  >Diskusi</b-dropdown-item>
    <b-dropdown-item  >Ulasan</b-dropdown-item>
</b-nav-item-dropdown>
        </div>

        <div class="btn-header">
          <router-link to="/" style="margin-right:30px; margin-left:20px;" class="nav">
            <a data-toggle="modal" data-target="#miniCart">
              <i class="btn-outline-success nohover fa fa-shopping-cart"></i>
            </a>
          </router-link>
          
        </div>

        <div class="btn-login-register">
          <b-button variant="success"><a data-toggle="modal" data-target="#login" style="font-weight:100 !important;">Masuk</a></b-button>
          <b-button variant="outline-success nohover"><a style="font-weight:100 !important;">Daftar</a></b-button>
        </div>

     </div>

</nav>

  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
  font-family: 'RamadhanKarim';
  src: url('/assets/fonts/RamadhanKarim.ttf')  format('truetype');
}
  @media (min-width: 992px) {

    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: white !important;
      
    }

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
   .kategori {
     box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px;
     background:green;
      color:white !important ;
      border-radius:10px;
      font-size:20px;
      font-family: 'RamadhanKarim';
   }
   .logo {
     color:green; 
     font-size:50px;
     font-family: 'RamadhanKarim';
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
.btn-login-register {
  display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 158px;
    margin: 0px 0px 0px 14px;
}
/deep/ .nav {
  padding: 0rem 0.2rem !important;
  background-color: white !important;
  
}

.btn-header{
  margin-right: -10px;
}
.container-fluid {
    background: white;
    padding-left: 50px;
    padding-right: 25px; 
    width: 100%;
   min-width: 1024px;
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
    border-color: #066b21;
}
.btn-success {
    background: #066b21;
    border-color: #066b21;
}
.nohover:hover, 
.nohover:link,
.nohover:visited,
.nohover:active {
    background-color: transparent;

}

.dropdown-toggle::after {
    display: none !important;
}
</style>
