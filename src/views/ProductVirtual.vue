<template>
  <div>
    <div style="margin-top: 80px">
      <vueper-slides
        :slide-ratio="1 / 4"
        fixed-height="300px"
        ref="myVueperSlides"
        autoplay
        @autoplay-pause="internalAutoPlaying = false"
        @autoplay-resume="internalAutoPlaying = true"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="slide.id"
          :content="slide.content"
          :image="slide.image"
          :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]"
        />
        <template v-slot:pause>
          <i class="icon pause_circle_outline"></i>
        </template>
      </vueper-slides>
      <div class="p-5">
        <h4 style="margin-bottom: 20px">Beli Produk Virtual {{ currently }}</h4>
        <div id="accordion">
          <!-- {{ tabIndex }} -->
          <!-- Tabs with card integration -->
          <b-card no-body>
            <b-tabs v-model="tabIndex" card>
              <b-tab v-for="x in ppob" :key="x.title">
                <template #title>
                  <img :src="x.photo" alt="abubakar" @click="showCurrent(x)" />
                </template>
              </b-tab>
            </b-tabs>
          </b-card>
          <b-card no-body>
            <b-collapse id="collapse-1" class="mt-2" v-model="collapse">
              <b-card v-if="collapse">
                <b-tabs card>
                  <b-tab v-for="x in lists.prepaid[currently]" :key="x.name">
                    <template #title>
                      <img
                        :src="x.icon"
                        alt="abubakar"
                        @click="showDetails(x, 'prepaid')"
                      />
                    </template>
                  </b-tab>
                </b-tabs>
                <b-tabs card>
                  <b-tab
                    v-for="x in lists.pasca[currently]"
                    class="btn btn-primary m-2"
                    :key="x.name"
                  >
                    <template #title>
                      <img
                        :src="x.icon"
                        :alt="x.name"
                        @click="showDetails(x, 'pasca')"
                      />
                    </template>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-collapse>
            <b-collapse v-model="cols_details">
              <div class="w-full">
                <div class="collapse show">
                  <div class="card-body">
                    <b-row>
                      <b-col cols="12" md="6">
                        <h4>{{ details.name }}</h4>
                        <h6 class="text-muted">Pilih Produk</h6>
                        <vselect
                          :options="options"
                          v-model="forms"
                          label="product_name"
                        ></vselect>
                        <b-form-group title="Nomor" class="mt-2">
                          <h6 class="text-muted">Nomor Telpon</h6>
                          <b-form-input
                            v-model="forms.customer_no"
                          ></b-form-input>
                          <datalist id="my-list-id" v-if="forms.prefix">
                            <option v-for="no in forms.prefix">{{ no }}</option>
                          </datalist>
                        </b-form-group>
                        <b-form-group title="Nomor" class="mt-2">
                          <h6 class="text-muted">Metode Pembayaran</h6>
                          <b-form-select
                            v-model="forms.payment"
                            :options="optionPay"
                          ></b-form-select>
                        </b-form-group>
                        <b-button
                          variant="success"
                          style="width: 30%"
                          class="m-2"
                          @click="save"
                        >
                          Beli
                        </b-button>
                      </b-col>
                      <b-col cols="12" md="6">
                        <b-list-group>
                          <b-list-group-item>
                            Produk : {{ forms.product_name }}
                          </b-list-group-item>
                          <b-list-group-item>
                            Kategori : {{ forms.category }}
                          </b-list-group-item>
                          <b-list-group-item>
                            Harga : {{ forms.price | currency }}
                          </b-list-group-item>
                          <b-list-group-item>
                            Deskripsi : {{ forms.desc }}
                          </b-list-group-item>
                        </b-list-group>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </b-collapse>
          </b-card>
          <b-modal
            v-model="pay.modal"
            title="Pembayaran"
            scrollable
            style="height: 100%"
          >
            <iframe
              height="600px"
              width="100%"
              :src="pay.src"
              frameborder="0"
            ></iframe>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Axios from "axios";
import vselect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  name: "home",
  components: {
    Products,
    vselect,
    Login,
    VueperSlides,
    VueperSlide,
  },
  computed: {
    options() {
      const { details } = this;
      if (details.name && details.type === "prepaid") {
        return this.data.filter(
          (x) => x.brand === details.name && x.category === details.category
        );
      } else if (details.name && details.type === "pasca") {
        return this.pasca.filter(
          (x) => x.brand === details.name && x.category === details.category
        );
      } else {
        return [];
      }
    },
    optionPay() {
      if (this.payments) {
        return this.payments.map(function (p) {
          return {
            value: p.channel_code,
            text: p.name,
          };
        });
      }
      return [];
    },
    optional() {
      if (this.currently != null) {
        if (this.currently === "Pascabayar") return this.pasca;
        if (
          this.forms.customer_no != null &&
          this.forms.customer_no.substr(0, 1) === "0" &&
          this.avf.indexOf(this.currently) > -1
        ) {
          return this.data.filter(
            (x) =>
              x.category === this.currently &&
              x.prefix.indexOf(this.forms.customer_no.substr(0, 4)) > -1
          );
        } else {
          const ft = this.data.filter((x) => x.category === this.currently);
          return ft
            .map((x) => x.brand)
            .filter((value, index, self) => self.indexOf(value) === index);
        }
      }
      return this.data;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("ppob").then((res) => {
        this.ppob = res.data;
      });
      Axios.get("/transaction/payment_channels").then((res) => {
        this.payments = res.data;
      });
      Axios.get("/ppob/price-list")
        .then((res) => {
          this.data = res.data.prepaid;
          this.pasca = res.data.pasca;
          this.slides = res.data.slides;
          this.lists = {
            pasca: res.data.list_pasca,
            prepaid: res.data.list_prepaid,
          };
          setTimeout(() => {
            this.tabIndex = this.$route.query.id;
            this.showCurrent(this.ppob[this.$route.query.id]);
            console.log(this.ppob[this.$route.query.id]);
          }, 300);
        })
        .catch((error) => {
          alert(error);
        });
    },
    showCurrent(evt) {
      this.collapse = false;
      setTimeout(() => {
        this.currently = evt.type;
        this.collapse = true;
      }, 100);
    },
    showDetails(evt, type) {
      this.details = evt;
      this.details.type = type;
      this.cols_details = false;
      setTimeout(() => {
        this.cols_details = true;
      }, 300);
    },
    save() {
      Axios.post("ppob/topup", this.forms).then((res) => {
        this.$bvToast.toast(res.data.message, {
          title: "OK",
          autoHideDelay: 3000,
          appendToast: false,
        });
        this.pay = {
          modal: true,
          src: res.data.src,
        };
      });
    },
  },
  data() {
    return {
      forms: {},
      lists: {},
      ppob: [],
      data: [],
      pasca: [],
      categories: [],
      avf: ["Pulsa", "Data", "Voucher"],
      payments: [],
      collapse: false,
      currently: null,
      cols_details: false,
      pay: {
        modal: false,
        src: "",
      },
      details: {},
      //
      tabIndex: 0,
      src: require("@/assets/images/banner1.png"),
      src2: require("@/assets/images/banner2.png"),
      src3: require("@/assets/images/nav/banner.png"),
      image: require("@/assets/images/nav/background1.png"),
      icon: require("@/assets/images/icon/semua1.png").default,

      headerOpt: { isVisible: false },
      footerOpt: { isVisible: false },
      slides: [],
      selected: "Rp 5.000",
      // options: [
      //   { value: 'Rp 5.000', text: 'Rp 5.000' },
      //   { value: 'Rp 10.000', text: 'Rp 10.000' },
      //   { value: 'Rp 20.000', text: 'Rp 20.000' },
      //   { value: 'Rp 50.000', text: 'Rp 50.000' },
      //   { value: 'Rp 100.000', text: 'Rp 100.000', disabled: true },
      // ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  background-color: #fbfbfb;
  border-bottom: 1px solid #ededed;
  position: -webkit-sticky;
  position: sticky;
  top: 61px;
  z-index: 6;
}

/deep/ .nav-tabs .nav-link.active,
.nav-tabs .nav-item.show {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
/deep/.nav-link,
.nav-link:hover {
  background: transparent !important;
  border-radius: 20px !important;
  margin: 10px;
  color: white;
  
}
img {
  height: 80px;
}
/deep/.card-header-tabs {
  place-content: center !important;
}

label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: 0.8em;
  letter-spacing: 1px;
  color: rgb(120, 120, 120);
  transition: ease 0.3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #bcbcbc;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8bc34a;
  transition: ease 0.6s;
}

.input:focus + .line-box .line {
  width: 100%;
}
.label-active {
  top: -3em;
}
</style>
