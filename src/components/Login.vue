<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div
            class="modal-body"
            v-bind:style="{ 'background-image': 'url(' + image1 + ')' }"
          >
            <router-link class="logo" to="/">
              <img style="width:250px" :src="require('@/assets/images/logo.png')" alt="Abubakar" />
            </router-link>
            <h6
              style="
                color: #b6ad15;
                margin-top: -10px;
                margin-bottom: 30px;
                font-size: 13px;
              "
              class="text-center"
            >
              Belanja Halal tanpa Riba
            </h6>
            <ul
              class="nav nav-fill nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item mr-2">
                <a
                  class="btn-success nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  ref="signin"
                >
                  Masuk
                </a>
              </li>
              <li class="nav-item ml-2">
                <a
                  ref="signup"
                  class="btn-success nav-link"
                  id="pills-register-tab"
                  data-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >
                  Daftar
                </a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 style="color: black" class="text-center">
                  {{ isForgot ? "Forgot Password" : "Login" }}
                </h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">
                    {{ isForgot ? "Phone Number" : "Password" }}
                  </label>
                  <input
                    :type="isForgot ? 'number' : 'password'"
                    @keyup.enter="login"
                    v-model="form.password"
                    class="form-control"
                    id="exampleInputPassword1"
                    :placeholder="isForgot ? 'Phone Number' : 'Password'"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-success" @click="login">
                    {{ isForgot ? "Submit" : "Login" }}
                  </button>
                  <button
                    :class="`btn ${
                      isForgot ? 'btn-primary' : 'btn-default'
                    } right`"
                    style="float: right"
                    @click="forgot"
                  >
                    {{ isForgot ? "Back To Login" : "Forgot Password" }}
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 style="color: black" class="text-center">Daftar</h5>

                <div class="form-group">
                  <label for="name">Nama</label>
                  <input
                    type="text"
                    v-model="form.name"
                    class="form-control"
                    id="name"
                    placeholder="Nama "
                  />
                </div>
                <div class="form-group">
                  <label for="name">No Hp</label>
                  <input
                    type="text"
                    v-model="form.phone"
                    class="form-control"
                    id="phone"
                    placeholder="No"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="form.password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Confirm Password</label>
                  <input
                    type="password"
                    v-model="form.c_password"
                    class="form-control"
                    id="c_password"
                    placeholder="Confirm Password"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-success" @click="register">
                    Signup
                  </button>
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
import { fb, db } from "../firebase";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Login",

  props: {
    msg: String,
  },
  data() {
    return {
      form: {},
      isForgot: false,
      image: require("@/assets/images/nav/background.png"),
      image1: require("@/assets/images/nav/background4.png"),
      logo: require("@/assets/images/logo.png"),
    };
  },
  watch: {
    "$store.state.tabPosition"(val) {
      if (val > 0) {
        this.$refs.signup.click();
      } else {
        this.$refs.signin.click();
      }
    },
  },

  methods: {
    login() {
      if (this.isForgot) {
        const { form } = this;
        axios
          .post("auth/forgot", { phone: form.password, email: form.email })
          .then((res) => {
            this.$notify.success({
              title: "Sukses",
              message: res.data.message,
            });
            this.loading = false;
          });
      } else {
        this.$store.dispatch("login", this.form);
      }
    },
    forgot() {
      this.isForgot = !this.isForgot;
    },
    register() {
      this.loading = true;
      axios
        .post("/auth/register", this.form)
        .then((res) => {
          Swal.fire({
            title: "Sukses",
            html: res.data.message,
            type: "success",
          });
          this.loading = false;
        })
        .catch((error) => {
          this.$notify.error({
            title: "Sorry :(",
            message: error,
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-body {
  background-position: top;
  background-repeat: no-repeat;
  background-position-y: -80px;
  background-size: 500px 260px;
}
/deep/ .logo:hover,
/deep/ .logo:focus,
.logo {
  color: white;
  font-size: 50px;
  font-weight: bold;
  font-family: "RamadhanKarim";
  margin-right: 50px;
  display: block;
  margin: auto;
  text-align: center;
}
.btn-success {
  background-color: #199c43 !important;
  border-color: #199c43 !important;
}
.seetoko {
  border-radius: 50px;
  background-color: #28a745;
  color: white;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
