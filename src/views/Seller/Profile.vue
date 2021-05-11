<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <h6 slot="label">
        <i class="el-icon-s-shop"></i>
        <strong> Profile Toko </strong>
      </h6>
      <div class="mr-4 mt-3">
        <el-form
          ref="form"
          :model="form"
          label-width="120px"
          style="margin-top: 60px"
        >
          <el-form-item label="Nama Toko">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="No Rekening">
                <el-input v-model="form.payment_no"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Nama Bank">
                <el-input v-model="form.payment_bank"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="Provinsi">
                <vue-select
                  class="w-100"
                  :clearable="false"
                  :options="optAdd.provinces"
                  v-model="form.provinsi"
                  label="province"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Kota">
                <vue-select
                  :clearable="false"
                  :options="cities"
                  @input="getDistrict(form.kota)"
                  v-model="form.kota"
                  label="city_name"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Kecamatan">
                <vue-select
                  :options="optAdd.district"
                  :clearable="false"
                  v-model="form.kecamatan"
                  label="subdistrict_name"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="Deskripsi Toko">
            <el-input
              type="textarea"
              autosize
              v-model="form.deskripsi"
            ></el-input>
          </el-form-item>
          <el-row style="margin-left: 120px">
            <el-col :span="12">
              <el-upload
                class="upload-demo"
                drag
                action="#"
                :on-change="addBanner"
                multiple
                :auto-upload="false"
                :show-file-list="false"
              >
                <img
                  v-if="form.background"
                  :src="form.background"
                  height="100px"
                />
                <i v-else class="el-icon-upload"></i>
                <div class="el-upload__text">
                  <em>Upload Banner</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  Ukuran Banner Photo < 500kb
                </div>
              </el-upload>
            </el-col>
            <el-col :span="12">
              <el-upload
                class="avatar-uploader"
                action="#"
                accept=".png,.jpeg,.jpg,.svg"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="addLogo"
                drag=""
              >
                <img
                  v-if="form.logo"
                  height="180px"
                  :src="form.logo"
                  class="avatar"
                />
                <i v-else class="el-icon-upload"></i>
                <div class="el-upload__text">
                  <em>Uploa Logo</em>
                </div>
                <div class="el-upload__tip" slot="tip">Ukuran Logo < 500kb</div>
              </el-upload>
            </el-col>
          </el-row>
        </el-form>
        <div style="margin-top: 60px"></div>
        <div style="padding: 14px" align="right">
          <el-button type="primary" @click="onSubmit">Create</el-button>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <h6 slot="label">
        <i class="el-icon-truck"></i>
        <strong> Pengaturan Kurir </strong>
      </h6>
      <div>
        <el-transfer
          class="w-100"
          filterable
          :titles="['Available Courier', 'Selected Courier']"
          v-model="myCourier"
          :data="couriers"
        >
        </el-transfer>
        <el-button
          class="mt-5"
          style="float: right"
          type="success"
          round
          @click="saveCourier"
        >
          Success
        </el-button>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import vselect from "vue-select";
import "vue-select/dist/vue-select.css";
import Axios from "axios";
export default {
  components: {
    "vue-select": vselect,
  },
  data() {
    return {
      form: {
        name: "",
        delivery: false,
        desc: "",
      },
      optAdd: {
        provinces: [],
        cities: [],
        district: [],
      },
      isNull: false,
      couriers: [],
      myCourier: [],
      scCourier: [],
    };
  },
  computed: {
    cities() {
      if (this.form.provinsi) {
        return this.optAdd.cities.filter(
          (x) => x.province_id === this.form.provinsi.province_id
        );
      } else {
        return [];
      }
    },
  },
  mounted() {
    this.getData();
    this.getProvCit();
    this.$store.dispatch("checkAuth");
  },
  methods: {
    getData() {
      Axios.get("stores").then((res) => {
        if (res.data.data == null) {
          this.isNull = true;
        } else {
          this.form = res.data.data;
        }
        this.getCourier();
      });
    },
    getCourier() {
      Axios.get("courier").then((res) => {
        this.couriers = res.data.couriers.map(function (c) {
          return {
            key: c.id,
            label: c.name,
          };
        });
        this.myCourier = res.data.data.couriers.map((x) => x.id);
      });
    },
    saveCourier() {
      const form = {
        store_id: this.form.id,
        couriers: this.myCourier,
      };
      Axios.post("courier", form).then((res) => {
        this.$message(res.data.message);
      });
    },
    getProvCit() {
      this.loading = true;
      Axios.get("address").then((res) => {
        this.optAdd.provinces = res.data.province;
        this.optAdd.cities = res.data.city;
      });
    },
    getDistrict(city) {
      this.optAdd.district = [];
      const cid = this.form.kota;
      this.form.zip_code = cid.postal_code;
      Axios.get("address/subdistrict?city=" + cid.city_id).then((res) => {
        this.optAdd.district = res.data;
      });
    },

    onSubmit() {
      const { form } = this;
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("provinsi", JSON.stringify(form.provinsi));
      fd.append("kota", JSON.stringify(form.kota));
      fd.append("kecamatan", JSON.stringify(form.kecamatan));
      fd.append("deskripsi", form.deskripsi);
      fd.append("payment_no", form.payment_no);
      fd.append("payment_bank", form.payment_bank);
      fd.append("photo", form.logo);
      fd.append("header", form.header);
      fd.append("store_id", form.id);
      if (form.id) {
        Axios.post("stores/" + form.id, fd)
          .then((res) => {
            this.$notify.success({
              title: "Success",
              message: res.data.message,
              offset: 100,
            });
          })
          .catch((error) => {
            this.$notify.error({
              title: "Sorry :(",
              message: error,
            });
          });
      } else {
        Axios.post("stores", fd)
          .then((res) => {
            this.$notify.success({
              title: "Success",
              message: res.data.message,
              offset: 100,
            });
          })
          .catch((error) => {
            this.$notify.error({
              title: "Sorry :(",
              message: error,
            });
          });
      }
    },
    addLogo(e) {
      console.log(e);
      if (e.size / 1000 > 550) {
        this.$message.error("Ukuran foto tidak boleh lebih dari 500KB");
      } else {
        this.form.photo = URL.createObjectURL(e.raw);
        this.form.logo = e.raw;
      }
      this.$forceUpdate();
    },
    addBanner(e) {
      if (e.size / 1000 > 550) {
        this.$message.error("Ukuran foto tidak boleh lebih dari 500KB");
      } else {
        this.form.header = e.raw;
        this.form.background = URL.createObjectURL(e.raw);
        this.$forceUpdate();
      }
    },
  },
};
</script>
<style scoped>
.el-transfer-panel {
  width: 500px !important;
}
h6 {
  margin-top: 10px !important;
}
</style>