<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row align-items-center">
          <div class="css-10462jv">
            <div class="css-e3w47w" id="">
              <div class="css-61tfa6">
                <div class="css-kad4de">
                  <span class="css-118get3">
                    <div>
                      <p
                        data-testid="txtSellerDashboardsectionPentinghariini"
                        class="title title css-t1qn60 bold large"
                      >
                        Penting hari ini
                      </p>
                      <span
                        data-testid="txtSellerDashboardsectionDescPentinghariini"
                        class="sub-title css-j2wafm"
                      >
                        Aktivitas yang perlu kamu pantau untuk jaga kepuasan
                        pembeli
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="css-d4yiy8">
            <div>
              <router-link to="/admin/orders">
                <section class="css-15mabvc-unf-card eyk31ek0" id="">
                  <div>
                    <a
                      href="/myshop_order?status=new_order"
                      target="_blank"
                      class="css-1e6gctp-unf-link en8iawh0"
                      font-size="12"
                    >
                      <div class="css-kad4de">
                        <span class="css-118get3">
                          <div>
                            <p
                              data-testid="txtSellerDashboardcardnewOrderTitle"
                              class="title title css-t1qn60 light"
                            >
                              Pesanan baru
                            </p>
                          </div>
                          <div
                            class="css-ypd15i-unf-tooltip"
                            data-testid="tipSellerDashboardcardnewOrder"
                          >
                            <div class="css-1huj4o4 e1hrfe840">
                              Jumlah pesanan yang baru masuk dan sudah dibayar
                              oleh pembeli.
                            </div>
                          </div>
                        </span>
                      </div>
                      <h2
                        data-testid="txtSellerDashboardcardnewOrderValue"
                        class="css-1g3ql3-unf-heading e1qvo2ff2"
                      >
                        <div>{{ overview.order }}</div>
                      </h2>
                      <div
                        data-testid="txtSellerDashboardcardnewOrderComparison"
                        class="css-oy6fzs"
                      ></div>
                    </a>
                  </div>
                </section>
              </router-link>
            </div>
          </div>
          <div class="css-d4yiy8">
            <div>
              <section class="css-15mabvc-unf-card eyk31ek0" id="">
                <div>
                  <a
                    href="/resolution-center/inbox/seller"
                    target="_blank"
                    class="css-1e6gctp-unf-link en8iawh0"
                    font-size="12"
                  >
                    <div class="css-kad4de">
                      <span class="css-118get3">
                        <div>
                          <p
                            data-testid="txtSellerDashboardcardcomplaintTitle"
                            class="title title css-t1qn60 light"
                          >
                            Pesanan dikomplain
                          </p>
                        </div>
                        <div
                          class="css-ypd15i-unf-tooltip"
                          data-testid="tipSellerDashboardcardcomplaint"
                        >
                          <div class="css-1huj4o4 e1hrfe840">
                            Komplain dari pembeli yang belum kamu tanggapi.
                          </div>
                        </div>
                      </span>
                    </div>
                    <h2
                      data-testid="txtSellerDashboardcardcomplaintValue"
                      class="css-1g3ql3-unf-heading e1qvo2ff2"
                    >
                      <div>{{ overview.complain }}</div>
                    </h2>
                    <div
                      data-testid="txtSellerDashboardcardcomplaintComparison"
                      class="css-oy6fzs"
                    ></div>
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div class="css-d4yiy8">
            <div>
              <section class="css-15mabvc-unf-card eyk31ek0" id="">
                <div>
                  <a
                    href="/admin/chat"
                    target="_blank"
                    class="css-1e6gctp-unf-link en8iawh0"
                    font-size="12"
                  >
                    <div class="css-kad4de">
                      <span class="css-118get3">
                        <div>
                          <p
                            data-testid="txtSellerDashboardcardunreadChatTitle"
                            class="title title css-t1qn60 light"
                          >
                            Chat baru
                          </p>
                        </div>
                        <div
                          class="css-ypd15i-unf-tooltip"
                          data-testid="tipSellerDashboardcardunreadChat"
                        >
                          <div class="css-1huj4o4 e1hrfe840">
                            Jumlah chat dari pembeli yang belum kamu balas.
                          </div>
                        </div>
                      </span>
                    </div>
                    <h2
                      data-testid="txtSellerDashboardcardunreadChatValue"
                      class="css-1g3ql3-unf-heading e1qvo2ff2"
                    >
                      <div>{{ overview.chat }}</div>
                    </h2>
                    <div
                      data-testid="txtSellerDashboardcardunreadChatComparison"
                      class="css-oy6fzs"
                    ></div>
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div class="css-d4yiy8">
            <div>
              <section class="css-15mabvc-unf-card eyk31ek0" id="">
                <div>
                  <a
                    href="/review/inbox"
                    target="_blank"
                    class="css-1e6gctp-unf-link en8iawh0"
                    font-size="12"
                  >
                    <div class="css-kad4de">
                      <span class="css-118get3">
                        <div>
                          <p
                            data-testid="txtSellerDashboardcardunrepliedReviewTitle"
                            class="title title css-t1qn60 light"
                          >
                            Ulasan baru
                          </p>
                        </div>
                        <div
                          class="css-ypd15i-unf-tooltip"
                          data-testid="tipSellerDashboardcardunrepliedReview"
                        >
                          <div class="css-1huj4o4 e1hrfe840">
                            Jumlah ulasan dari pembeli yang belum kamu balas.
                          </div>
                        </div>
                      </span>
                    </div>
                    <h2
                      data-testid="txtSellerDashboardcardunrepliedReviewValue"
                      class="css-1g3ql3-unf-heading e1qvo2ff2"
                    >
                      <div>{{ overview.review }}</div>
                    </h2>
                    <div
                      data-testid="txtSellerDashboardcardunrepliedReviewComparison"
                      class="css-oy6fzs"
                    ></div>
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-12 mt-4">
            <div class="css-10462jv">
              <div class="css-e3w47w" id="">
                <div class="css-61tfa6">
                  <div class="css-kad4de">
                    <span class="css-118get3">
                      <div>
                        <p
                          data-testid="txtSellerDashboardsectionAnalisistokodanprodukmu"
                          class="title title css-t1qn60 bold large"
                        >
                          Analisis toko dan produkmu
                        </p>
                        <span
                          data-testid="txtSellerDashboardsectionDescAnalisistokodanprodukmu"
                          class="sub-title css-j2wafm"
                        >
                          Update:
                          <b>{{ overview.date }}</b>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-card
          title="Overview Penjualan Toko Kamu"
          class="rounded-lg shadow-sm"
        >
          <line-chart
            :options="{ responsive: true, maintainAspectRatio: false }"
            :chart-data="datacollection"
          ></line-chart>
        </b-card>
        <div class="row h-100 align-items-center">
          <div class="css-d4yiy8">
            <b-row>
              <b-col cols="12">
                <b-card img-left tag="article" class="rounded-lg shadow-sm">
                  <b-card-text>
                    <b-list-group style="border: none;">
                      <b-list-group-item
                        class="d-flex justify-content-between align-items-center"
                        v-for="o in orders"
                        :key="o.status"
                      >
                        {{ o.status }}
                        <b-badge variant="primary" pill>{{ o.count }}</b-badge>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col cols="12" class="mt-2"></b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './chart'
import axios from 'axios'
export default {
  components: {
    LineChart,
  },
  name: 'Overview',
  props: {
    msg: String,
  },
  data() {
    return {
      datacollection: null,
      collectionUser: null,
      collectionMmbr: null,
      collectionOrdr: null,
      search: null,
      show: true,
      orders: [],
      menu: {
        from: false,
        to: false,
        fromDate: null,
        toDate: null,
      },
      tabs: {
        items: ['Monthly', 'Users', 'Members', 'Order'],
        tab: null,
      },
      loading: false,
      data: [],
      snack: {
        model: false,
        color: 'blue accent-4',
        text: 'succes',
      },
      report: {
        last: {},
        current: {},
        ratio: {},
      },
      overview: {},
    }
  },
  computed: {
    total() {
      return this.data.reduce((sum, { total }) => sum + total, 0)
    },
  },
  mounted() {
    this.getData()
    // this.getReport()
    // this.getUsers()
    this.getOrder()
    this.getOveriew()
  },
  methods: {
    getOveriew() {
      axios.get('overview/home').then((res) => {
        this.overview = {
          chat: res.data.chat,
          review: res.data.review,
          complain: res.data.complain_chat,
          cart: res.data.cart,
          wishlist: res.data.wishlist,
          order: res.data.wishlist,
          date: res.data.date,
        }
        this.$store.commit('saldo', res.data.saldo)
        this.$store.commit('level', res.data.level)
      })
    },
    reset() {
      this.menu.fromDate = null
      this.menu.toDate = null
      this.getData()
    },
    getData(start, end) {
      if (start && end) {
        axios
          .get(`report/transactions?start=${start}&end=${end}`)
          .then((res) => {
            this.datacollection = res.data.data
          })
      } else {
        axios.get('report/transactions').then((res) => {
          this.datacollection = res.data.data
        })
      }
    },
    getUsers(start, end) {
      if (start && end) {
        axios.get(`report/users?start=${start}&end=${end}`).then((res) => {
          this.collectionUser = res.data.data
          this.collectionMmbr = res.data.member
        })
      } else {
        axios.get('report/users').then((res) => {
          this.collectionUser = res.data.data
          this.collectionMmbr = res.data.member
        })
      }
    },
    getOrder(start, end) {
      if (start && end) {
        axios.get(`report/order?start=${start}&end=${end}`).then((res) => {
          this.collectionOrdr = res.data.data
        })
      } else {
        axios.get('report/order').then((res) => {
          this.collectionOrdr = res.data.data
          this.orders = res.data.list
        })
      }
    },
    getReport() {
      axios.get('/report/daily').then((res) => {
        this.report = res.data
      })
    },
    close() {
      this.snack.model = false
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.css-10462jv {
  display: inline-block;
  width: 100%;
  padding: 6px;
  height: auto;
  vertical-align: top;
}
.css-e3w47w {
  height: 48px;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.css-61tfa6 {
  margin-top: auto;
  margin-right: auto;
}

.css-1c0yzhk * {
  font-family: Nunito Sans, sans-serif;
}
.css-kad4de {
  display: block;
  position: relative;
  line-height: initial;
  padding: 0px;
}
.css-118get3 {
  line-height: initial;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.css-t1qn60.large {
  color: #40454c;
  font-size: 1.4285714285714286rem;
}

.css-t1qn60.bold {
  font-weight: 800;
}
.css-t1qn60 {
  font-size: 1rem;
  font-family: Nunito Sans, sans-serif;
  color: #40454c;
  line-height: initial;
  display: inline-block;
  font-weight: 500;
  margin: 0px 5px 0px 0px;
}
.css-j2wafm {
  font-size: 1rem;
  color: rgb(131, 137, 148);
  font-weight: 500;
  display: block;
  font-family: 'Open Sans', sans-serif;
}
.css-d4yiy8 {
  display: inline-block;
  width: 25%;
  padding: 6px;
  height: auto;
  vertical-align: top;
}
.css-15mabvc-unf-card {
  display: block;
  position: relative;
  margin: 0;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 #cad3e1;
  background-color: #ffffff;
  cursor: default;
  border-radius: 8px;
  height: 108px;
  height: 108px;
  border-radius: 8px;
}
.css-1e6gctp-unf-link {
  color: rgb(66, 181, 73);
  font-size: 0.857143rem;
  text-decoration: none;
  cursor: pointer;
}
.css-kad4de {
  display: block;
  position: relative;
  line-height: initial;
  padding: 0px;
}
.css-118get3 {
  line-height: initial;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.css-t1qn60.light {
  color: #838994;
}
.css-ypd15i-unf-tooltip {
  display: inline-block;
  position: relative;
}
.css-118get3 img {
  width: 12px;
  height: 12px;
}
.css-ypd15i-unf-tooltip * {
  cursor: pointer;
}
.css-1huj4o4 {
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
.css-1huj4o4::before {
  border-color: transparent transparent rgba(49, 53, 59, 0.44);
  transform: translate(-50%, calc(-100% - 28px));
}
.css-1huj4o4::after {
  border-color: transparent transparent rgba(49, 53, 59, 0.96);
  transform: translate(-50%, calc(-100% - 28px));
}
.css-1huj4o4::after,
.css-1huj4o4::before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-width: 6px;
  border-style: solid;
}
.css-1g3ql3-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: 'Nunito Sans', -apple-system, sans-serif;
  font-size: 1.71429rem;
  line-height: 30px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 4px 0px;
}
.css-oy6fzs {
  color: rgb(131, 137, 148);
  font-family: 'Open Sans', sans-serif;
  font-size: 0.857143rem;
}
.css-13zx3di-unf-card {
  display: block;
  position: relative;
  margin: 0px;
  padding: 20px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  border-radius: 8px;
  height: 438px;
}
</style>
