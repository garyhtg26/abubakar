<template>
  <div class="products" id="products" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
      <h1 style="color:white; margin-right:800px; padding-top:60px;" class="text-center "><i class="fa fa-bolt mr-2"></i>Flash Sale</h1>
      <div class="container">
        <section  class="padding-bottom-sm p-5">


<div class="row row-sm">
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div href="#" class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/1.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">Rp179.00</div> 
        
        <!-- price-wrap.// -->
      <div class="progress my-1">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
<a>Hampir habis</a>
<div style="margin-bottom:50px;"></div>

			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div href="#" class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/2.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Some item name here</a>
				<div class="price mt-1">Rp280.00</div> <!-- price-wrap.// -->
        <div class="progress my-1">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
<a>Hampir habis</a>
<div style="margin-bottom:50px;"></div>

			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div href="#" class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/3.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Great product name here</a>
				<div class="price mt-1">Rp56.00</div> <!-- price-wrap.// -->
        <div class="progress my-1">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
<a>Hampir habis</a>
<div style="margin-bottom:50px;"></div>

			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div href="#" class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/4.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">Rp179.00</div> <!-- price-wrap.// -->
        <div class="progress my-1">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
<a>Hampir habis</a>
<div style="margin-bottom:50px;"></div>

			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div href="#" class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/5.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">Rp179.00</div> <!-- price-wrap.// -->
        <div class="progress my-1">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
<a>Hampir habis</a>
<div style="margin-bottom:50px;"></div>

			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div href="#" class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/6.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Some item name here</a>
				<div class="price mt-1">Rp280.00</div> <!-- price-wrap.// -->
        <div class="progress my-1">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
<a>Hampir habis</a>
<div style="margin-bottom:50px;"></div>

			</figcaption>
		</div>
	</div> <!-- col.// -->

</div> <!-- row.// -->
</section>
          <!-- <h1 style="color:white; margin-right:800px;" class="text-center p-5"><i class="fa fa-bolt mr-2"></i>Flash Sale</h1>
          <div class="row">
  
              <div class="col-md-4" v-for="(product, index) in products" :key="index">
                  <div style="" class="card product-item">

                        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-6507097/purukambera_purukambera_african_kairo_tunic_set_wanita_-_nude_navy_full02_n1lylu07.jpg?output-format=webp" class="img-wrap img">
                        <div class="card-body">
                          <div class="justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                       
                            <h5 class="card-priceS">{{ product.price | currency }}</h5> 

                          </div>

                            <add-to-cart
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name">
                            </add-to-cart>
                        </div>
                    </div>
              </div>

          </div> -->
      </div>

  </div>
</template>

<script>
import {db} from '../firebase';
 
// import * as firebase from 'firebase';


export default {

  name: "Products-list",
  props: {
    msg: String
  },

data(){
    return {
        products: [
          
        ],
        image: require('@/assets/images/background1.png')

    }
  },

  methods:{

    getImage(images){
      return images[0];
    }

  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-bottom: 3rem;
    }
    .VueCarousel-slide {
      text-align: center;
    }
    .card-img-top {
      width: calc(100% - 40%);
    }
    .card-sm {
    min-height: 284px !important;
    max-height: 284px !important;
}
.progress {
  
  height: 10px !important;

}
.title {
  font-weight: 600;
}
</style>
