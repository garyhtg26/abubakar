<template>
  <skeleton-home v-if="isLoading"></skeleton-home>
  <div class="home" style="min-height: 100%" v-else>
    <!-- <Navbar :categories="categories"></Navbar> -->
    <Hero :sliders="slides" v-if="slides.length > 0" />
    <b-skeleton-img v-else height="200px"></b-skeleton-img>
    <div style="margin-top: -2px; width: 100%">
      <el-image class="banner-top" :src="banners.image"></el-image>
    </div>
    <div class="container topup d-flex justify-content-center" style="margin-top:40px ">
      
             <TopUp></TopUp>
      
    </div>
    <div class="mx-4" style="margin-top: 50px; text-align: center">
      <el-image
        v-if="bannerBottom"
        class="banner-mid"
        :src="bannerBottom.image"
        @click="route(bannerBottom.url)"
      ></el-image>
    </div>
    <div class="container-fluid m-5" style="margin-left: 40px; ">
      <h1
        style="
          color: #004e30;
          text-decoration: underline;
          font-weight: bold;
          text-decoration-color: #c6b01b;
        "
      >
        Lagi populer
      </h1>
      <div class="row" >
        <LagiPopuler :data="categories"></LagiPopuler>
      </div>
    </div>
    <br>
    <div class="container-fluid" style="margin-top: -180px;">
      <FlashSale :data="productDiscount"></FlashSale>
    </div>

    <section
      class="h-100 banner-iklan"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <div class="container py-5">
        <div class="row">
          <div class="col-sm-4" v-for="x in quotes" :key="x.id">
            <div class="img-warp">
              <b-img
                overlay
                @click="route(x.url)"
                style="max-width: 100%; border-radius: 20px; cursor: pointer"
                :src="x.image"
              ></b-img>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="padding-bottom-sm mt-4 mb-2"
      style="padding-right: 100px; padding-left: 100px; display: flex;
    flex-flow: column wrap;"
    >
      <FilterHome :tab="tab" @tab="tab = $event"></FilterHome>
     
     
      <!-- <ProductList class="mt-3"></ProductList> -->
      <div class="row">
        <div class="col-12 col-md-12">
          <Products :isLoading="loading" :data="products" />
        </div>
        <div class="mx-auto col-4">
          <b-button
            variant="success"
            style="font-weight: 600; width: 50%"
            class="mx-auto"
            block
            :loading="loading"
            rounded
            @click="$router.push('/list')"
          >
            Load More
          </b-button>
        </div>
      </div>
    </section>
    <pop-up-vue></pop-up-vue>
  </div>
</template>

<script>
// @ is an alias to /src
// import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import ProductList from "@/sections/ProductList.vue";
import Login from "@/components/Login.vue";
import Axios from "axios";
import PopUpVue from "../components/PopUp.vue";
import skeletonHome from "../sections/skeleton-home.vue";
export default {
  name: "home",
  components: {
    Products,
    Login,
    ProductList,
    PopUpVue,
    skeletonHome,
  },
  data() {
    return {
      products: [],
      productDiscount: [],
      categories: [],
      ppob: [],
      data: [],
      tab: 1,
      isFixed: null,
      isLoading: false,
      loading: false,
      src: require('@/assets/images/banner1.png'),
      src2: require('@/assets/images/banner2.png'),
      src3: require('@/assets/images/nav/banner.png'),
      image: require('@/assets/images/nav/background1.png'),
      icon: require('@/assets/images/icon/semua1.png').default,
      params: {
        max_price: null,
        min_price: null,
        category_id: [],
        kota: null,
        sortBy: null,
      },
    };
  },
  computed: {
    slides() {
      return this.data.filter((x) => x.position === "Head_slider");
    },
    banners() {
      const b1 = this.data.filter((x) => x.position === "Banner-1");
      return b1.length > 0 ? b1[0] : {};
    },
    bannerBottom() {
      const b2 = this.data.filter((x) => x.position === "Banner-2");
      return b2.length > 0 ? b2[0] : {};
    },
    sale() {
      return this.data.filter((x) => x.position === "Sale");
    },
    quotes() {
      return this.data.filter((x) => x.position === "Inspirasi");
    },
  },
  watch: {
    tab(val) {
      let { params } = this;
      switch (val) {
        case 2:
          params = {
            sortBy: "Terbaru",
          };
          this.getFilter();
          break;
        case 3:
          params = {
            sortBy: "Paling Laris",
            max_price: 5000000,
          };
          this.getFilter();
          break;
        case 4:
          params = {
            sortBy: "Termurah",
            min_price: 5000000,
          };
          this.getFilter();
          break;
        default:
          this.initialize();
          break;
      }
    },
  },
  mounted() {
    this.getData();
    this.stickyScroll();
  },
  methods: {
    checkAuth() {
      Axios.get(`/user`).catch((error) => {
        this.$store.commit("authentication", null);
        this.$store.commit("Authorization", false);
        this.$store.commit("cart", []);
        this.$store.commit("user", { role: "public", id: 0 });
      });
    },
    stickyScroll() {
      if ($window.scrollTop() >= stickyTop) {
  this.isFixed = true
} else {
  this.isFixed = false
}
    },
    getData() {
      this.isLoading = true;
      Axios.get("/page/home").then((res) => {
        this.products = res.data.products;
        this.categories = res.data.categories;
        this.productDiscount = res.data.product_discount;
        this.data = res.data.data;
        this.isLoading = false;
        this.initialize();
      });
    },
    initialize() {
      this.loading = true;
      Axios.get("page/products?page=1")
        .then((res) => {
          this.products.push(...res.data.data);
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
        });
      Axios.get("/user").catch((error) => {
        this.$store.commit("Authorization", false);
        this.$store.commit("authentication", false);
      });
    },
    //
    getFilter() {
      this.products = [];
      var page = Math.floor(Math.random() * 11);
      this.loading = true;
      Axios.post("/page/filter/products?page=" + page, this.params).then(
        (res) => {
          this.products = res.data.data;
          this.loading = false;
        }
      );
    },
    //
    route(link) {
      if (link != null && link.substr(0, 4) == "http") {
        let routeData = this.$router.resolve(link);
        window.open(routeData.href, "_blank");
      } else {
        this.$router.push(link);
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "BukaPuasa";
  src: url("/assets/fonts/BukaPuasa.otf") format("truetype");
}
a {
  color: #212529;
  text-decoration: none;
  background-color: transparent;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none !important;
}

@media (max-width: 839px) {
  
  .vueperslides {
    height: inherit !important;
    margin-top: -130px;
  }
  .banner-top{
    height: 40px !important;
    // margin-top: -30px;
  }
  .banner-mid{
    height: 100px !important;
  }
}
.banner-mid {
  height: 190px; border-radius: 22px;
}
.banner-iklan {
  background-repeat: repeat;
  background-position: right;
}
.card-sm .img-wrap {
  height: 180px;
}
.banner-top {
  height: 60px; width:96%; margin-left: 23px;
}

.container-fluid {
  padding: 0;
}
/* .el-card{
  border-radius:  100px !important;
  
  height: 45px;

} */
.el-card__body {
  padding: 12px !important;
}
.padding-bottom-sm {
  padding-bottom: 10px;
}
.heading-line {
  position: relative;
}
.section-heading {
  margin-bottom: 10px;
  margin-top: 10px;
}
.topup {
    display: -webkit-inline-box;
    -webkit-box-pack: center;
}
.row-sm {
  margin-right: -5px;
  margin-left: -5px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.card-sm {
  min-height: 284px;
}
.card-product-grid {
  margin-bottom: 20px;
}
.col-xl-2 {
  padding-left: 5px;
  padding-right: 5px;
}
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #ebecf0;
}

.card .img-wrap {
  overflow: hidden;
}
.img-wrap {
  text-align: center;
  display: block;
}
.card .img-wrap {
  overflow: hidden;
}

.card-product-grid .img-wrap {
  height: 250px;
}
.card-product .img-wrap img {
  height: 100%;
  max-width: 100%;
  width: auto;
  display: inline-block;
  -o-object-fit: cover;
  object-fit: cover;
}
.img-wrap img {
  max-width: 100%;
}
.card-product-grid .info-wrap {
  overflow: hidden;
  padding: 16px;
  min-height: 100px;
}
.price {
  font-weight: 600;
  color: #212529;
}
.heading-line {
  position: relative;
}
.heading-line::before {
  top: 35%;
  border-radius: 7px;
  border-top-style: solid;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 100%;
  height: 0;
  border: 3px solid #dcdee3;
  overflow: hidden;
}
.heading-line .title-section {
  position: relative;
  display: inline-block;
  padding-right: 15px;
  background-color: #f6f7f9;
  z-index: 2;
}
.text-uppercase {
  text-transform: uppercase !important;
}
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  background-color: #f6f7f9;
}
body {
  margin: 0;
  font-family: "Inter", Arial, "Helvetica Neue", "Segoe UI", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
.card-product a.title {
  color: #212529;
  display: block;
}
.recommended-product {
  background: #fff;
  padding: 0px 5px;
  height: 20%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  border-radius: 20px;
}
.nav-item {
  border-radius: 20px;
  font-weight: 600;
}
.nav-link,
.nav-link:hover {
  background-color: #199c43;
  border-radius: 20px !important;
  margin: 10px;
  color: white;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #b6ad15 !important;
}
</style>
