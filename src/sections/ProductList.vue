<template>
  <div>
    <!-- {{ params.category_id }} -->
    <v-row>
      <v-col cols="3">
        <v-row align="center" justify="center" class="d-flex my-auto">
          <v-col cols="12">
            <v-expansion-panels
              focusable
              accordion
              multiple
              hover
              v-model="panel"
            >
              <!-- kategori -->
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Filter Kategori
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-text-field
                    v-model="search_cat"
                    placeholder="Search ..."
                    filled
                    rounded
                    dense
                    class="mt-2"
                  ></v-text-field>
                  <v-treeview
                    selectable
                    hoverable
                    @input="getFilter"
                    :search="search_cat"
                    :items="categories"
                    v-model="params.category_id"
                  ></v-treeview>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!-- sort -->
              <v-expansion-panel>
                <v-expansion-panel-header> SortBy </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row no-gutters>
                    <v-col cols="12" class="mt-3">
                      <v-select
                        filled
                        rounded
                        placeholder="Urutkan Berdasarkan"
                        :items="sortBy"
                        dense
                        v-model="params.sortBy"
                      ></v-select>
                      <v-btn block rounded elevation="0" @click="getFilter"
                        >Filter</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!-- harga -->
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Filter Harga
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row no-gutters>
                    <v-col cols="12" class="mt-3">
                      <v-text-field
                        filled
                        rounded
                        placeholder="Price-min"
                        dense
                        v-model="params.min_price"
                      ></v-text-field>
                      <v-text-field
                        filled
                        rounded
                        placeholder="Price-max"
                        dense
                        v-model="params.max_price"
                      ></v-text-field>
                      <v-btn @click="getFilter" block rounded elevation="0"
                        >Filter</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!-- kota -->
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Filter Kota
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row no-gutters>
                    <v-col cols="12" class="mt-3">
                      <v-autocomplete
                        filled
                        rounded
                        placeholder="Filter Kota"
                        :items="cities"
                        item-text="city_name"
                        item-value="city_name"
                        dense
                        v-model="params.kota"
                      ></v-autocomplete>
                      <v-btn block rounded elevation="0" @click="getFilter"
                        >Filter</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9" md="9">
        <v-row>
          <products-vue :data="data" />
          <v-col cols="4" class="mx-auto">
            <v-btn
              class="mx-auto"
              block
              :loading="isLoading"
              rounded
              @click="check(page)"
              >Load More</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Axios from "axios";
import ProductsVue from "@/sections/Products.vue";

export default {
  components: {
    ProductsVue,
  },
  data() {
    return {
      data: [],
      cities: [],
      page: 1,
      isLoading: false,
      isFilter: false,
      panel: [1, 2],
      search_cat: null,
      categories: [],
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
    this.getData(this.page);
    this.getCity();
    this.getCategories();
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

<style lang="scss" scoped>
</style>