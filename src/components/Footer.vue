<template>
    <footer v-bind:style="{ 'background-image': 'url(' + image1 + ')' }" style="background-color:rgb(21, 95, 57); color:white;" class="section-footer border-top">
	<div class="container" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
		<section class="footer-top padding-y">
			<div class="row">
				<aside class="col-md col-6">
					<h6 class="title">Abubakar</h6>
					<ul class="list-unstyled">
						<li> <router-link to="/about">Tentang Abubakar</router-link></li>
						<li> <router-link to="/about">Karir</router-link></li>
						<li> <router-link to="/about">Mitra Abubakar</router-link></li>
						<li> <router-link to="/about">Abubakar Blog</router-link></li>
					</ul>
				</aside>
			
				<aside class="col-md col-6">
					<h6 class="title">Abubakar Seller</h6>
					<ul class="list-unstyled">
						<li> <router-link to="/seller">Pusat Edukasi</router-link></li>
						<li> <router-link to="/seller">Jasa Kirim</router-link></li>
						<li> <router-link to="/seller">Daftar Official Store</router-link></li>
						<li> <router-link to="/seller">FAQ Seller</router-link></li>
				
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Bantuan dan Panduan</h6>
					<ul class="list-unstyled">
						<li> <router-link to="/bantuan"> Abubakar Care </router-link></li>
						<li> <router-link to="/bantuan"> Syarat dan Ketentuan </router-link></li>
						<li> <router-link to="/bantuan"> Kebijakan Privasi </router-link></li>
						
					</ul>
				</aside>
				<aside class="col-md">
					<h6 class="title">Social</h6>
					<ul class="list-unstyled">
						<li><router-link to="#"> <i class="fab fa-facebook"></i> Facebook </router-link></li>
						<li><router-link to="#"> <i class="fab fa-twitter"></i> Twitter </router-link></li>
						<li><router-link to="#"> <i class="fab fa-instagram"></i> Instagram </router-link></li>
						<li><router-link to="#"> <i class="fab fa-youtube"></i> Youtube </router-link></li>
					</ul>
				</aside>
				<aside class="col-md">
					
					<div style="display: flex; justify-content: center; margin: 16px 0px;">
						<a rel="noopener noreferrer" class="unf-footer-android" aria-label="android" style="margin-right: 8px;">&nbsp;</a>
						<a rel="noopener noreferrer" class="unf-footer-ios" aria-label="ios">&nbsp;</a>
					</div>
				</aside>
			</div> <!-- row.// -->
		</section>	<!-- footer-top.// -->
      <!-- footer-top.// -->

      <section class="footer-bottom text-center">
        <p class="text-muted" style="margin-top: 20px;">
          2020 Abubakar, All rights reserved
        </p>
        <br />
      </section>
    </div>
    <!-- //container -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      image: require("@/assets/images/nav/masjid.png"),
      image1: require("@/assets/images/nav/footer.png"),
    };
  },
};
</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
  font-size: 18px;
  text-decoration: underline;
}
.border-top {
  border-top: 1px solid #e4e4e4 !important;
}
.padding-y {
  padding-top: 48px;
  padding-bottom: 18px;
}
.text-white {
  color: #fff !important;
}
.footer-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid;
}
.section-footer {
  background-repeat: round;
  background-size: 50% 100%;
}
.section-footer ul a {
  color: inherit;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}
.container {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-y: 60px;
}
.text-muted {
  color: white !important;
}
.unf-footer-android {
  background-image: url(https://ecs7.tokopedia.net/assets-unify/img/ic-download-android.svg);
  width: 135px;
}
.unf-footer-ios {
  background-image: url(https://ecs7.tokopedia.net/assets-unify/img/ic-download-ios.svg);
  width: 125px;
}
.unf-footer-android,
.unf-footer-ios {
  cursor: pointer;
  height: 40px;
}
.unf-footer-android,
.unf-footer-background,
.unf-footer-ios {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
