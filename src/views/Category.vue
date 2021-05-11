<template>
  <div>
    <div class="container p-">
      <section class="section-main padding-y" style="margin-top: 70px">
        <main class="card">
          <div class="card-body">
            <div class="row">
              <aside class="col-lg col-md-3 flex-lg-grow-0">
                <nav class="nav-home-aside">
                  <h6 class="title-category">
                    {{ category.name }}
                    <i class="d-md-none icon fa fa-chevron-down"></i>
                  </h6>
                  <ul class="menu-category" v-if="categories.length > 0">
                    <li v-for="x in categories" :key="x.id">
                      <router-link :to="`../search?keyword=${x.name}`">
                        {{ x.name }}
                      </router-link>
                    </li>
                  </ul>
                  <ul v-else>
                    <b-skeleton v-for="s in 10" :key="s"></b-skeleton>
                  </ul>
                </nav>
              </aside>
              <!-- col.// -->
              <div class="col-md-9 col-xl-8 col-lg-7">
                <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
                <b-carousel
                  id="carousel-1"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333"
                  v-if="sliders.length > 0"
                >
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    style="max-height: 465px"
                    v-for="slide in sliders"
                    :key="slide.id"
                    :caption="slide.tite"
                    :img-src="slide.image"
                  ></b-carousel-slide>
                </b-carousel>
                <b-skeleton-img
                  v-else
                  card-img="bottom"
                  height="350px"
                ></b-skeleton-img>
                <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->
              </div>
              <!-- col.// -->
              <div class="col-md d-none d-lg-block flex-grow-1">
                <aside class="special-home-right">
                  <h6 class="bg-blue text-center text-white mb-0 p-2">
                    Rekomendasi
                  </h6>

                  <div
                    class="card-banner border-bottom"
                    v-for="x in tren"
                    :key="x.id"
                  >
                    <div class="py-3" style="width: 70%">
                      <small>{{ x.name }}</small>
                      <a href="#" class="btn btn-secondary btn-sm">Beli Sekarang</a>
                    </div>
                    <img
                      :src="x.thumbnail"
                      height="80"
                      style="z-index: 100"
                      class="my-auto"
                    />
                  </div>
                </aside>
              </div>
              <!-- col.// -->
            </div>
            <!-- row.// -->
          </div>
          <!-- card-body.// -->
        </main>
        <!-- card.// -->
      </section>
      <!-- ========================= SECTION MAIN END// ========================= -->

      <div class="mx-4" style="margin-bottom: 40px">
        <el-image style="height: 150px" :src="src"></el-image>
      </div>

      <!-- =============== SECTION DEAL =============== -->
      <section class="padding-bottom">
        <div class="card card-deal">
          <div class="col-heading content-body">
            <header class="section-heading">
              <h3 class="section-title">Promo dan Discount</h3>
              <p> {{ category.name }} </p>
            </header>
            <!-- sect-heading -->
            <div class="timer">
              <div>
                <span class="num">04</span>
                <small>Days</small>
              </div>
              <div>
                <span class="num">12</span>
                <small>Hours</small>
              </div>
              <div>
                <span class="num">58</span>
                <small>Min</small>
              </div>
              <div>
                <span class="num">02</span>
                <small>Sec</small>
              </div>
            </div>
          </div>
          <!-- col.// -->
          <!-- {{ DiscountOff }} -->
          <div class="row no-gutters items-wrap">
            <div
              class="col-md col-sm-6 col-6"
              v-for="d in DiscountOff"
              :key="d.id"
              @click="$router.push(`/product/${d.id}`)"
            >
              <figure class="card-product-grid card-sm">
                <a href="#" class="img-wrap">
                  <img :src="d.thumbnail" />
                </a>
                <div class="text-wrap p-3">
                  <a href="#" class="title">{{ d.name }}</a>
            
                  <span class="badge badge-danger">
                    {{ d.discount_display }}%
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <!-- =============== SECTION DEAL // END =============== -->

      <!-- =============== SECTION 1 =============== -->
      <section class="padding-bottom pt-4">
        <header class="section-heading heading-line">
          <h4 class="title-section text-uppercase"> {{ category.name }} </h4>
        </header>

        <div class="card card-home-category-1">
          <div class="row no-gutters">
            <div class="col-md-3 baseplate">
              <div class="home-category-banner">
                <img
                  :src="category.photo"
                  height="52px"
                  width="auto"
                  class="bukamall-logo"
                />
                <h3 style="font-weight:600">
                  {{ category.name }} Pilihan
                </h3>
                
              </div>
            </div>
            <!-- col.// -->
            <div class="col-md-9 col-sm-10">
              <carousel
                :perPage="4"
                :paginationEnabled="false"
                navigationEnabled
              >
                <slide v-for="x in products" :key="x.id">
                  <div class="col-md-12 col-sm-12">
                    <!-- <figure class="card-product-grid card-sm"> -->
                    <products-singgle style="width: 100%" :data="x" />
                    <!-- </figure> -->
                  </div>
                </slide>
              </carousel>

              <!-- col.// -->
            </div>
            <!-- col.// -->
          </div>
          <!-- row.// -->
        </div>
        <!-- card.// -->
      </section>
      <!-- =============== SECTION 1 END =============== -->

      <!-- =============== SECTION 2 =============== -->
      <section class="padding-bottom pt-4">
        <header class="section-heading heading-line">
          <h4 class="title-section text-uppercase">Kategori Lainnya</h4>
        </header>

        <div class="card card-home-category">
          <div class="row no-gutters">
            <div class="col-md-3 baseplate">
              <div class="home-category-banner">
                <img
                  src="../assets/images/logo.png"
                  height="42px"
                  width="auto"
                  class="bukamall-logo mb-1"
                />
                <p>
                  Kategory lainya pilihan abubakar untuk kamu sekarang
                </p>
                <a href="#" class="btn btn-primary rounded-pill">Beli Sekarang</a>
              </div>
            </div>
            <!-- col.// -->
            <div class="col-md-9">
              <ul class="row no-gutters bordered-cols">
                <li
                  class="col-6 col-lg-3 col-md-4"
                  v-for="x in categories_related"
                  :key="x.id"
                >
                  <router-link :to="`/kategori/${x.name}`" class="item">
                    <div class="card-body">
                      <h6 class="title" style="
    color: #353530;">
                        {{ x.name }}
                      </h6>
                      <img class="img-sm float-right" :src="x.photo" />
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- col.// -->
          </div>
          <!-- row.// -->
        </div>
        <!-- card.// -->
      </section>
      <!-- =============== SECTION 2 END =============== -->

      <!-- =============== SECTION ITEMS =============== -->
      <section class="padding-bottom-sm pt-4">
        <header class="section-heading heading-line">
          <h4 class="title-section text-uppercase">Recommended items</h4>
        </header>

        <div class="row row-sm">
          <div class="col-12 ">
            <Products :data="related" />
          </div>
          <div class="clearfix visible-xs"></div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </section>
    </div>
  </div>
</template>

<script>
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Axios from "axios";
import ProductsSinggle from "../sections/Products-singgle.vue";
import ext from "@/stores/extension.js";
export default {
  name: "home",
  components: {
    Products,
    Login,
    ProductsSinggle,
  },
  watch: {
    "$route.params.name"(val) {
      if (val) {
        this.detailCategory(val);
      }
    },
  },
  computed: {
    tren() {
      return ext.getTrending();
    },
  },
  mounted() {
    $(".carousel").carousel({
      interval: 2000,
    });
    const name = this.$route.params.name;
    this.detailCategory(name);
  },
  data() {
    return {
      src: require("@/assets/images/banner1.png"),
      src2: require("@/assets/images/banner2.png"),
      src3: require("@/assets/images/nav/banner.png"),
      image: require("@/assets/images/nav/background1.png"),
      icon: require("@/assets/images/icon/semua.png").default,
      category: {},
      related: [],
      products: [],
      categories: [],
      sliders: [],
      categories_related: [],
      DiscountOff: [],
      // trend: [],
    };
  },
  methods: {
    getDiscount() {
      Axios.get("page/product-discount").then((res) => {
        this.DiscountOff = res.data;
      });
    },
    detailCategory(name) {
      Axios.get(`page/categories/${name}`).then((res) => {
        this.category = res.data.data;
        this.categories = res.data.categories;
        this.products = res.data.products;
        this.related = res.data.related;
        this.sliders = res.data.slider;
        this.getDiscount();
        // this.getTrending();
        this.getRelated(name);
      });
    },
    getRelated(name) {
      Axios.get("page/related-categories", {
        params: { name: name, limit: 8 },
      }).then((res) => {
        this.categories_related = res.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
/deep/.product-img {
  max-height: 240px !important;
}
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
h6,
.h6 {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Inter", Arial, "Helvetica Neue", "Segoe UI", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
/deep/.product-container{
  height: 370px  !important;
}
.nav-home-aside .menu-category {
  margin: 0;
  padding: 0;
}
@media (max-width: 768px){
.padding-y {
    padding-top: 20px;
    padding-bottom: 20px;
}
.padding-bottom {
    padding-bottom: 20px;
}
@media (max-width: 992px){
.card-deal {
    display: block;
}
}
}
.nav-home-aside .menu-category li {
  position: relative;
  display: block;
  border-bottom: 1px solid #e5e7ea;
}
.nav-home-aside .menu-category a {
  color: #212529;
}
.nav-home-aside .menu-category > li > a {
  display: block;
  padding: 10px 0px;
}
.VueCarousel-navigation-prev {
  background-image: "data:image/png; base64, ..."; // add your image as base64
  font-size: 0; // to hide the unicode arrow provided by the library

  // ... your custom styles (height, width...)
}
.VueCarousel-navigation-next {
  background-image: "data:image/png; base64, ..."; // add your image as base64
  font-size: 0; // to hide the unicode arrow provided by the library

  // ... your custom styles (height, width...)
}
.nav-home-aside .menu-category .submenu {
  display: none;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
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
  background-color: #199c43;
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
.timer > div {
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
.card-deal .items-wrap > [class*="col"] {
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
  font-family: Hind Madurai, sans-serif;
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
  padding-top: 20px;
}
ul.row,
ul.row-sm {
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
.title {
  font-weight: bold;
}
.baseplate {
  background: url(https://s0.bukalapak.com/baseplate/bukamall-banner.webp) 50%
    50%;
  border-radius: 8px 0 0 8px;
  width: 100%;
  background-size: cover;
}
// .card-home-category-1 {
// }
a {
  font-family: "Inter", Arial, "Helvetica Neue", "Segoe UI", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  font-weight: 400;
}
@media (max-width: 768px) {
  .nav-home-aside .title-category {
    cursor: pointer;
    padding: 10px 10px;
    display: block;
    border: 1px solid #ddd;
    -webkit-box-shadow: 0px 2px 3px rgba(102, 102, 102, 0.1);
    box-shadow: 0px 2px 3px rgba(102, 102, 102, 0.1);
    border-radius: 5px;
  }
}
@media (max-width: 768px) {
  .nav-home-aside {
    width: 100%;
    margin-bottom: 20px;
  }
}
@media (max-width: 768px) {
  .nav-home-aside .menu-category {
    margin-bottom: 20px;
    display: none;
  }
}
@media (min-width: 1100px) {
  .container {
    max-width: 1400px;
  }
}
</style>
