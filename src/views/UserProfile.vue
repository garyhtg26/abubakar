<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
          <Navbar></Navbar>
      <section class="section-content padding-y" style="margin-top:90px;">
<div class="container-fluid">

<div class="row">
	<aside class="col-md-3">
		<ul class="list-group">
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(0) }"  v-on:click="selected = 0"> Edit Profile  </a>
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(1) }"  v-on:click="selected = 1"> Chat </a>
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(2) }" v-on:click="selected = 2"> Daftar Transaksi </a>
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(3) }" v-on:click="selected = 3"> Return and Refunds </a>
			<a class="list-group-item" v-bind:href="upload" v-bind:class="{ 'active' : isSelected(4) }" v-on:click="selected = 4">Upload Barang </a>
			<a class="list-group-item" v-bind:href="selling" v-bind:class="{ 'active' : isSelected(5) }" v-on:click="selected = 5"> Abubakar Seller </a>
      <a class="list-group-item" v-bind:href="wishlist" v-bind:class="{ 'active' : isSelected(6) }" v-on:click="selected = 6"> My Wishlist </a>
		</ul>
	</aside> <!-- col.// -->
	<main class="col-md-9">
        <EditProfile v-if="selected===0"></EditProfile>
        <Chat v-if="selected===1"></Chat>
        <DaftarTransaksi v-if="selected===2"></DaftarTransaksi>
        <Komplain v-if="selected===3"></Komplain>
        
	</main> <!-- col.// -->
</div>

</div> <!-- container .//  -->
</section>
    </main>
         <Login></Login>
      <mini-cart></mini-cart>
<br>
<Footer></Footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Wishlist from "@/views/Wishlist.vue";  
  
  export default {
    el: '#listGroup',
    components: {
  Products,
    Login,
    Wishlist
    },
    data() {
	return{
		chat: "/chat",
    profile: "/profile",
    upload: "/upload",
    wishlist: "/wishlist",
		selected: 0
        }
        
  }, 
  methods: {
      isSelected (i) {
        return i === this.selected
      }
    
  },
  }
</script>

<style scoped lang="scss">
  

a:hover {
 cursor:pointer;
}
.list-group{
  border-radius: 20px !important;
}
.list-group-item.active {
    z-index: 2;
    color: #fff !important;
    background-color: #199C43;
    border-color:#199C43;
}
.padding-y {
    padding-top: 30px;
    padding-right: 50px;
    padding-left: 50px;
}
a {
    color: #212529;
    text-decoration: none;
    background-color: transparent;
}

  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  
</style>
