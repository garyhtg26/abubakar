<template>
  <div class="chekout">
    <skeleton-trans
      v-if="lists.data.length == 0"
      :isTransaction="true"
    ></skeleton-trans>
    <div class="css-1m4yx0s mother-container" style="margin-top: 35px" v-else>
      <div class="mother-container__flex">
        <div class="mother-container__left-side" style="margin-top: 85px">
          <div
            class="mother-container__left-side__content css-1xza0ak-unf-card"
            style="
              min-height: 357px;
              padding-right: 40px;
              padding-left: 40px;
              padding-top: 1px;
              padding-bottom: 20px;
            "
          >
            <div class="css-171d0oh">
              <div class="css-mx29a4 ewud1tp0">
                <h1 style="margin-top: -10px">Checkout</h1>
                <div class="corplat-sidebar-top-pitcher"></div>
                <div id="coachmark-target-wrapper-address-box-single">
                  <div class="css-v1pr6i">
                    <div class="box-heading">Alamat Pengiriman</div>
                    <div class="box-main-content">
                      <div>
                        <div class="box-content-parag">
                          <b class="receiver-name">{{ address.penerima }}</b
                          >&nbsp;
                          <span class="address-title">({{ address.type }})</span
                          >&nbsp;
                          <div
                            class="css-clxaii-unf-label e143v2d00"
                            v-if="address.active == 1"
                          >
                            Utama
                          </div>
                        </div>
                        <div class="box-content-parag phone">
                          {{ address.telp }}
                        </div>
                        <div class="box-content-parag" v-if="address.district">
                          <div class="address-desc">
                            {{ address.address }},{{
                              address.district.subdistrict_name
                            }}
                          </div>
                          <div class="address-desc--dis-cit-pos">
                            {{ address.city.city_name }},
                            {{ address.province.province }},
                            {{ address.city.postal_code }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="box-footer">
                      <button
                        v-b-modal.modal-alamat
                        data-testid="btnOpenModalAddress"
                        class="css-1b3mrzj-unf-btn e1ggruw00"
                      >
                        <span>Pilih Alamat Lain</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="css-1me0n4u" v-for="(x, i) in lists.data" :key="i">
                  <div class="shop-group">
                    <div>
                      <div class="shop-heading">
                        <div class="shop-heading__flex">
                          <div class="shop-heading__left">
                            <div class="css-mx29a4 ewud1tp0">
                              <div class="shop-name-n-badges-wrapper">
                                <div class="badges-wrapper">
                                  <div class="css-1srv8ms b-power-merchant">
                                    <div
                                      class="css-ypd15i-unf-tooltip"
                                      data-testid="tooltip-text"
                                    >
                                      <div
                                        class="corplat-badge-child"
                                        :style="`background-image: url(${x.products[0].store_logo})`"
                                      ></div>
                                      <div class="css-fkilut e1hrfe840">
                                        Saudagar
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span class="shop-name">
                                  {{ x.store_name }}
                                </span>
                              </div>
                              <div
                                class="shop-location"
                                data-warehouse_id="8071125"
                              >
                                {{ x.products[0].store_address.city }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="shop-body"
                        v-for="(p, l) in x.products"
                        :key="p.id"
                      >
                        <div class="shop-body-content-wrapper">
                          <div class="shop-body-content__left">
                            <div class="shop-products-wrapper">
                              <div class="shop-product">
                                <div class="css-mx29a4 ewud1tp0">
                                  <div class="shop-product__flex">
                                    <div class="shop-product__left">
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
                                    <div class="shop-product__right">
                                      <div class="product-name">
                                        <span>{{ p.name }}</span>
                                      </div>
                                      <div class="price-wrapper">
                                        <div class="final-price">
                                          {{ p.price | currency }}
                                        </div>
                                      </div>
                                      <div class="product-qty-n-weight-wrapper">
                                        <span>{{ p.qty }}</span
                                        >&nbsp;barang&nbsp;(<span>
                                          {{ (p.weight * p.qty) / 1000 }}
                                          kg)
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="shop-body-content__right" v-if="l == 0">
                            <div class="css-mx29a4 ewud1tp0">
                              <div class="shop-shipping-wrapper">
                                <div
                                  id="coachmark-target-wrapper-dropdown-shipping"
                                >
                                  <div>
                                    <div class="css-1kwxx8a">
                                      <div
                                        class="ddsd-label"
                                        role="button"
                                        tabindex="0"
                                      >
                                        Pilih Durasi
                                      </div>
                                      <div class="ddsd false">
                                        <div class="ddsd-cap">
                                          <div>
                                            <el-popover
                                              placement="bottom"
                                              title="Pilih Kurir"
                                              trigger="click"
                                              @show="currID(x)"
                                            >
                                              <button
                                                class="css-12xm20p-unf-btn e1ggruw00"
                                                slot="reference"
                                              >
                                                <span>
                                                  <div class="ddsd-cap-fill">
                                                    <div class="ddsd-cap-text">
                                                      Pengiriman {{ x.courier }}
                                                    </div>
                                                    <div
                                                      class="ddsd-caret"
                                                    ></div>
                                                  </div>
                                                </span>
                                              </button>
                                              <!--  -->
                                              <el-collapse
                                                v-model="forms.courier"
                                                @change="checkOngkir(_selected)"
                                                accordion
                                              >
                                                <el-collapse-item
                                                  :title="x.name"
                                                  :name="x.code"
                                                  v-for="x in courier"
                                                  :key="x.code"
                                                >
                                                  <b-list-group
                                                    v-for="n in services"
                                                    :key="n.id"
                                                  >
                                                    <b-list-group-item
                                                      button
                                                      v-for="c in n.costs"
                                                      :key="c.code"
                                                      class="d-flex justify-content-between align-items-center"
                                                      @click="saveService(c, x)"
                                                    >
                                                      <div>Service</div>
                                                      <div>
                                                        {{ c.service }} |
                                                      </div>
                                                      <div>Estimasi</div>
                                                      <div>
                                                        {{ c.cost[0].etd }}
                                                      </div>
                                                      <div>| Harga</div>
                                                      <div>
                                                        {{
                                                          c.cost[0].value
                                                            | currency
                                                        }}
                                                      </div>
                                                      <!-- <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio> -->
                                                    </b-list-group-item>
                                                  </b-list-group>
                                                </el-collapse-item>
                                              </el-collapse>
                                            </el-popover>
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
                      <div class="css-mx29a4 ewud1tp0">
                        <div class="shop-footer">
                          <div class="shop-footer__subtotal">
                            <div class="shop-footer__row">
                              <div class="sf-row-label subtotal">Subtotal</div>
                              <div class="sf-row-value subtotal">
                                <span
                                  class="subtotal__text"
                                  role="button"
                                  tabindex="0"
                                  >{{ x.total | currency }}</span
                                >
                                <span
                                  class="subtotal__btn"
                                  role="button"
                                  tabindex="0"
                                >
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="corplat-sidebar-bottom-pitcher"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mother-container__right-side">
          <div class="css-rf4g20">
            <div
              id="corplat-sidebar-positioner"
              class="summary-positioner"
              style="
                inset: 92px auto auto 0px;
                position: absolute;
                height: auto;
              "
            >
              <div class="css-mx29a4 ewud1tp0">
                <div class="summary-wrapper summary-position-initiated">
                  <div class="fixed-wrapper">
                    <section
                      class="corplat-sidebar-card css-1xza0ak-unf-card eyk31ek0"
                    >
                      <div>
                        <div class="css-upwfgy">
                          <div v-b-modal.modal-voucher>
                            <div class="css-1oo0ru2">
                              <div class="iconLeft">
                                <span class="css-hbbusn"></span>
                              </div>
                              <div class="content">
                                <div class="css-6vqyab">
                                  <span class="css-18ko5p4">Pakai Voucher</span>
                                </div>
                              </div>
                              <div>
                                <span class="css-12gses5"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="css-19midj6">
                          <div class="sidebar-heading-text">
                            Ringkasan belanja
                          </div>
                          <div class="summary-details-n-insc-wrapper">
                            <div class="css-1vcv9le e1uw512a0">
                              <div>
                                <div>
                                  Total Harga ({{ qtyProduk }}
                                  Produk)
                                </div>
                                <div>{{ lists.subtotal | currency }}</div>
                              </div>
                            </div>
                          </div>
                          <div class="summary-details-n-insc-wrapper">
                            <div class="css-1vcv9le e1uw512a0">
                              <div>
                                <div>Total Ongkir</div>
                                <div>{{ lists.ongkir | currency }}</div>
                              </div>
                            </div>
                          </div>
                          <div class="summary-grand-total-row">
                            <div class="sgtr__label">Total Tagihan</div>
                            <div class="sgtr__value">
                              {{ lists.total | currency }}
                            </div>
                          </div>
                          <div class="summary-main-btns-wrapper">
                            <div class="summary-main-btn">
                              <div role="button" tabindex="0">
                                <button
                                  v-b-modal.modal-akad
                                  class="css-1xvu1as-unf-btn e1ggruw00"
                                >
                                  <span>Pilih Pembayaran</span>
                                </button>
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
    </div>
    <!-- <pre>
      {{ lists }}
    </pre> -->
    <b-modal id="modal-voucher" title="Pakai Promo" hide-footer>
      <div class="css-7hy52e">
        <div>
          <img src="../assets/images/unta4.png" />
          <h2>Yaah, kamu belum punya kupon belanja</h2>
          <p></p>
        </div>
      </div>
    </b-modal>
    <b-modal
      id="modal-alamat"
      size="lg"
      hide-footer
      scrollable
      title="Pilih Alamat"
    >
      <div
        class="address-list-items-wrapper"
        v-for="a in addressUser"
        :key="a.id"
      >
        <div
          class="address-list-item"
          v-bind:class="{ 'is-active-address': address.id == a.id }"
          role="button"
        >
          <div class="ali__top-row">
            <div class="ali__top-row__left">
              <div class="ali__content-parag">
                <b class="receiver-name">{{ a.penerima }} </b>
                <span class="address-title">({{ a.type }})</span>&nbsp;
                <div
                  class="css-clxaii-unf-label e143v2d00"
                  v-if="address.id == a.id"
                >
                  Utama
                </div>
              </div>
              <div class="ali__content-parag ali__content-parag__phonex">
                {{ a.telp }}
              </div>
              <div class="ali__content-parag ali__content-parag__address-desc">
                <div>{{ a.address }},{{ a.district.subdistrict_name }}</div>
                <div>
                  {{ a.city.city_name }}, {{ a.province.province }},{{
                    a.city.postal_code
                  }}
                </div>
              </div>
            </div>
            <div class="ali__top-row__right" v-if="address.id != a.id">
              <button
                @click="selectAddress(a)"
                data-testid="btn-choose-address-115624114"
                class="css-om8p24-unf-btn e1ggruw00"
              >
                <span>Pilih Alamat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal
      id="modal-payment"
      centered
      title="Pilih Pembayaran"
      hide-footer
      scrollable
    >
      <b-list-group>
        <b-list-group-item
          v-for="c in payments"
          :key="c.business_id"
          button
          @click="saveData(c.channel_code)"
        >
          <i class="fa fa-credit-card mr-3"></i>
          {{ c.name }}
        </b-list-group-item>
      </b-list-group>
    </b-modal>
    <b-modal
      id="modal-akad"
      centered
      title="Akad"
      hide-footer
      hide-header
      scrollable
    >
      <div class="css-7hy52e">
        <div>
          <img
            style="width: 150px"
            v-if="kelamin == 'Laki-laki'"
            src="../assets/images/muslimboy.png"
          />
          <img
            v-if="kelamin != 'Laki-laki'"
            src="../assets/images/muslimah.png"
          />
          <h2>Bismillahirohmanirrohim</h2>
          <p class="text-muted">
            Dengan ini saya setuju belanja barang-barang dengan halal dan sah
          </p>
          <b-button
            class="mt-4"
            size="lg"
            variant="success"
            v-b-modal.modal-payment
            >Ok</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import Axios from "axios";
import { on } from "process";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import SkeletonTrans from "../sections/skeletonTrans.vue";
export default {
  components: {
    Products,
    Login,
    SkeletonTrans,
  },
  data() {
    return {
      sheet: false,
      addressUser: [],
      lists: {
        data: [],
      },
      address: {},
      courier: [],
      services: [],
      payments: [],
      kelamin: [],
      cart: [],
      search: null,
      forms: {},
      _selected: 0,
      isLoading: false,
      headers: [
        { text: "Toko", value: "store" },
        { text: "images", value: "thumbnail" },
        { text: "name", value: "name" },
      ],
    };
  },
  computed: {
    getUniq() {
      const id = this.data.map((x) => x.store_id);
      const set = new Set(id);
      return [...set];
    },
    qtyProduk() {
      return this.lists.data.reduce(
        (sum, { products }) =>
          sum + products.reduce((jml, { qty }) => jml + qty, 0),
        0
      );
    },
    subtotalBerat() {
      return 0;
    },
  },
  mounted() {
    // this.$store.commit("loading", false);
    this.getData();
    this.getAddress();
    this.getPayments();
    this.getKelamin();
    // this.getCourier();
  },
  methods: {
    getPayments() {
      Axios.get("/transaction/payment_channels").then((res) => {
        this.payments = res.data;
      });
    },
    getData() {
      this.lists.data = this.$store.state.cart;
      this.sumTotal();
    },
    selectAddress(add) {
      this.lists.address_id = add.id;
      this.address = add;
    },
    getAddressUser(id) {
      Axios.get(`/users/${id}`).then((res) => {
        this.addressUser = res.data.data.address;
        this.snack = {
          model: true,
          color: "green accent-4",
          text: res.data.message,
        };
        this.$store.commit("loading", false);
      });
    },
    getKelamin() {
      const id = this.$store.state.user.id;
      Axios.get("/users/" + id).then((res) => {
        this.kelamin = res.data.data.jenis_kelamin;
      });
    },
    getAddress() {
      const id = this.$store.state.user.id;
      Axios.get("/address/" + id).then((res) => {
        this.address = res.data;
        this.lists.address_id = res.data.id;
        this.getAddressUser(id);
      });
    },
    getCourier(store_id) {
      Axios.get("/page/courier/" + store_id).then((res) => {
        this.courier = res.data;
        this.$store.commit("loading", false);
        this.sheet = true;
      });
    },
    currID(id) {
      this.$store.commit("loading", true);
      this._selected = id;
      this.getCourier(id.store_id);
    },
    checkOngkir(item) {
      this.isLoading = true;
      const data = {
        origin: item.origin,
        originType: "subdistrict",
        destination: this.address.district.subdistrict_id,
        destinationType: "subdistrict",
        weight: item.berat,
        courier: this.forms.courier,
      };
      Axios.post("/page/cost", data).then((res) => {
        this.services = res.data;
        this.isLoading = false;
      });
    },
    saveService(selected, x) {
      console.log(selected);
      this.sheet = false;
      // this.services = [];
      const index = this.lists.data.indexOf(this._selected);
      Object.assign(this.lists.data[index], {
        service: selected.service,
        courier: x.code, //selected.service, //courier,
        ongkir: selected.cost[0].value,
        estimation: selected.cost[0].etd,
      });
      this.sumTotal();
    },
    sumTotal() {
      this.lists.total = this.lists.data.reduce(
        (sum, { total, ongkir }) => sum + total + (ongkir || 0),
        0
      );
      this.lists.weight = this.lists.data.reduce(
        (sum, { berat }) => sum + berat,
        0
      );

      this.lists.ongkir = this.lists.data.reduce(
        (sum, { ongkir }) => sum + ongkir,
        0
      );
      this.lists.subtotal = this.lists.data.reduce(
        (sum, { total }) => sum + total,
        0
      );
      this.$forceUpdate();
    },
    destroy(item) {
      const index = this.data.indexOf(item);
      const c = confirm(`Hapus Product ${item.name} dari cart ??`);
      if (c) {
        Axios.delete("/page/carts/" + item.id).catch((error) => {
          alert(error);
        });
      }
    },
    saveData(payment) {
      // console.log(this.lists);
      let msg = "";
      this.lists.payment = payment;
      Axios.post("transaction/save", this.lists)
        .then((res) => {
          this.$store.dispatch("countCart");
          this.$store.commit("cart", []);
          this.$store.commit("payment", res.data.response);
          this.$router.push("/payment");
        })
        .catch((error) => {
          msg = error;
        });
    },
  },
};
</script>


<style lang="scss" scoped>
.css-1m4yx0s .mother-container__flex {
  min-height: 200px;
  display: flex;
  width: 100%;
  padding: 0px 20px;
  max-width: 1120px;
  min-width: 1024px;
  margin: auto;
  align-items: flex-start;
}
.css-1m4yx0s .mother-container__left-side {
  width: calc((100% - 350px) - 45px);
  margin-right: 45px;
}
.css-4r26lb,
.css-4r26lb body {
  font-size: 14px;
  font-family: "open sans", tahoma, sans-serif;
}
.css-171d0oh {
  margin-top: 40px;
}
.css-mx29a4 {
  position: relative;
}
.css-171d0oh h1 {
  font-size: 1.42857rem;
  color: rgb(49, 53, 59);
  margin: 0px 0px 29px;
}
.css-v1pr6i {
  border-bottom: 6px solid rgb(243, 244, 245);
  background: rgb(255, 255, 255);
}
.css-v1pr6i .box-heading {
  font-weight: bold;
  padding-bottom: 14px;
  border-bottom: 1px solid rgb(219, 222, 226);
  color: rgb(49, 53, 59);
}
.css-v1pr6i .box-main-content {
  padding: 10px 0px 15px;
}
.css-v1pr6i .box-content-parag {
  margin-bottom: 4px;
  line-height: 1.4;
}
.css-v1pr6i .box-content-parag .receiver-name {
  color: rgb(49, 53, 59);
  font-size: 0.928571rem;
}
.css-v1pr6i .box-content-parag .address-title {
  margin-right: 2px;
  color: rgb(49, 53, 59);
  font-size: 0.928571rem;
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
.css-v1pr6i .box-content-parag.phone {
  color: rgb(49, 53, 59);
  font-size: 0.928571rem;
}

.css-v1pr6i .box-content-parag {
  margin-bottom: 4px;
  line-height: 1.4;
}
.css-v1pr6i .box-content-parag:last-child {
  margin-bottom: 0px;
}
.css-v1pr6i .box-content-parag .address-desc {
  word-break: break-word;
  font-size: 0.928571rem;
}
.css-v1pr6i .box-content-parag .address-desc--dis-cit-pos {
  font-size: 0.928571rem;
}
.css-v1pr6i .box-footer {
  padding: 15px 0px 5px;
  border-top: 1px solid rgb(219, 222, 226);
}
.css-v1pr6i .box-footer > * {
  margin-right: 10px;
  margin-bottom: 10px;
}

.css-1b3mrzj-unf-btn {
  color: rgba(49, 53, 59, 0.68);
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  height: 40px;
  line-height: 20px;
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
.css-1b3mrzj-unf-btn span {
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
.css-1me0n4u .shop-group {
  padding: 16px 0px 0px;
  border-bottom: 6px solid rgb(243, 244, 245);
}
.css-1me0n4u .shop-heading {
  margin-bottom: 20px;
}
.css-1me0n4u .shop-heading__flex {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-1me0n4u .shop-heading__left {
  padding-right: 15px;
}

.css-1me0n4u .shop-name-n-badges-wrapper {
  line-height: 1.4;
  margin-bottom: 4px;
}
.css-1me0n4u .shop-name-n-badges-wrapper .badges-wrapper {
  margin-right: 5px;
}

.css-1me0n4u .badges-wrapper {
  min-height: 13px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: middle;
}
.css-1srv8ms:last-child,
.css-1srv8ms:only-child {
  margin-right: 0px;
}
.css-ypd15i-unf-tooltip {
  display: inline-block;
  position: relative;
}
.css-1srv8ms.b-power-merchant .corplat-badge-child {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/f5843b03.svg);
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
.css-1me0n4u .shop-name {
  text-decoration: none;
  font-weight: bold;
  color: rgb(49, 53, 59);
}
.css-1me0n4u .shop-heading__left .shop-location {
  font-size: 0.857143rem;
  color: rgb(159, 166, 176);
  line-height: 1.4;
}
.css-1me0n4u .shop-body-content-wrapper {
  display: flex;
  padding-bottom: 20px;
  padding-top: 12px;
  border-bottom: 1px solid rgb(219, 222, 226);
}
.css-1me0n4u .shop-body-content__left {
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-right: 15px;
}
.css-1me0n4u .shop-product:last-child,
.css-1me0n4u .shop-product:only-child {
  margin-bottom: 0px;
}

.css-1me0n4u .shop-product__flex {
  display: flex;
}
.css-1me0n4u .shop-product__left {
  flex-shrink: 0;
}
.css-1me0n4u .product-img {
  display: block;
  width: 60px;
  height: 60px;
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

.css-1ans2w0 > img.fade {
  opacity: 0;
}

.css-1me0n4u .product-img img {
  display: block;
  width: 100%;
  border-radius: 6px;
}
.css-1me0n4u .shop-product__right {
  padding-left: 15px;
}
.css-1me0n4u .product-name span {
  font-weight: bold;
  color: rgb(49, 53, 59);
}
.css-1me0n4u .price-wrapper {
  margin-bottom: 5px;
}
.css-1me0n4u .price-wrapper .final-price {
  font-weight: bold;
  color: red;
}
.css-1me0n4u .product-qty-n-weight-wrapper {
  margin-bottom: 6px;
}
.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: "open sans", "tahoma", sans-serif;
}
.css-1me0n4u .shop-body-content__right {
  flex-shrink: 0;
  width: 280px;
}

.css-1kwxx8a .ddsd-label {
  line-height: 1.3;
  font-size: 0.857143rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: rgb(49, 53, 59);
}
.css-12xm20p-unf-btn {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  height: 40px;
  line-height: 20px;
  width: 100%;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;
  cursor: pointer;
  display: block;
  background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center
    center / 15000% rgb(3, 172, 14);
  border: none;
  text-indent: initial;
  position: relative;
}
.css-12xm20p-unf-btn span {
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
.css-1kwxx8a .ddsd-cap-fill {
  position: relative;
}
.css-1kwxx8a .ddsd-cap-text {
  width: calc(100% - 11px);
  font-size: 0.857143rem;
  font-weight: bold;
}
.css-1kwxx8a .ddsd-caret {
  display: block;
  width: 11px;
  height: 11px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  right: 0px;
  top: 5px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/fbffa416.svg);
  transform: rotate(180deg);
  transition: all 0.3s ease 0s;
}
.css-1me0n4u .shop-footer {
  padding: 6px 0px;
}
.css-1me0n4u .shop-footer__subtotal .shop-footer__row {
  padding: 6px 0px;
}

.css-1me0n4u .shop-footer .shop-footer__row {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-1me0n4u .shop-footer .shop-footer__row .sf-row-label.subtotal {
  font-weight: bold;
}

.css-1me0n4u .shop-footer .shop-footer__row .sf-row-label {
  padding-right: 14px;
  line-height: 1.4;
}
.css-1me0n4u .shop-footer .shop-footer__row .sf-row-value.subtotal {
  font-weight: bold;
  color: red;
  cursor: pointer;
  font-size: 1.14286rem;
}
.css-1me0n4u .shop-footer__subtotal .sf-row-value .subtotal__text,
.css-1me0n4u .shop-footer__subtotal .sf-row-value .subtotal__btn {
  cursor: pointer;
}
.css-1me0n4u .shop-footer__subtotal .sf-row-value .subtotal__btn {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: top;
  background-size: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/0ad6e2ee.svg);
  margin-left: 2px;
  position: relative;
  top: 2px;
  transition: all 0.3s ease 0s;
  transform: rotate(180deg);
  transform-origin: center center;
}
.css-1m4yx0s .mother-container__right-side {
  width: 350px;
  flex-shrink: 0;
}
.css-rf4g20 {
  position: relative;
}
.css-rf4g20 .summary-positioner {
  width: 350px;
  z-index: 1;
}
.css-rf4g20 .summary-wrapper.summary-position-initiated {
  opacity: 1;
  transform: translateY(0px);
}
.css-rf4g20 .summary-wrapper {
  opacity: 0;
  transition: all 0.3s ease 0s;
  transform: translateY(-30px);
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
.css-rf4g20 .corplat-sidebar-card {
  overflow: visible;
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
  margin-top: 6px;
}
.css-18ko5p4 {
  color: rgb(108, 114, 124);
  font-size: 1rem;
  font-weight: bold;
  display: block;
}
.css-1oo0ru2 .content {
  margin-left: 8px;
  width: calc(100% - 48px);
}
.css-6vqyab:last-child,
.css-6vqyab:only-child {
  margin-bottom: 0px;
}
.css-6vqyab span {
  margin-bottom: 2px;
}
.css-12gses5 {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/f384cf28.svg);
  height: 24px;
  width: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
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
.css-1vcv9le > div:last-child,
.css-1vcv9le > div:only-child {
  margin-bottom: 0px;
}
.css-1vcv9le > div {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 4px;
  -webkit-box-align: center;
  align-items: center;
}
.css-1vcv9le > div > div:nth-child(1) {
  color: rgb(49, 53, 59);
  padding-right: 14px;
  text-transform: capitalize;
}
.css-1vcv9le > div > div:nth-child(2) {
  color: rgb(49, 53, 59);
  flex-shrink: 0;
}

.css-1vcv9le > div > div {
  line-height: 1.5;
}
.css-rf4g20 .summary-grand-total-row {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 16px;
  margin-bottom: 8px;
  border-top: 1px solid rgb(219, 222, 226);
}
.css-rf4g20 .sgtr__label {
  font-weight: bold;
  color: rgb(49, 53, 59);
  padding-right: 14px;
  font-size: 1.14286rem;
}
.css-rf4g20 .sgtr__value {
  font-weight: bold;
  flex-shrink: 0;
  font-size: 1.21429rem;
  color: red;
}
.css-rf4g20 .summary-main-btns-wrapper {
  margin-top: 24px;
}
.css-rf4g20 .summary-main-btn:last-child,
.css-rf4g20 .summary-main-btn:only-child {
  margin-bottom: 0px;
}
.css-1xvu1as-unf-btn {
  color: rgb(255, 255, 255);
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
  cursor: pointer;
  display: block;
  background: radial-gradient(circle, transparent 1%, red 1%)
    center center / 15000% red;
  border: none;
  text-indent: initial;
  position: relative;
}
.css-1xvu1as-unf-btn span {
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

//pilih alamat
.address-list-item.is-active-address,
.address-list-item.is-highlighted {
  border-color: rgb(79, 209, 90);
}

.address-list-item {
  border: 1px solid rgb(219, 222, 226);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 18px;
}
.ali__top-row {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.ali__top-row__left {
  margin-right: 20px;
  max-width: 450px;
}
.ali__content-parag {
  margin-bottom: 4px;
  line-height: 1.4;
}
.ali__content-parag .receiver-name {
  color: rgb(49, 53, 59);
  font-size: 0.928571rem;
}
.ali__content-parag .address-title {
  font-size: 0.928571rem;
  margin-right: 2px;
  color: rgb(49, 53, 59);
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
.ali__content-parag {
  margin-bottom: 4px;
  line-height: 1.4;
}
.ali__content-parag:last-child {
  margin-bottom: 0px;
}
.ali__content-parag__address-desc > div {
  font-size: 0.928571rem;
  word-break: break-word;
}
.ali__content-cta-wrapper {
  margin-top: 14px;
  display: flex;
  width: 100%;
}
.ali__content-cta-wrapper .box-content-cta:last-child,
.ali__content-cta-wrapper .box-content-cta:only-child {
  border-right: 0px;
}

.ali__content-cta-wrapper .box-content-cta:first-child {
  padding-left: 0px;
}

.ali__content-cta-wrapper .box-content-cta {
  font-size: 0.857143rem;
  color: rgb(3, 172, 14);
  font-weight: bold;
  cursor: pointer;
  padding: 0px 20px;
  border-right: 1px solid rgb(219, 222, 226);
  line-height: 1.2;
}
.ali__top-row__right {
  flex-shrink: 1;
}
.css-om8p24-unf-btn {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  height: 40px;
  line-height: 20px;
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
.css-om8p24-unf-btn span {
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

