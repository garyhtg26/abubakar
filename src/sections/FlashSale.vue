<template>
  <div
    class="products"
    id="products"
    v-bind:style="{ 'background-image': 'url(' + image + ')' }"
  >
    <h1
      class="promoh1 text-center"
    >
      <i class="fa fa-bolt mr-2"></i>
      Abubakar Promo
    </h1>
    <div class="container">
      <section class="padding-bottom-sm">
        <b-row>
          <b-col cols="12">
            <carousel :perPageCustom="[[400,2],[767,3],[840,6]]" navigationEnabled paginationActiveColor="#ffc107" loop>
              <slide v-for="x in data" :key="x.id">
                <div class="col-lg-12 col-md-12 col-sm-9 px-1">
                  <products-singgle-vue :data="x" />
                </div>
              </slide>
            </carousel>
          </b-col>
        </b-row>
      </section>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import ProductsVue from "@/sections/Products.vue";
import ProductsSinggleVue from "./Products-singgle.vue";
export default {
  components: {
    ProductsVue,
    ProductsSinggleVue,
  },
  props: {
    data: Array,
  },
  data() {
    return {
      image: require("@/assets/images/background1.png"),
      sortBy: ["Rating", "Paling Laris", "Termurah", "Termahal", "Terbaru"],
      params: {
        max_price: null,
        min_price: null,
        category_id: [],
        kota: null,
        sortBy: null,
      },
    };
  },
  watch: {
    "$route.query.search"(val) {
      if (val) {
        this.data = [];
        this.page = 1;
        this.getData(1, val);
      }
    },
  },
  mounted() {
    // this.getData(this.page);
    // this.getCity()
    // this.getCategories()
  },
  methods: {
    getData(page) {
      this.isLoading = true;
      const query = this.$route.query.search;
      if (query) {
        Axios.get(
          `/page/search/products/${query}?page=${page}&items-per-page=12`,
          {
            headers: { user_id: this.$store.state.user.id },
          }
        ).then((res) => {
          if (res.data.data.length > 0) {
            this.data.push(...res.data.data);
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
        });
      } else {
        Axios.get(`/page/products?page=${page}`, {
          headers: { user_id: this.$store.state.user.id },
        }).then((res) => {
          if (res.data.data.length > 0) {
            this.data.push(...res.data.data);
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
        });
      }
    },
    getCity() {
      Axios.get("/address/city").then((res) => {
        this.cities = res.data;
      });
    },
    getCategories() {
      Axios.get("/page/categories?type=products").then((res) => {
        this.categories = res.data.data;
      });
    },
    getFilter(pages) {
      var page = 1;
      this.isFilter = true;
      this.params.name = this.$route.query.search
        ? this.$route.query.search
        : null;
      if (typeof pages === "number") {
        page = pages;
      }
      Axios.post("/page/filter/products?page=" + page, this.params).then(
        (res) => {
          console.log(typeof pages);
          if (typeof pages !== "number" && typeof pages !== "String") {
            this.data = res.data.data;
          } else {
            this.data.push(...res.data.data);
          }
        }
      );
    },
    check(page) {
      const next = (page += 1);
      if (!this.isFilter) {
        setTimeout(() => {
          this.page = next;
          this.getData(next);
        }, 200);
      } else {
        setTimeout(() => {
          this.page = next;
          this.getFilter(next);
        }, 200);
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (max-width: 839px) {
  .promoh1{
    margin-right:350px !important;
    margin-bottom:50px;
  }
}
.promoh1{
  color: white; margin-right: 800px; padding-top: 60px
}
.products {
  margin-top: 7rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 3rem;
}

.progress {
  height: 6px !important;
  color: green;
}
.progress-bar {
  background-color: rgb(5, 170, 5) !important;
}
.title {
  font-weight: 600;
}
/deep/.VueCarousel-navigation-next {
    background-image: url(../assets/images/right.png)  !important;
    background-size: contain;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: inherit;
                                                                  
}
/deep/.VueCarousel-navigation-prev {
    background-image: url(../assets/images/left.png)  !important;
    background-size: contain;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: inherit;
                                                                  
}
/deep/.VueCarousel-navigation-button {
    
    color: transparent !important;
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
