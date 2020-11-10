<template>
<div >
    <Navbar></Navbar>
<div class="container p-">
<section class="section-main padding-y" style="margin-top:70px">
<main class="card">
	<div class="card-body">

<div class="row">
	<aside class="col-lg col-md-3 flex-lg-grow-0">
		<nav class="nav-home-aside">
			<h6 class="title-category">KATEGORY SEPEDA <i class="d-md-none icon fa fa-chevron-down"></i></h6>
			<ul class="menu-category">
				<li><a href="#">Diskon Sepeda</a></li>
				<li><a href="#">Equipment & Tools</a></li>
				<li><a href="#">Outweare</a></li>
				<li><a href="#">Fullbike</a></li>
				<li><a href="#">Frame</a></li>
				<li><a href="#">Fork & Suspension</a></li>
				<li><a href="#">Steering</a></li>
				<li class="has-submenu"><a href="#">More items</a>
					<ul class="submenu">
						<li><a href="#">Submenu name</a></li>
						<li><a href="#">Great submenu</a></li>
						<li><a href="#">Another menu</a></li>
						<li><a href="#">Some others</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	</aside> <!-- col.// -->
	<div class="col-md-9 col-xl-8 col-lg-7">

<!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s4.bukalapak.com/athena/1603275644283/s-828-207/BANNER_DWEB_Sepeda_3_Desk.jpg.webp" alt="First slide"> 
    </div>
    <div class="carousel-item">
      <img src="https://s4.bukalapak.com/athena/1603275617046/s-828-207/BANNER_DWEB_Sepeda_2_Desk.jpg.webp" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img src="https://s4.bukalapak.com/athena/1603275591086/s-1680-420/BANNER_DWEB_Sepeda_1_Desktop.jpg.webp" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
<!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->	

	</div> <!-- col.// -->
	<div class="col-md d-none d-lg-block flex-grow-1">
		<aside class="special-home-right">
			<h6 class="bg-blue text-center text-white mb-0 p-2">Produk Rekomen</h6>
			
			<div class="card-banner border-bottom">
			  <div class="py-3" style="width:80%">
			    <h6 class="card-title">Fullbike</h6>
			    <a href="#" class="btn btn-secondary btn-sm"> Shop now </a>
			  </div> 
			  <img src="https://s4.bukalapak.com/athena/1597313355503/w-300/BANNER_DWEB_300_x_340_ragam_sepatu_copy.jpg.webp" height="80" class="img-bg">
			</div>

			<div class="card-banner border-bottom">
			  <div class="py-3" style="width:80%">
			    <h6 class="card-title">Outwear </h6>
			    <a href="#" class="btn btn-secondary btn-sm"> Shop now </a>
			  </div> 
			  <img src="https://s4.bukalapak.com/athena/1597313381302/w-300/BANNER_DWEB_300_x_340_Koleksi_Jilbab_Copy.jpg.webp" height="80" class="img-bg">
			</div>

			<div class="card-banner border-bottom">
			  <div class="py-3" style="width:80%">
			    <h6 class="card-title">Saddle</h6>
			    <a href="#" class="btn btn-secondary btn-sm"> Shop now </a>
			  </div> 
			  <img src="https://s4.bukalapak.com/athena/1597313399303/w-300/BANNER_DWEB_300_x_340_jaket_copy.jpg.webp" height="80" class="img-bg">
			</div>

		</aside>
	</div> <!-- col.// -->
</div> <!-- row.// -->

	</div> <!-- card-body.// -->
</main> <!-- card.// -->

</section>
<!-- ========================= SECTION MAIN END// ========================= -->

 <div class="mx-4" style="margin-bottom: 40px;">
    <el-image style="height:150px;" :src="src"></el-image>
  </div>

<!-- =============== SECTION DEAL =============== -->
<section class="padding-bottom">
 <div class="card card-deal">
     <div class="col-heading content-body">
      <header class="section-heading">
       <h3 class="section-title">Deals and offers</h3>
       <p>Hygiene equipments</p>
     </header><!-- sect-heading -->
     <div class="timer">
       <div> <span class="num">04</span> <small>Days</small></div>
       <div> <span class="num">12</span> <small>Hours</small></div>
       <div> <span class="num">58</span> <small>Min</small></div>
       <div> <span class="num">02</span> <small>Sec</small></div>
     </div>
   </div> <!-- col.// -->
   <div class="row no-gutters items-wrap">
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="#" class="img-wrap"> 
       <img src="../assets/images/items/3.jpg"> 
      </a>
      <div class="text-wrap p-3">
       	<a href="#" class="title">Summer clothes</a>
       	<span class="badge badge-danger"> -20% </span>
      </div>
   </figure>
 </div> <!-- col.// -->
 <div class="col-md col-6">
   <figure class="card-product-grid card-sm">
    <a href="#" class="img-wrap"> 
     <img src="../assets/images/items/4.jpg"> 
   </a>
   <div class="text-wrap p-3">
     <a href="#" class="title">Some category</a>
     <span class="badge badge-danger"> -5% </span>
   </div>
 </figure>
</div> <!-- col.// -->
<div class="col-md col-6">
 <figure class="card-product-grid card-sm">
  <a href="#" class="img-wrap"> 
   <img src="../assets/images/items/5.jpg"> 
 </a>
 <div class="text-wrap p-3">
   <a href="#" class="title">Another category</a>
   <span class="badge badge-danger"> -20% </span>
 </div>
</figure>
</div> <!-- col.// -->
<div class="col-md col-6">
 <figure class="card-product-grid card-sm">
  <a href="#" class="img-wrap"> 
   <img src="../assets/images/items/6.jpg"> 
 </a>
 <div class="text-wrap p-3 ">
   <a href="#" class="title">Home apparel</a>
   <span class="badge badge-danger"> -15% </span>
 </div>
</figure>
</div> <!-- col.// -->
<div class="col-md col-6">
 <figure class="card-product-grid card-sm">
  <a href="#" class="img-wrap"> 
   <img src="../assets/images/items/7.jpg"> 
 </a>
 <div class="text-wrap p-3">
   <a href="#" class="title text-truncate">Smart watches</a>
   <span class="badge badge-danger"> -10% </span>
 </div>
</figure>
</div> <!-- col.// -->
</div>
</div>

</section>
<!-- =============== SECTION DEAL // END =============== -->

<!-- =============== SECTION 1 =============== -->
<section class="padding-bottom pt-4">
<header class="section-heading heading-line ">
	<h4 class="title-section text-uppercase">Apparel</h4>
</header>

<div class="card card-home-category-1">
<div class="row no-gutters">
	<div class="col-md-3 baseplate">
	
	<div class="home-category-banner ">
		<img src="https://s1.bukalapak.com/pavilion/1586920137167/original/bukamall-logo-white.png" height="52px" width="auto" class="bukamall-logo">
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		<a href="#" class="btn btn-primary rounded-pill">Shop now</a>
		
	</div>

	</div> <!-- col.// -->
	<div class="col-md-9">
		<carousel :perPage="4" :paginationEnabled="false" navigationEnabled>
			<slide>
 <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="#" class="img-wrap"> 
       <img src="../assets/images/items/3.jpg"> 
      </a>
      <div class="text-wrap p-3">
       	<a href="#" class="title">Summer </a>
       	<span class="badge badge-danger"> -20% </span>
      </div>
   </figure>
 </div>
</slide>
 <slide> <!-- col.// -->
 <div class="col-md col-6">
   <figure class="card-product-grid card-sm">
    <a href="#" class="img-wrap"> 
     <img src="../assets/images/items/4.jpg"> 
   </a>
   <div class="text-wrap p-3">
     <a href="#" class="title">Some </a>
     <span class="badge badge-danger"> -5% </span>
   </div>
 </figure>
</div>
</slide>
<slide> <!-- col.// -->
<div class="col-md col-6">
 <figure class="card-product-grid card-sm">
  <a href="#" class="img-wrap"> 
   <img src="../assets/images/items/5.jpg"> 
 </a>
 <div class="text-wrap p-3">
   <a href="#" class="title">Another category</a>
   <span class="badge badge-danger"> -20% </span>
 </div>
</figure>
</div>
</slide>
<slide> <!-- col.// -->
<div class="col-md col-6">
 <figure class="card-product-grid card-sm">
  <a href="#" class="img-wrap"> 
   <img src="../assets/images/items/6.jpg"> 
 </a>
 <div class="text-wrap p-3 ">
   <a href="#" class="title">Home apparel</a>
   <span class="badge badge-danger"> -15% </span>
 </div>
</figure>
</div>
</slide>
<slide> <!-- col.// -->
<div class="col-md col-6">
 <figure class="card-product-grid card-sm">
  <a href="#" class="img-wrap"> 
   <img src="../assets/images/items/7.jpg"> 
 </a>
 <div class="text-wrap p-3">
   <a href="#" class="title text-truncate">Smart watches</a>
   <span class="badge badge-danger"> -10% </span>
 </div>
 </figure>
</div>
</slide>
		</carousel>
   
 <!-- col.// -->
</div> <!-- col.// -->
</div> <!-- row.// -->
</div> <!-- card.// -->
</section>
<!-- =============== SECTION 1 END =============== -->

<!-- =============== SECTION 2 =============== -->
<section class="padding-bottom pt-4">
<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Electronics</h4>
</header>

<div class="card card-home-category">
<div class="row no-gutters">
	<div class="col-md-3 baseplate">
	
	<div class="home-category-banner ">
		<img src="https://s1.bukalapak.com/pavilion/1586920137167/original/bukamall-logo-white.png" height="52px" width="auto" class="bukamall-logo">
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		<a href="#" class="btn btn-primary rounded-pill">Shop now</a>
		
	</div>

	</div> <!-- col.// -->
	<div class="col-md-9">
<ul class="row no-gutters bordered-cols">
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Well made electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/7.jpg"> 

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Another demo text for item stuff goes here  </h6>
		<img class="img-sm float-right" src="../assets/images/items/8.jpg"> 

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/9.jpg"> 

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Group of electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/10.jpg"> 

	</div>
</a>	
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/11.jpg"> 

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/12.jpg"> 

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/1.jpg"> 


	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right" src="../assets/images/items/2.jpg"> 

	</div>
</a>
	</li>
</ul>

	</div> <!-- col.// -->
</div> <!-- row.// -->
</div> <!-- card.// -->
</section>
<!-- =============== SECTION 2 END =============== -->


<!-- =============== SECTION ITEMS =============== -->
<section  class="padding-bottom-sm pt-4">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Recommended items</h4>
</header>

<div class="row row-sm">
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/1.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/2.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Some item name here</a>
				<div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/3.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Great product name here</a>
				<div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/4.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/5.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/6.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Some item name here</a>
				<div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/7.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Great product name here</a>
				<div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/9.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/4.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/5.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Just another product name</a>
				<div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/6.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Some item name here</a>
				<div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="clearfix col-xl-2 col-lg-3 col-md-4 col-6">
		<div class="card card-sm card-product-grid">
			<a href="#" class="img-wrap"> <img src="../assets/images/items/7.jpg"> </a>
			<figcaption class="info-wrap">
				<a href="#" class="title">Great product name here</a>
				<div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div>
   <div class="clearfix visible-xs"></div>  <!-- col.// -->
</div> <!-- row.// -->
</section>
</div>
 <Login></Login>
      <mini-cart></mini-cart>
      <br>
  
<Footer></Footer>
</div>
     

</template>

<script>
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Products,
    Login
  },
  mounted(){
$('.carousel').carousel({
  interval: 2000
})
  },
  data() {
      return {
        src: require('@/assets/images/banner1.png'),
         src2: require('@/assets/images/banner2.png'),
          src3: require('@/assets/images/nav/banner.png'),
          image: require('@/assets/images/nav/background1.png'),
          icon: require('@/assets/images/icon/semua.png').default
      }
	},
};
</script>

<style scoped lang="scss">
.center {
  margin: auto;
  width: 50%;

  padding: 10px;
}
.padding-y {
    padding-top: 30px;
    padding-bottom: 30px;
}
.nav-home-aside {
    width: 200px;
}
.nav-home-aside .menu-category {
    margin: 0;
    padding: 0;
}
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 20px;
}
h6, .h6 {
    font-size: 1rem;
	font-weight: 600;
	font-family: "Inter", Arial, "Helvetica Neue", "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.nav-home-aside .menu-category {
    margin: 0;
    padding: 0;
}
.nav-home-aside .menu-category li {
    position: relative;
    display: block;
    border-bottom: 1px solid #e5e7ea;
}
.nav-home-aside .menu-category a {
    color: #212529;
}
.nav-home-aside .menu-category>li>a {
    display: block;
    padding: 10px 0px;
}
.VueCarousel-navigation-prev {
    background-image: 'data:image/png; base64, ...'; // add your image as base64
    font-size: 0; // to hide the unicode arrow provided by the library

    // ... your custom styles (height, width...)
}
.VueCarousel-navigation-next {
    background-image: 'data:image/png; base64, ...'; // add your image as base64
    font-size: 0; // to hide the unicode arrow provided by the library

    // ... your custom styles (height, width...)
}
.nav-home-aside .menu-category .submenu {
    display: none;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    z-index: 20;
    position: absolute;
    left: 100%;
    top: 0;
    width: 250px;
    background: #fff;
}
.nav-home-aside .menu-category .submenu li {
    list-style: none;
}
.nav-home-aside .menu-category li {
    position: relative;
    display: block;
    border-bottom: 1px solid #e5e7ea;
}
.nav-home-aside .menu-category .submenu li a {
    padding: 10px 16px;
    display: block;
}
.nav-home-aside .menu-category a {
    color: #212529;
}

.slider-home-banner .carousel-item img {
    width: 100%;
    height: 300px;

    -o-object-fit: cover;
    object-fit: cover;
}
img {
    vertical-align: middle;
    border-style: none;
}
.flex-grow-1 {
    -webkit-box-flex: 1 !important;
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
}
.bg-blue {
    background-color: #199C43;
}
.text-white {
    color: #fff !important;
}
.text-center {
    text-align: center !important;
}
.special-home-right .card-banner {
    min-height: 112px;
}
.card-deal {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.card-banner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    background-size: cover;
    background-position: center center;
}
.card-banner .img-bg {
    position: absolute;
    right: 0;
    bottom: 20px;
    mix-blend-mode: multiply;
    max-width: 100%;
}
.card-deal .col-heading {
    min-width: 300px;
    -ms-flex-preferred-size: 350px;
    flex-basis: 350px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.card-deal .row {
    width: 100%;
}
.timer>div {
    display: inline-block;
    text-align: center;
    margin-right: 5px;
}
.card-deal .card-product-grid {
    margin-bottom: 0;
    text-align: center;
}

.card-sm {
    min-height: 284px;
}
.card .img-wrap {
    overflow: hidden;
}

.card-sm .img-wrap {
    height: 180px !important;
}

.card-product-grid .img-wrap {
    height: 250px;
}
.img-wrap img {
    height: 100%;
    max-width: 100%;
    width: auto;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
a.title {
    color: #212529;
    display: block;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.timer .num {
    padding: 7px 3px;
    display: block;
    background-color: #212529;
    min-width: 44px;
    color: #fff;
    font-size: 22px;
    border-radius: 6px;
    line-height: 1.2;
}
.content-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 30px;
}
.card-deal .items-wrap>[class*=col] {
    border-left: 1px solid #e5e7ea;
}
.no-gutters {
    padding-right: 0;
    padding-left: 0;
}
.home-category-banner {
    position: relative;
    margin-top: 50px;
    padding: 30px;
    height: 100%;
    text-align: -webkit-center;
    overflow: hidden;
    font-family: Hind Madurai,sans-serif;
    color: white;
}
.bg-light-orange {
    background-color: #ffdcb0;
}
.rounded-pill {
    border-radius: 50rem !important;
}
.btn-outline-primary {
    font-weight: 600;
    border-color: green;
}
.btn-outline-primary:hover {
    background-color: green !important;
}

.home-category-banner .img-bg {
    position: absolute;
    right: -50px;
    bottom: -50px;
    mix-blend-mode: multiply;
    height: 260px;
	padding-top:20px;
}
ul.row, ul.row-sm {
    list-style: none;
    padding: 0;
}
.bordered-cols {
    overflow: hidden;
    border-color: #e5e7ea;
    border-width: 1px 0 0 1px;
    border-style: solid;
}
.img-sm {
    width: 80px;
    height: 80px;
}
.title{
	font-weight: bold;
}
.baseplate{
	background: url(https://s0.bukalapak.com/baseplate/bukamall-banner.webp) 50% 50%;
    border-radius: 8px 0 0 8px;
    width: 100%;
    background-size: cover;
}
.card-home-category-1 {

}
a {
	font-family: "Inter",Arial,"Helvetica Neue","Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
	font-weight: 400;
}
@media (max-width: 768px){
.nav-home-aside .title-category {
    cursor: pointer;
    padding: 10px 10px;
    display: block;
    border: 1px solid #ddd;
    -webkit-box-shadow: 0px 2px 3px rgba(102,102,102,0.1);
    box-shadow: 0px 2px 3px rgba(102,102,102,0.1);
    border-radius: 5px;
}
}
@media (max-width: 768px) {
.nav-home-aside {
    width: 100%;
    margin-bottom: 20px;
}
}
@media (max-width: 768px){
.nav-home-aside .menu-category {
    margin-bottom: 20px;
    display: none;
}
}
@media (min-width: 1100px){
.container {
    max-width: 1400px;
}
}
</style>