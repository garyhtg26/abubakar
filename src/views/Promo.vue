<template>
  <div>
      <Navbar></Navbar>
    <div style="margin-top:80px;">
         <vueper-slides 
    :slide-ratio="1 / 4" fixed-height="280px"
    ref="myVueperSlides"
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="slide.id"
    :title="slide.title"
    :content="slide.content"
    :image="slide.image"
    :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]" />
  <template v-slot:pause>
    <i class="icon pause_circle_outline"></i>
  </template>
  </vueper-slides>

<div class="container mt-5">
      <h4 style="margin-bottom:20px">Promo Abubakar</h4>
   <div id="accordion">
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
         
        <b-tab title="Belanja" active >
            <section id="content" data-category="belanja">
                <div class="row promo-row">
                    <div class="col-md-4 col-sm-6">
  <div class="promotion-box">
	<div class="promotion-image">
	  <a target="_blank" href="https://www.tokopedia.com/promo/digital-biaya-pendidikan/?cta_src=367" data-click="{&quot;event&quot;:&quot;promoClick&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;user click on promo&quot;,&quot;eventLabel&quot;:&quot;Siap songsong tahun ajaran baru!&quot;,&quot;ecommerce&quot;:{&quot;promoClick&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:152681,&quot;name&quot;:&quot;\/promo - p1 - promo list banner&quot;,&quot;position&quot;:1,&quot;creative&quot;:&quot;digital-biaya-pendidikan&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/09\/PELAJARHEPI_Thumbnail-Promo_600x328-1.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}">
		<img data-impression="{&quot;event&quot;:&quot;promoView&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;impression on promo&quot;,&quot;eventLabel&quot;:&quot;Siap songsong tahun ajaran baru!&quot;,&quot;ecommerce&quot;:{&quot;promoView&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:152681,&quot;name&quot;:&quot;\/promo - p1 - promo list banner&quot;,&quot;position&quot;:1,&quot;creative&quot;:&quot;digital-biaya-pendidikan&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/09\/PELAJARHEPI_Thumbnail-Promo_600x328-1.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}" src="https://ecs7.tokopedia.net/img/blog/promo/2020/09/PELAJARHEPI_Thumbnail-Promo_600x328-1.jpg" class="img-responsive img-full viewed" alt="Siap songsong tahun ajaran baru!" scale="0">
	  </a>
	</div>
	<div class="promotion-description">
	  <p>
		Siap songsong tahun ajaran baru!	  </p>
	  <div class="promotion-date">
		<div class="promotion-date-detail">
		  <div class="promotion-box-label text-secondary">Periode Promo</div>
		  <div class="promotion-box__value">
			1 - 10 Nov 2020		  </div>
		</div>
	  </div>
	  <div class="promotion-code">

				<div class="promotion-code-detail">
		  <div class="promotion-box-label text-secondary">
			Kode Promo
			<div class="promotion-box-label-tooltip">
			  <span class="promotion-box-label-tooltip__icon-info"></span>
			  <span class="promotion-box-label-tooltip__text">
				Masukkan kode promo di halaman pembayaran
			  </span>
			</div>
		  </div>
		  <input type="text" class="sticky-code-voucher__text" value="PELAJARHEPI" readonly="">
		</div>
		<a class="btn btn-ghost btn-small promotion-code__btn" href="#" data-code-category="produk-digital">Salin Kode</a>
		
	  </div>
	</div>
	<div class="promotion-cta">

			  <a target="_blank" href="https://www.tokopedia.com/promo/digital-biaya-pendidikan/?cta_src=367" class="promotion__btn" data-click="{&quot;event&quot;:&quot;promoClick&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;user click on promo&quot;,&quot;eventLabel&quot;:&quot;Siap songsong tahun ajaran baru!&quot;,&quot;ecommerce&quot;:{&quot;promoClick&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:152681,&quot;name&quot;:&quot;\/promo - p1 - promo list banner&quot;,&quot;position&quot;:1,&quot;creative&quot;:&quot;digital-biaya-pendidikan&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/09\/PELAJARHEPI_Thumbnail-Promo_600x328-1.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}">Lihat Detail</a>
		
	</div>
  </div>
</div>
<div class="col-md-4 col-sm-6">
  <div class="promotion-box">
	<div class="promotion-image">
	  <a target="_blank" href="https://www.tokopedia.com/promo/digital-belajar-6/?cta_src=367" data-click="{&quot;event&quot;:&quot;promoClick&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;user click on promo&quot;,&quot;eventLabel&quot;:&quot;Saatnya nyari ilmu lagi!&quot;,&quot;ecommerce&quot;:{&quot;promoClick&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:146978,&quot;name&quot;:&quot;\/promo - p2 - promo list banner&quot;,&quot;position&quot;:2,&quot;creative&quot;:&quot;digital-belajar-6&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/07\/Thumbnail-600x328-3.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}">
		<img data-impression="{&quot;event&quot;:&quot;promoView&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;impression on promo&quot;,&quot;eventLabel&quot;:&quot;Saatnya nyari ilmu lagi!&quot;,&quot;ecommerce&quot;:{&quot;promoView&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:146978,&quot;name&quot;:&quot;\/promo - p2 - promo list banner&quot;,&quot;position&quot;:2,&quot;creative&quot;:&quot;digital-belajar-6&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/07\/Thumbnail-600x328-3.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}" src="https://ecs7.tokopedia.net/img/blog/promo/2020/07/Thumbnail-600x328-3.jpg" class="img-responsive img-full viewed" alt="Saatnya nyari ilmu lagi!" scale="0">
	  </a>
	</div>
	<div class="promotion-description">
	  <p>
		Saatnya nyari ilmu lagi!	  </p>
	  <div class="promotion-date">
		<div class="promotion-date-detail">
		  <div class="promotion-box-label text-secondary">Periode Promo</div>
		  <div class="promotion-box__value">
			1 - 30 Nov 2020		  </div>
		</div>
	  </div>
	  <div class="promotion-code">

				<div class="promotion-code-detail">
		  <div class="promotion-box-label text-secondary">
			Kode Promo
			<div class="promotion-box-label-tooltip">
			  <span class="promotion-box-label-tooltip__icon-info"></span>
			  <span class="promotion-box-label-tooltip__text">
				Masukkan kode promo di halaman pembayaran
			  </span>
			</div>
		  </div>
		  <input type="text" class="sticky-code-voucher__text" value="TEBUSILMU" readonly="">
		</div>
		<a class="btn btn-ghost btn-small promotion-code__btn" href="#" data-code-category="produk-digital">Salin Kode</a>
		
	  </div>
	</div>
	<div class="promotion-cta">

			  <a target="_blank" href="https://www.tokopedia.com/promo/digital-belajar-6/?cta_src=367" class="promotion__btn" data-click="{&quot;event&quot;:&quot;promoClick&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;user click on promo&quot;,&quot;eventLabel&quot;:&quot;Saatnya nyari ilmu lagi!&quot;,&quot;ecommerce&quot;:{&quot;promoClick&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:146978,&quot;name&quot;:&quot;\/promo - p2 - promo list banner&quot;,&quot;position&quot;:2,&quot;creative&quot;:&quot;digital-belajar-6&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/07\/Thumbnail-600x328-3.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}">Lihat Detail</a>
		
	</div>
  </div>
</div>
<div class="col-md-4 col-sm-6">
  <div class="promotion-box">
	<div class="promotion-image">
	  <a target="_blank" href="https://www.tokopedia.com/promo/digital-cashback-7/?cta_src=367" data-click="{&quot;event&quot;:&quot;promoClick&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;user click on promo&quot;,&quot;eventLabel&quot;:&quot;Bayar Tagihanmu di Tokopedia Saja&quot;,&quot;ecommerce&quot;:{&quot;promoClick&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:26731,&quot;name&quot;:&quot;\/promo - p5 - promo list banner&quot;,&quot;position&quot;:5,&quot;creative&quot;:&quot;digital-cashback-7&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/11\/Thumbnail-600x328-28.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}">
		<img data-impression="{&quot;event&quot;:&quot;promoView&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;impression on promo&quot;,&quot;eventLabel&quot;:&quot;Bayar Tagihanmu di Tokopedia Saja&quot;,&quot;ecommerce&quot;:{&quot;promoView&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:26731,&quot;name&quot;:&quot;\/promo - p5 - promo list banner&quot;,&quot;position&quot;:5,&quot;creative&quot;:&quot;digital-cashback-7&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/11\/Thumbnail-600x328-28.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}" src="https://ecs7.tokopedia.net/img/blog/promo/2020/11/Thumbnail-600x328-28.jpg" class="img-responsive img-full viewed" alt="Bayar Tagihanmu di Tokopedia Saja" scale="0">
	  </a>
	</div>
	<div class="promotion-description">
	  <p>
		Bayar Tagihanmu di Tokopedia Saja	  </p>
	  <div class="promotion-date">
		<div class="promotion-date-detail">
		  <div class="promotion-box-label text-secondary">Periode Promo</div>
		  <div class="promotion-box__value">
			1 - 30 Nov 2020		  </div>
		</div>
	  </div>
	  <div class="promotion-code">

				<div class="promotion-code-detail">
		  <div class="promotion-box-label text-secondary">
			Kode Promo
			<div class="promotion-box-label-tooltip">
			  <span class="promotion-box-label-tooltip__icon-info"></span>
			  <span class="promotion-box-label-tooltip__text">
				Masukkan kode promo di halaman pembayaran
			  </span>
			</div>
		  </div>
		  <input type="text" class="sticky-code-voucher__text" value="COBABAYAR" readonly="">
		</div>
		<a class="btn btn-ghost btn-small promotion-code__btn" href="#" data-code-category="produk-digital">Salin Kode</a>
		
	  </div>
	</div>
	<div class="promotion-cta">

			  <a target="_blank" href="https://www.tokopedia.com/promo/digital-cashback-7/?cta_src=367" class="promotion__btn" data-click="{&quot;event&quot;:&quot;promoClick&quot;,&quot;eventCategory&quot;:&quot;promo microsite - promo list&quot;,&quot;eventAction&quot;:&quot;user click on promo&quot;,&quot;eventLabel&quot;:&quot;Bayar Tagihanmu di Tokopedia Saja&quot;,&quot;ecommerce&quot;:{&quot;promoClick&quot;:{&quot;promotions&quot;:[{&quot;id&quot;:26731,&quot;name&quot;:&quot;\/promo - p5 - promo list banner&quot;,&quot;position&quot;:5,&quot;creative&quot;:&quot;digital-cashback-7&quot;,&quot;creative_url&quot;:&quot;https:\/\/ecs7.tokopedia.net\/img\/blog\/promo\/2020\/11\/Thumbnail-600x328-28.jpg&quot;,&quot;category&quot;:&quot;produk-digital&quot;}]}}}">Lihat Detail</a>
		
	</div>
  </div>
</div>

                </div>

            </section>
  


        </b-tab>
      
        <b-tab title="Product Virtual">
       
        


        </b-tab>
        <b-tab title="Travel & Tiket">
        
        


        </b-tab>
     
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <!-- <div class="text-center">
      <b-button-group class="mt-2">
        <b-button v-if="tabIndex!=0" @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group>

    </div> -->
  </div>
  </div>
  

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
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'
export default {
  name: "home",
  components: {
    Products,
    Login,
      VueperSlides,
    VueperSlide
  },
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.namatoko = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  data() {
      return {
          form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Pilih Kategori', value: null }, 'Buku', 'Fashion Wanita', 'Fashion Pria', 'Electronik'],
        show: true,
        tabIndex: 0,
        src: require('@/assets/images/banner1.png'),
         src2: require('@/assets/images/banner2.png'),
          src3: require('@/assets/images/nav/banner.png'),
          image: require('@/assets/images/nav/background1.png'),
          icon: require('@/assets/images/icon/semua.png').default,

    headerOpt: { isVisible: false},
      footerOpt: { isVisible: false },
      slides: [
    {
      
      image: "https://ecs7.tokopedia.net/img/banner/2020/10/7/42484317/42484317_35c2040f-55d0-45f4-9286-42b7031908af.jpg"
    },
    {
      
      image: "https://ecs7.tokopedia.net/img/banner/2020/8/27/42484317/42484317_848eb75b-36c9-4bef-a254-115418ae5638.jpg"
    },
    {
      
      image: "https://ecs7.tokopedia.net/img/banner/2020/8/31/42484317/42484317_fa7e8881-26ca-411d-8371-86dd0aee2b1c.jpg"
    }
  ],
  selected: 'Rp 5.000',
        options: [
          { value: 'Rp 5.000', text: 'Rp 5.000' },
          { value: 'Rp 10.000', text: 'Rp 10.000' },
          { value: 'Rp 20.000', text: 'Rp 20.000' },
          { value: 'Rp 50.000', text: 'Rp 50.000' },
          { value: 'Rp 100.000', text: 'Rp 100.000', disabled: true }
        ]

      }
    },
    
};
</script>

<style scoped lang="scss">

/deep/ .nav-tabs .nav-link.active, .nav-tabs .nav-item.show {
       background-color: #199C43;
    border-radius: 20px !important;
    margin: 10px;
    color: white;
    
}
/deep/.nav-link, .nav-link:hover {
  color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6;
}
.promotion-box {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 25px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
@media (min-width: 992px){
.promotion-image {
    height: 154px;
}
}
@media (min-width: 768px){
.promotion-image {
    height: 180px;
}
}
.promotion-image {
    height: 100%;
    overflow: hidden;
}
.img-full {
    width: 100%;
    max-width: none;
}
.promotion-description {
    border-color: #E0E0E0;
    border-style: solid;
    border-width: 0 1px;
    padding: 18px;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
.promotion-box p {
    height: 40px;
    overflow: hidden;
    font-weight: 600;
}
@media (min-width: 768px){
.promotion-date {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    height: 55px;
    overflow: hidden;
}
}
.promotion-date-detail {
    position: relative;
    padding-left: 30px;
}
.promotion-date {
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
}
.promotion-box-label {
    font-size: 12px;
}
.text-secondary {
    color: rgba(0, 0, 0, 0.54);
}
.promotion-box__value {
    font-size: 13px;
    line-height: 13px;
}
.promotion-code {
    position: relative;
    height: 40px;
}
.promotion-code-detail {
    display: inline-block;
}
.promotion-code-detail, .promotion-date-detail {
    position: relative;
    padding-left: 30px;
}
.promotion-box-label-tooltip {
    position: relative;
    display: inline-block;
}
.promotion-box-label-tooltip__icon-info {
    background-image: url(https://ecs7.tokopedia.net/assets/images/ic_info.png);
    background-repeat: no-repeat;
    background-size: 10px 10px;
    display: block;
    width: 10px;
    height: 10px;
}
.promotion-box-label-tooltip__text {
    display: none;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-100%);
    margin-top: -5px;
    background: rgba(0, 0, 0, 0.8);
    color: #FFF;
    border-radius: 4px;
    padding: 7px;
    font-size: 11px;
    text-align: center;
    width: 162px;
    z-index: 10;
}
.sticky-code-voucher__text {
    color: #FF5722;
    font-weight: 600;
    border: none;
    width: 100%;
    min-width: 160px;
    padding: 0;
}
.promotion-code__btn {
    position: absolute;
    right: 0;
    margin-top: 4px;
}
.btn-ghost {
    background: #FFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.54);
}
.btn-small {
    font-size: 11px;
    padding: 7.5px 11px;
}
.promotion-cta {
    border: 1px solid #E0E0E0;
    padding: 18px;
}
.promotion__btn {
    background: #42b549;
    text-align: center;
    padding: 10px;
    font-weight: 600;
    color: #fff !important;
    border-radius: 4px;
    border: 1px solid #fff;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    display: block;
}
</style>