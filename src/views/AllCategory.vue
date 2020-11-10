<template>
<div>
<Navbar></Navbar>
<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content padding-y " style="margin-top:50px;">
<div class="container-fluid p-5">

<nav class="row">
		<div class="col-md-3">
			
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #ffd7d7">
			  	<img src="../assets/images/items/1.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Summer shirts</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Unisex T shirts</a></li>
					<li><a href="">Casual shirts</a></li>
					<li><a href="">Scherf Ice cream</a></li>
					<li><a href="">Another category</a></li>
					<li><a href="">Great items name</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #FFF68D">
			  	<img src="../assets/images/items/2.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Winter jackets</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Leather jackets</a></li>
					<li><a href="">Men's jackets</a></li>
					<li><a href="">Heating battery clothes</a></li>
					<li><a href="">Jeans jackets</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #bcffb8">
			  	<img src="../assets/images/items/3.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Shorts</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Jeans shorts</a></li>
					<li><a href="">Swimming shorts</a></li>
					<li><a href="">Another some shorts</a></li>
					<li><a href="">Another category</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #c9fff3">
			  	<img src="../assets/images/items/4.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Travel bags </a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Leather bags</a></li>
					<li><a href="">Cook & Hold ovens</a></li>
					<li><a href="">Scherf Ice cream</a></li>
					<li><a href="">Another category</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #ddffeb">
			  	<img src="../assets/images/items/5.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Great items</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Combi steamers</a></li>
					<li><a href="">Cook & Hold ovens</a></li>
					<li><a href="">Scherf Ice cream</a></li>
					<li><a href="">Another category</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #dee4ff">
			  	<img src="../assets/images/items/6.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Kitchen furniture</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Combi steamers</a></li>
					<li><a href="">Cook & Hold ovens</a></li>
					<li><a href="">Scherf Ice cream</a></li>
					<li><a href="">Another category</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #ddffeb">
			  	<img src="../assets/images/items/2.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Great items</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Combi steamers</a></li>
					<li><a href="">Cook & Hold ovens</a></li>
					<li><a href="">Scherf Ice cream</a></li>
					<li><a href="">Another category</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
		<div class="col-md-3">
			<div class="card card-category">
			  <a href="#" class="img-wrap" style="background: #dee4ff">
			  	<img src="../assets/images/items/1.jpg">
			  </a>
			  <div class="card-body">
			    <h4 class="card-title"><a href="#">Other clothes</a></h4>
			    <ul class="list-menu">
			    	<li><a href="">Jeans shorts</a></li>
					<li><a href="">Cook & Hold ovens</a></li>
					<li><a href="">Scherf Ice cream</a></li>
					<li><a href="">Another category</a></li>
					<li><a href="">Great items name</a></li>
			    </ul>
			  </div>
			</div>
		</div> <!-- col.// -->
	</nav> <!-- row.// -->


</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->
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
components: {
    Products,
    Login
  },
}
</script>

<style lang="scss" scoped>
.padding-y {
    padding-top: 30px;
    padding-bottom: 30px;
}


.card-category {
    display: block;
    margin-bottom: 20px;
    overflow: hidden;
    min-height: 410px;
}
.img-wrap {
    overflow: hidden;
    display: inline-block;
    height: 170px;
    background: #fff0c5;
}
.img-wrap {
    text-align: center;
    display: block;
}
.card-category .img-wrap img {
    height: 100%;
    width: 60%;
    -o-object-fit: cover;
    object-fit: cover;
    mix-blend-mode: multiply;
}
.img-wrap img {
    max-width: 100%;
}
img {
    vertical-align: middle;
    border-style: none;
}
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 20px;
}
.card-category .card-title {
    font-weight: 600;
    font-size: 18px;
}
.card-title {
    margin-bottom: 10px;
}
.list-menu {
    list-style: none;
    margin: 0;
    padding-left: 0;
}
a:hover {
	background-color: rgb(122, 204, 133);
	border-radius: 3px;
	color: white;
	font-weight: 600;
	margin: 5px;
	background-size: 100px;
}
</style>