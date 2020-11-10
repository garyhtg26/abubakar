<template>
  <div class="login">
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-body" v-bind:style="{ 'background-image': 'url(' + image1 + ')' }">

                        <router-link class="logo " to="/">Abubakar</router-link>
                          <h6 style="color:#B6AD15 ;margin-top: -10px;margin-bottom: 30px;font-size: 13px;" class="text-center">Belanja Halal tanpa Riba</h6>
                        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item mr-2">
                                <a class="btn-success nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item ml-2">
                                <a class="btn-success nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">

                            <h5 style="color:black;" class="text-center">Masuk</h5>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" @keyup.enter="login" v-model="form.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn btn-success" @click="login">Login</button>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">

                             <h5 style="color:black;" class="text-center">Daftar</h5>

                            <div class="form-group">
                                <label for="name">Nama</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Nama ">
                            </div>
                            <div class="form-group">
                                <label for="name">No Hp</label>
                                <input type="text" v-model="form.phone" class="form-control" id="phone" placeholder="No">
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email"  v-model="form.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="password"> Confirm Password</label>
                                <input type="password" v-model="form.c_password" class="form-control" id="c_password" placeholder="Confirm Password">
                            </div>

                            <div class="form-group">
                                <button class="btn btn-success" @click="register">Signup</button>
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

import { fb, db } from '../firebase';
import axios from 'axios'
export default {
  name: "Login",

  props: {
    msg: String
  },
  data() {
    return {
      form: {},
      image: require('@/assets/images/nav/background.png'),
      image1: require('@/assets/images/nav/background4.png')
    }
  },

  methods: {
    login() {

      this.$store.dispatch("login", this.form);

    },
    register() {
      this.loading = true;
      axios
        .post("/auth/register", this.form)
        .then((res) => {
          this.$notify.success({
            title: "Sukses",
            message: res.data.message,
          });
          this.loading = false;
        })
        .catch((error) => {
          this.$notify.error({
            title: "Sorry :(",
            message: error,
          });
        });
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
  .modal-body{
        background-position: top;
    background-repeat: no-repeat;
    background-size: 500px 160px;
  }
   /deep/ .logo:hover,
   /deep/ .logo:focus,
   .logo {
     color:white; 
     font-size:50px;
     font-weight: bold;
     font-family: 'RamadhanKarim';
         margin-right: 50px;
             display: block;
    margin: auto;
    text-align: center;
   }
   .btn-success{
         background-color: #199C43 !important;
    border-color: #199C43 !important;
     
   }
</style>
