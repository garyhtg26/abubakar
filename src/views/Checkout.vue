<template>
  <div class="chekout">
       <Navbar></Navbar>


<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content padding-y" style="margin-top:70px;">
<div class="container-fluid p-5">

<div class="row">
	<main class="col-md-9">
<div class="card">

<table class="table table-borderless table-shopping-cart">
<thead class="text-muted" >
<tr class="small text-uppercase" style="font-weight:bolder !important;">
  <th scope="col">Product</th>
  <th scope="col" width="120">Quantity</th>
  <th scope="col" width="120">Price</th>
  <th scope="col" class="text-right" width="200"> </th>
</tr>
</thead>
<tbody>
<tr>
	<td>
		<figure class="itemside">
			<div class="aside"><img src="../assets/images/items/1.jpg" class="img-sm"></div>
			<figcaption class="info">
				<a href="#" class="title text-dark">Some name of item goes here nice</a>
				<p class="text-muted small">Size: XL, Color: blue, <br> Brand: Gucci</p>
			</figcaption>
		</figure>
	</td>
	<td> 
		<select class="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
			<option>4</option>	
		</select> 
	</td>
	<td> 
		<div class="price-wrap"> 
			<var class="price">Rp1156.00</var> 
			<small class="text-muted"> Rp31.00 each </small> 
		</div> <!-- price-wrap .// -->
	</td>
	<td class="text-right"> 
	<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
	<a href="" class="btn btn-light"> Remove</a>
	</td>
</tr>
<tr>
	<td>
		<figure class="itemside">
			<div class="aside"><img src="../assets/images/items/2.jpg" class="img-sm"></div>
			<figcaption class="info">
				<a href="#" class="title text-dark">Product name  goes here nice</a>
				<p class="text-muted small">Size: XL, Color: blue, <br> Brand: Gucci</p>
			</figcaption>
		</figure>
	</td>
	<td> 
		<select class="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
			<option>4</option>	
		</select> 
	</td>
	<td> 
		<div class="price-wrap"> 
			<var class="price">Rp149.97</var> 
			<small  class="text-muted"> Rp75.00 each </small>  
		</div> <!-- price-wrap .// -->
	</td>
	<td class="text-right"> 
	<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
	<a href="" class="btn btn-light btn-round"> Remove</a>
	</td>
</tr>
<tr>
	<td>
		<figure class="itemside">
			<div class="aside"><img src="../assets/images/items/3.jpg" class="img-sm"></div>
			<figcaption class="info">
				<a href="#" class="title text-dark">Another name of some product goes just here as a demo text </a>
				<p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
			</figcaption>
		</figure>
	</td>
	<td> 
		<select class="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
		</select> 
	</td>
	<td> 
		<div class="price-wrap"> 
			<var class="price">Rp98.00</var> 
			<small class="text-muted"> Rp8.000 each</small> 
		</div> <!-- price-wrap .// -->
	</td>
	<td class="text-right"> 
		<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
		<a href="" class="btn btn-light btn-round"> Remove</a>
	</td>
</tr>
</tbody>
</table>

<div class="card-body border-top">
	<a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
	<a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
</div>	
</div> <!-- card.// -->

<div class="alert alert-success mt-3">
	<p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
</div>

	</main> <!-- col.// -->
	<aside class="col-md-3">
		<div class="card mb-3">
			<div class="card-body">
			<form>
				<div class="form-group">
					<label>Have coupon?</label>
					<div class="input-group">
						<input type="text" class="form-control" name="" placeholder="Coupon code">
						<span class="input-group-append"> 
							<button class="btn btn-primary">Apply</button>
						</span>
					</div>
				</div>
			</form>
			</div> <!-- card-body.// -->
		</div>  <!-- card .// -->
		<div class="card">
			<div class="card-body">
					<dl class="dlist-align">
					  <dt>Total price:</dt>
					  <dd class="text-right">IDR 568</dd>
					</dl>
					<dl class="dlist-align">
					  <dt>Discount:</dt>
					  <dd class="text-right">IDR 658</dd>
					</dl>
					<dl class="dlist-align">
					  <dt>Total:</dt>
					  <dd class="text-right  h5"><strong>Rp1,650</strong></dd>
					</dl>
					<hr>
					<p class="text-center mb-3">
						<img src="../assets/images/payments.png" height="26">
					</p>
					
			</div> <!-- card-body.// -->
		</div>  <!-- card .// -->
	</aside> <!-- col.// -->
</div>

</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->

        <Login></Login>
      <mini-cart></mini-cart>

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


.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    background-color: rgba(0,0,0,0);
}
.text-muted {
    color: #969696 !important;
}
.text-uppercase {
    text-transform: uppercase !important;
}
small, .small {
    font-size: 80%;
    font-weight: 400;
    font-family: 'Inter';
}
.table-shopping-cart.table td, .table-shopping-cart.table th {
    padding-left: 20px;
    padding-right: 20px;
}
.table-borderless th, .table-borderless td, .table-borderless thead th, .table-borderless tbody+tbody {
    border: 0;
}

th {
    text-align: inherit;
}
.price {
    font-weight: 600;
    font-family: sans-serif;
    font-style: initial;
    color: #212529;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}
figure {
    margin-bottom: 0;
}
figure {
    margin: 0 0 1rem;
}
.img-sm {
    width: 80px;
    height: 80px;
}
.itemside .info {
    padding-left: 15px;
    padding-right: 7px;
}
.title {
	font-weight: 400;
	font-family: 'Inter';
}
.table-shopping-cart .price-wrap {
    line-height: 1.2;
}
.price-wrap {
    letter-spacing: -0.7px;
}
.btn-light i {
    color: #969696;
}
.btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #c7c7c7;
    margin-left: 10px;
	-webkit-box-shadow: none !important;
   box-shadow: none !important;
   outline: 0;
  outline-offset: -2px;
}
</style>

