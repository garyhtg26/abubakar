<template>
  <div>
    <section style="margin-top: 80px" class="py-3 bg-light">
      <div class="container">
        <ol class="breadcrumb" v-if="data.categories != null">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="`/kategori/${data.categories.name}`">
              {{ data.categories.name }}
            </router-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
            style="font-weight: bold"
          >
            {{ data.name }}
          </li>
        </ol>
      </div>
    </section>
    <section v-if="isLoading" class="section-content bg-white padding-y">
      <div class="container-sm">
        <!-- ============================ ITEM DETAIL ======================== -->
        <div class="row">
          <skeleton-detail-vue
            class="col-md-12 container-fluid"
            :isLoading="isLoading"
          ></skeleton-detail-vue>
        </div>
      </div>
    </section>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section v-else class="section-content bg-white padding-y">
      <div class="container-sm">
        <!-- ============================ ITEM DETAIL ======================== -->
        <div class="row">
          <aside class="col-md-6">
            <div class="card m-4">
              <vueper-slides
                :bullets="false"
                fixed-height="400px"
                ref="vueperslides1"
                @slide="
                  $refs.vueperslides2 &&
                    $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                      emit: false,
                    })
                "
              >
                <vueper-slide
                  v-for="(slide, i) in data.images"
                  :key="i"
                  :scr="slide.photo"
                  :image="slide.photo"
                />
              </vueper-slides>

              <vueper-slides
                :arrows="false"
                :bullets="false"
                ref="vueperslides2"
                :slide-ratio="1 / 8"
                :dragging-distance="50"
                @slide="
                  $refs.vueperslides1 &&
                    $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                      emit: false,
                    })
                "
                :visible-slides="3"
                fixed-height="100px"
              >
                <vueper-slide
                  v-for="(slide, i) in data.images"
                  :key="i"
                  :scr="slide.photo"
                  :image="slide.photo"
                  @click.native="
                    $refs.vueperslides2 && $refs.vueperslides2.goToSlide(i)
                  "
                >
                </vueper-slide>
              </vueper-slides>
            </div>
            <!-- card.// -->
          </aside>
          <main class="col-md-6">
            <article class="product-info-aside">
              <h2 class="title mt-3">{{ data.name }}</h2>

              <div class="rating-wrap my-3">
                <div class="rating-stars">
                  <b-form-rating
                    no-border
                    v-model="data.ratings"
                    variant="warning"
                    readonly
                  ></b-form-rating>
                </div>
                <small class="label-rating text-muted"
                  >({{ data.reviews.length }})</small
                >
                <small class="label-rating text-success">
                  <i class="fa fa-clipboard-check"></i>
                  {{ data.terjual }} terjual
                </small>
                <!-- <small class="label-rating text-muted"> dilihat {{ data.dilihat }}x</small> -->
              </div>
              <!-- rating-wrap.// -->

              <div class="mb-3">
                <var class="price h4">{{ data.price | currency }}</var>
              </div>
              <!-- price-detail-wrap .// -->

              <dl class="row" v-if="data.store">
                <dt class="col-sm-3 mt-2">Penjual</dt>
                <dd class="col-sm-9">
                  {{ data.store.name }}
                  <span
                    ><img
                      :src="data.store.logo"
                      class="img-sm ml-2 mb-1"
                      style="width: 40px"
                  /></span>
                </dd>

                <dt class="col-sm-3" v-if="data.discount != null">Promo</dt>
                <dd class="col-sm-9 css-usbzvy p-2" v-if="data.discount">
                  <div class="css-afgqk3">
                    <div>
                      <div class="css-kd64ca ex2i6wx0">
                        <div class="css-167ppwu ex2i6wx2">
                          <div>
                            <div
                              class="css-opk28b"
                              data-testid="PDPDetailVoucher[0]"
                            >
                              <div
                                class="css-10wy6qd"
                                id="merchant-voucher-MENUJU42"
                                data-testid="MerchantVoucher"
                              >
                                <div class="css-17w967y"></div>
                                <div class="css-1av2dq8">
                                  <p
                                    class="css-1uul6m3-unf-heading e1qvo2ff8"
                                    data-testid="MerchantVoucherType"
                                  >
                                    {{ data.discount.name }}
                                  </p>
                                  <h2
                                    class="css-whbpyf"
                                    data-testid="MerchantVoucherValue"
                                  >
                                    {{ data.discount_display }}%
                                  </h2>
                                </div>
                                <div class="css-1fgyps7 e1qur15t0"></div>
                                <div class="css-dlnyqv"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </dd>

                <dt class="col-sm-3">Brand</dt>
                <dd class="col-sm-9" v-if="data.brand">
                  {{ data.brand.name }}
                </dd>
                <dt class="col-sm-3">Katalog</dt>
                <dd class="col-sm-9" v-if="data.catalog">
                  {{ data.catalog.name }}
                </dd>
                <dt class="col-sm-3">Dikirim Dari</dt>
                <dd class="col-sm-9" v-if="data.kota">
                  {{ data.kota.province }}, {{ data.kota.type }}
                  {{ data.kota.city_name }}
                </dd>
                <dt class="col-sm-3">Stok</dt>
                <dd class="col-sm-9">{{ data.stock }} tersisa dari stok</dd>
                <!--  -->
                <dt class="col-sm-3" v-if="data.attributes.length > 0">
                  Variant
                </dt>
                <dd class="col-sm-9" v-if="data.attributes.length > 0">
                  <el-radio-group
                    v-model="forms.attribute_id"
                    :fill="forms.attribute_id ? forms.attribute_id.color : '#fafafa'"
                    size="mini"
                  >
                    <el-radio-button
                      :value="x.id"
                      v-for="x in data.attributes"
                      :key="x.id"
                      :label="x"
                    >
                      {{ x.type }} ({{ x.price | currency }})
                    </el-radio-button>
                  </el-radio-group>
                </dd>
              </dl>

              <div class="form-row mt-4">
                <div class="form-group col-md flex-grow-0">
                  <el-input-number
                    controls
                    :step="1"
                    :min="1"
                    :max="data.stock"
                    v-model="forms.qty"
                    size="small"
                  ></el-input-number>
                  <!-- <div class="input-group mb-3 input-spinner">
                    <div class="input-group-prepend">
                      <button
                        @click="forms.qty > 1 ? forms.qty-- : ''"
                        class="btn btn-light btn-number"
                        type="button"
                        data-field="jum"
                        data-type="minus"
                        id="button-minus"
                      >
                        &minus;
                      </button>
                    </div>
                    <input
                      v-model="forms.qty"
                      type="text"
                      class="form-control input-number"
                      min="0.00"
                      :max="data.stock"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        @click="data.stock > forms.qty ? forms.qty++ : ''"
                        class="btn btn-light btn-number"
                        type="button"
                        data-field="jum"
                        data-type="plus"
                        id="button-plus"
                      >
                        +
                      </button>
                    </div>
                  </div> -->
                </div>
                <!-- col.// -->
                <div
                  class="form-group col-md"
                  v-if="$store.state.Authorization"
                >
                  <button @click="save" class="btn btn-success mr-2">
                    Masuk Keranjang
                  </button>
                  <div @click="wish(data)" class="btn btn-light">
                    <i
                      class="fas fa-heart mr-1"
                      :style="{ color: data.isWishlist ? 'red' : 'grey' }"
                    ></i>
                    <span class="text"> Tambah Ke Wishlist </span>
                  </div>
                </div>
                <div class="form-group col-md" v-else>
                  <button
                    data-toggle="modal"
                    data-target="#login"
                    class="btn btn-success mr-2"
                  >
                    Masuk Keranjang
                  </button>
                  <div
                    data-toggle="modal"
                    data-target="#login"
                    class="btn btn-light"
                  >
                    <i
                      class="fas fa-heart mr-1"
                      :style="{ color: data.isWishlist ? 'red' : 'grey' }"
                    ></i>
                    <span class="text"> Tambah Ke Wishlist </span>
                  </div>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </article>
            <!-- product-info-aside .// -->
          </main>

          <!-- ========================= SECTION  ========================= -->
          <section class="section-name padding-y bg">
            <div class="container">
              <div class="row">
                <div class="col-md-auto">
                  <h5 class="title-description">Deskripsi</h5>
                  <div v-html="data.description"></div>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </div>
            <!-- container .//  -->
          </section>
          <!-- ========================= SECTION CONTENT END// ========================= -->
          <!-- ========================= slider photo product// ========================= -->
          <section class="w-100">
            <div class="row no-gutters">
              <div class="col-md-3" v-if="data.store">
                <div class="home-category-banner">
                  <img :src="data.store.logo" width="150px" class="mx-auto" />
                  <p>
                    {{ data.store.name }}
                  </p>
                  <router-link
                    :to="`/stores/${data.store.name}?store_id=${data.store.id}`"
                    class="btn btn-primary rounded-pill"
                  >
                    Kunjungi Toko
                  </router-link>
                </div>
              </div>
              <div class="col-md-9">
                <carousel
                  :perPageCustom="[[400,2],[840,4]]"
                  :paginationEnabled="false"
                  navigationEnabled
                >
                  <slide v-for="x in productStore" :key="`ps${x.id}`">
                    <div class="col-md-12 col-sm-9 px-2">
                      <products-singgle :data="x" />
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
          </section>
          <!-- user review -->
          <div class="container-fluid p-2">
            <h5 class="title-description">Ulasan</h5>
            <div class="row p-2">
              <div class="col-sm-3">
                <div class="">
                  <h1 style="font-size: 48px" class="bold padding-bottom-7">
                    {{ data.ratings }} <small>/ 5</small>
                  </h1>
                  <div class="rating-stars">
                    <b-form-rating
                      no-border
                      v-model="data.ratings"
                      variant="warning"
                      readonly
                    ></b-form-rating>
                  </div>
                </div>
              </div>

              <div class="col-sm-3" v-if="data.rating_details">
                <div
                  class="inline"
                  v-for="rate in data.rating_details"
                  :key="rate.ratings"
                >
                  <div class="pull-left" style="width: 80px; line-height: 1">
                    <div style="height: 8px; margin: 5px 0">
                      <span class="fa fa-star rating-stars"></span>
                      {{ rate.ratings }}
                    </div>
                  </div>
                  <div class="pull-left" style="width: 180px">
                    <div class="progress" style="height: 8px; margin: 8px 0">
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        :aria-valuenow="parseInt(rate.count)"
                        aria-valuenow="5"
                        aria-valuemin="0"
                        :style="`width: ${(rate.count / data.ratings) * 100}%`"
                      >
                        <span class="sr-only">80% Complete (danger)</span>
                      </div>
                    </div>
                  </div>
                  <div class="pull-right" style="margin-left: 10px">
                    {{ rate.count }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="">
              <div class=" css-hj2cq9 mb-5" v-if="data.ratings == 0">
               <div class="css-1q47ojj-unf-emptystate e1lf3yex0" data-testid="icnEmptyReview">
                 <div class="unf-emptystate-img"><img src="../assets/images/unta2.png"></div>
                 <div><h3 class="css-1og3umh-unf-heading e1qvo2ff3"></h3>
                 <p class="css-1ers9d0-unf-heading e1qvo2ff8">
                   <p  class="css-1i8lo3q-unf-heading e1qvo2ff8">Belum ada ulasan untuk produk ini</p>
                   <p  class="css-1ers9d0-unf-heading e1qvo2ff8">Jadilah yang pertama membeli produk ini dan memberikan ulasan</p>
                </p>
                  </div>
              </div>
              </div>
              
              <div
                class="review-block"
                v-if="data.reviews"
                v-for="x in data.reviews"
                :key="x.id"
              >
                <div class="row">
                  <div class="col-sm-3">
                    <img :src="x.photo" width="80px" class="img-rounded" />
                    <div class="review-block-name">
                      <a href="#">***</a>
                    </div>
                    <!-- <div class="review-block-date">January 29, 2016<br />1 day ago</div> -->
                  </div>
                  <div class="col-sm-9">
                    <div class="review-block-rate" v-if="x.ratings">
                      <div class="rating-stars">
                        <b-form-rating
                          no-border
                          v-model="x.ratings.ratings"
                          variant="warning"
                          readonly
                        ></b-form-rating>
                      </div>
                    </div>
                    <div class="review-block-title">{{ x.created_at }}</div>
                    <div class="review-block-description">
                      {{ x.text }}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <!-- user review.// -->
          <!-- ========================= slider photo product// ========================= -->
        </div>
        <!-- row.// -->
        <!-- ================ ITEM DETAIL END .// ================= -->
        <div class="card-home-category-1" style="padding-top: 24px; border-top: 1px solid rgb(229, 231, 233);">
          <h5 style="padding:10px">Lainya dari toko ini</h5>
          <div class="row no-gutters">
            <div class="col-md-12">
              <carousel
                :perPageCustom="[[400,2],[840,6]]"
                :paginationEnabled="false"
                :navigationEnabled="true"
              >
                <slide v-for="x in related" :key="`rel${x.id}`">
                  <div class="col-md-12 col-sm-8 px-1">
                    <!-- <figure class="card-product-grid card-sm"> -->
                    <products-singgle style="width: 100%" :data="x" />
                    <!-- </figure> -->
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
      <!-- <public-login-vue /> -->
      <!-- container .//  -->
    </section>
    <!-- ========================= SECTION  ========================= -->
    <!-- ========================= SECTION CONTENT END// ========================= -->
  </div>
</template>

<script>
import Axios from "axios";
import Swal from "sweetalert2";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import skeletonDetailVue from "../sections/skeleton-detail.vue";
import ProductsSinggle from "../sections/Products-singgle.vue";

export default {
  components: {
    VueperSlides,
    VueperSlide,
    skeletonDetailVue,
    ProductsSinggle,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.froms = from;
    });
  },
  data() {
    return {
      carousel: null,
      froms: null,
      forms: {
        qty: 1,
      },
      origin_price: 0,
      isLoading: false,
      data: {
        images: [],
        attributes: [],
        reviews: [],
      },
      review: {},
      slides: [],
      related: [],
      productStore: [],
    };
  },
  watch: {
    "$route.params.id"(val) {
      this.getData(val);
    },
    "forms.qty"(val) {
      const f = this.data.grosir.filter((x) => val >= x.qty);
      if (f.length > 0) {
        this.data.price = f[0].price;
      } else {
        this.data.price = this.origin_price;
      }
    },
  },
  mounted() {
    console.log(this.froms);
    const id = this.$route.params.id;
    this.getData(id);
  },
  methods: {
    getData(id) {
      this.isLoading = true;
      // const params = typeof id === "number" ? id : id.replace(/\s/g, "-");
      Axios.get(`page/products/${id}`).then((res) => {
        this.data = Object.assign({}, res.data.data);
        this.origin_price = this.data.discount_price
          ? this.data.discount_price
          : this.data.price;
        if (this.data.discount_price)
          this.data.price = this.data.discount_price;
        this.isLoading = false;
        this.related = res.data.related.filter((x) => x.id != id);
        this.productStore = res.data.product_store;
      });
    },
    sendRating(item) {
      Axios.post("/page/rating", {
        product_id: item.id,
        ratings: item.ratings,
      }).then((res) => {
        console.log(res.data.message);
      });
    },
    takePic(e) {
      this.review.photo = e.target.files[0];
    },
    sendReview() {
      const { review } = this;
      const f = new FormData();
      f.append("text", review.text);
      f.append("file", review.photo);
      f.append("store_id", this.data.store_id);
      f.append("product_id", this.data.id);
      Axios.post("/page/review", f)
        .then((res) => {
          this.data.reviews.push(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    },
    wish(item) {
      if (!this.$store.state.Authorization) {
        this.$store.commit("popupLogin", true);
        return;
      }
      if (!item.isWishlist) {
        Axios.post("/page/wishlist", {
          product_id: item.id,
          store_id: item.store_id,
        })
          .then((res) => {
            item.isWishlist = true;
            this.$store.dispatch("countWish");
            this.$bvToast.toast(res.data.message, {
              title: "OK",
              autoHideDelay: 3000,
              appendToast: false,
            });
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        Axios.delete("/page/wishlist/" + item.id)
          .then((res) => {
            item.isWishlist = false;
            this.$bvToast.toast(res.data.message, {
              title: "OK",
              autoHideDelay: 3000,
              appendToast: false,
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
    },
    save() {
      const { forms } = this;
      if (!forms.qty) {
        alert("masukkan Jumlah");
        return false;
      }
      if (this.data.attributes.length > 0 && !forms.attribute_id) {
        alert("pilih attribute");
        return false;
      }
      Object.assign(forms, {
        product_id: this.data.id,
        store_id: this.data.store_id,
      });
      Axios.post("/page/carts", forms)
        .then((res) => {
          this.$notify({
            title: "Info",
            message: res.data.message,
            type: "info",
          });
          this.$store.dispatch("countCart");
        })
        .catch((error) => {
          this.$notify.error({
            title: "Sorry :(",
            message: error,
          });
        });
    },
  },
};
</script>

<style scoped>

.css-hj2cq9 {
  display: block;
  padding: 32px;
  border: 1px solid rgb(229, 231, 233);
  border-radius: 8px;
  box-shadow: rgba(49, 53, 59, 0.16) 0px 2px 6px 0px;
}
.css-1q47ojj-unf-emptystate {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex: initial;
  text-align: center;
}
.css-1q47ojj-unf-emptystate .unf-emptystate-img {
  max-width: 300px;
  max-height: 300px;
}
.css-1q47ojj-unf-emptystate img {
  width: 150px;
  height: auto;
}
.css-1og3umh-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.42857rem;
  line-height: 26px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 8px 0px 0px;
}
.css-1ers9d0-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.68);
  text-decoration: initial;
  margin: 4px 0px 0px;
}
.css-1i8lo3q-unf-heading {
  display: block;
  position: relative;
  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px;
}
.css-1ers9d0-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.68);
  text-decoration: initial;
  margin: 4px 0px 0px;
}
.css-1q47ojj-unf-emptystate img {
  object-fit: cover;
}

.css-1unmbjp img {
  max-width: unset;
}
.btn-light {
  background-color: #fff !important;
  border-color: #e5e7ea !important;
}
.mt-3,
.my-3 {
  margin-top: 1rem !important;
}
h2,
.h2 {
  font-size: 2rem;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-weight: bold;
  line-height: 1.3;
}
.bg-white {
  background-color: #fff;
}
.rating-stars {
  display: inline-block;
  vertical-align: middle;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  white-space: nowrap;
  clear: both;
  font-size: 14px;
  color: #ffc000;
}

ul {
  margin-bottom: 0px;
}
.price {
  font-weight: 600;
  color: #d42424;
  font-style: normal !important;
}
.input-spinner {
  width: 120px;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
dl[class="row"] {
  margin-bottom: 0;
}
.label-rating {
  margin-left: 7px;
  display: inline-block;
  vertical-align: middle;
}
.padding-y {
  padding-top: 30px;
  padding-bottom: 30px;
}
.gallery-wrap .img-big-wrap {
  margin-bottom: 10px;
  border-radius: 0.37rem;
  overflow: hidden;
  background-color: #fff;
}
.gallery-wrap .img-big-wrap img {
  height: 480px;
  width: auto;
  display: inline-block;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
.gallery-wrap .img-big-wrap a {
  text-align: center;
  display: block;
}
img {
  vertical-align: middle;
  border-style: none;
}
.gallery-wrap .thumbs-wrap {
  text-align: center;
  margin-bottom: 20px;
}
.gallery-wrap .thumbs-wrap .item-thumb {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin: 3px;
  display: inline-block;
  overflow: hidden;
}
.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}
.pt-3,
.py-3 {
  padding-top: 1rem !important;
}
.bg-light {
  background-color: #e7ffe5 !important;
  height: 50px !important;
}
.breadcrumb {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 0;
  list-style: none;
  background-color: transparent !important;
  border-radius: 0.37rem;
}

.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}
.input-spinner input.form-control {
  text-align: center;
  max-width: 46px;
  -ms-flex-preferred-size: 46px;
  flex-basis: 46px;
  border-color: #e5e7ea;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

/* css review */

.btn-grey {
  background-color: #d8d8d8;
  color: #fff;
}
.rating-block {
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 15px 15px 20px 15px;
  border-radius: 3px;
}
.bold {
  font-weight: 700;
}
.padding-bottom-7 {
  padding-bottom: 7px;
}

.review-block {
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
}
.review-block-name {
  font-size: 12px;
  margin: 10px 0;
}
.review-block-date {
  font-size: 12px;
}
.review-block-rate {
  font-size: 13px;
  margin-bottom: 15px;
}
.review-block-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}
.review-block-description {
  font-size: 13px;
}
.inline {
  display: inline-flex;
}
.progress-bar {
  background-color: rgb(3, 172, 14);
}
.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* css review */
.vueperslides--fixed-height.vueperslides--bullets-outside {
  margin-bottom: 0px;
}
/* 
voucher */
.css-usbzvy {
  display: inline-block;
  vertical-align: top;
  width: 624px;
  padding-left: 20px;
  margin: 0px;
}
.css-afgqk3 {
  position: relative;
  height: 84px;
}
.css-kd64ca {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 534px;
  min-height: 116px;
  padding: 20px 20px 9px;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  border-image: initial;
  border-bottom: none;
  border-radius: 8px 8px 0px 0px;
  box-shadow: none;
  background-color: transparent;
}
.css-167ppwu {
  position: absolute;
  top: 4px;
  left: -10px;
  width: 632px;
  height: 117px;
  min-height: 117px;
  padding: 9px 20px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: none;
  background-color: rgb(255, 255, 255);
  z-index: auto;
  transform-origin: center top;
}
.css-opk28b {
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.css-10wy6qd {
  display: flex;
  position: relative;
  flex: 0 0 216px;
  height: 70px;
  margin: 8px;
  filter: drop-shadow(rgba(0, 0, 0, 0.12) 0px 1px 3px);
  box-sizing: border-box;
  width: 190px;
}
.css-10wy6qd > div {
  background-color: rgb(255, 255, 255);
}

.css-17w967y {
  position: relative;
}

.css-10wy6qd * {
  box-sizing: border-box;
}
.css-17w967y::before {
  left: -2px;
  content: "";
  background: radial-gradient(circle, transparent 2px, rgb(255, 255, 255) 2px) -2px
    2px / 5px 8px repeat-y;
  position: absolute;
  height: 70px;
  width: 3px;
}
.css-10wy6qd > div {
  background-color: rgb(255, 255, 255);
}

.css-1av2dq8 {
  flex: 1 1 100px;
  padding: 8px 0px 8px 8px;
  white-space: nowrap;
  min-width: 108px;
  cursor: pointer;
}
.css-1uul6m3-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 0.857143rem;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px;
  text-transform: capitalize;
}
.css-whbpyf {
  margin-top: 0px;
  margin-bottom: 2px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.43;
  overflow: hidden;
  text-overflow: ellipsis;
}
.css-uswdof {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 9px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.38);
}
strong {
  font-weight: bolder;
}
.css-10wy6qd > div {
  background-color: rgb(255, 255, 255);
}

.css-1fgyps7 {
  flex: 0 0 66px;
  display: flex;
  width: 125px;
  background-image: url(../assets/images/cashback.png);
  background-repeat: no-repeat;
  background-size: 160% 70px;
}
.css-10wy6qd > div {
  background-color: rgb(255, 255, 255);
}
.css-dlnyqv::before {
  background: radial-gradient(circle, transparent 2px, rgb(0, 155, 232) 2px) -1px
    1px / 5px 8px repeat-y;
  content: "";
  position: absolute;
  height: 70px;
  width: 2px;
}
.home-category-banner {
  position: relative;
  padding: 30px;
  height: 100%;
  text-align: -webkit-center;
  overflow: hidden;
  font-family: Hind Madurai, sans-serif;
  color: white;
}
.css-10wy6qd:last-child::after {
  content: "";
  position: absolute;
  right: -17px;
  width: 16px;
  height: 70px;
}
</style>
