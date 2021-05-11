<template>
  <div>
    <skeleton-profile-vue v-if="loading" />
    <article class="card mb-3" v-else>
      <div class="card-body">
        <b-tabs content-class="mt-3">
          <b-tab title="Biodata Diri" active>
            <div class="container">
              <div class="row mt-4">
                <div class="col-md-4">
                  <div class="well">
                    <img
                      :src="data.profile ? data.profile : src"
                      class="foto"
                    />
                    <hr class="mb-4" />
                    <b-form-file
                      @change="changes"
                      accept="image/*"
                    ></b-form-file>
                    <div class="clear-b mt-1">
                      <small class="muted">Besar file: maksimum 1 MB</small>
                    </div>
                  </div>
                  <div class="clear-b">
                    <b-button
                    v-b-modal.modal-password
                      variant="success"
                      class="btn btn-success btn-block"
                    >
                      <i class="fa fa-key mr-1"></i>
                      Ganti Password
                    </b-button>
                  </div>
                </div>
                <div class="col-md-8">
                  <b-form @submit.prevent="handleSubmit">
                    <h3>Ubah Biodata Diri</h3>
                    <b-row class="mt-2">
                      <b-col sm="3">
                        <label class="mt-1">Nama:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-form-group>
                          <b-form-input
                            size="sm"
                            v-model="data.name"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row class="mt-2">
                      <b-col sm="3">
                        <label class="mt-1">Tanggal Lahir:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-form-group>
                          <b-input
                            v-model="data.tgl_lahir"
                            type="date"
                            class="mb-2"
                          ></b-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row class="mt-2">
                      <b-col sm="3">
                        <label class="mt-1">Jenis Kelamin:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-form-group>
                          <b-form-select
                            size="sm"
                            v-model="data.jenis_kelamin"
                            :options="kelamin"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <br />
                    <h4 class="">Ubah Kontak</h4>

                    <b-row class="mt-2">
                      <b-col sm="3">
                        <label class="mt-1">Email:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-form-group>
                          <b-form-input
                            v-model="data.email"
                            size="sm"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row class="mt-2">
                      <b-col sm="3">
                        <label class="mt-1">No Hp:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-form-group>
                          <b-form-input
                            size="sm"
                            v-model="data.phone"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                  <div class="clear-b mt-3 p-1">
                    <b-button class="btn btn-block" @click="updateProfile">
                      <i class="fa fa-save mr-1"></i>
                      Simpan
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="Daftar Alamat">
            <div class="row mb-2">
              <div class="col-md-4">
                <div class="pull left mt-2">
                  <b-button
                    @click="changeAddress({})"
                    variant="success"
                    class="btn btn-success"
                  >
                    <i class="fa fa-plus mr-1"></i>
                    Tambah alamat
                  </b-button>
                </div>
              </div>
            </div>
            <table class="table table-address">
              <thead>
                <tr>
                  <th></th>
                  <th>Penerima</th>
                  <th>Alamat Pengiriman</th>
                  <th>Daerah pengiriman</th>

                  <th style="width: 175px"></th>
                </tr>
              </thead>
              <tbody v-for="add in data.address" :key="add.id">
                <tr>
                  <td>
                    <b-form-checkbox v-model="add.active" :value="1" disabled />
                  </td>
                  <td class="fs-12">
                    <div>
                      <strong>{{ add.penerima }}</strong>
                    </div>
                    <div>{{ add.telp }}</div>
                  </td>
                  <td class="fs-12">
                    <span>
                      <strong>{{ add.type }}</strong>
                    </span>
                    <p>{{ add.address }}</p>
                  </td>
                  <td class="fs-12" v-if="add.province">
                    <p>
                      {{ add.province.province }}, {{ add.city.city_name }},
                      {{ add.district.subdistrict_name }},
                      {{ add.city.postal_code }}
                      <br />
                      Indonesia
                    </p>
                  </td>

                  <td class="action-button">
                    <b-button
                      variant="success"
                      @click="changeAddress(add)"
                      class="button btn btn-success btn-sm mr-1"
                    >
                      <i class="fa fa-pencil-square-o"></i>
                      Ubah
                    </b-button>
                    <b-button
                      variant="light"
                      class="button btn btn-light btn-sm"
                      @click="delAdd(add)"
                    >
                      <i class="fa fa-trash"></i>
                      Hapus
                    </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              :title="index > -1 ? 'Edit Alamat' : 'Tambah Alamat'"
              scrollable
              v-model="modal"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit" v-if="modal">
                <b-form-group label="Type Alamat">
                  <b-form-input
                    id="inline-form-input-name"
                    class=""
                    v-model="address.type"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Nama Penerima">
                  <b-form-input
                    id="inline-form-input-name"
                    class=""
                    v-model="address.penerima"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="No Hp">
                  <b-form-input
                    id="inline-form-input-username"
                    v-model="address.telp"
                    placeholder="No HP"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Provinsi">
                  <vue-select
                    :options="optAdd.provinces"
                    v-model="address.province"
                    label="province"
                  />
                </b-form-group>
                <b-form-group label="kota">
                  <vue-select
                    :options="cities"
                    @input="getDistrict(address.city)"
                    v-model="address.city"
                    label="city_name"
                  />
                </b-form-group>
                <b-form-group label="Kecamatan">
                  <vue-select
                    :options="optAdd.district"
                    v-model="address.district"
                    label="subdistrict_name"
                  />
                </b-form-group>
                <b-form-group label="Alamat">
                  <b-form-textarea
                    id="textarea"
                    v-model="address.address"
                    placeholder="Alamat"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </form>
              <b-container slot="modal-footer" style="height: 50px">
                <b-row>
                  <b-col cols="9">
                    <el-switch
                      :active-value="1"
                      :inactive-value="0"
                      active-text="Jadikan alamat utama"
                      v-model="address.active"
                    ></el-switch>
                  </b-col>
                  <b-col cols="3">
                    <b-button variant="success" @click="addAddress"
                      >Simpan</b-button
                    >
                  </b-col>
                </b-row>
              </b-container>
            </b-modal>
          </b-tab>
          <b-tab title="Daftar Rekening">
            <div class="css-19kzrtu">
   <div>
      <div>
         <div class="css-69i1ev">
            <div>
               <div class="css-g5z3gs">Daftar Rekening Bank</div>
               <div class="css-enibhn">
                  <div>
                     <ul>
                        <li>Akun Rekening Bank yang aktif maksimal berjumlah 3 (tiga) buah.</li>
                     </ul>
                  </div>
               </div>
            </div>
            <button v-b-modal.modal-rekening class="css-4xfggq-unf-btn e1ggruw00"><span>Tambah Rekening</span></button>
         </div>
         <div class="css-1m9rngw ei0wc5h3">
            <div>
               <div class="css-1olrifc ei0wc5h2">
                  <div class="css-2ao6n4"><img class="css-9whsf3" src="https://ecs7.tokopedia.net/img/icon-bca.gif" alt="PT. BCA (BANK CENTRAL ASIA) TBK"></div>
                  <div>
                     <div class="css-1avvj1m">PT. BCA (BANK CENTRAL ASIA) TBK</div>
                     <div>
                        <div class="css-16l6s7r">2670068644</div>
                     </div>
                     <div class="css-15b1fts">a.n <strong>GARY ANDERSEN</strong></div>
                  </div>
               </div>
            </div>
            <div>
               <div><button class="unf-btn unf-btn--animate unf-btn--small css-16z2732-unf-btn e1yzwfai0" type="button"><span>Hapus</span></button></div>
            </div>
         </div>
      </div>
   </div>
</div>
<b-modal id="modal-rekening" title="Tambah Rekening Bank">
    <p class=" text-center">Rekening bank yang telah ditambahkan bisa kamu gunakan untuk penarikan Saldo Abubakar</p>
 <b-form>
        <b-form-group
          id="input-group-1"
          label="Nama Bank"
          label-for="input-1"
        >
          <b-form-select v-model="selected" :options="options" size="sm" class=""></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="No rekening" label-for="input-2">
          <b-form-input
            id="input-1"
            required

            placeholder="Masukan No Rek"
          ></b-form-input>
        </b-form-group>
      
      </b-form>

  </b-modal>
  <b-modal id="modal-password" title="Ganti Password">
  
 <b-form>
   

        <b-form-group id="input-group-2" label="Masukan Password Lama" label-for="input-2">
          <b-form-input
            id="input-1"
            required
            type="password"

          ></b-form-input>
         
        </b-form-group>
        <b-form-group id="input-group-2" label="Masukan Password Baru" label-for="input-2">
          <b-form-input
            id="input-1"
            required
            type="password"

          ></b-form-input>
         
        </b-form-group>
        <b-form-group id="input-group-2" label="Ulangi Password Baru" label-for="input-2">
          <b-form-input
            id="input-1"
            required
            type="password"

          ></b-form-input>
         
        </b-form-group>
      
      </b-form>

  </b-modal>
          </b-tab>
        </b-tabs>
      </div>
      <!-- card-body .// -->
    </article>
    <!-- card.// -->

    <article class="card p-2 mb-3">
      <div class="card-body">
        <h5 class="card-title mb-4">Recent orders</h5>

        <div class="row">
          <div class="col-md-6" v-for="x in lastOrd" :key="x.id">
            <figure class="itemside mb-3">
              <div class="aside" v-if="x.products && x.products.thumbnail">
                <img
                  v-bind:src="x.products.thumbnail.photo"
                  class="border img-sm"
                />
              </div>
              <figcaption class="info">
                <time class="text-muted">
                  <i class="fa fa-calendar-alt"></i>
                  {{ x.created_at.substr(0, 10) }}
                </time>
                <p>
                  <router-link
                    :to="`/product/${x.products.id}?name=${x.products.name}`"
                    style="color: black"
                  >
                    {{ x.products.name }}
                  </router-link>
                </p>
                <span class="text-warning">
                  {{ x.products.price | currency }} ({{ x.qty }})
                </span>
              </figcaption>
            </figure>
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- card-body .// -->
    </article>
    <!-- card.// -->
  </div>
</template>

<script>
import Axios from "axios";
// import { VDataTable } from "@/assets/vuetify/lib";
import vselect from "vue-select";
import "vue-select/dist/vue-select.css";
import { mapGetters } from "vuex";
import skeletonProfileVue from "../sections/skeleton-profile.vue";
export default {
  components: {
    "vue-select": vselect,
    skeletonProfileVue,
  },
  data() {
    return {
      src: require("@/assets/images/products/product1.jpg"),
      item1: require("@/assets/images/items/1.jpg"),
      item2: require("@/assets/images/items/2.jpg"),
      item3: require("@/assets/images/items/3.jpg"),
      tab: null,
      modal: false,
      loading: false,
      data: {},
      index: -1,
      address: {},
      dialog: false,
      fab: false,
      snack: {
        model: false,
        color: "purple",
        text: null,
      },
      items: ["Alamat", "Toko Saya"],
      optAdd: {
        cities: [],
        provinces: [],
        district: [],
      },
      lastOrd: [],
      options: [
          { value: null, text: 'Pilih nama Bank' },
          { value: 'a', text: 'BCA' },
          { value: 'b', text: 'Mandiri' },
          
        ],
      kelamin: [
        {value: 'Laki-laki', text: 'Laki-laki'},
        {value: 'Perempuan', text: 'Perempuan'}
      ]
    };
  },
  watch: {
    "$refs.tabs"(val) {
      console.log(val);
    },
    "$store.state.user"(val) {
      if (val.id == 0) {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    cities() {
      if (this.address.province) {
        return this.optAdd.cities.filter(
          (x) => x.province_id === this.address.province.province_id
        );
      } else {
        return [];
      }
    },
  },
  mounted() {
    const id = this.$store.state.user.id;
    this.getData(id);
    this.getProvCit();
  },
  methods: {
    changes(e) {
      this.data.file = e.target.files[0];
      this.data.profile = URL.createObjectURL(e.target.files[0]);
      // console.log(e)
      // console.log({ x: e.clientX, y: e.clientY })
    },
    changeAddress(item) {
      this.modal = true;
      this.address = Object.assign({}, item);
      this.index = this.data.address.indexOf(item);
      console.log(this.index);
      if (item.city) {
        this.getDistrict(item.city);
      }
    },
    addAddress() {
      console.log(this.index);
      if (this.index > -1) {
        Axios.put(`user-address/${this.address.id}`, this.address)
          .then((res) => {
            this.data.address[this.index] = res.data.data;
            this.$bvToast.toast(res.data.message, {
              title: "OK",
              autoHideDelay: 3000,
              appendToast: false,
            });
          })
          .catch((error) => {
            this.$bvToast.toast(error, {
              title: "Error",
              autoHideDelay: 3000,
              appendToast: false,
            });
          });
      } else {
        Axios.post(`user-address`, this.address)
          .then((res) => {
            this.data.address.push(res.data.data);
            this.$bvToast.toast(res.data.message, {
              title: "OK",
              autoHideDelay: 3000,
              appendToast: false,
            });
          })
          .catch((error) => {
            this.$bvToast.toast(error, {
              title: "Error",
              autoHideDelay: 3000,
              appendToast: false,
            });
          });
      }
      this.modal = false;
    },
    delAdd(add) {
      const index = this.data.address.indexOf(add);
      const c = confirm("Hapus alamat ?");
      if (c) {
        Axios.delete(`user-address/${add.id}`).then((res) => {
          this.data.address.splice(index, 1);
          this.$bvToast.toast(res.data.message, {
            title: "OK",
            autoHideDelay: 3000,
            appendToast: false,
          });
        });
      }
    },
    // get resource address
    getProvCit() {
      this.loading = true;
      Axios.get("address").then((res) => {
        this.optAdd.provinces = res.data.province;
        this.optAdd.cities = res.data.city;
        this.loading = false;
      });
    },
    getDistrict(city) {
      // console.log(city);
      this.optAdd.district = [];
      const cid = this.address.city;
      this.address.zip_code = cid.postal_code;
      Axios.get("address/subdistrict?city=" + cid.city_id).then((res) => {
        this.optAdd.district = res.data;
        console.log(res.data);
      });
    },
    // end
    getData(id) {
      this.loading = true;
      Axios.get(`/users/${id}`)
        .then((res) => {
          this.data = Object.assign({}, res.data.data);
          this.lastOrd = res.data.lastOrder;
          this.loading = false;
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 3000,
            appendToast: false,
          });
        });
    },
    onClosed() {
      this.dialog = false;
    },

    updateProfile() {
      const { data } = this;
      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("phone", data.phone);
      fd.append("email", data.email);
      fd.append("username", data.username);
      fd.append("tgl_lahir", data.tgl_lahir);
      fd.append("jenis_kelamin", data.jenis_kelamin);
      if (data.file) {
        fd.append("file", data.file);
      }
      Axios.post(`/users/${this.$store.state.user.id}`, fd)
        .then((res) => {
          this.data = Object.assign({}, res.data.data);
          this.$bvToast.toast(res.data.message, {
            title: "Sukses",
            autoHideDelay: 3000,
            appendToast: false,
          });
        })
        .catch((error) => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 3000,
            appendToast: false,
          });
        });
    },
  },
};
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
.css-19kzrtu {
    padding: 24px;
}
.css-69i1ev {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.css-g5z3gs {
    font-size: 1.71429rem;
    font-weight: 800;
    color: rgba(49, 53, 59, 0.96);
    margin-bottom: 12px;
}
.css-enibhn {
    font-size: 0.857143rem;
}
.css-enibhn ul {
    padding: 0px;
}
.css-enibhn li {
    position: relative;
    padding-left: 16px;
    list-style: none;
    margin: 4px 0px;
}
.css-4xfggq-unf-btn {
    color: rgb(255, 255, 255);
    font-family: "Nunito Sans", sans-serif;
    font-size: 0.857143rem;
    height: 40px;
    line-height: 24px;
    width: auto;
    border-radius: 8px;
    font-weight: 800;
    outline: none;
    padding: 0px 16px;
    transition: background 0.8s ease 0s;
    cursor: pointer;
    display: inline-block;
    background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center center / 15000% rgb(3, 172, 14);
    border: none;
    text-indent: initial;
    position: relative;
}
.css-4xfggq-unf-btn span {
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
.css-1m9rngw {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    border-bottom: none;
    padding: 24px 0px;
}
.css-1olrifc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    opacity: 1;
}
.css-2ao6n4 {
    width: 80px;
    margin-right: 24px;
}
.css-9whsf3 {
    max-width: 100%;
}
.css-1avvj1m {
    font-size: 0.857143rem;
    color: rgba(0, 0, 0, 0.54);
}
.css-16l6s7r {
    font-size: 1.14286rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
}
.css-15b1fts {
    font-size: 1.14286rem;
    color: rgba(0, 0, 0, 0.7);
}
.css-16z2732-unf-btn {
    color: rgb(49, 53, 59);
    font-size: 0.857143rem;
    height: 32px;
    line-height: 16px;
    width: auto;
    border-radius: 8px;
    font-weight: 800;
    outline: none;
    overflow: hidden;
    padding: 0px 16px;
    position: relative;
    text-overflow: ellipsis;
    transition: background 0.8s ease 0s;
    white-space: nowrap;
    display: inline-block;
    background: radial-gradient(circle, transparent 1%, transparent 1%) center center / 15000% transparent;
    border: 1px solid rgb(229, 231, 233);
    text-indent: initial;
}
.css-16z2732-unf-btn span {
    opacity: 0.44;
    position: relative;
    bottom: 0px;
    transition: opacity 0.3s linear 0s, bottom 0.3s linear 0s;
}
</style>
