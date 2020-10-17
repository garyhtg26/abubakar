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
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn btn-success" @click="login">Login</button>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">

                             <h5 style="color:black;" class="text-center">Daftar</h5>

                            <div class="form-group">
                                <label for="name">Your name</label>
                                <input type="text" v-model="name" class="form-control" id="name" placeholder="Your nice name">
                            </div>

                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
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

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      image: require('@/assets/images/nav/background.png'),
      image1: require('@/assets/images/nav/background4.png')
    }
  },

  methods: {
    login() {

      fb.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          $('#login').modal('hide')
          this.$router.replace('admin');
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });

    },
    register() {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          $('#login').modal('hide')

          db.collection("profiles").doc(user.user.uid).set({
              name: this.name
            })
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });

          this.$router.replace('admin');
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
