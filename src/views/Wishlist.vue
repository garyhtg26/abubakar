<template>
  <div>
    <div class="container" style="margin-top: 100px">
      <div class="header-wishlist">
        <div class="wishlist-search" style="height: auto; width: 30%">
          <button
            aria-label="Tombol pencarian"
            style="height: auto"
            type="submit"
            class="search-button"
          >
            <i
              style="color: #495057"
              class="button fa fa-search"
              aria-hidden="true"
            ></i>
          </button>
          <input
            type="text"
            aria-label="Bidang pencarian"
            placeholder="Cari di Wihslist"
            class="search-box"
          />
        </div>
        <button class="edit-wishlist">
          <span>Ubah Wishlist</span>
        </button>
      </div>

      <div class="wishlist-page">
        <b-row no-gutters>
          <b-col md="2" sm="6" v-for="x in products" :key="x.id">
            <products-singgle :data="x" />
          </b-col>
        </b-row>
        <div class="wishlist">
          <b-row v-if="isLoading">
            <b-col md="2" sm="6" v-for="x in 12" :key="x">
              <b-card no-body img-top class="mb-2" style="width: 190px">
                <b-skeleton-img
                  card-img="top"
                  aspect="3:1"
                  height="150px"
                ></b-skeleton-img>
                <b-card-body>
                  <b-skeleton animation="wave" width="85%"></b-skeleton>
                  <b-skeleton animation="wave" width="55%"></b-skeleton>
                  <b-skeleton animation="wave" width="70%"></b-skeleton>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
      <section class="padding-bottom-sm pt-4">
        <header class="section-heading heading-line">
          <h4 class="title-section text-uppercase">Recommended items</h4>
        </header>

        <b-row no-gutters>
          <b-col md="2" sm="6" v-for="x in related" :key="x.id">
            <products-singgle :data="x" />
          </b-col>
        </b-row>
        <!-- row.// -->
      </section>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import ProductsSinggle from "../sections/Products-singgle.vue";
export default {
  components: { ProductsSinggle },
  data() {
    return {
      products: [],
      related: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;
      Axios.get("page/wishlist").then((res) => {
        this.products = res.data.data;
        this.related = res.data.related;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 20px;
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
  bottom: 0;
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
/deep/ body {
  background-color: #fff !important;
}
.header-wishlist {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 32px;
}
.wishlist-search {
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: inherit;
  -webkit-flex-grow: inherit;
  -ms-flex-positive: inherit;
  flex-grow: inherit;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  overflow: hidden;
  -webkit-transition: border-color 280ms ease;
  transition: border-color 280ms ease;
  width: 30%;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #e5e7e9;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  margin-right: 16px;
}
.search-button {
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
  padding: 0;
  -webkit-transition: background-color 280ms ease;
  transition: background-color 280ms ease;
  width: 40px;
  background-color: #f3f4f5;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.search-box {
  padding-right: 12px;
  padding-left: 12px;
  box-shadow: none;
  border: none;
  min-width: 0;
  min-height: 0;
  width: 100%;
  color: rgba(49, 53, 59, 0.96);
  font-family: inherit;
  background-color: transparent;
  line-height: 22px;
  border: none;
  outline: none;
  height: auto;
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.edit-wishlist {
  color: rgba(49, 53, 59, 0.68);
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.8571428571428571rem;
  height: 32px;
  line-height: 18px;
  width: auto;
  border-radius: 8px;
  background-position: center;
  font-weight: 800;
  outline: none;
  padding: 0 16px;
  position: relative;
  -webkit-transition: background 0.8s;
  transition: background 0.8s;
  cursor: pointer;
  display: inline-block;
  background: transparent
    radial-gradient(circle, transparent 1%, transparent 1%) center/15000%;
  border: 1px solid #e5e7e9;
  text-indent: initial;
  position: relative;
}

.edit-wishlist span {
  display: block;
  font-size: inherit;
  opacity: 1;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transition: opacity 0.3s linear, top 0.3s linear;
  transition: opacity 0.3s linear, top 0.3s linear;
  white-space: nowrap;
}
.wishlist {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -6px;
}
.product-card {
  padding: 0 0.8% 3%;
  width: 16.667%;
  box-sizing: border-box;
}
.product-container {
  font-family: "open sans", "tahoma", sans-serif;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 10px;
  box-sizing: border-box;
}
.product-wrapper {
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.product-wrapper:hover {
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.btn-wishlist {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  z-index: 1;
  text-align: center;
  border-radius: 14px;
}
.css-lr6een {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  z-index: 1;
  text-align: center;
  background-color: rgb(243, 244, 245);
  border-radius: 14px;
}
.css-gu7dmw {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  border-top-right-radius: 4px;
}
.css-1a7a6ct {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6621512d.svg);
  animation: 0.5s ease-in-out 0.1s 1 normal none running animation-1xjtxag;
  transition: all 0.25s ease 0s;
}

.css-y8vkn8 {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/bb8f5839.svg);
  background-size: cover;
  width: 20px;
  height: 20px;
  z-index: 1;
  transition: all 0.25s ease 0s;
}
.css-ckbit5 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
}
.css-16vw0vn {
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.css-79elbk {
  position: relative;
}
.css-1c0vu8l {
  position: relative;
  height: 0px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-bottom: 100%;
  width: 100%;
  background: rgb(246, 246, 246);
  transition: box-shadow 0.25s ease 0s;
  text-overflow: ellipsis;
  overflow: hidden;
}
.css-12wxb0f {
  background-color: transparent;
  display: inline-block;
  margin: 0px auto;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
}
.css-12wxb0f > img.fade.success,
.css-12wxb0f > img.fade.default {
  opacity: 1;
}
.css-11s9vse {
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.css-1bjwylw {
  color: rgba(0, 0, 0, 0.7);
  display: -webkit-box;
  max-height: 38px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  overflow: hidden;
  white-space: normal;
  overflow-wrap: break-word;
}
.css-1beg0o7 {
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
}
.css-1beg0o7 > span:only-child {
  margin: 0px;
}
.css-tpww51 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.857143rem;
  line-height: 1.5;
  margin: 4px 0px;
}
.css-vbihp9 {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
  vertical-align: top;
}
.css-1kr22w3 {
  display: block;
  width: 100%;
  font-size: 0.857143rem;
  height: 20px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: transform 0.3s ease 0s;
  transform: unset;
  max-width: 140px;
}
.css-1kr22w3 {
  display: block;
  width: 100%;
  font-size: 0.857143rem;
  height: 20px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: transform 0.3s ease 0s;
  transform: unset;
  max-width: 140px;
}
.css-153qjw7 {
  min-height: 14px;
  font-size: 0.857143rem;
}
.css-153qjw7 div {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 4px 0px;
}
.css-177n1u3 {
  height: 12px;
  width: 12px;
  margin: 0.5px;
}
.css-e9chkm {
  margin: 8px;
}
.css-e9chkm button {
  width: 100%;
  padding: 0px;
}
.css-1ldonwk-unf-btn {
  color: red;
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.857143rem;
  height: 32px;
  line-height: 18px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;
  cursor: pointer;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%)
    center center / 15000% rgb(255, 255, 255);
  border: 1px solid red;
  text-indent: initial;
  position: relative;
}
.css-1s3656b button {
  cursor: pointer;
}
.css-1ldonwk-unf-btn span {
  display: block;
  font-size: inherit;
  opacity: 1;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  top: 0px;
  transition: opacity 0.3s linear 0s, top 0.3s linear 0s;
  white-space: nowrap;
}
</style>
