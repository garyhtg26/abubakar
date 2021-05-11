<template>
  <main>
    <main class="flex-fill">
      <!-- <message-component></message-component> -->
      <!-- ========================= SECTION CONTENT ========================= -->
      <section class="section-content padding-y">
        <div
          class="container-fluid"
          style="padding-right: 45px; padding-left: 45px"
        >
          <!-- ============================  FILTER TOP  ================================= -->
          <div
            style="height: 50px; display: flex"
            class="card card-shadow mb-3"
          >
            <div class=" ">
              <ol class="breadcrumb float-left">
                <li class="breadcrumb-item">
                  <router-link to="/home"><a href="#">Home</a></router-link>
                </li>
                <li class="breadcrumb-item"><a href="#">Category name</a></li>
                <li class="breadcrumb-item active">Item details</li>
              </ol>
            </div>
            <!-- card-body .// -->
          </div>
          <!-- card.// -->
          <!-- ============================ FILTER TOP END.// ================================= -->
          <div style="margin-bottom: 40px"></div>

          <div class="row">
            <aside style="padding: 5px" class="col-md-2">
              <div class="card h-100">
                <div class="card-header">Filter</div>
                <div class="card-body">
                  <article class="filter-group">
                    <h6 class="title">
                      <a
                        v-b-toggle.collapse-1-inner
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="collapse"
                        data-target="#collapse_1"
                      >
                        Product type
                      </a>
                    </h6>
                    <b-collapse
                      visible
                      class="filter-content collapse show"
                      id="collapse-1-inner"
                      style=""
                    >
                      <div class="inner">
                        <ul class="list-menu">
                          <li><a href="#">Shorts </a></li>
                          <li><a href="#">Trousers </a></li>
                          <li><a href="#">Sweaters </a></li>
                          <li><a href="#">Clothes </a></li>
                          <li><a href="#">Home items </a></li>
                          <li><a href="#">Jackats</a></li>
                          <li><a href="#">Somethings </a></li>
                        </ul>
                      </div>
                      <!-- inner.// -->
                    </b-collapse>
                  </article>
                  <!-- filter-group  .// -->
                  <article class="filter-group">
                    <h6 class="title">
                      <a
                        v-b-toggle.collapse-2-inner
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="collapse"
                        data-target="#collapse_2"
                      >
                        Lokasi
                      </a>
                    </h6>
                    <b-collapse
                      visible
                      class="filter-content collapse show"
                      id="collapse-2-inner"
                    >
                      <div class="inner">
                        <label class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            checked=""
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">
                            Bandung
                            <b class="badge badge-pill badge-light float-right"
                              >120</b
                            >
                          </div>
                        </label>
                      </div>
                      <!-- inner.// -->
                    </b-collapse>
                  </article>
                  <!-- filter-group .// -->
                  <article class="filter-group">
                    <h6 class="title">
                      <a
                        v-b-toggle.collapse-3
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="collapse"
                        data-target="#collapse_3"
                      >
                        Price range
                      </a>
                    </h6>
                    <b-collapse
                      visible
                      class="filter-content collapse show"
                      id="collapse-3"
                    >
                      <div class="inner">
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="100"
                          name=""
                        />
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label>Min</label>
                            <input
                              class="form-control"
                              placeholder="Rp0"
                              type="number"
                            />
                          </div>
                          <div class="form-group text-right col-md-6">
                            <label>Max</label>
                            <input
                              class="form-control"
                              placeholder="Rp1,0000"
                              type="number"
                            />
                          </div>
                        </div>
                        <!-- form-row.// -->
                        <button class="btn btn-block btn-primary">Apply</button>
                      </div>
                      <!-- inner.// -->
                    </b-collapse>
                  </article>
                  <!-- filter-group .// -->
                  <article class="filter-group">
                    <h6 class="title">
                      <a
                        v-b-toggle.collapse_4
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="collapse"
                        data-target="#collapse_4"
                      >
                        Sizes
                      </a>
                    </h6>
                    <b-collapse
                      visible
                      class="filter-content collapse show"
                      id="collapse_4"
                    >
                      <div class="inner">
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> XS </span>
                        </label>
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> SM </span>
                        </label>
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> LG </span>
                        </label>
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> XXL </span>
                        </label>
                      </div>
                      <!-- inner.// -->
                    </b-collapse>
                  </article>
                  <!-- filter-group .// -->
                  <article class="filter-group">
                    <h6 class="title">
                      <a
                        v-b-toggle.collapse_5
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="collapse"
                        data-target="#collapse_5"
                      >
                        Condition
                      </a>
                    </h6>
                    <b-collapse
                      visible
                      class="filter-content collapse show"
                      id="collapse_5"
                    >
                      <div class="inner">
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            checked=""
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Any condition</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Brand new</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Used items</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Very old</div>
                        </label>
                      </div>
                      <!-- inner.// -->
                    </b-collapse>
                  </article>
                  <!-- filter-group .// -->
                </div>
              </div>
            </aside>
            <!-- col.// -->
            <main class="col-md-10">
              <header class="mb-3">
                <div class="form-inline">
                  <strong class="mr-md-auto"
                    >{{ items.length }} Items found</strong
                  >
                  <select class="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                </div>
              </header>
              <!-- sect-heading -->

              <b-card
                v-if="items.length == 0"
                title="Oops, produk nggak ditemukan"
                :img-src="src"
                img-alt="Card image"
                img-left
                img-height="130px"
                img-width="160px"
                class="mb-3"
                style="padding: 8px"
              >
                <b-card-text>
                  Coba kata kunci lain atau cek rekomendasi dibawah.
                </b-card-text>
              </b-card>
            
              <div class="demo-fit">
                <carousel
                  :perPage="6"
                  :paginationEnabled="false"
                  navigationEnabled
                >
                  <slide v-for="s in stores" :key="s.id">
                    <router-link :to="`/stores/${s.name}?store_id=${s.id}`">
                      <el-card :body-style="{ padding: '0px' }">
                        <el-image fit="fill" :src="s.logo"></el-image>
                        <div style="padding: 14px">
                          <span class="title">{{ s.name }}</span>
                        </div>
                      </el-card>
                    </router-link>
                  </slide>
                </carousel>
              </div>
              <section>
                <hr />
                <Products
                  v-if="page == 1 && items.length == 0"
                  :data="suggestion"
                  :isLoading="isLoading"
                />
                <Products :data="items" :isLoading="isLoading" />
                <!-- row.// -->
              </section>
              <!-- card-product .// -->
            </main>
            <!-- col.// -->
          </div>
        </div>
        <!-- container .//  -->
      </section>
    </main>
  </main>
</template>

<script>
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Axios from "axios";
export default {
  props: ["item", "displayList", "length"],
  name: "search",
  components: {
    Products,
    Login,
  },
  data() {
    return {
      src: require("@/assets/images/noresult.png"),
      noresult: require("@/assets/images/4.png").default,
      items: [],
      suggestion: [],
      stores: [],
      page: 1,
      isLoading: true,
    };
  },
  watch: {
    "$route.query.keyword"(val) {
      if (val) {
        this.data = [];
        this.page = 1;
        this.getData(1, val);
      }
    },
  },
  mounted() {
    const q = this.$route.query.keyword;
    const page = this.page;
    this.getData(page, q);
  },
  methods: {
    getData(page, q) {
      this.isLoading = true;
      Axios.post(
        `/page/search/products`,
        {
          query: q,
          "items-per-page": 12,
          page: page,
        },
        {
          headers: { user_id: this.$store.state.user.id },
        }
      ).then((res) => {
        if (res.data.data.length > 0) {
          if (page == 1) {
            this.items = res.data.data;
          } else {
            this.items.push(...res.data.data);
          }
          this.isLoading = false;
        } else {
          this.isLoading = false;
        }
        this.suggestion = res.data.suggestions;
        this.stores = res.data.stores;
      });
    },
  },
};
</script>

<style scoped>
@media (min-width: 1040px) {
  .container {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}
@media (min-width: 1100px) {
  .container {
    max-width: 1480px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 1040px;
  }
}
@media (max-width: 768px) {
  .padding-y {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}
.card-product-list {
  margin-bottom: 20px;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
a {
  color: #000 !important; /* for browsers that don't support 'inherit' as a color value */
}
a:hover {
  text-decoration: none !important;
  color: green !important;
}
h4 {
  font-weight: 600;
}

aside {
  position: relative !important;
  float: left !important;
  width: 170px !important;
  top: 0px !important;
  bottom: 0px !important;
}
.not-found {
  display: inline-block;
  vertical-align: middle;
  width: 160px;
  margin: 0px 32px 0px 56px;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 20px;
}
.float-left {
  float: left !important;
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
.card-shadow {
  box-shadow: rgb(224, 224, 224) 1px 1px 6px 1px;
  border-radius: 6px;
  background: rgb(255, 255, 255);
}

.breadcrumb {
  position: absolute;
  padding-top: 2px;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 0;
  list-style: none;
  background-color: white !important;
}
.list-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
.padding-y {
  padding-top: 30px;
  padding-bottom: 30px;
}

a {
  color: #212529;
  text-decoration: none;
}
.checkbox-btn {
  position: relative;
  padding: 1px;
}
.checkbox-btn input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.btn-light {
  background-color: #fff;
  border-color: #e5e7ea;
}
.filter-group {
  border-bottom: 1px solid #e5e7ea;
  margin-top: 10px;
  padding-bottom: 10px;
}
.filter-group .inner {
  padding-top: 16px;
  padding-bottom: 7px;
}
body,
.sticky-footer-wrapper {
  min-height: 100vh;
}

.flex-fill {
  flex: 1 1 auto;
}
.page-item.active .page-link {
  background-color: #28a745 !important;
  border-color: #28a745 !important;
}
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #28a745 !important;
  background-color: #28a745 !important;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;

    background: #28a745;
  }
}
</style>
