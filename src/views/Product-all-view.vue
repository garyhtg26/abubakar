<template>
  <div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <!-- ========================= SECTION CONTENT ========================= -->
      <section class="section-content padding-y">
        <div
          class="container-fluid"
          style="padding-right: 45px; padding-left: 45px;"
        >
          <!-- ============================  FILTER TOP  ================================= -->
          <div
            style="height: 50px; display: flex;"
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
          <div style="margin-bottom: 40px;"></div>

          <div class="row">
            <aside style="padding: 5px; overflow: hidden" class="col-md-2 col-sm-12">
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
                        Kategori
                      </a>
                    </h6>
                    <b-collapse
                      visible
                      class="filter-content collapse show"
                      id="collapse-1-inner"
                      style=""
                    >
                      <div
                        class="inner overflow-scroll"
                      >
                        <ul class="list-menu">
                          <li v-for="x in categories" :key="x.id">
                            <!-- <a href="#">{{ x.name }}</a> -->
                            <b-form-radio
                              v-model="params.category_id"
                              :value="x"
                            >
                              {{ x.name }}
                            </b-form-radio>
                          </li>
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
                        <el-select
                          placeholder="Lokasi"
                          filterable
                          v-model="params.kota"
                          clearable
                        >
                          <el-option
                            v-for="item in cities"
                            :key="item.city_id"
                            :label="`${item.type} ${item.city_name}`"
                            :value="`${item.type} ${item.city_name}`"
                          ></el-option>
                        </el-select>
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
                          v-model="params.min_price"
                        />
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <input
                              class="form-control"
                              placeholder="Max"
                              type="number"
                            />
                          </div>
                          <div class="form-group text-right col-md-12">
                            <input
                              class="form-control"
                              placeholder="Min"
                              type="number"
                              v-model="params.max_price"
                            />
                          </div>
                        </div>
                        <!-- form-row.// -->
                        <button
                          class="btn btn-block btn-primary"
                          @click="getFilter"
                        >
                          Apply
                        </button>
                      </div>
                      <!-- inner.// -->
                    </b-collapse>
                  </article>
                </div>
              </div>
            </aside>
            <!-- col.// -->
            <main class="col-md-10 infinite-list-wrapper">
              <header class="mb-3">
                <div class="form-inline">
                  <strong class="mr-md-auto">
                    <!-- Menampilkan pencarian Produk {{ $route.query.keyword }} -->
                  </strong>
                  <el-select
                    placeholder="Sort By"
                    v-model="params.sortBy"
                    @change="getFilter"
                  >
                    <el-option
                      v-for="item in sortBy"
                      :key="item"
                      :label="item"
                      :value="item"
                    ></el-option>
                  </el-select>
                </div>
              </header>
              <!-- sect-heading -->
              <article class="card-product-list">
                <hr />
                <!-- related keyword -->
                <b-row no-gutters v-if="data.length == 0 && !isLoading">
                  <b-col cols="12">
                    <h6>Kategori Terkait</h6>
                  </b-col>
                  <b-col cols="12">
                    <carousel
                      :perPage="8"
                      :paginationEnabled="false"
                      navigationEnabled
                    >
                      <slide v-for="s in categories" :key="s.id">
                        <router-link :to="`/kategori/${s.name}`" class="mx-2">
                          <el-tooltip
                            class="item"
                            effect="dark"
                            :content="s.name"
                            placement="top-end"
                          >
                            <el-tag effect="light" class="key-tag">
                              <el-avatar
                                size="small"
                                style="
                                  float: left;
                                  margin-left: -10px;
                                  margin-right: 5px;
                                "
                                :src="s.photo"
                              ></el-avatar>
                              {{ s.name }}
                            </el-tag>
                          </el-tooltip>
                        </router-link>
                      </slide>
                    </carousel>
                  </b-col>
                  <b-col cols="12">
                    <hr />
                  </b-col>
                </b-row>
                <div class="row no-gutters">
                  <div class="col-md-12">
                    <b-card
                      v-if="data.length == 0 && !isLoading"
                      title="Oops, produk nggak ditemukan"
                      :img-src="src"
                      img-alt="Card image"
                      img-left
                      img-height="130px"
                      img-width="160px"
                      class="mb-3"
                      style="padding: 8px;"
                    >
                      <b-card-text>
                        Coba kata kunci lain atau cek rekomendasi dibawah.
                      </b-card-text>
                    
                    </b-card>
                  </div>
                  <section v-if="data.length == 0 && !isLoading" class="p-1">
                    <hr />
                    <products :data="suggestion" :isLoading="isLoading" />

                    <!-- row.// -->
                  </section>
                  <div class="col-md-12">
                    <products :data="data" :isLoading="isLoading" />
                  </div>
                  <div class="mx-auto col-4" v-if="!noMore">
                    <b-button
                      variant="success"
                      style="font-weight: 600; width: 50%;"
                      class="mx-auto"
                      block
                      :loading="isLoading"
                      rounded
                      @click="getData"
                    >
                      Load More
                    </b-button>
                  </div>
                  <div class="col-md-12">
                    <hr />
                  </div>
                  <!-- related store -->
                  <div class="col-md-12">
                    <b-row no-gutters v-if="stores.length > 0">
                      <b-col cols="12">
                        <h6>Toko Terkait</h6>
                      </b-col>
                      <b-col cols="12">
                        <carousel
                          :perPage="8"
                          :paginationEnabled="false"
                          navigationEnabled
                        >
                          <slide v-for="s in stores" :key="s.id">
                            <router-link
                              :to="`/stores/${s.name}?store_id=${s.id}`"
                            >
                              <el-card :body-style="{ padding: '0px' }">
                                <el-image fit="fill" :src="s.logo"></el-image>
                                <div style="padding: 14px;">
                                  <span class="title">{{ s.name }}</span>
                                </div>
                              </el-card>
                            </router-link>
                          </slide>
                        </carousel>
                      </b-col>
                      <b-col cols="12">
                        <hr />
                      </b-col>
                    </b-row>
                    <!--  -->
                  </div>
                </div>
              </article>
              <!-- card-product .// -->
            </main>
            <!-- col.// -->
          </div>
        </div>
        <!-- container .//  -->
      </section>
    </main>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import ProductList from '../sections/ProductList.vue'
import Products from '../sections/Products.vue'
import Axios from 'axios'
export default {
  props: ['item', 'displayList'],
  name: 'search',
  components: {
    Products,
    Login,
    ProductList,
  },
  data() {
    return {
      src: require('@/assets/images/noresult.png'),
      stores: [],
      suggestion: [],
      data: [],
      cities: [],
      page: 1,
      isLoading: false,
      isFilter: false,
      panel: [1, 2],
      search_cat: null,
      categories: [],
      sortBy: ['Rating', 'Paling Laris', 'Termurah', 'Termahal', 'Terbaru'],
      length: 0,
      params: {
        max_price: null,
        min_price: null,
        category_id: [],
        kota: null,
        sortBy: null,
      },
      noMore: false,
    }
  },
  computed: {
    disabled() {
      return this.isLoading || this.noMore
    },
    scroll() {
      return document.documentElement.offsetHeight
    },
  },
  watch: {
    '$route.query.keyword'(val) {
      if (val) {
        this.data = []
        this.page = 1
        this.getData(1, val)
      }
    },
  },
  mounted() {
    this.getData(this.page)
    this.getCity()
    this.getCategories()
  },
  methods: {
    getData() {
      if (this.isFilter) {
        this.getFilter(this.page)
        return
      }
      const page = this.page
      this.isLoading = true
      this.noMore = false
      let query = null
      if (this.$route.query.keyword)
        query = this.$route.query.keyword.replace(/[-]/g, ' ')
      const data = {
        query: query,
        page: page,
        'items-per-page': 12,
      }
      if (query) {
        Axios.post(`/page/search/products`, data, {
          headers: { user_id: this.$store.state.user.id },
        }).then((res) => {
          if (res.data.data.length > 0) {
            this.data.push(...res.data.data)
            this.isLoading = false
            this.page += 1
          } else {
            this.isLoading = false
            this.noMore = true
          }
          this.suggestion = res.data.suggestions
          this.stores = res.data.stores
        })
      } else {
        Axios.get(`/page/products?page=${page}`, {
          headers: { user_id: this.$store.state.user.id },
        }).then((res) => {
          if (res.data.data.length > 0) {
            this.data.push(...res.data.data)
            this.page += 1
            this.isLoading = false
          } else {
            this.isLoading = false
            this.noMore = true
          }
          // this.suggestion = res.data.suggestions;
          // this.stores = res.data.stores;
        })
      }
    },
    getCity() {
      Axios.get('/address/city').then((res) => {
        this.cities = res.data
      })
    },
    getCategories() {
      Axios.get('/page/categories?type=products').then((res) => {
        this.categories = res.data.data
      })
    },
    getFilter(pages) {
      var page = 1
      this.isFilter = true
      this.params.name = this.$route.query.keyword
        ? this.$route.query.keyword
        : null
      if (typeof pages === 'number') {
        page = pages
      }
      if (this.params.category_id.id) {
        let category = this.params.category_id.children.map((x) => x.id)
        category.push(this.params.category_id.id)
        this.params.category_id = category
      }
      Axios.post('/page/filter/products?page=' + page, this.params).then(
        (res) => {
          console.log(typeof pages)
          if (typeof pages !== 'number' && typeof pages !== 'String') {
            this.data = res.data.data
            this.page += 1
          } else {
            this.data.push(...res.data.data)
            this.page += 1
          }
        },
      )
    },
    check(page) {
      const next = (page += 1)
      if (!this.isFilter) {
        setTimeout(() => {
          this.page = next
          this.getData(next)
        }, 200)
      } else {
        setTimeout(() => {
          this.page = next
          this.getFilter(next)
        }, 200)
      }
    },
  },
}
</script>

<style scoped lang="scss">
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
@media (max-width: 839px) {
  .overflow-scroll{
    max-height: 150px !important;
  }
}
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(139, 139, 139);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1e9e25;
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

aside {
  position: relative !important;
  float: left !important;
  width: 170px !important;
  top: 0px !important;
  bottom: 0px !important;
}
.overflow-scroll {
  overflow-y: scroll; max-height: 350px
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
.key-tag {
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
}
/deep/.el-tag {
  background-color: #ffffff;
  border-color: #d4d4d4;
  color: #0c0c0c;
}
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #28a745 !important;
  background-color: #28a745 !important;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;

    background: #28a745;
  }
}
</style>
