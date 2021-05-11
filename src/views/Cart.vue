<template>
  <div style="min-height: 450px">
    <skeleton-trans-vue v-if="data.length == 0"></skeleton-trans-vue>
    <div class="container-flex" style="margin-top: 100px" v-else>
      <div class="left-side">
        <b-form-group
          class="css-1xza0ak-unf-card mt-3"
          style="
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 20px;
            padding-bottom: 20px;
          "
        >
          <template>
            <b-form-checkbox
              v-model="allSelected"
              :indeterminate="indeterminate"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="selectAll()"
            >
              {{ allSelected ? "Batalkan semua barang" : "Pilih semua barang" }}
            </b-form-checkbox>
          </template>
          <!-- 
      <pre>
          {{cart}}
      </pre> -->
          <div class="shop-group" v-for="(x, i) in data" :key="i">
            <div class="shop-heading">
              <div class="shop-heading__flex">
                <div class="shop-heading__left">
                  <div class="shl__checkbox-wrapper">
                    <div class="css-1bh52ki e4ba57s0">
                      <label
                        data-testid="chkCartCheckShop-2346784"
                        class="css-cdg5bv-unf-checkbox e4ba57s2"
                      >
                        <b-form-checkbox
                          :checked="
                            cart.filter((y) => y.store_id == x[0].store_id)
                              .length > 0
                          "
                          @change="addCarts(x)"
                        ></b-form-checkbox>
                      </label>
                    </div>
                  </div>
                  <div class="shl__text">
                    <div class="shop-name-n-badges-wrapper">
                      <div class="badges-wrapper">
                        <div class="css-1srv8ms b-official-store">
                          <div
                            class="css-ypd15i-unf-tooltip"
                            data-testid="tooltip-text"
                          >
                            <div
                              class="corplat-badge-child"
                              :style="`background-image: url(${x[0].store_logo});`"
                            >
                              <div></div>
                            </div>
                            <div class="css-fkilut e1hrfe840">
                              Official Store
                            </div>
                          </div>
                        </div>
                      </div>
                      <router-link
                        :to="`/stores/${x[0].store}?store_id=${x[0].store_id}`"
                        class="shop-name"
                        data-testid="lnkCartShopName-2346784"
                      >
                        {{ x[0].store }}
                      </router-link>
                    </div>
                    <div
                      class="shop-location"
                      data-warehouse_id="1895611"
                      v-if="x[0].store_address"
                    >
                      {{ x[0].store_address.city }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shop-body" v-for="(p, ip) in x" :key="p.id">
              <div class="shop-product">
                <div class="sb__inner-rows-wrapper">
                  <div class="sb__inner-row sb__inner-row--top">
                    <div class="sb__inner-row--top__flex">
                      <div class="sb__checkbox-n-img">
                        <div class="sb__checkbox-wrapper">
                          <div class="css-1bh52ki e4ba57s0">
                            <label
                              data-testid="chkCartProductCheckItem-712530042"
                              class="css-cdg5bv-unf-checkbox e4ba57s2"
                            >
                              <b-form-checkbox
                                :checked="cart.indexOf(p) > -1"
                                @change="addCart(p)"
                              ></b-form-checkbox>
                            </label>
                          </div>
                        </div>
                        <div class="product-img-wrapper">
                          <div class="product-img-positioner">
                            <div class="css-mx29a4 ewud1tp0">
                              <div class="product-img">
                                <div
                                  class="css-1ans2w0 e18n9kgb0"
                                  height="auto"
                                >
                                  <img
                                    class="success fade"
                                    :src="p.thumbnail"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-attrs-wrapper">
                        <div class="css-mx29a4 ewud1tp0">
                          <div class="product-name">
                            <router-link
                              :to="`product/${p.id}`"
                              data-testid="lnkCartProductName-712530042"
                              class="product-name__link"
                            >
                              {{ p.name }}
                            </router-link>
                          </div>
                          <div class="price-wrapper">
                            <div
                              class="final-price"
                              data-testid="lblCartProductPrice-712530042"
                            >
                              <el-avatar
                                size="small"
                                v-bind:style="`background-color:${p.attribute.color}`"
                                style="
                                  float: right;
                                  margin-left: 10px;
                                  margin-top: -2px;
                                "
                                v-if="p.attribute"
                              >
                                {{ p.attribute.type }}
                              </el-avatar>
                              {{ p.price | currency }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sb__inner-row sb__inner-row--lowest">
                    <div class="sb__inner-row--lowest__flex">
                      <div class="sbirl__left">
                        <div class="css-1efpi3 false">
                          <div
                            class="ncu-fs-cta-create"
                            role="button"
                            tabindex="0"
                            @click="addNote(p, i, ip)"
                          >
                            Tulis Catatan untuk Toko
                          </div>
                        </div>
                      </div>
                      <div class="sbirl__right">
                        <div class="product-cta-wrapper">
                          <div>
                            <div class="css-7bppnw">
                              <div style="font-size: 20px">
                                <i class="fa fa-heart"></i>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              data-testid="btnCartDeleteItem-712530042"
                              class="css-1pjohk"
                              role="button"
                              tabindex="0"
                              @click="destroy(p)"
                            ></div>
                          </div>
                          <div data-testid="wrapperQty-712530042">
                            <div
                              class="css-lgso0f false false"
                              data-testid="qtyEditorWrapper"
                            >
                              <div class="css-11mguey-unf-quantity-editor">
                                <i
                                  :style="{
                                    'pointer-events': p.qty < 1 ? 'none' : '',
                                  }"
                                  :disabled="p.qty < 1"
                                  class="css-1v5zu0s-unf-quantity-editor__icon e1ke628k0"
                                  @click="getPrice(p, 'dec')"
                                ></i>
                                <input
                                  class="css-yfyd4u-unf-quantity-editor__input"
                                  type="text"
                                  max="5285"
                                  min="1"
                                  spinner="1"
                                  v-model="p.qty"
                                  @input="getPrice(p)"
                                />
                                <i
                                  :style="{
                                    'pointer-events':
                                      p.qty >= p.stock ? 'none' : '',
                                  }"
                                  class="css-1qtt4sn-unf-quantity-editor__icon e1ke628k0"
                                  @click="getPrice(p, 'inc')"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-form-group>
      </div>
      <div class="right-side">
        <div class="css-rf4g20">
          <div
            id="corplat-sidebar-positioner"
            class="summary-positioner"
            style="inset: 20px auto auto 0px; position: absolute; height: auto"
          >
            <div class="css-mx29a4 ewud1tp0">
              <div class="summary-wrapper summary-position-initiated">
                <div class="fixed-wrapper">
                  <section
                    class="corplat-sidebar-card css-1xza0ak-unf-card eyk31ek0"
                  >
                    <div>
                      <div class="css-upwfgy">
                        <div>
                          <div
                            v-b-modal.modal-voucher
                            class="css-1oo0ru2"
                            data-testid="btnActionPromoWidget"
                          >
                            <div class="iconLeft">
                              <span class="css-hbbusn"></span>
                            </div>
                            <div class="content">
                              <div
                                class="css-6vqyab"
                                data-testid="contentActionPromoWidget"
                              >
                                <span
                                  class="css-18ko5p4"
                                  data-testid="promoWidgetTitle"
                                  >Pakai Voucher</span
                                >
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                      <div class="css-19midj6">
                        <div class="sidebar-heading-text">
                          Ringkasan belanja
                        </div>
                        <div class="summary-details-n-insc-wrapper">
                          <div class="css-a0wv6l e1uw512a0">
                            <div>
                              <div>Total Harga</div>
                              <div data-testid="lblCartTotalPrice">
                                {{ total | currency }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="summary-main-btns-wrapper">
                          <div class="summary-main-btn">
                            <div role="button" tabindex="0">
                              <b-button
                                @click="checkOut"
                                class="css-1wddnia-unf-btn e1ggruw00"
                                :variant="total > 0 ? 'success' : 'light'"
                                :disabled="total < 0"
                                :style="{
                                  cursor: total > 0 ? 'pointer' : 'not-allowed',
                                  'pointer-events': total > 1 ? '' : 'none',
                                }"
                              >
                                <span>
                                  <span class="css-8t66so">Beli</span>
                                </span>
                              </b-button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-voucher" title="Pakai Promo" hide-footer>
      <div class="css-7hy52e">
        <div>
          <img src="../assets/images/unta4.png" />
          <h2>Yaah, kamu belum punya kupon belanja</h2>
          <p></p>
        </div>
      </div>
    </b-modal>
    <div class="container" style="margin-top: 50px" v-if="related.length > 0">
      <b-row>
        <b-col><h5>Related Product</h5></b-col>
        <b-col cols="12">
          <carousel :perPage="6" :paginationEnabled="false" navigationEnabled>
            <slide v-for="x in related" :key="`r${x.id}`">
              <div class="col-md-12 col-sm-6 px-2">
                <products-singgle-vue :data="x" />
              </div>
            </slide>
          </carousel>
        </b-col>
        <b-col style="margin-top: 40px">
          <h5>Produk Lain Yang mungkin kamu suka</h5>
        </b-col>
        <b-col cols="12">
          <carousel :perPage="6" :paginationEnabled="false" navigationEnabled>
            <slide v-for="y in interests" :key="`i${y.id}`">
              <div class="col-md-12 col-sm-6 px-2">
                <products-singgle-vue :data="y" />
              </div>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </div>
    <el-drawer
      class="mx-auto"
      style="max-width: 400px"
      :visible.sync="drawer"
      direction="btt"
      size="50%"
    >
      <span slot="title">Tambah Catatan Untuk Penjual</span>
      <div style="height: 500px">
        <el-card :body-style="{ padding: '0px' }">
          <el-input
            type="textarea"
            :autosize="{ minRows: 7, maxRows: 10 }"
            placeholder="Please input"
            v-model="current_edit.notes"
          >
          </el-input>
          <div style="padding: 14px">
            <div class="bottom clearfix">
              <el-button type="success" class="button" @click="saveNote">
                Simpan
              </el-button>
            </div>
          </div>
        </el-card>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Axios from "axios";
import Navbar from "../components/Navbar.vue";
import skeletonTransVue from "../sections/skeletonTrans.vue";
import ProductsSinggleVue from "../sections/Products-singgle.vue";

export default {
  components: { Navbar, skeletonTransVue, ProductsSinggleVue },
  data() {
    return {
      selected: [],
      related: [],
      interests: [],
      drawer: false,
      current_edit: {},
      index: { s: -1, p: -1 },
      allSelected: false,
      indeterminate: false,
      data: [],
      cart: [],
      search: null,
      headers: [
        { text: "images", value: "thumbnail" },
        { text: "name", value: "name" },
        { text: "Toko", value: "store" },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    addNote(item, is, ip) {
      this.index = { s: is, p: ip };
      this.current_edit = Object.assign({}, item);
      this.drawer = true;
    },
    saveNote() {
      const { index } = this;
      this.current_edit.notes = `Catatan Untuk product '${this.current_edit.name}' : ${this.current_edit.notes}`;
      this.data[index.s][index.p] = this.current_edit;
      this.drawer = false;
      setTimeout(() => {
        this.current_edit = {};
      }, 300);
    },
    getPrice(item, mode) {
      mode === "inc" ? (item.qty += 1) : (item.qty -= 1);
      const grosir = item.grosir
        .filter((x) => parseInt(item.qty) >= x.qty)
        .sort((a, b) => b.qty - a.qty);
      if (grosir.length > 0) {
        item.price = grosir[0].price;
        item.subtotal = item.qty * grosir[0].price;
      } else {
        item.price = item.origin_price;
        item.subtotal = item.qty * item.origin_price;
      }
      console.log(grosir);
    },
    increment(item) {
      item.qty++;
    },
    total() {
      return this.cart.reduce(
        (sum, { discount_price, price, qty }) =>
          discount_price ? sum + discount_price * qty : sum + price * qty,
        0
      );
    },
    selectAll() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
      this.cart = [];
      if (this.toggle) {
        this.data.forEach((e) => {
          e.forEach((el) => {
            this.cart.push(...e);
          });
        });
      }
    },
    addCart(item) {
      const index = this.cart.indexOf(item);
      console.log(index);
      if (index > -1) {
        this.cart.splice(index, 1);
      } else {
        this.cart.push(item);
      }
    },
    addCarts(item) {
      console.log(item);
      item.forEach((e) => {
        const index = this.cart.indexOf(e);
        if (index > -1) {
          this.cart.splice(e, 1);
        } else {
          this.cart.push(e);
        }
      });
    },
    toggleAll(checked) {
      this.selected = checked ? this.flavours.slice() : [];
    },
    groupBy(collection, property) {
      var i = 0,
        val,
        index,
        values = [],
        result = [];
      for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) result[index].push(collection[i]);
        else {
          values.push(val);
          result.push([collection[i]]);
        }
      }
      return result;
    },
    getData() {
      Axios.get("/page/carts")
        .then((res) => {
          this.data = this.groupBy(res.data.data, "store_id");
          this.related = res.data.related;
          this.interests = res.data.interest;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    destroy(item) {
      const index = this.data.indexOf(item);
      const c = confirm(`Hapus Product ${item.name} dari cart ??`);
      if (c) {
        Axios.delete("/page/carts/" + item.cart_id)
          .then(() => {
            this.data.splice(index, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    checkOut() {
      this.$store.dispatch("checkOut", this.cart);
      this.$router.push("/checkout");
    },
  },
  watch: {
    // selected(newVal, oldVal) {
    //   // Handle changes in individual flavour checkboxes
    //   if (newVal.length === 0) {
    //     this.indeterminate = false;
    //     this.allSelected = false;
    //   } else if (newVal.length === this.flavours.length) {
    //     this.indeterminate = false;
    //     this.allSelected = true;
    //   } else {
    //     this.indeterminate = true;
    //     this.allSelected = false;
    //   }
    // },
  },
  computed: {
    total() {
      return this.cart.reduce(
        (sum, { discount_price, price, qty }) =>
          discount_price ? sum + discount_price * qty : sum + price * qty,
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.container-flex {
  min-height: 200px;
  display: flex;
  width: 100%;
  padding: 0px 20px;
  max-width: 1120px;
  min-width: 1024px;
  margin: auto;
  align-items: flex-start;
}
.right-side {
  width: 350px;
  flex-shrink: 0;
}
.left-side {
  width: calc((100% - 350px) - 45px);
  margin-right: 45px;
}
.css-rf4g20 {
  position: relative;
}
.css-rf4g20 .summary-positioner {
  width: 350px;
  z-index: 1;
}
.css-mx29a4 {
  position: relative;
}
.css-rf4g20 .summary-wrapper.summary-position-initiated {
  opacity: 1;
  transform: translateY(0px);
}
.css-rf4g20 .corplat-sidebar-card {
  overflow: visible;
}

.css-1xza0ak-unf-card {
  display: block;
  position: relative;
  margin: 0px;
  padding: 0px;
  border-radius: 8px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
}
.css-upwfgy {
  border-bottom: 6px solid rgb(243, 244, 245);
  padding: 16px;
}
.css-1oo0ru2 {
  min-height: 52px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(219, 222, 226);
  padding: 8px;
  cursor: pointer;
}
.css-hbbusn {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/941664f2.svg);
  height: 24px;
  width: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
  margin-top: 2px;
}
.css-1oo0ru2 .content {
  margin-left: 8px;
  width: calc(100% - 48px);
}
.css-6vqyab span {
  margin-bottom: 5px;
}

.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: "open sans", "tahoma", sans-serif;
}

.css-18ko5p4 {
  color: rgb(108, 114, 124);
  font-size: 1rem;
  font-weight: bold;
  display: block;
}
.css-1yzmmga-unf-loader-shimmer-line {
  display: block;
  height: 16px;
  width: 100%;
  border-radius: 4px;
  background-color: rgb(239, 239, 239);
  margin-bottom: 0px;
  background-image: linear-gradient(
    89deg,
    rgb(239, 239, 239),
    rgb(224, 224, 224)
  );
  background-size: 99% 100%;
  background-repeat: no-repeat;
  animation: 1.3s linear 1ms infinite normal backwards running animation-jlk0mk;
}
.css-19midj6 {
  padding: 16px;
}
.css-rf4g20 .sidebar-heading-text {
  font-weight: bold;
  color: rgb(49, 53, 59);
  line-height: 1.6;
}
.css-rf4g20 .summary-details-n-insc-wrapper {
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 1.6;
}
.css-a0wv6l > div:last-child,
.css-a0wv6l > div:only-child {
  margin-bottom: 0px;
}
.css-a0wv6l > div > div:nth-child(2) {
  flex-shrink: 0;
  color: red;
  font-weight: bold;
}
.css-a0wv6l > div > div:nth-child(1) {
  color: rgb(49, 53, 59);
  padding-right: 14px;
  text-transform: capitalize;
}
.css-rf4g20 .summary-main-btns-wrapper {
  margin-top: 24px;
}
.css-a0wv6l > div {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 4px;
  -webkit-box-align: center;
  align-items: center;
}
.css-rf4g20 .summary-main-btn:last-child,
.css-rf4g20 .summary-main-btn:only-child {
  margin-bottom: 0px;
}

.css-rf4g20 .summary-main-btn {
  display: block;
  margin-bottom: 14px;
}

.css-1wddnia-unf-btn {
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.14286rem;
  height: 48px;
  line-height: 22px;
  width: 100%;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;

  display: block;

  border: none;
  text-indent: initial;
  position: relative;
}
.css-1wddnia-unf-btn span {
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

//cart

.shop-group {
  padding-top: 0px;
}
.shop-group {
  border-bottom: 6px solid rgb(243, 244, 245);
}
.shop-heading {
  margin-bottom: 20px;
  padding-top: 14px;
}
.shop-heading__flex {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.shop-heading__left {
  padding-right: 15px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
}
.shl__checkbox-wrapper {
  flex-shrink: 0;
  margin-right: 12px;
}
.css-1bh52ki {
  width: 24px;
  height: 24px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-cdg5bv-unf-checkbox {
  cursor: pointer;
  display: inline-block;
}
.css-4r26lb input,
.css-4r26lb textarea {
  user-select: auto;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.css-1i4u6kf-unf-checkbox__input {
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  appearance: none;
  margin: 0px;
  padding: 0px;
}
.css-12a5v84-unf-checkbox__area {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(159, 166, 176);
  border-radius: 4px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  transition: transform 280ms ease 0s;
  transform-box: fill-box;
}
.css-12a5v84-unf-checkbox__area::before,
.css-12a5v84-unf-checkbox__area::after {
  content: "";
  border-radius: 4px;
  position: absolute;
  inset: -1px;
  transition: transform 280ms ease 0s;
}
.shop-name-n-badges-wrapper .badges-wrapper {
  margin-right: 5px;
}
.badges-wrapper {
  min-height: 13px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: middle;
}
.css-1srv8ms {
  margin-right: 0px;
  display: inline-block;
}
.css-ypd15i-unf-tooltip {
  display: inline-block;
  position: relative;
}
.css-1srv8ms.b-official-store .corplat-badge-child {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/e779b171.svg);
}

.css-1srv8ms .corplat-badge-child {
  width: 15px;
  height: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.css-ypd15i-unf-tooltip * {
  cursor: pointer;
}
.css-fkilut {
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
  top: 100%;
  transform: translate(-50%, calc(0% + 12px));
}
.css-fkilut::before {
  border-color: transparent transparent rgba(49, 53, 59, 0.44);
  transform: translate(-50%, calc(-100% - 20px));
}

.css-fkilut::after,
.css-fkilut::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-width: 6px;
  border-style: solid;
}
.shop-name {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(49, 53, 59);
  text-decoration: none;
  cursor: pointer;
}
.shop-location {
  font-size: 0.857143rem;
  color: rgb(159, 166, 176);
  line-height: 1.4;
}
.shop-product:last-child {
  border-bottom: 0px;
}

.shop-product:first-child {
  padding-top: 0px;
}

.shop-product {
  padding: 20px 0px;
  border-bottom: 1px solid rgb(219, 222, 226);
}
.sb__inner-row--top {
  margin-bottom: 14px;
}
.sb__inner-row--top .sb__inner-row--top__flex {
  display: flex;
  -webkit-box-align: start;
  align-items: start;
}
.sb__inner-row--top .sb__checkbox-n-img {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
}
.sb__inner-row--top .sb__checkbox-wrapper {
  flex-shrink: 0;
  margin-right: 12px;
}
.css-1bh52ki {
  width: 24px;
  height: 24px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-cdg5bv-unf-checkbox {
  cursor: pointer;
  display: inline-block;
}
.css-4r26lb input,
.css-4r26lb textarea {
  user-select: auto;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.css-1i4u6kf-unf-checkbox__input {
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  appearance: none;
  margin: 0px;
  padding: 0px;
}
.css-12a5v84-unf-checkbox__area {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(159, 166, 176);
  border-radius: 4px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  transition: transform 280ms ease 0s;
  transform-box: fill-box;
}
.product-img-wrapper {
  display: block;
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  position: relative;
}
.product-img-positioner {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 76px;
  height: 76px;
  display: block;
}
.css-mx29a4 {
  position: relative;
}
.product-img {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 76px;
  height: 76px;
  color: rgb(255, 255, 255);
  background: rgb(255, 255, 255);
}
.css-1ans2w0 {
  background-color: transparent;
  display: inline-block;
  height: auto;
  margin: 0px auto;
  position: relative;
  text-align: center;
  width: 100%;
}
.css-1ans2w0 > img.fade.success,
.css-1ans2w0 > img.fade.default {
  opacity: 1;
}

.sb__inner-row--top .product-img img {
  display: block;
  width: 100%;
  border-radius: 6px;
}
.css-1ans2w0 > img.fade {
  opacity: 0;
}

.css-1ans2w0 > img {
  width: 100%;
  opacity: 1;
}
.css-4r26lb,
.css-4r26lb body {
  font-size: 14px;
  font-family: "open sans", tahoma, sans-serif;
}
.sb__inner-row--top .product-attrs-wrapper {
  padding-left: 15px;
}
.sb__inner-row--top .product-name {
  line-height: 1.4;
  margin-bottom: 10px;
}
.sb__inner-row--top .product-name__link {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(49, 53, 59);
  text-decoration: none;
}
.sb__inner-row--top .price-wrapper {
  margin-bottom: 5px;
}
.sb__inner-row--top .price-wrapper .final-price {
  font-weight: bold;
  color: red;
}
.sb__inner-row--top .price-wrapper > div {
  display: inline-block;
}
.sb__inner-row:not(:first-child) {
  padding-left: 35px;
}
.sb__inner-row--lowest .sb__inner-row--lowest__flex {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.sb__inner-row--lowest .sbirl__left {
  flex-shrink: 0;
  padding-right: 20px;
}
.css-1efpi3 .ncu-fs-cta-create {
  line-height: 1.4;
  color: rgb(3, 172, 14);
  font-size: 0.857143rem;
  font-weight: bold;
  cursor: pointer;
}
.sb__inner-row--lowest .product-cta-wrapper {
  display: inline-flex;
}
.css-7bppnw {
  display: inline-block;
  cursor: pointer;
}
.css-7bppnw .wishlist-love-icon {
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/16b74aa8.png);
  transform-origin: 50% 50%;
}
.css-1pjohk {
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/5430fa69.png);
}
.sb__inner-row--lowest .product-cta-wrapper > div:last-child,
.sb__inner-row--lowest .product-cta-wrapper > div:only-child {
  margin-right: 0px;
}
.sb__inner-row--lowest .product-cta-wrapper > div {
  margin-right: 20px;
}
.css-lgso0f > div {
  -webkit-box-pack: center;
  justify-content: center;
}

.css-11mguey-unf-quantity-editor {
  display: flex;
  align-content: center;
}
.css-lgso0f i {
  user-select: none;
}

.css-1v5zu0s-unf-quantity-editor__icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/571d1599.svg);
  background-position: center center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
}
.css-lgso0f input {
  height: 21px;
  outline: none !important;
  border-left: none !important;
  border-top: none !important;
  border-right: none !important;
  border-bottom: 1px solid rgb(224, 224, 224) !important;
  color: rgba(0, 0, 0, 0.7) !important;
  font-size: 1.14rem !important;
  width: 66px !important;
  text-align: center !important;
  appearance: textfield !important;
  background-color: rgb(255, 255, 255) !important;
  -webkit-rtl-ordering: logical !important;
  cursor: text !important;
  padding: 1px !important;
  text-rendering: auto !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  text-transform: none !important;
  text-indent: 0px !important;
  text-shadow: none !important;
  display: inline-block !important;
  box-shadow: none !important;
  border-radius: 0px !important;
  margin: 0px !important;
}
.css-lgso0f i {
  user-select: none;
}

.css-1qtt4sn-unf-quantity-editor__icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/1a4a7fe0.svg);
  background-position: center center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
}

//modal
.css-7hy52e {
  text-align: center;
  padding: 32px;
  min-height: 410px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-7hy52e img {
  width: 100%;
  max-width: 220px;
  margin: auto auto 16px;
  display: block;
}
.css-7hy52e h2 {
  font-size: 1.42857rem;
  color: rgb(64, 69, 76);
  line-height: 1.5;
  margin-bottom: 8px;
}
.css-7hy52e p {
  font-size: 1.14286rem;
  line-height: 1.4;
  margin: 0px;
  text-align: center;
}
</style>