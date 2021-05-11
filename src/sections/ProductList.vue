<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12">
          <products-vue :data="data" :isLoading="isLoading" />
        </div>
      </div>

      <div class="mx-auto col-4">
        <b-button
          variant="success"
          style="font-weight: 600; width: 50%"
          class="mx-auto"
          block
          :loading="isLoading"
          rounded
          @click="check(page)"
        >
          Load More
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import ProductsVue from "@/sections/Products.vue";

export default {
  components: {
    ProductsVue,
  },
  props: {
    itemLength: Function,
    fCategories: Function,
    fCities: Function,
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
      const data = {
        query: query,
        page: page,
        "items-per-page": 12,
      };
      if (query) {
        Axios.post(`/page/search/products`, data, {
          headers: { user_id: this.$store.state.user.id },
        }).then((res) => {
          if (res.data.data.length > 0) {
            this.data.push(...res.data.data);
            this.isLoading = false;
            if (this.itemLength) this.itemLength(this.data.length);
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
            if (this.itemLength) this.itemLength(this.data.length);
          } else {
            this.isLoading = false;
          }
        });
      }
    },
    getCity() {
      Axios.get("/address/city").then((res) => {
        this.cities = res.data;
        if (this.fCities) this.fCities(res.data);
      });
    },
    getCategories() {
      Axios.get("/page/categories?type=products").then((res) => {
        this.categories = res.data.data;
        if (this.fCategories) this.fCategories(res.data.data);
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

<style lang="scss" scoped></style>
