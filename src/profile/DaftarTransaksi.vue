<template>
  <div>
    <article class="card mb-3">
      <div class="card-body">
        <b-tabs content-class="mt-3">
          <b-tab title="Daftar Belanja" active>
            <div class="container">
              <div class="css-1ivs0au">
                <div class="css-1ivs0au__content">
                  <div class="css-huluao">
                    <el-date-picker
                      v-model="filter.date"
                      type="daterange"
                      start-placeholder="Start date"
                      end-placeholder="End date"
                      align="right"
                      format="yyyy/MM/dd"
                      value-format="yyyy-MM-dd"
                      @change="filterDate"
                    ></el-date-picker>
                  </div>

                  <div class="css-sh10tr" data-testid="btnBomWrapSort">
                    <div width="" class="css-1yy9eh2 e15j6tp62">
                      <el-select
                        v-model="filter.status"
                        placeholder="Filter Status"
                        @change="filterDate"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          clearable
                        ></el-option>
                      </el-select>
                    </div>
                  </div>

                  <div class="css-fo2jrt">
                    <div
                      class="css-1sjxsra e1v0ehno0"
                      height="auto"
                      data-testid="txtBomSearchBar"
                    >
                      <button
                        aria-label="Tombol pencarian"
                        height="auto"
                        type="submit"
                        class="css-1ymn4im e1v0ehno1"
                      ></button>
                      <input
                        aria-label="Bidang pencarian"
                        placeholder="Cari Nama Barang, Toko, Invoice"
                        type="text"
                        class="css-4eg0ft e16vycsw0"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="css-1ynqz4z-unf-emptystate e1lf3yex0"
                v-if="data.length == 0 && !loading"
              >
                <div class="unf-emptystate-img mb-3">
                  <img
                    alt="no-order-found"
                    src="../assets/images/unta4.png"
                    style="height: 350px;"
                  />
                </div>
                <div>
                  <h3 class="css-1og3umh-unf-heading e1qvo2ff3">
                    Belanja dulu, yuk!
                  </h3>
                  <p class="css-1ers9d0-unf-heading e1qvo2ff8">
                    Setelah belanja, kamu bisa pantau proses pesananmu di sini
                  </p>
                  <div class="unf-emptystate-Action">
                    <div class="unf-emptystate-Action__button">
                      <button
                        class="css-6rq8n6-unf-btn e1ggruw00"
                        @click="$router.push('/list')"
                      >
                        <span>Cari Sekarang</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b-card v-if="loading" v-for="l in 4" :key="l">
              <b-skeleton animation="wave" width="85%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="70%"></b-skeleton>
            </b-card>
            {{data.id}}
            <div
              class="css-lf23gq"
              data-testid="crdBomWrapOrderList"
              v-for="x in data"
              :key="x.id"
            >
            
              <section class="order-bom css-rcp8on-unf-card eyk31ek0">
                <div class="flex flex--between padding border--bottom">
                  <div>{{ x.created_at }}</div>
                  <div class="order-bom__label" data-testid="lstBomOrderLabel">
                    <div
                      class="margin--left label__status css-19sjaz5-unf-label e143v2d00"
                    >
                      <div class="flex flex--center">
                        <div
                        style="cursor:pointer"
                          @click="details(x)"
                          data-testid="btnBomLihatDetailPesanan-571157052"
                          class="css-1v0ixe8"
                        >
                          <i
                            class="fa fa-info-circle"
                            style="font-size: 16px;"
                          ></i>
                          <span class="ml-1">Lihat Detail Pesanan</span>
                        </div>
                        <div class="css-gcemtj" style="cursor: pointer;">
                          <div
                            @click="openForms(x)"
                            class="css-1jyc08"
                            data-testid="btnBomChatPenjual-571157052"
                          >
                            <i
                              class="fa fa-wechat"
                              style="font-size: 16px;"
                            ></i>
                            Chat Penjual
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="header flex">
                  <div class="trx-info trx-info--with-32">
                    <router-link
                      :to="`/stores/${x.stores.name}?store_id=${x.stores.id}`"
                      class="font__size--m font--bold font--ellipsis css-1e6gctp-unf-link en8iawh0"
                      font-size="12"
                    >
                      {{ !x.stores || x.stores.name }}
                    </router-link>
                    <span
                      data-testid="txtBomInvoiceNumber-571157052"
                      class="font--ellipsis"
                    >
                      ({{ x.invoice }})
                    </span>
                  </div>
                  <div class="font--nowrap flex--column header__200">
                    <div data-testid="txtBomStatuTitle-571157052">Status</div>
                    <div
                      data-testid="txtBomStatuValue-571157052"
                      class="font--bold font__size--m"
                    >
                      {{ x.status }}
                    </div>
                  </div>
                  <div class="header__action header__150">
                    <div>
                      <span data-testid="txtBomPriceTitle-571157052">
                        Total Belanja
                      </span>
                      <div
                        data-testid="txtBomPriceValue-571157052"
                        class="font__type--trx font__size--l font--bold"
                      >
                        {{ x.total | currency }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="body flex" v-for="y in x.details" :key="y.id">
                  <div class="content">
                    <div>
                      <div class="product__item bom" v-if="y.products">
                        <router-link
                          :to="`/product/${y.products.id}?name=${y.products.name}`"
                          font-size="12"
                          class="css-1e6gctp-unf-link en8iawh0"
                        >
                          <img
                            v-if="y.products.thumbnail"
                            :src="y.products.thumbnail.photo"
                            class="css-1dhisgl"
                            alt="img-product"
                          />
                          <img
                            v-else
                            :src="`${base_uri.url}static/placeholder.jpg`"
                            class="css-1dhisgl"
                            alt="img-product"
                          />
                        </router-link>
                        <router-link
                          :to="`/product/${y.products.id}?name=${y.products.name}`"
                          class="product__item__desc css-1e6gctp-unf-link en8iawh0"
                          font-size="12"
                        >
                          <div
                            class="font__size--m font--bold ellipsis-two-line"
                          >
                            <div data-testid="lnkBomProductName-571157052">
                              {{ y.products.name }}
                            </div>
                          </div>
                          <div>
                            <span
                              data-testid="txtBomProductDetailPrice-571157052"
                              class="font__type--trx"
                            >
                              {{ y.products.price | currency }}
                            </span>
                            <span
                              data-testid="txtBomProductDetailQtyWeight-571157052"
                              class="css-1n5r376 padding--left"
                            >
                              {{ y.qty }} Produk ({{
                                y.qty * y.products.weight
                              }}
                              gr)
                            </span>
                          </div>
                        </router-link>
                        <div class="flex--grow2 bordered--left">
                          <div
                            data-testid="txtBomProductDetailTotalPriceTitle-571157052"
                          >
                            Total Harga Produk
                          </div>
                          <div
                            data-testid="txtBomProductDetailTotalPriceValue-571157052"
                            class="font__type--trx font__size--m font--bold"
                          >
                            {{ y.total | currency }}
                          </div>
                        </div>
                        <div class="" style="display: inline;">
                          <button
                            v-if="x.status === 'Selesai'"
                            @click="openForms(x)"
                            class="ulasan-btn e1ggruw00 mr-1"
                          >
                            <span>Tulis Ulasan</span>
                          </button>
                          <router-link
                            :to="`/product/${y.products.id}?name=${y.products.name}`"
                          >
                            <button class="css-duvvqm-unf-btn e1ggruw00 ml-1">
                              <span>Beli Lagi</span>
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="footer flex font__size--m">
                    
                  </div> -->
                </div>
              </section>
              <!-- <div class="css-13ztd2f">
                <div class="css-nhptg7" data-testid="crdBomPagination">
                  <span data-testid="btnBomPaging-1" class="css-3313ob">1</span>
                </div>
              </div> -->
            </div>
          </b-tab>
          <!-- transaksi topup -->
          <b-tab title="Daftar Transaksi Top-Up">
            <div class="css-1ynqz4z-unf-emptystate e1lf3yex0">
              <div
                class="css-lf23gq"
                data-testid="crdBomWrapOrderList"
                v-for="x in digital"
                :key="x.id"
              >
                <section class="order-bom css-rcp8on-unf-card eyk31ek0">
                  <div class="header flex">
                    <div class="trx-info trx-info--with-32">
                      <a
                        data-testid="lnkBomShopName-571157052"
                        class="font__size--m font--bold font--ellipsis css-1e6gctp-unf-link en8iawh0"
                        font-size="12"
                      >
                        {{ x.category }}
                      </a>
                      <span
                        data-testid="txtBomInvoiceNumber-571157052"
                        class="font--ellipsis"
                      >
                        ({{ x.invoice }})
                      </span>
                    </div>
                    <div class="font--nowrap flex--column header__200">
                      <div data-testid="txtBomStatuTitle-571157052">Status</div>
                      <div
                        data-testid="txtBomStatuValue-571157052"
                        class="font--bold font__size--m"
                      >
                        {{ x.status }}
                      </div>
                    </div>
                    <div class="header__action header__150">
                      <div>
                        <span data-testid="txtBomPriceTitle-571157052">
                          Total
                        </span>
                        <div
                          data-testid="txtBomPriceValue-571157052"
                          class="font__type--trx font__size--l font--bold"
                        >
                          {{ x.price | currency }}
                        </div>
                      </div>
                    </div>
                    <div class="header__action header__150">
                      <div>
                        <span data-testid="txtBomPriceTitle-571157052">
                          No
                        </span>
                        <div
                          data-testid="txtBomPriceValue-571157052"
                          class="font__type--trx font__size--l font--bold"
                        >
                          {{ x.customer_no }}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              class="css-1ynqz4z-unf-emptystate e1lf3yex0"
              v-if="digital.length == 0"
            >
              <div class="unf-emptystate-img mb-3">
                <img
                  alt="no-order-found"
                  src="../assets/images/unta4.png"
                  style="height: 350px;"
                />
              </div>
              <div>
                <h3 class="css-1og3umh-unf-heading e1qvo2ff3">
                  Belanja dulu, yuk!
                </h3>
                <p class="css-1ers9d0-unf-heading e1qvo2ff8">
                  Setelah belanja, kamu bisa pantau proses pesananmu di sini
                </p>
                <div class="unf-emptystate-Action">
                  <div class="unf-emptystate-Action__button">
                    <button class="css-6rq8n6-unf-btn e1ggruw00">
                      <span>Cari Sekarang</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
      <!-- card-body .// -->
    </article>
    <!--  -->
      <b-modal id="modal-detail" v-model="b_modal" size="lg" title="Detail Transaksi" >

<div  class="order-detail-page__purchase-detail-header">
   <div class="order-detail-header">
      <div>
         <div class="order-detail-header__state-container">
           
            <div class="order-detail-header__note"><span class="order-content__header__order-sn">NO. PESANAN. ({{ detailPesanan.invoice }})</span><span class="order-detail-header__separator">|</span><span class="order-detail-header__status">{{detailPesanan.status}}</span></div>
            <div class="card-body">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div class="step" :class="{'completed': detailPesanan !== 'EXPIRED' }">
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="pe-7s-cart"></i></div>
                </div>
                <h4 class="step-title">Pesanan Dibuat</h4>
              </div>
              <div class="step" :class="{'completed':detailPesanan.status==='PAID' || detailPesanan.status==='Dikemas' || detailPesanan.status==='Dikirim' || detailPesanan.status==='Selesai' || detailPesanan.status==='Refund'}">
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="pe-7s-config"></i></div>
                </div>
                <h4 class="step-title">Pesanan Dibayar</h4>
              </div>
              <div class="step" :class="{'completed':detailPesanan.status==='Dikemas' || detailPesanan.status==='Dikirim' || detailPesanan.status==='Selesai' || detailPesanan.status==='Refund'}">
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="pe-7s-medal"></i></div>
                </div>
                <h4 class="step-title">Pesanan Dikemas</h4>
              </div>
              <div class="step" :class="{'completed':detailPesanan.status==='Dikirim' || detailPesanan.status==='Selesai' || detailPesanan.status==='Refund'}">
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="pe-7s-car"></i></div>
                </div>
                <h4 class="step-title">Pesanan Dikirim</h4>
              </div>
              <div class="step" :class="{'completed':detailPesanan.status==='Selesai' || detailPesanan.status==='Refund'}">
                <div class="step-icon-wrap">
                  <div class="step-icon"><i class="pe-7s-home"></i></div>
                </div>
                <h4 class="step-title">Pesanan Selesai</h4>
              </div>
            </div>
          </div>
        
         </div>
         <div class="_39ltn9">
            <div class="_2IkeiS _1wGF8P"> </div>
            <div class="_2IkeiS Bm16W5"> </div>
         </div>
      </div>
      <div class="order-detail-header__action-container">
       
         <div class="order-detail-header__invoice">
            <div class="order-detail-header__invoice-inner">
               <div class="order-detail-header__invoice-title">Faktur</div>
               <div class="order-detail-header__button-wrapper">
    
                 <button target= '_blank' @click="$router.push('/invoice/' + detailPesanan.id)" class="shopee-button-outline shopee-button-outline--fill shopee-button-outline--primary ">Lihat Faktur</button>
                 
                 </div>
            </div>
         </div>
      </div>
   </div>
</div>
  </b-modal>
    <el-drawer
      :visible.sync="drawer"
      title="Tulis Ulasan"
      direction="btt"
      size="auto"
      scrollable
      class="mx-auto"
      style="width: 500px;"
    >
      <el-form :body-style="{ padding: '0px' }" class="px-4 py-1">
        <el-form-item>
          <el-rate
            v-model="forms.ratings"
            show-score
            :allow-half="true"
            text-color="#ff9900"
            :score-template="`${forms.ratings} points`"
          ></el-rate>
        </el-form-item>
        <el-form-item label="Pesan">
          <el-input type="textarea" v-model="forms.text" rows="5"></el-input>
        </el-form-item>
        <el-avatar
          v-if="forms.photo"
          :key="forms.photo"
          :size="50"
          style="float: left;"
          :src="forms.photo"
        ></el-avatar>
        <el-form-item style="float: right;">
          <input
            type="file"
            accept=".jpg,.png,.jpeg"
            ref="file"
            style="display: none;"
            @change="handleChange"
          />
          <el-button type="primary" @click="$refs.file.click()" round>
            Upload Photo
          </el-button>
          <el-button type="success" round @click="save">Create</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import Axios from 'axios'

import { mapGetters } from 'vuex'
export default {

  data() {
    return {
      src: require('@/assets/images/products/product1.jpg'),
      item1: require('@/assets/images/items/1.jpg'),
      item2: require('@/assets/images/items/2.jpg'),
      item3: require('@/assets/images/items/3.jpg'),
      data: [],
      detailPesanan:{},
      b_modal:false,
      forms: {},
      loading: false,
      drawer: false,
      digital: [],
      filter: {
        date: [],
        status: null,
      },
      options: [
        { label: 'All', value: null },
        { label: 'Pending', value: 'Pending' },
        { label: 'Paid', value: 'PAID' },
        { label: 'Dikirim', value: 'Dikirim' },
        { label: 'Dikemas', value: 'Dikemas' },
        { label: 'Selesai', value: 'Selesai' },
        { label: 'Refund', value: 'Refund' },
        { label: 'Expired', value: 'EXPIRED' },
      ],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true
      Axios.get('history-transactions').then((res) => {
        this.data = res.data.data
        this.digital = res.data.digital
        this.loading = false
      })
    },
    filterDate() {
      this.loading = true
      const { filter } = this
      const params = {
        status: filter.status,
      }
      if (filter.date != null) {
        if (filter.date.length > 0) {
          params.start = filter.date[0]
          params.end = filter.date[1]
        }
      }
      Axios.get('history-transactions', { params: params }).then((res) => {
        this.data = res.data.data
        this.digital = res.data.digital
        this.loading = false
      })
    },
    handleChange(e) {
      const p = e.target.files[0]
      this.forms.file = p
      this.forms.photo = URL.createObjectURL(p)
      this.$forceUpdate()
    },
    openForms(item) {
      this.forms = {
        store_id: item.store_id,
        transaction_id: item.id,
      }
      this.drawer = true
    },
    save() {
      const fd = new FormData()
      const { forms } = this
      fd.append('store_id', forms.store_id)
      fd.append('transaction_id', forms.transaction_id)
      fd.append('ratings', forms.ratings)
      fd.append('file', forms.file)
      fd.append('text', forms.text)
      Axios.post('page/review', fd)
        .then((res) => {
          this.$notify({
            title: 'Success :)',
            message: res.data.message,
            type: 'success',
          })
        })
        .catch((error) => {
          this.$notify({
            title: 'Sorry :(',
            message: error,
            type: 'error',
          })
        })
    },
    details(item){
      this.detailPesanan = Object.assign({}, item)
      this.b_modal = true;
    }
  },
}
</script>

<style scoped lang="scss">
.action-button {
  border-top: 0;
  padding-top: 20px;
}
.table-address .button {
  display: inline-block;
  min-width: 50px;
  margin: 0 0 10px;
  padding: 9px 15px 7px;
  font-size: 11px;

  border-radius: 3px;
  border: solid 1px #e0e0e0;
}
.table {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}
table,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.table-address thead tr {
  border-bottom: solid 1px #e0e0e0;
}
.table-address thead tr th {
  padding-bottom: 20px;
}
.table thead th {
  vertical-align: bottom;
}
.table th {
  font-weight: 700;
}
.table th,
.table td {
  padding: 8px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
label {
  color: grey;
}

.muted {
  color: rgba(0, 0, 0, 0.38);
}
.clear-b {
  clear: both;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.img-sm {
  width: 100%;
  height: auto;
  display: block;
  max-width: 200px;
}
.foto {
  width: 100%;
  height: auto;
  display: block;
}
.btn-link {
  font-weight: 400;
  color: green !important;
  text-decoration: none;
}
.icontext {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: middle;
}
.icontext .icon {
  position: relative;
  margin-right: 10px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}
.icontext .text {
  width: 100%;
  line-height: 1.2;
  color: #212529;
}
.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}
figure {
  margin-bottom: 0;
}
.btn-outline-primary {
  color: green !important;
}
.btn-outline-primary:hover {
  color: white !important;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6;
}

.css-1ivs0au {
  margin: 0px 0px 16px;
}
.css-2n8ir {
  font-weight: 400;
  font-family: 'open sans', tahoma, sans-serif;
  font-size: 14px;
  padding-left: 30px;
  width: 80%;
  margin-bottom: 56px;
}
.css-1ivs0au__content {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
}
.css-huluao {
  margin: 0px 16px 0px 0px;
}
.css-1ba2565 {
  border: thin solid rgb(224, 224, 224);
  padding: 7.5px 12px;
  border-radius: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  height: 40px;
}
.css-s9s691 span {
  line-height: 22px;
  margin-top: 1px;
  color: rgba(49, 53, 59, 0.44);
}
.css-s9s691 span + span {
  margin-left: 8px;
  font-weight: bold;
  color: rgba(49, 53, 59, 0.96);
}
.css-s9s691 img {
  width: 15px;
  margin-left: 8px;
}

.css-s9s691 > * {
  display: inline-block;
  vertical-align: middle;
}
img {
  border-style: none;
}
.css-s9s691 {
  display: flex;
  align-self: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}
.css-1ba2565 {
  border: thin solid rgb(224, 224, 224);
  padding: 7.5px 12px;
  border-radius: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  height: 40px;
}
.css-huluao {
  margin: 0px 16px 0px 0px;
}
.css-sh10tr {
  margin: 0px 16px 0px 0px;
  width: 160px;
}
.css-1yy9eh2 {
  position: relative;
  width: initial;
}
.css-1yy9eh2 .e15j6tp61 {
  border-radius: 8px;
}
.css-5eobf8 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 8px 0px 16px;
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
.css-sh10tr label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 0px;
}

.css-1jk4ov {
  flex: 1 1 0%;
  color: rgba(0, 0, 0, 0.24);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.css-5eobf8::after {
  content: '';
  display: inline-block;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/1def3953.svg);
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 280ms ease 0s, background-color 0.12s ease 0s;
  transform: rotate(0deg);
  border-radius: 50%;
}
.css-1yy9eh2 .e15j6tp61 {
  border-radius: 8px;
}
.css-1yy9eh2 .e15j6tp60 {
  transition: transform 280ms ease-out 0s, opacity 0.16s ease 0s,
    visibility 0.16s ease 0s;
  width: 100%;
  padding: 0px 8px;
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
.css-s9s691 img {
  width: 15px;
  margin-left: 8px;
}

.css-s9s691 {
  display: inline-block;
  vertical-align: middle;
}
@media (max-width: 1198px) {
  .css-s9s691 span:nth-child(1) {
    display: none;
  }
}
.css-1qe2r3h {
  color: rgb(66, 181, 73);
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}
.css-fo2jrt {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  margin-left: auto;
  position: relative;
}
.css-1sjxsra {
  border-radius: 8px;
  display: flex;
  -webkit-box-flex: inherit;
  flex-grow: inherit;
  -webkit-box-align: stretch;
  align-items: stretch;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 231, 233);
  flex-direction: row-reverse;
  margin: 0px;
}
.css-fo2jrt button {
  height: 38px;
  width: 38px;
  padding: 10px;
  position: absolute;
  right: 1px;
  top: 1px;
  border: none;
  background-color: rgb(244, 244, 244);
  border-radius: 0px 8px 8px 0px;
}
.css-1ymn4im::after {
  content: '';
  background-size: 24px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg);
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.css-1sjxsra input[type='text'] {
  margin: 0px;
  border: none;
  width: 290px;
  height: 37px;
  font-size: 13px;
}

/* filter */
.css-elqn49 {
  margin: 0px 0px 6px;
  position: relative;
}
.css-elqn49__flex {
  display: -webkit-flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
}
.css-4eqazr--text {
  white-space: nowrap;
  width: 100px;
  font-weight: bold;
  color: rgba(49, 53, 59, 0.96);
}

.css-4eqazr {
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
}
.css-4eqazr--status {
  margin: 0px;
  width: calc(100% - 120px);
  padding-left: 30px;
}
.css-1lm1cch {
  overflow: auto hidden;
  white-space: nowrap;
  width: 5000px;
}
.css-1jvzjqm-unf-chip:first-child {
  margin-left: 25px;
}

.css-1jvzjqm-unf-chip {
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(235, 255, 239);
  border-radius: 16px;
  border: 1px solid rgb(79, 209, 90);
  color: rgb(3, 172, 14);
  display: inline-flex;
  vertical-align: top;
  flex: 1 1 0%;
  flex-wrap: nowrap;
  height: 40px;
  line-height: 16px;
  margin-right: 8px;
  overflow: hidden;
  padding: 0px 12px;
  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: not-allowed;
  font-size: 12px;
  margin-bottom: 0px;
}
.css-1dgmgkd-unf-chip {
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  border: 1px solid rgb(229, 231, 233);
  color: rgba(49, 53, 59, 0.68);
  display: inline-flex;
  vertical-align: top;
  flex: 1 1 0%;
  flex-wrap: nowrap;
  height: 40px;
  line-height: 16px;
  margin-right: 8px;
  overflow: hidden;
  padding: 0px 12px;
  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 0px;
}
.css-1dgmgkd-unf-chip.last-chip {
  margin-right: 25px;
}
.css-elqn49__nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
.css-wo2tyn__left {
  left: 110px;
}

.css-wo2tyn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 0.9px solid rgb(224, 224, 224);
  background-color: rgb(255, 255, 255);
  position: absolute;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 5px;
  transition: all 0.3s ease-in-out 0s;
}
.css-wo2tyn img {
  width: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.css-wo2tyn__right {
  right: 0px;
}

/* product */

.css-lf23gq {
  margin: 16px 0px 0px;
}
.css-rcp8on-unf-card {
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  color: rgba(0, 0, 0, 0.68);
  display: flex;
  font-size: 12px;
  flex-direction: column;
  line-height: 20px;
  margin: 0px 0px 24px;
  padding: 0px;
}
.css-rcp8on-unf-card.order-bom .padding {
  padding: 8px 16px;
}

.css-rcp8on-unf-card .border--bottom {
  border-bottom: 1px solid rgb(240, 240, 240);
}

.css-rcp8on-unf-card .padding {
  padding: 16px;
}

.css-rcp8on-unf-card .flex--between {
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-rcp8on-unf-card .flex {
  display: flex;
  width: 100%;
}

.css-rcp8on-unf-card .header {
  padding: 16px;
  border-bottom: 1px solid rgb(240, 240, 240);
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-rcp8on-unf-card .header > div:not(:last-child) {
  padding-right: 16px;
}

.css-rcp8on-unf-card .header .trx-info--with-32 {
  width: 32.2%;
}

.css-rcp8on-unf-card .header .trx-info {
  display: flex;
  flex-direction: column;
}
.css-rcp8on-unf-card .header .trx-info a {
  text-transform: capitalize;
}

.css-rcp8on-unf-card .header a {
  display: block;
  position: relative;
}

.css-rcp8on-unf-card .font--ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.css-rcp8on-unf-card .font--bold {
  font-weight: bold;
}

.css-rcp8on-unf-card .font__size--m {
  font-size: 14px;
}

.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: 'open sans', tahoma, sans-serif;
}

.css-1e6gctp-unf-link {
  color: rgb(66, 181, 73);
  font-size: 0.857143rem;
  text-decoration: none;
  cursor: pointer;
}
a {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: 'open sans', tahoma, sans-serif;
}
.css-rcp8on-unf-card .header > div:not(:last-child) {
  padding-right: 16px;
}

.css-rcp8on-unf-card .header > div:not(:first-child) {
  padding-left: 16px;
  border-left: 1px solid rgb(241, 241, 241);
}

.css-rcp8on-unf-card .font--nowrap {
  white-space: nowrap;
}

.css-rcp8on-unf-card .flex--column {
  flex-direction: column;
}

.css-rcp8on-unf-card .header__200 {
  width: 200px;
}
.css-rcp8on-unf-card .header > div:not(:first-child) {
  padding-left: 16px;
  border-left: 1px solid rgb(241, 241, 241);
}

.css-rcp8on-unf-card .header__150 {
  width: 150px;
}
.css-rcp8on-unf-card .font__type--trx {
  color: red;
}

.css-rcp8on-unf-card .font__size--l {
  font-size: 16px;
}
.css-rcp8on-unf-card.order-bom .body {
  padding-bottom: 12px;
}

.css-rcp8on-unf-card .body {
  padding: 0px 16px 16px;
  flex-direction: column;
}

.css-rcp8on-unf-card.order-bom .content {
  padding-bottom: 12px;
}

.css-rcp8on-unf-card .content {
  padding-bottom: 16px;
}
.css-rcp8on-unf-card .product__item.bom:last-child {
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(241, 241, 241);
}

.css-rcp8on-unf-card .product__item:last-child {
  border-bottom: none;
  padding-bottom: 0px;
}

.css-rcp8on-unf-card .product__item {
  display: flex;
  padding: 16px 0px;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.css-1dhisgl {
  height: 56px;
  width: 56px;
  border-radius: 8px;
}
img {
  border-style: none;
}
.css-rcp8on-unf-card.order-bom .product__item__desc {
  width: 34.2%;
  max-width: 34.2%;
}

.css-rcp8on-unf-card .product__item__desc {
  margin: 0px 16px;
  max-width: 33%;
  width: 33%;
  text-transform: capitalize;
}

.css-rcp8on-unf-card .product__item__desc {
  margin: 0px 16px;
  max-width: 33%;
  width: 33%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-transform: capitalize;
}
.css-rcp8on-unf-card .ellipsis-two-line {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.css-rcp8on-unf-card .padding--left {
  padding-left: 8px;
}

.css-1n5r376 {
  color: rgba(0, 0, 0, 0.68);
}
.css-rcp8on-unf-card .bordered--left {
  border-left: 1px solid rgb(241, 241, 241);
  padding-left: 16px;
}

.css-rcp8on-unf-card .flex--grow2 {
  -webkit-box-flex: 2;
  flex-grow: 2;
}

.css-rcp8on-unf-card .product__item > div {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-rcp8on-unf-card button {
  min-width: 116px;
  font-size: 12px;
}

.css-duvvqm-unf-btn {
  color: rgb(255, 255, 255);
  font-family: 'Nunito Sans', sans-serif;
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
  background: radial-gradient(circle, transparent 1%, red 1%)
    center center / 15000% red;
  border: none;
  text-indent: initial;
  position: relative;
}
.ulasan-btn {
  color: rgb(255, 255, 255);
  font-family: 'Nunito Sans', sans-serif;
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
  background: radial-gradient(circle, transparent 1%, rgb(92, 184, 92) 1%)
    center center / 15000% rgb(92, 184, 92);
  border: none;
  text-indent: initial;
  position: relative;
}
.css-duvvqm-unf-btn span {
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

.css-rcp8on-unf-card .footer {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-rcp8on-unf-card .flex--center {
  -webkit-box-align: center;
  align-items: center;
}

.css-1v0ixe8 {
  color: rgba(49, 53, 59, 0.68);
  padding: 0px;
  margin: 0px;
  border: 0px;
}
.css-1v0ixe8 img {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
.css-1v0ixe8 span {
  display: inline-block;
  vertical-align: middle;
}
.css-gcemtj {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
  margin-left: 8px;
  color: rgba(49, 53, 59, 0.68);
}
.css-1jyc08 {
  color: rgba(49, 53, 59, 0.68);
}
.css-rcp8on-unf-card .margin--right {
  margin-right: 8px;
}

.css-1jyc08 img {
  margin-right: 8px;
}

.css-gcemtj img {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
/* belum transaksi */
.css-1ynqz4z-unf-emptystate {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex: initial;
  text-align: center;
  padding: 20px 20px 40px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-img {
  max-width: 300px;
  max-height: 300px;
}
.css-1ynqz4z-unf-emptystate img {
  width: 200px;
}

.css-1ynqz4z-unf-emptystate img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.css-1og3umh-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: 'Nunito Sans', -apple-system, sans-serif;
  font-size: 1.42857rem;
  line-height: 26px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 8px 0px 0px;
}
.css-1ers9d0-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.68);
  text-decoration: initial;
  margin: 4px 0px 0px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-Action {
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 24px;
  margin-left: -4px;
  margin-right: -4px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-Action__button:first-child {
  margin-top: 0px;
}

.css-1ynqz4z-unf-emptystate .unf-emptystate-Action__button {
  width: 100%;
  padding-right: 4px;
  padding-left: 4px;
  margin-top: 8px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-Action__button button {
  min-width: 300px;
}

.css-6rq8n6-unf-btn {
  color: rgb(255, 255, 255);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.14286rem;
  height: 48px;
  line-height: 22px;
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
.css-6rq8n6-unf-btn span {
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
/deep/ .nav-tabs .nav-link.active,
.nav-tabs .nav-item.show {
  background-color: #199c43;
  border-radius: 20px !important;
  margin: 10px;
  color: white;
}
/deep/.nav-link,
.nav-link:hover {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6;
}
.order-detail-page__purchase-detail-header {
    margin-bottom: .625rem;
}
.checkout-card__container, .order-card__container, .order-detail-header {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0,0.05 );
    border-radius: .125rem;
    overflow: hidden;
    overflow: visible;
}
.order-detail-header {
    background-color: #fff;
    border-top-left-radius: .3125rem;
    border-top-right-radius: .3125rem;
}
.order-detail-header__state-container {
    position: relative;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5rem 2.8125rem 2.8125rem;
}
.order-detail-header__back-button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    left: 1.25rem;
    color: rgba(0,0,0,.54);
}
.order-detail-header__note {
    right: 1.25rem;
    position: absolute;
    top: 1.25rem;
    font-size: .875rem;
    line-height: 1rem;
}
.stepper {
    position: relative;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}
.order-detail-header__back-button--arrow {
    font-size: .875rem;
    margin-right: .3125rem;
}

.shopee-svg-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    position: relative;
}
.order-content__header__order-sn {
    font-size: .875rem;
    line-height: 1rem;
}
.order-detail-header__separator {
    margin: 0 1em;
}
.order-detail-header__status {
    color: #ee4d2d;
    text-transform: uppercase;
}

.order-detail-header__back-button, .order-detail-header__note {
    right: 1.25rem;
    position: absolute;
    top: 1.25rem;
    font-size: .875rem;
    line-height: 1rem;
}
.stepper__step {
    width: 140px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    z-index: 1;
}
.stepper__step-icon--finish {
    border-color: #2dc258;
    color: #2dc258;
}

.stepper__step-icon {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 1.875rem;
    border: 4px solid #e0e0e0;
    color: #e0e0e0;
    background-color: #fff;
    -webkit-transition: background-color .3s cubic-bezier(.4,0,.2,1) .7s,border-color .3s cubic-bezier(.4,0,.2,1) .7s,color .3s cubic-bezier(.4,0,.2,1) .7s;
    transition: background-color .3s cubic-bezier(.4,0,.2,1) .7s,border-color .3s cubic-bezier(.4,0,.2,1) .7s,color .3s cubic-bezier(.4,0,.2,1) .7s;
}
.stepper__step-text {
    text-transform: capitalize;
    font-size: .875rem;
    color: rgba(0,0,0,.8);
    line-height: 1.25rem;
    margin: 1.25rem 0 .25rem;
}
.stepper__step-date {
    font-size: .75rem;
    color: rgba(0,0,0,.26);
    height: .875rem;
}
.order-detail-header__action-container {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fffcf5;
    padding-top: 1.25rem;
}
.order-detail-header__button-wrapper-container--last {
    padding-bottom: 1.25rem;
    border-bottom: 0;
}
.order-detail-header__button-wrapper-container {
    padding: 0 1.25rem .625rem;
    margin-bottom: .625rem;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px dotted rgba(0,0,0,.09);
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.between-xs {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.middle-xs {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.order-detail-header__text-info-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: left;
    min-height: 1.25rem;
}
.purchase-text-info-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: left;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.purchase-text-info {
    font-size: .75rem;
    line-height: .9375rem;
    word-wrap: break-word;
    max-width: 25rem;
    color: rgba(0,0,0,.54);
}
.purchase-text-info {
    font-size: .75rem;
    line-height: .9375rem;
    word-wrap: break-word;
    max-width: 25rem;
    color: rgba(0,0,0,.54);
}
.order-detail-header__button-wrapper {
    width: 13.125rem;
    height: 2.5rem;
    font-size: .875rem;
    margin-left: 1rem;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background: #fff;
}
.shopee-button-solid--primary {
    background: #ee4d2d;
}

.shopee-button-solid--fill {
    height: 100%;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
}
.shopee-button-solid {
    outline: none;
    cursor: pointer;
    border: none;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: background-color .1s cubic-bezier(.4,0,.6,1);
    transition: background-color .1s cubic-bezier(.4,0,.6,1);
    position: relative;
    background: rgba(0,0,0,.54);
    color: #fff;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    border-radius: 2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.09);
}
.order-detail-header__button-content-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-transform: capitalize;
}

.shopee-button-solid {
    outline: none;
    cursor: pointer;
    border: none;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: background-color .1s cubic-bezier(.4,0,.6,1);
    transition: background-color .1s cubic-bezier(.4,0,.6,1);
    position: relative;
    background: rgba(0,0,0,.54);
    color: #fff;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    border-radius: 2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.09);
}
.order-detail-header__invoice {
    padding: 0 .9375rem;
}
.order-detail-header__invoice-inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px dashed #eee;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px;
}
.order-detail-header__invoice-title {
    font-size: 14px;
}
.order-detail-header__button-wrapper {
    width: 13.125rem;
    height: 2.5rem;
    font-size: .875rem;
    margin-left: 1rem;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background: #fff;
}
.shopee-button-outline--fill {
    width: 100%;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
}
.shopee-button-outline {
    outline: none;
    cursor: pointer;
    border: none;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: background-color .1s cubic-bezier(.4,0,.6,1);
    transition: background-color .1s cubic-bezier(.4,0,.6,1);
    border: 1px solid rgba(0,0,0,.09);
    border-radius: 2px;
    background: transparent;
    color: rgba(0,0,0,.8);
}
body{margin-top:20px;}

.steps .step {
    display: block;
    width: 100%;
    margin-bottom: 35px;
    text-align: center
}

.steps .step .step-icon-wrap {
    display: block;
    position: relative;
    width: 100%;
    height: 80px;
    text-align: center
}

.steps .step .step-icon-wrap::before,
.steps .step .step-icon-wrap::after {
    display: block;
    position: absolute;
    top: 50%;
    width: 50%;
    height: 3px;
    margin-top: -1px;
    background-color: #e1e7ec;
    content: '';
    z-index: 1
}

.steps .step .step-icon-wrap::before {
    left: 0
}

.steps .step .step-icon-wrap::after {
    right: 0
}

.steps .step .step-icon {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    border: 1px solid #e1e7ec;
    border-radius: 50%;
    background-color: #f5f5f5;
    color: #374250;
    font-size: 38px;
    line-height: 81px;
    z-index: 5
}

.steps .step .step-title {
    margin-top: 16px;
    margin-bottom: 0;
    color: #606975;
    font-size: 14px;
    font-weight: 500
}

.steps .step:first-child .step-icon-wrap::before {
    display: none
}

.steps .step:last-child .step-icon-wrap::after {
    display: none
}

.steps .step.completed .step-icon-wrap::before,
.steps .step.completed .step-icon-wrap::after {
    background-color: #2dc258
}

.steps .step.completed .step-icon {
    border-color: #2dc258;
    background-color: #2dc258;
    color: #fff
}

@media (max-width: 576px) {
    .flex-sm-nowrap .step .step-icon-wrap::before,
    .flex-sm-nowrap .step .step-icon-wrap::after {
        display: none
    }
}

@media (max-width: 768px) {
    .flex-md-nowrap .step .step-icon-wrap::before,
    .flex-md-nowrap .step .step-icon-wrap::after {
        display: none
    }
}

@media (max-width: 991px) {
    .flex-lg-nowrap .step .step-icon-wrap::before,
    .flex-lg-nowrap .step .step-icon-wrap::after {
        display: none
    }
}

@media (max-width: 1200px) {
    .flex-xl-nowrap .step .step-icon-wrap::before,
    .flex-xl-nowrap .step .step-icon-wrap::after {
        display: none
    }
}

.bg-faded, .bg-secondary {
    background-color: #f5f5f5 !important;
}
</style>
