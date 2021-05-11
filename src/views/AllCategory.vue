<template>
  <div>
    <Navbar></Navbar>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y" style="margin-top: 50px">
      <div class="container-fluid p-5">
        <nav class="row" v-if="isLoading">
          <div class="col-md-3" v-for="x in 12" :key="x">
            <b-card no-body img-top>
              <b-skeleton-img
                card-img="top"
                height="200px"
                aspect="3:1"
              ></b-skeleton-img>
              <b-card-body>
                <b-skeleton animation="wave" width="85%"></b-skeleton>
                <b-skeleton animation="wave" width="55%"></b-skeleton>
                <b-skeleton animation="wave" width="70%"></b-skeleton>
              </b-card-body>
            </b-card>
          </div>
        </nav>
        <nav class="row">
          <div class="col-md-3" v-for="x in data" :key="x.id">
            <div class="card card-category">
              <router-link
                :to="`/kategori/${x.name}`"
                class="img-wrap"

              >
                <img :src="x.photo" />
              </router-link>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{ x.name }}</a>
                </h4>
                <ul class="list-menu">
                  <li v-for="(c, i) in x.children" :key="c.id" v-if="i < 8">
                    <router-link :to="`/kategori/${c.name}`">
                      {{ c.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- col.// -->
        </nav>
        <!-- row.// -->
      </div>
      <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
    <Login></Login>
    <mini-cart></mini-cart>
    <br />

    <Footer></Footer>
  </div>
</template>

<script>
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Axios from "axios";

export default {
  components: {
    Products,
    Login,
  },
  data() {
    return {
      data: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;
      Axios.get("page/categories?type=products").then((res) => {
        this.data = res.data.data;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ a {
  color: black ;
}
.padding-y {
  padding-top: 30px;
  padding-bottom: 30px;
}

.card-category {
  display: block;
  margin-bottom: 20px;
  overflow: hidden;
  min-height: 410px;
}
.img-wrap {
  overflow: hidden;
  display: inline-block;
  height: 170px;
  background: #fcf5e2;
}
.img-wrap {
  text-align: center;
  display: block;
}
.card-category .img-wrap img {
  height: 100%;
  width: 60%;
  -o-object-fit: cover;
  object-fit: cover;
  mix-blend-mode: multiply;
}
.img-wrap img {
  max-width: 100%;
}
img {
  vertical-align: middle;
  border-style: none;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 20px;
}
.card-category .card-title {
  font-weight: 600;
  font-size: 18px;
}
.card-title {
  margin-bottom: 10px;
}
.list-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
a:hover {
  background-color: rgb(122, 204, 133);
  border-radius: 3px;
  color: white;
  font-weight: 600;

  background-size: 100px;
}
</style>