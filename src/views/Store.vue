<template>
  <div style="min-height: 500px">
    <skeleton-store-vue style="margin-top: 120px" v-if="!data.id" />
    <div class="css-1geyxdk" style="margin-top: 120px" v-else>
      <div class="css-1gwt8mt">
        <div class="css-2u57q2">
          <picture class="css-po4v3y"
            ><source :srcset="data.background" type="image/webp" />
            <img :src="data.background" alt="shop-cover"
          /></picture>
        </div>
        <div class="css-d79qek egtln8t0" style="margin-top: -80px">
          <div
            data-testid="pdpFlexWrapperContainer"
            class="css-drikti e1ufc1ph1"
          >
            <div class="css-3jbqnj e1ufc1ph0">
              <div data-ssr="shopInfoSSR">
                <div
                  data-testid="pdpFlexWrapperContainer"
                  class="css-drikti e1ufc1ph1"
                >
                  <div class="css-1vz5co9 e1ufc1ph0">
                    <div class="css-79elbk">
                      <div class="css-1vv6tua">
                        <picture class="css-1ew46s1-unf-img e11hknjr0"
                          ><img
                            :src="data.logo"
                            alt=""
                            class="css-1nxyhqh e11hknjr1"
                        /></picture>
                      </div>
                      <i class="css-186zsvb e1y56x400"></i>
                    </div>
                  </div>
                  <div class="css-1p0pkw3 e1ufc1ph0">
                    <div class="css-165xs4l">
                      <h1 class="css-1i6886t mr-2">{{ data.name }}</h1>
                      <div class="css-ypd15i-unf-tooltip">
                        <div>
                          <img
                            src="https://ecs7.tokopedia.net/img/repsys/silver-5.gif"
                            alt="reputation"
                          />
                        </div>
                        <div class="css-10rrpsc e1hrfe840">4.273 points</div>
                      </div>
                      <span style="margin-left: 5px; position: relative"
                        ><span
                          class="css-10v2uzq"
                          data-testid="shopReputationGuide"
                          ><i class="css-38a591 e1y56x400"></i></span
                      ></span>
                    </div>
                    <ul class="css-1vb8f2">
                      <div class="css-k008qs">
                        <!-- <li class="css-ui6bwv">
                          <div
                            for="online status"
                            class="css-clxaii-unf-label e143v2d00"
                          >
                            Online
                          </div>
                        </li> -->
                        <li class="css-ui6bwv">
                          <p class="css-dxunmy-unf-heading e1qvo2ff8">
                            <!-- Dibalas ± 3 menit -->
                          </p>
                        </li>
                        <li class="css-ui6bwv" v-if="data.kecamatan">
                          <p class="css-dxunmy-unf-heading e1qvo2ff8">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            {{ data.kecamatan.city }}
                          </p>
                        </li>
                      </div>
                    </ul>
                    <div class="css-ais6tt">
                      <button
                        class="css-1fjsapj-unf-btn e1ggruw00"
                        @click="modal.chat = true"
                      >
                        <span>Chat Penjual</span>
                      </button>
                      <button
                        class="css-rhf1fq-unf-btn e1ggruw00"
                        @click="modal.info = true"
                      >
                        <span>Info Toko</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1pzufdd e1ufc1ph0 mt-3">
              <div class="css-8rzf0c">
                <div
                  data-testid="pdpFlexWrapperContainer"
                  class="css-drikti e1ufc1ph1"
                >
                  <div class="css-15n97o5 e1ufc1ph0">
                    <a
                      class="css-8pvnhw-unf-heading e1qvo2ff8"
                      style="display: flex; width: 130px"
                      >Produk Terjual
                      <div class="css-cw2vxv e649e4w0">
                        <div class="tooltipnote__content__sold">
                          <i
                            class="fa fa-info-circle ml-1"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </a>
                    <h2 class="css-lzwncz-unf-heading e1qvo2ff2">
                      {{ terJual }}
                    </h2>
                  </div>
                  <div
                    class="css-10oyrqa e1ufc1ph0"
                    @click="modal.review = true"
                  >
                    <p class="css-8pvnhw-unf-heading e1qvo2ff8">
                      Nilai Kualitas Produk
                    </p>
                    <h2 class="css-rfs3ih-unf-heading e1qvo2ff2">4.9</h2>
                    <div class="css-157gv8 e1y56x401"></div>
                    <h6 class="css-1s96mum-unf-heading e1qvo2ff6">
                      ({{ reviews.length }} Ulasan)
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="css-79elbk">
        <div
          aria-label="Tab Section"
          class="css-7z4adk-unf-tab-wrapper e1yhziio0"
        >
          <div class="css-wyy8gk-unf-tab-holder e1yhziio1">
            <div width="99" class="css-nrpibi-unf-indicator e1yhziio3"></div>
          </div>
        </div>
      </div>
      <div class="css-2jbv16"></div>
      <div class="css-1kn5b1o">
        <aside class="css-1u11ne2 ml-3">
          <div class="css-1wyv5w4">
            <div class="css-1ty3vwd">
              <div class="header">
                <h5 class="css-92pohp-unf-heading e1qvo2ff5">
                  Etalase Toko (20)
                </h5>
                <div class="css-148fuv6">
                  <ul class="css-17mrx6g">
                    <li class="css-48y2gt" @click="currentFilter = null">
                      <a>Semua Produk</a>
                    </li>
                    <li class="css-z2vy7e" @click="currentFilter = 'terjual'">
                      <a>Produk Terjual</a>
                    </li>
                    <li class="css-z2vy7e" @click="currentFilter = 'preorder'">
                      <a>Preorder</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div class="css-1v9ovqz">
          <div class="css-19lrfly">
            <div style="margin-right: 250px; margin-left: 10px">
              <div
                class="css-d2iy24 e1v0ehno0"
                height="auto"
                width="318px"
                data-testid="shopsearchbar"
              >
                <button
                  aria-label="Tombol pencarian"
                  height="auto"
                  type="submit"
                  class="css-1ymn4im e1v0ehno1"
                ></button>
                <input
                  aria-label="Bidang pencarian"
                  placeholder="Cari produk di toko ini"
                  type="text"
                  class="css-4eg0ft e16vycsw0"
                  value=""
                />
              </div>
            </div>
            <div class="css-18y26lr egk8wfz1">
              <h5 class="css-1vwxj7n-unf-heading e1qvo2ff5">
                <span>Urutkan</span>
              </h5>
              <div width="200px" class="css-1k0bvn0 e15j6tp62">
                <button type="button" class="css-1ponx9k e15j6tp61">
                  <label value="Terbaru" class="css-ymlcjc e15j6tp63"
                    ><span>Terbaru</span></label
                  >
                </button>
                <div class="css-msew48 e15j6tp60">
                  <ul role="listbox" class="css-jof6us e15j6tp64">
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button"><span>Paling Sesuai</span></button>
                    </li>
                    <li
                      role="option"
                      aria-selected="true"
                      class="css-1e9ocd3 e15j6tp68"
                    >
                      <button type="button"><span>Terbaru</span></button>
                    </li>
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button">
                        <span>Harga Tertinggi</span>
                      </button>
                    </li>
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button"><span>Harga Terendah</span></button>
                    </li>
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button">
                        <span>Ulasan Terbanyak</span>
                      </button>
                    </li>
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button">
                        <span>Pembelian Terbanyak</span>
                      </button>
                    </li>
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button">
                        <span>Dilihat Terbanyak</span>
                      </button>
                    </li>
                    <li
                      role="option"
                      aria-selected="false"
                      class="css-sxiy95 e15j6tp68"
                    >
                      <button type="button">
                        <span>Pembaruan Terakhir</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h4 class="css-1vu75fx ml-4" data-testid="showCaseTitle">
            Semua Produk
          </h4>
          <div class="css-8atqhb">
            <div class="css-tjjb18">
              <div
                class="css-1sn1xa2"
                v-for="(x, index) in currentProduk"
                :key="`${index}${x.id}`"
                @click="$router.push(`/product/${x.id}`)"
              >
                <div class="css-oynulx">
                  <div
                    class="css-o1ozdj"
                    data-testid="divProductWrapper"
                    data-action="false"
                  >
                    <div class="css-wlcnlb" data-testid="master-product-card">
                      <div class="unf-card css-rs4sgo-unf-card eue3g1e0">
                        <div class="pcv3__container css-1bd8ct">
                          <div class="css-1ehqh5q">
                            <a>
                              <div class="css-1k4ugb8 e18n9kgb0" height="auto">
                                <img
                                  class="success fade"
                                  :src="x.thumbnail"
                                  title=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="css-7fmtuv">
                            <a class="pcv3__info-content css-gwkf0u">
                              <div>
                                {{ x.name.substr(0, 30) }}
                              </div>
                              <div
                                class="css-rhd610"
                                data-testid="linkProductPrice"
                              >
                                {{ x.price | currency }}
                              </div>
                              <div class="css-f9v6qv"></div>
                            </a>
                            <div
                              aria-label="Menu"
                              class="css-1ukdyw6"
                              data-testid="btnThreeDots"
                              data-threedots="true"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-8pg9bu">
              <b-button style="margin-left: 40%" @click="loadMore">
                Load More
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <b-modal v-model="modal.review" scrollable centered title="Review Pembeli">
      <b-list-group>
        <b-list-group-item
          class="flex-column align-items-start"
          style="padding: 3px"
          v-for="x in reviews"
          :key="x.id"
        >
          <b-row>
            <b-col cols="1">
              <img :src="x.photo" width="80px" style="border-radius: 30px" />
            </b-col>
            <b-col cols="10">
              <div class="d-flex w-100 justify-content-between">
                <ul class="list-cart">
                  <li style="font-size: 12px; font-weight: bold"></li>
                  <li>{{ x.text }}</li>
                  <li style="font-size: 12px">
                    {{ x.created_at }}
                  </li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-modal>
    <!-- modal-info -->
    <b-modal v-model="modal.info" scrollable centered title="Info Toko">
      <div>
        <b-list-group>
          <b-list-group-item
            class="flex-column align-items-start"
            style="padding: 3px"
          >
            <b-row>
              <b-col cols="1">
                <img
                  :src="data.logo"
                  width="80px"
                  style="border-radius: 30px"
                />
              </b-col>
              <b-col cols="10">
                <div class="d-flex w-100 justify-content-between">
                  <ul class="list-cart" v-if="data.kecamatan">
                    <li
                      style="font-size: 12px; font-weight: bold"
                      :title="data.name"
                    ></li>
                    <li>{{ data.kecamatan.province }}</li>
                    <li
                      v-text="`${data.kecamatan.type} ${data.kecamatan.city}`"
                    />
                    <li style="font-size: 12px">
                      {{ data.kecamatan.subdistrict_name }}
                    </li>
                    <li style="font-size: 12px" v-html="data.deskripsi"></li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </b-list-group-item>
          <!-- courier -->
          <h5 style="margin-top: 20px">Jasa Pengiriman</h5>
          <b-list-group-item
            class="flex-column align-items-start"
            style="padding: 3px"
            v-for="x in courier"
            :key="x.code"
          >
            <b-row>
              <b-col cols="1">
                <img :src="x.image" width="80px" style="border-radius: 30px" />
              </b-col>
              <b-col cols="10">
                <div class="d-flex w-100 justify-content-between">
                  <ul class="list-cart">
                    <li style="font-size: 12px; font-weight: bold">
                      {{ x.name }}
                    </li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-modal>
    <!-- chat modal -->
    <b-modal v-model="modal.chat" @ok="sendMessage" centered scrollable>
      <b-form-group description="Tulis pesan untuk toko">
        <b-textarea v-model="chat.message"></b-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>


<script>
import Axios from "axios";
import ProductsVue from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import skeletonStoreVue from "../sections/skeleton-store.vue";

export default {
  components: {
    ProductsVue,
    Login,
    skeletonStoreVue,
  },
  data() {
    return {
      data: {},
      products: [],
      courier: [],
      reviews: [],
      page: 1,
      modal: {
        review: false,
        info: false,
        chat: false,
      },
      chat: {
        isChatStore: true,
      },
      terJual: 0,
      category: [],
      allowInfinite: true,
      showPreloader: true,
      currentFilter: null,
    };
  },
  computed: {
    currentProduk() {
      const cf = this.currentFilter;
      if (cf === "terjual") {
        return this.products.filter((x) => x.terjual > 0);
      } else if (cf === "preorder") {
        return this.products.filter((x) => x.isPreorder == true);
      } else {
        return this.products;
      }
    },
  },
  mounted() {
    const name = this.$route.params.name;
    this.getData(name);
  },
  methods: {
    loadMore() {
      this.page += 1;
      this.getProducts();
    },
    getData() {
      Axios.get(
        "page/stores/" + this.$route.query.store_id + "?withoutProducts=true"
      ).then((res) => {
        this.data = res.data.data;
        this.category = res.data.category;
        this.terJual = res.data.terjual;
        this.getProducts();
        this.getShipping(this.data.id);
      });
    },
    getProducts() {
      Axios.get(
        "page/products?page=" + this.page + "&store_id=" + this.data.id
      ).then((res) => {
        this.products.push(...res.data.data);
      });
    },
    sendMessage() {
      this.chat.to = this.data.id;
      Axios.post("page/chat", this.chat)
        .then((res) => {
          this.$message({
            showClose: true,
            message: "Pesan berhasil dikirim",
            type: "success",
          });
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: error,
            type: "error",
          });
        });
    },
    getShipping(id) {
      if (this.courier.length == 0) {
        Axios.get("page/courier/" + this.$route.query.store_id).then((res) => {
          this.courier = res.data;
        });
      }
      Axios.get("page/review?store_id=" + id).then((res) => {
        this.reviews = res.data.data;
      });
      //   }
    },
  },
};
</script>

<style lang="scss" scoped>
.css-1geyxdk {
  background-color: rgb(255, 255, 255);
  width: 1200px;
  min-height: 600px;
  margin: 0px auto;
}
.css-d79qek {
  padding: 16px 24px;
  margin-top: 22px;
  border-radius: 30px 30px 10px 10px;
  filter: drop-shadow(rgba(0, 0, 0, 0.07) 0px 2px 10px)
    drop-shadow(rgba(0, 0, 0, 0.09) 0px -1px 5px);
  background-color: rgb(255, 255, 255);
}
.css-drikti {
  display: flex;
  flex-wrap: nowrap;
  height: auto;
  margin: 0px;
}
.css-3jbqnj {
  flex-shrink: 1;
  align-self: center;
  width: 50%;
  min-width: 0px;
  margin-left: 0px;
  border-left: none;
}
.css-drikti {
  display: flex;
  flex-wrap: nowrap;
  height: auto;
  margin: 0px;
}
.css-1vz5co9 {
  flex-shrink: 0;
  width: 98px;
  min-width: 0px;
  margin-left: 0px;
  border-left: none;
}
.css-79elbk {
  position: relative;
}
.css-1vv6tua {
  width: 86px;
  height: 86px;
  margin-top: -38px;
  border: 6px solid rgb(255, 255, 255);
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.css-1ew46s1-unf-img {
  width: 100%;
  border-radius: 4px;
  height: 100%;
  display: flex;
  background-image: none;
}
.css-1nxyhqh {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.css-186zsvb {
  display: inline-block;
  vertical-align: text-bottom;
  width: 40px;
  height: 40px;
  border-radius: 0px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/71eb2301.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto;
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.css-1p0pkw3 {
  flex-shrink: 1;
  min-width: 0px;
  padding: 0px 0px 0px 12px;
  margin-left: 0px;
  border-left: none;
}
.css-165xs4l {
  display: flex;
  min-height: 31px;
}
.css-1i6886t {
  font-weight: 800;
  font-size: 1.42857rem;
  line-height: 26px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 4px 5px 0px;
  white-space: normal;
  word-break: break-word;
  min-height: 26px;
}
.css-ypd15i-unf-tooltip {
  display: inline-block;
  position: relative;
}
.css-ypd15i-unf-tooltip * {
  cursor: pointer;
}
.css-10rrpsc {
  width: 200px;
  font-size: 0.714286rem;
  font-weight: 400;
  position: absolute;
  z-index: 1;
  left: 50%;
  padding: 12px 16px;
  border-radius: 4px;
  line-height: 16px;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  transition: opacity 280ms ease-in-out 0s;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(49, 53, 59, 0.96);
  text-align: center;
  color: rgb(255, 255, 255);
  top: 0%;
  transform: translate(-50%, calc(-100% - 12px));
}
.css-10rrpsc::before {
  border-color: transparent transparent rgba(49, 53, 59, 0.44);
  transform: translate(-50%, calc(0% + 20px)) rotate(180deg);
}

.css-10rrpsc::after,
.css-10rrpsc::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-width: 6px;
  border-style: solid;
}
.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: "open sans", "tahoma", sans-serif;
}
.css-10v2uzq::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 50%;
  width: 150%;
  height: 150%;
  z-index: 9999;
}
.css-38a591 {
  display: inline-block;
  vertical-align: text-bottom;
  width: 13px;
  height: 13px;
  margin: 4px 0px;
  border-radius: 0px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/90236352.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
.css-1vb8f2 {
  margin-bottom: 12px;
  padding-left: 0px;
  width: 100%;
  display: flex;
}
.css-k008qs {
  display: flex;
}
.css-ui6bwv:first-of-type {
  padding-left: 0px;
  border-left: none;
}
.css-ui6bwv {
  display: inline-block;
  padding: 0px 6px;
  margin: 0px 0px 4px;
  border-left: 1px solid rgb(243, 244, 245);
  line-height: normal;
}
.css-dxunmy-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 0.857143rem;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px;
}
.css-szjspg {
  display: inline-block;
  vertical-align: middle;
}
.css-jsut4p-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 0.857143rem;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px;
}
.css-ais6tt > button {
  margin-right: 16px;
}

.css-1fjsapj-unf-btn {
  color: rgb(255, 255, 255);
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
  background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center
    center / 15000% rgb(3, 172, 14);
  border: none;
  text-indent: initial;
  position: relative;
}
.css-1fjsapj-unf-btn span {
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

.css-rhf1fq-unf-btn {
  color: rgba(49, 53, 59, 0.68);
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
  background: radial-gradient(circle, transparent 1%, transparent 1%) center
    center / 15000% transparent;
  border: 1px solid rgb(229, 231, 233);
  text-indent: initial;
  position: relative;
}
.css-rhf1fq-unf-btn span {
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
.css-1pzufdd {
  flex-shrink: 1;
  align-self: center;
  width: 50%;
  min-width: 0px;
  margin-left: auto;
  border-left: none;
}
.css-8rzf0c {
  border-left: 1px solid rgb(229, 231, 233);
}
.css-drikti {
  display: flex;
  flex-wrap: nowrap;
  height: auto;
  margin: 0px;
}
.css-15n97o5 {
  flex-shrink: 1;
  min-width: 0px;
  padding: 0px 0px 0px 40px;
  margin-left: 0px;
  border-left: none;
}
.css-8pvnhw-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 0px 8px;
}
.css-cw2vxv .tooltipnote__content__sold {
  margin-left: 2px;
}
.css-lzwncz-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.71429rem;
  line-height: 30px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px;
}
.css-10oyrqa {
  flex-shrink: 1;
  min-width: 0px;
  padding: 0px 0px 0px 56px;
  margin-left: 0px;
  border-left: none;
}
.css-8pvnhw-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 0px 8px;
}
.css-rfs3ih-unf-heading {
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.71429rem;
  line-height: 30px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 8px 0px 0px;
  display: inline-block;
  vertical-align: middle;
}
.css-157gv8 {
  display: inline-block;
  vertical-align: middle;
  width: 136px;
  height: 24px;
  background: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/ef36ebdc.svg)
      left center / contain no-repeat,
    url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/ef36ebdc.svg)
      28px center / contain no-repeat,
    url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/ef36ebdc.svg)
      56px center / contain no-repeat,
    url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/ef36ebdc.svg)
      84px center / contain no-repeat,
    url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/ef36ebdc.svg)
      112px center / contain no-repeat;
}
.css-1s96mum-unf-heading {
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 0.857143rem;
  color: rgba(49, 53, 59, 0.68);
  text-decoration: initial;
  margin: 0px 0px 0px 8px;
  display: inline-block;
  vertical-align: middle;
  line-height: 2.14286rem;
}
.css-16z1w0p-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 0.857143rem;
  line-height: 18px;
  text-decoration: initial;
  margin: 8px 0px 0px;
  color: rgb(3, 172, 14);
  cursor: pointer;
}
.css-1vu75fx {
  display: block;
  position: relative;
  font-weight: 800;
  font-size: 1.142rem;
  line-height: 22px;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  color: rgba(49, 53, 59, 0.96);
  margin: 24px 10px 16px;
}
.css-8atqhb {
  width: 100%;
  margin-left: 20px;
}
//product toko
.css-19lrfly {
  margin-right: 100px !important;
  margin-left: 10px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-d2iy24 {
  border-radius: 8px;
  display: flex;
  -webkit-box-flex: inherit;
  flex-grow: inherit;
  -webkit-box-align: stretch;
  align-items: stretch;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  width: 318px;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 231, 233);
  flex-direction: row-reverse;
}
.css-1ymn4im {
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
  padding: 0px;
  transition: background-color 280ms ease 0s;
  width: 40px;
  background-color: rgb(243, 244, 245);
  flex: 0 0 auto;
}
.css-1ymn4im::after {
  content: "";
  background-size: 24px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg);
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  inset: 0px;
}
.css-d2iy24 .e16vycsw0 {
  padding-right: 12px;
  padding-left: 12px;
}
.css-4eg0ft {
  min-width: 0px;
  min-height: 0px;
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
.css-18y26lr {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.css-1vwxj7n-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 24px 0px 0px;
}
.css-ui6bwv:first-of-type {
  padding-left: 0px;
  border-left: none;
}
.css-clxaii-unf-label {
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  border-radius: 3px;
  line-height: 16px;
  padding: 0px 8px;
  height: 20px;
  font-size: 0.714286rem;
  background-color: rgb(214, 255, 222);
  color: rgb(3, 172, 14);
  margin: 0px;
  overflow: initial;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 280ms ease-out 0s;
}
.css-1vwxj7n-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 24px 0px 0px;
}
.css-1k0bvn0 {
  position: relative;
  width: 200px;
}
.css-1k0bvn0 .e15j6tp61 {
  border-radius: 8px;
}
.css-1ponx9k {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 8px 0px 12px;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 233);
  user-select: none;
  transition: border-radius 280ms ease 0s;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  background-color: rgb(255, 255, 255);
  pointer-events: all;
  text-align: left;
}
.css-ymlcjc {
  flex: 1 1 0%;
  color: rgba(49, 53, 59, 0.96);
  cursor: pointer;
  overflow: hidden;
  padding-right: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.css-18y26lr label,
.css-18y26lr li {
  line-height: 1.42857rem;
  font-size: 1rem;
}
.css-ymlcjc span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.css-1k0bvn0 .e15j6tp60 {
  transition: transform 280ms ease-out 0s, opacity 0.16s ease 0s,
    visibility 0.16s ease 0s;
  width: 200px;
  padding: 0px 4px;
  overflow: auto;
  position: absolute;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 0px 0px 8px 8px;
  transform-origin: center top;
  transform: translateY(-8px);
  opacity: 0;
  visibility: hidden;
}
.css-jof6us {
  list-style: none;
  padding: 0px;
  margin: 4px 0px;
}
.css-sxiy95 {
  cursor: pointer;
  list-style: none;
  outline: none;
  position: relative;
  min-height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 4px 0px;
}
.css-18y26lr label,
.css-18y26lr li {
  line-height: 1.42857rem;
  font-size: 1rem;
}
.css-sxiy95::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 0px;
  height: 100%;
  width: 3px;
  background-color: rgb(3, 172, 14);
  opacity: 0;
  transition: opacity 0.08s ease-in 0s;
}
.css-sxiy95 button {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 6px 8px 6px 5px;
  color: rgba(49, 53, 59, 0.96);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  min-height: 32px;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-image: initial;
  text-align: left;
  line-height: 1.33;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  border-left: 3px solid transparent;
  appearance: none;
}
.css-msew48 * {
  box-sizing: border-box;
}
.css-1e9ocd3 {
  cursor: pointer;
  list-style: none;
  outline: none;
  position: relative;
  min-height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 4px 0px;
}

//filter
.css-1kn5b1o {
  display: flex;
  flex-wrap: nowrap;
  margin: 20px 0px;
  min-height: 500px;
}
.css-1u11ne2 {
  display: flex;
  flex-flow: column wrap;
  min-width: 266px;
}
.css-1wyv5w4 {
  position: sticky;
  top: 109px;
  left: 0px;
}
.css-1ty3vwd {
  position: static;
  top: 0px;
  left: 0px;
  width: 266px;
  height: auto;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid rgb(229, 231, 233);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.09) 0px -1px 5px 0px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  transition: height 0.3s ease 0s;
}
.css-92pohp-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 0px 0px 16px;
}
.css-148fuv6 {
  max-height: calc(100vh - 360px);
  overflow-y: auto;
}
.css-17mrx6g {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
.css-48y2gt {
  margin-bottom: 2px;
  border-radius: 4px;
  background-color: rgb(243, 244, 245);
  color: rgb(49, 53, 59);
  font-weight: bold;
}
.css-z2vy7e {
  margin-bottom: 2px;
}
.css-48y2gt > a {
  display: block;
  padding: 8px 16px;
  color: rgb(49, 53, 59);
  line-height: 1.42857rem;
  font-size: 1rem;
}
.css-z2vy7e > a {
  display: block;
  padding: 8px 16px;
  color: rgb(49, 53, 59);
  line-height: 1.42857rem;
  font-size: 1rem;
}

//product
.css-tjjb18 {
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 13.3333px));
  grid-auto-rows: minmax(calc(152px), max-content);
  gap: 16px;
  width: 100%;
  height: 100%;
  min-height: 500px;
}
.css-1sn1xa2 {
  width: 100%;
  height: 100%;
  padding: 1px;
}
.css-oynulx {
  position: relative;
  background-color: rgb(255, 255, 255);
  display: inline-flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 0px;
  box-sizing: border-box;
}
.css-o1ozdj {
  position: relative;
  border-radius: 8px;
  min-width: 100%;
}
.css-wlcnlb {
  position: relative;
  height: 100%;
  flex: 0.5 1 0%;
  z-index: 0;
  min-width: 50%;
  cursor: pointer;
}
.css-rs4sgo-unf-card {
  display: block;
  position: relative;
  padding: 0px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  height: 100%;
  border-radius: 9px;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  margin: 0px;
}
.css-1bd8ct {
  display: flex;
  position: static;
  overflow: visible;
  flex-flow: column nowrap;
  height: 100%;
}
.css-1ehqh5q {
  position: relative;
  margin: 0px;
  display: block;
  padding-bottom: 100%;
  height: 0px;
  overflow: hidden;
}
.css-1k4ugb8 {
  background-color: transparent;
  height: auto;
  margin: 0px auto;
  position: relative;
  text-align: center;
  width: 100%;
  display: block;
}
.css-1k4ugb8 > img.fade.success,
.css-1k4ugb8 > img.fade.default {
  opacity: 1;
}
.css-1ehqh5q img,
.css-1ehqh5q .fade {
  border-radius: 8px 8px 0px 0px;
}
.css-1k4ugb8 > img {
  display: block;
}

.css-1k4ugb8 > img {
  width: 100%;
  opacity: 1;
}
.css-7fmtuv {
  padding: 8px;
  height: auto;
  vertical-align: middle;
  width: 100%;
  position: relative;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
}
.css-gwkf0u {
  display: flex;
  flex-flow: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: left;
}
.css-18c4yhp {
  margin-bottom: 4px;
  font-size: 0.86rem;
  color: rgba(49, 53, 59, 0.96);
  max-width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.css-rhd610 {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  margin-bottom: 4px;
  color: rgba(49, 53, 59, 0.96);
  opacity: 1;
  font-size: 1rem;
  font-weight: bold;
  align-items: flex-end;
  line-height: 1.43;
}
.css-f9v6qv {
  position: relative;
}
//footer
.css-8pg9bu {
  padding: 0px;
  text-align: right;
  font-size: 14px;
  margin-top: 16px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-8pg9bu {
  padding: 0px;
  text-align: right;
  font-size: 14px;
  margin-top: 16px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-10nze3y {
  padding: 5px 10px;
}
a {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}
.css-1cecfpj {
  padding: 5px 10px;
  line-height: 20px;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  background-color: rgb(153, 153, 153);
  cursor: pointer;
}
ul {
  text-decoration: none;
  list-style: none;
  margin-left: 5px;
}
</style>