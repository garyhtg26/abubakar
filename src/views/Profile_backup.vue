<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 align-items-center">
          <div class="col-md-6 ml-3">
            <h3>Profile Toko</h3>
            <p>Change your profile settings here</p>
          </div>
          <pre>
            {{ profile }}
          </pre>
          <div class="col-md-5">
            <img
              src="/img/svg/profile.svg"
              width="300"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      <div class="profile-content">
        <ul class="nav nav-pills ml-3" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              Profile
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="account-tab"
              data-toggle="tab"
              href="#account"
              role="tab"
              aria-controls="account"
              aria-selected="false"
            >
              Account settings
            </a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active pt-3"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name=""
                      v-model="profile.name"
                      placeholder="Full name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.phone"
                      placeholder="Phone"
                      class="form-control"
                    />
                  </div>
                </div>
                <el-row style="width: 100%">
                  <el-col :span="8">
                    <el-select
                      v-model="profile.provinsi"
                      filterable
                      placeholder="Provinsi"
                      class="grid-content"
                    >
                      <el-option
                        v-for="item in optAdd.provinces"
                        :key="item.province_id"
                        :label="item.province"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="8">
                    <el-select
                      v-model="profile.kota"
                      filterable
                      placeholder="Kota"
                      @change="getDistrict(profile.kota)"
                      class="grid-content"
                    >
                      <el-option
                        v-for="item in cities"
                        :key="item.city_id"
                        :label="item.city_name"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="8">
                    <el-select
                      v-model="profile.kecamatan"
                      filterable
                      placeholder="Kecamatan"
                      class="grid-content"
                    >
                      <el-option
                        v-for="item in optAdd.district"
                        :key="item.subdistrict_id"
                        :label="item.subdistrict_name"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Save Changes"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade pt-3"
            id="account"
            role="tabpanel"
            aria-labelledby="account-tab"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-">
                  <div class="alert alert-info">
                    Please use the Reset password email button for reseting the
                    password. The form doens't work currently
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="account.name"
                      placeholder="User name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="account.email"
                      placeholder="Email address"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="account.password"
                      placeholder="New password"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="account.confirmPassword"
                      placeholder="Confirm password"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="file"
                      @change="uploadImage"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Save Changes"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="button"
                      value="Reset password email"
                      class="btn btn-success w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";

export default {
  name: "profile",
  components: {
    VueEditor,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null,
      },
      isNull: false,
      optAdd: {
        provinces: [],
        cities: [],
        district: [],
      },
      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null,
      },
    };
  },
  computed: {
    cities() {
      if (this.profile.provinsi) {
        return this.optAdd.cities.filter(
          (x) => x.province_id === this.profile.provinsi.province_id
        );
      } else {
        return [];
      }
    },
  },
  mounted() {
    this.getData();
    this.getProvCit();
  },
  methods: {
    getData() {
      Axios.get("stores").then((res) => {
        if (res.data.data == null) {
          this.isNull = true;
        } else {
          this.profile = res.data.data;
        }
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
      const cid = this.profile.kota;
      this.profile.zip_code = cid.postal_code;
      Axios.get("address/subdistrict?city=" + cid.city_id).then((res) => {
        this.optAdd.district = res.data;
      });
    },
    uploadImage() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
