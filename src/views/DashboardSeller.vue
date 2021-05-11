<template>
  <div>
    <section class="w3l-about1" style="margin-top: 85px">
      <div class="new-block top-bottom">
        <div class="container-fluid p-5">
          <div class="row">
            <!-- <div class="middle-section col-xs-5">
              <div class="section-width">
                <h1>Perluas Pasar Anda Hari ini</h1>
              </div>
              <div class="link-list-menu">
                <ul>
                  <li>Temukan Jaringan Bisnis Anda</li>
                  <li>Order Datang Dalam Skala Besar</li>
                  <li>Negosiasi Secara Online</li>
                  <li>Membina Kepercayaan Dengan Pembeli</li>
                </ul>
              </div>
            </div> -->
            <div class="main-container col-xs-5">
              <form
                name="signupForm"
                method="post"
                autocomplete="off"
                ng-submit="vm.submitForm(signupForm.$valid)"
                novalidate=""
                class="ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-email"
              >
                <h2
                  class="mb-4"
                  style="text-align: center; font-weight: 600; font-size: 22px"
                >
                  Daftar Sebagai Penjual
                </h2>
                <div class="form-group">
                  <label for="name"> Nama Lengkap </label>
                  <input
                    autocomplete="off"
                    type="text"
                    class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-minlength"
                    id="name"
                    name="name"
                    placeholder=" Nama Lengkap "
                    v-model="forms.name"
                    ng-minlength="3"
                    required=""
                  />
                </div>
                <div class="form-group">
                  <label for="email"> Alamat E-mail </label>
                  <input
                    type="email"
                    class="form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    autocomplete="off"
                    v-model="forms.email"
                    required=""
                    data-ng-blur="vm.checkExistEmail(vm.params.email)"
                  />
                </div>
                <div class="form-group">
                  <label for="password"> Password </label>
                  <input
                    autocomplete="off"
                    type="password"
                    class="form-control ng-pristine ng-untouched with-ico-right ng-empty ng-invalid ng-invalid-required ng-valid-minlength"
                    id="password"
                    name="password"
                    placeholder="Password"
                    v-model="forms.password"
                    ng-minlength="6"
                    toggle-password=""
                    required=""
                  /><i class="r-icon r-icon_eye"></i>
                </div>
                <button
                  style="font-weight: 600"
                  type="submit"
                  class="mt-4 btn btn-primary btn-block"
                  ng-disabled="vm.loading"
                >
                  <!-- ngIf: vm.loading -->
                  Daftar
                </button>
                <a
                  style="font-weight: 600"
                  role="button"
                  class="mt-3 btn btn-secondary btn-block"
                  data-toggle="modal"
                  data-target="#login"
                  @click="$store.commit('tabPosition', 0)"
                >
                  Masuk Akun
                </a>
                <div class="text-center mt-2">
                  Sudah mendaftar tapi belum mendapat email verifikasi?
                  <a
                    class="gtm-resend-email-verification-register text-primary"
                    href="#"
                    >Kirim ulang email verifikasi</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w3l-about2">
      <div class="features-main py-5">
        <div class="container py-lg-3">
          <h3 class="stat-title center">Kenapa Berjualan di Abubakar?</h3>
          <div class="row features">
            <div class="col-md-4 feature-1 mt-5">
              <div class="feature-body">
                <div class="feature-images">
                  <span>15k+</span>
                </div>
                <div class="feature-info mt-4">
                  <h3 class="feature-titel my-2">Total Aktif User</h3>
                  <p class="feature-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum repellat dolor facere ipsum dolorem autem voluptate
                    tempora ad.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 feature-2 mt-5">
              <div class="feature-body">
                <div class="feature-images">
                  <span>40M+</span>
                </div>
                <div class="feature-info mt-4">
                  <h3 class="feature-titel my-2">Total Transaksi Harian</h3>
                  <p class="feature-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum repellat dolor facere ipsum dolorem autem voluptate
                    tempora ad.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 feature-3 mt-5">
              <div class="feature-body">
                <div class="feature-images">
                  <span>100+</span>
                </div>
                <div class="feature-info mt-4">
                  <h3 class="feature-titel my-2">Mitra Yang Bergabung</h3>
                  <p class="feature-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum repellat dolor facere ipsum dolorem autem voluptate
                    tempora ad.
                  </p>
                  <div class="hover"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w3l-about5" style="background: white !important">
      <div class="py-5">
        <div class="container py-lg-3">
          <div class="heading text-center mx-auto">
            <h3 class="head">Market solutions for you business</h3>
            <p class="my-3 head">
              Build an online presence with this professional bootstrap 4
              landing page.
            </p>
          </div>
          <div class="history-info mt-5">
            <div class="position-relative">
              <img
                src="../assets/images/video.jpg"
                class="img-fluid"
                alt="video-popup"
              />
              <!-- <a href="#popup-video" class="play-view text-center position-absolute">
						<span class="video-play-icon">
							<span class="fa fa-play"></span>
						</span>
					</a> -->

              <a
                href="#small-dialog"
                class="popup-with-zoom-anim play-view text-center position-absolute"
              >
                <span class="video-play-icon">
                  <span class="fa fa-play"></span>
                </span>
              </a>

              <!-- dialog itself, mfp-hide class is required to make dialog hidden -->
              <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                <iframe
                  src="https://www.youtube.com/embed/JemJbNJ4ZtU"
                  allowfullscreen=""
                ></iframe>
              </div>

              <!-- popup -->
              <div id="popup-video" class="pop-overlay">
                <div class="popup">
                  <div class="align-popup-video">
                    <iframe
                      src="https://www.youtube.com/embed/JemJbNJ4ZtU"
                      allowfullscreen
                    ></iframe>
                    <a class="close" href="#portfolio">&times;</a>
                  </div>
                </div>
              </div>
              <!-- /popup -->
            </div>
            <div class="history mt-5">
              <h4>A Brief History</h4>
              <p class="mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                corrupti odit? At iure facere, porro repellat officia quas
                laboriosam repudiandae dolorem ipsum, dolores magnam assumenda
                soluta odit harum voluptate inventore ipsa maiores fugiat
                accusamus eos nulla. Iure voluptatibus explicabo officia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w3l-about3 py-5" style="background: white !important">
      <div class="container py-lg-3">
        <h3 class="text-center mb-3 timeline-title">We Have Come A Long Way</h3>
        <ul class="timeline">
          <!-- Item 1 -->
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Our Start</span>
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium quas voluptatum ea culpa repellendus porro mollitia
                quidem incidunt ullam ducimus!
              </div>
            </div>
          </li>

          <!-- Item 2 -->
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">The Early Days</span>
              </div>
              <div class="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                cumque exercitationem maiores alias! Necessitatibus nulla
                nostrum obcaecati iusto omnis dignissimos tempore ratione ab.
                Saepe qui voluptas nihil ullam maxime odio.
              </div>
            </div>
          </li>

          <!-- Item 3 -->
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Working Flow</span>
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate nemo, accusantium libero eligendi officiis iusto.
              </div>
            </div>
          </li>

          <!-- Item 4 -->
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">The Expansion</span>
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate nemo, accusantium libero eligendi officiis iusto.
              </div>
            </div>
          </li>

          <!-- Item 5 -->
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">At Present</span>
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate nemo, accusantium libero eligendi officiis iusto.
              </div>
            </div>
          </li>

          <!-- Item 2 -->
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">Future plans</span>
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                ducimus pariatur, molestiae autem suscipit totam error
                reprehenderit dolores nostrum reiciendis quas voluptas et
                repellat velit, qui eos ut minus consequuntur, quam facere?
                Culpa modi, facere laborum distinctio perspiciatis nesciunt
                sunt.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="w3l-about4" style="background: white !important">
      <div class="contact1-bg py-5">
        <div class="container py-lg-3">
          <div class="contact-main row align-items-center">
            <div class="col-md-6">
              <div class="column">
                <h3 class="header mb-4">We are here for you</h3>
                <p class="head-main mb-3">
                  Donec eu lorem et nulla eleifend convallis non dapibus est.
                  Morbi erat nibh, sollicitudin vel est ut, egestas sollicitudin
                  metus. Mauris et mi sed dapibus urna condimentum, et maximus
                  lectus dapibus mattis.
                </p>
              </div>
              <div class="column2">
                <h6 class="contact-address">
                  Market - #135 block, Barnard St. Brooklyn, NY 10036, USA
                </h6>
              </div>
            </div>
            <div class="col-md-6 map mt-md-0 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                style="border: 0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- about-block6 -->
    <section class="w3l-about6 py-5" style="background: white !important">
      <div class="container py-md-3 text-center">
        <div class="heading text-center mx-auto">
          <h3 class="head">We Would Love to Talk</h3>
          <p class="my-3 head">
            We love conversations, and would love to have one with you! Whether
            you’re looking for a speaker, an awesome career, or want to get
            started with a rewards program, we would love hear from you.
          </p>
        </div>
        <div class="buttons mt-4">
          <a href="#url" class="btn btn-primary btn-demo ml-2">Get in touch</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      forms: {},
    };
  },
  methods: {
    daftar() {
      axios
        .post("/auth/register", this.forms)
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

<style scoped lang="scss">
/* Styles for dialog window */
#small-dialog {
  background: white;
  padding: 5px;
  max-width: 750px;
  margin: 40px auto;
  position: relative;
}

div#small-dialog iframe {
  width: 100%;
  height: 400px;
  display: block;
}

/**
 * Fade-zoom animation for first dialog
 */

/* start state */
.my-mfp-zoom-in .zoom-anim-dialog {
  opacity: 0;

  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
}

/* animate in */
.my-mfp-zoom-in.mfp-ready .zoom-anim-dialog {
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

/* animate out */
.my-mfp-zoom-in.mfp-removing .zoom-anim-dialog {
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);

  opacity: 0;
}

/* Dark overlay, start state */
.my-mfp-zoom-in.mfp-bg {
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

/* animate in */
.my-mfp-zoom-in.mfp-ready.mfp-bg {
  opacity: 0.8;
}

/* animate out */
.my-mfp-zoom-in.mfp-removing.mfp-bg {
  opacity: 0;
}

/**
 * Fade-move animation for second dialog
 */

/* at start */
.my-mfp-slide-bottom .zoom-anim-dialog {
  opacity: 0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;

  -webkit-transform: translateY(-20px) perspective(600px) rotateX(10deg);
  -moz-transform: translateY(-20px) perspective(600px) rotateX(10deg);
  -ms-transform: translateY(-20px) perspective(600px) rotateX(10deg);
  -o-transform: translateY(-20px) perspective(600px) rotateX(10deg);
  transform: translateY(-20px) perspective(600px) rotateX(10deg);
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {
  opacity: 1;
  -webkit-transform: translateY(0) perspective(600px) rotateX(0);
  -moz-transform: translateY(0) perspective(600px) rotateX(0);
  -ms-transform: translateY(0) perspective(600px) rotateX(0);
  -o-transform: translateY(0) perspective(600px) rotateX(0);
  transform: translateY(0) perspective(600px) rotateX(0);
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {
  opacity: 0;

  -webkit-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  -moz-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  -ms-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  -o-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  transform: translateY(-10px) perspective(600px) rotateX(10deg);
}

/* Dark overlay, start state */
.my-mfp-slide-bottom.mfp-bg {
  opacity: 0;

  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready.mfp-bg {
  opacity: 0.8;
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing.mfp-bg {
  opacity: 0;
}

.w3l-about1 .new-block {
  background-size: cover;
  background-image: 
    url(../assets/images/seller.png);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: inherit;
  min-height: calc(100vh - 0px);
  display: grid;
  align-items: center;
  padding: 2rem 0;
}

.w3l-about1 .middle-section {
  width: 450px;
  height: 260px;
  background-color: #f80;
  border-radius: 4px;
  color: #fff;
  padding: 30px;
  margin-top: 85px;
  opacity: 0.9;
}

.w3l-about1 .middle-section h1 {
  color: #ffffff;
  font-size: 48px;
  line-height: 40px;
}

.w3l-about1 .link-list-menu p {
  font-size: 16px;
  color: #eee;
  line-height: 26px;
  padding-top: 25px;
}

// @media (max-width: 800px) {
//   .w3l-about1 .middle-section a {
//     margin-top: 40px; } }

// @media (max-width: 667px) {
//   .w3l-about1 .link-list-menu {
//     max-width: 523px; }
//   .w3l-about1 .middle-section a {
//     margin-top: 30px; }
//   .w3l-about1 .link-list-menu p {
//     font-size: 15px;
//     line-height: 22px; } }

// @media (max-width: 600px) {
//   .w3l-about1 .link-list-menu p {
//     padding-top: 13px; } }

// @media (max-width: 480px) {
//   .w3l-about1 .link-list-menu p {
//     font-size: 19px;
//     line-height: 25px; } }

// @media (max-width: 440px) {
//   .w3l-about1 .middle-section h2 {
//     font-size: 30px;
//     line-height: 40px; } }

// @media (max-width: 384px) {
//   .w3l-about1 .link-list-menu p {
//     font-size: 18px; }
//   .w3l-about1 .middle-section a {
//     margin-top: 25px; } }

// @media (max-width: 320px) {
//   .w3l-about1 .link-list-menu {
//     width: 281px; }
//   .w3l-about1 .link-list-menu p {
//     font-size: 20px; } }

.w3l-about2 .features-main {
  background: #fafafa;
}

.w3l-about2 h3.stat-title {
  font-size: 32px;
  line-height: 44px;
  color: #0f0f1a;
}

.w3l-about2 .feature-images {
  display: block;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  box-shadow: 0px 9px 24px 5px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 9px 24px 5px #e8e8f0;
  background: #fff;
}

.w3l-about2 .feature-images span {
  color: #151965;
  display: block;
  font-size: 24px;
  font-weight: bold;
  line-height: 120px;
}

.w3l-about2 h3.feature-titel {
  font-size: 24px;
  line-height: 32px;
  font-weight: normal;
  color: #0f0f1a;
}

.w3l-about2 p.feature-text {
  color: #6c757d;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

@media (max-width: 1280px) {
  .w3l-about2 .feature-info {
    padding: 0 10px;
  }
  .w3l-about2 p.feature-text {
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  .w3l-about2 .feature-info {
    padding: 0 0px;
  }
}

@media (max-width: 767px) {
  .w3l-about2 p.feature-text {
    font-size: 15px;
  }
}

.w3l-about3 h3.timeline-title {
  font-size: 32px;
  line-height: 44px;
  color: #0f0f1a;
}

.w3l-about3 .timeline {
  position: relative;
  width: 860px;
  margin: 0 auto;
  padding: 4.5rem 0;
  list-style-type: none;
}

.w3l-about3 .timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: " ";
  display: block;
  width: 4px;
  height: 100%;
  margin-left: -2px;
  background: #ff8556;
}

.w3l-about3 .timeline li {
  padding: 1em 0;
}

.w3l-about3 .timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.w3l-about3 .direction-l {
  position: relative;
  width: 400px;
  float: left;
  text-align: right;
}

.w3l-about3 .direction-r {
  position: relative;
  width: 400px;
  float: right;
}

.w3l-about3 .flag-wrapper {
  position: relative;
  display: inline-block;
  text-align: center;
}

.w3l-about3 .flag {
  position: relative;
  display: inline;
  padding: 0px 10px;
  border-radius: 5px;
  font-weight: bold;
  text-align: left;
  font-size: 22px;
  color: #151965;
}

.w3l-about3 .direction-l .flag:before,
.w3l-about3 .direction-r .flag:before {
  position: absolute;
  top: 5px;
  right: -47px;
  content: " ";
  display: block;
  width: 34px;
  height: 34px;
  margin-top: -10px;
  background: #ff8556;
  border-radius: 10px;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 8;
  box-shadow: 1px 2px 6px 1px rgba(53, 54, 102, 0.08);
}

.w3l-about3 .direction-r .flag:before {
  left: -47px;
}

.w3l-about3 .desc {
  margin: 1em 0.75em 0 0;
  color: #6c757d;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

.w3l-about3 .direction-r .desc {
  margin: 1em 0 0 0.75em;
}

@media screen and (max-width: 991px) {
  .w3l-about3 .timeline {
    width: 660px;
  }
  .w3l-about3 .direction-l {
    width: 300px;
  }
  .w3l-about3 .direction-r {
    width: 300px;
  }
}

@media screen and (max-width: 736px) {
  .w3l-about3 .timeline {
    width: 100%;
  }
  .w3l-about3 .timeline li {
    padding: 2em 0;
  }
  .w3l-about3 .direction-l,
  .w3l-about3 .direction-r {
    float: none;
    width: 100%;
    text-align: center;
  }
  .w3l-about3 .flag-wrapper {
    text-align: center;
  }
  .w3l-about3 .direction-l .flag:before,
  .w3l-about3 .direction-r .flag:before {
    top: -30px;
    left: 50%;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    border: 8px solid #fff;
  }
  .w3l-about3 .desc {
    position: relative;
    margin: 1em 0 0 0;
    padding: 1em;
    background: whitesmoke;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    z-index: 15;
  }
  .w3l-about3 .direction-l .desc,
  .w3l-about3 .direction-r .desc {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;
    z-index: 8;
  }
}

.w3l-about4 a {
  display: inline-block;
}

.w3l-about4 .header {
  font-size: 32px;
  line-height: 44px;
  color: #0f0f1a;
}

.w3l-about4 .head-main {
  color: var(--para-color);
  line-height: 25px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
}

.w3l-about4 .contact-main p {
  color: #6c757d;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

.w3l-about4 .contact-para {
  color: var(--para-color);
  line-height: 25px;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
}

.w3l-about4 .map iframe {
  width: 100%;
  height: 350px;
}

@media (max-width: 992px) {
  .w3l-about4 .head-main {
    max-width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .w3l-about4 .column {
    padding: 0;
  }
}

.w3l-about5 .history-info {
  max-width: 700px;
  margin: 0 auto;
}

.w3l-about5 .history-info img {
  border-radius: 6px;
  box-shadow: 0px 9px 24px 5px rgba(0, 0, 0, 0.04);
}

.w3l-about5 .history h4 {
  font-size: 24px;
  color: #151965;
}

.w3l-about5 .history p {
  color: #6c757d;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

.w3l-about5 .play-view {
  left: 0;
  right: 0;
  top: calc(50% - 40px);
}

.w3l-about5 span.video-play-icon {
  background: #fff;
  display: inline-block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
}

.w3l-about5 span.video-play-icon span {
  color: #ff8556;
}

.w3l-about5 span.video-play-icon:hover {
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
}

.w3l-about5 span.fa.fa-play {
  line-height: 80px;
}

.w3l-about5 .pop-overlay {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 0ms;
  visibility: hidden;
  opacity: 0;
  z-index: 99;
  overflow-y: scroll;
  max-height: 100vh;
  height: 100vh;
  display: grid;
  align-items: center;
}

.w3l-about5 .pop-overlay::-webkit-scrollbar {
  width: 4px;
}

.w3l-about5 .pop-overlay::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #ffffff;
  border-radius: 5px;
}

.w3l-about5 .pop-overlay::-webkit-scrollbar-thumb {
  background: rgba(82, 82, 82, 0.4);
}

.w3l-about5 .pop-overlay:target {
  visibility: visible;
  opacity: 1;
}

.w3l-about5 .popup {
  background: #fff;
  border-radius: 4px;
  width: 60%;
  position: relative;
  margin: 2rem auto;
  padding: 5px;
}

.w3l-about5 .align-popup-video iframe {
  width: 100%;
  height: 400px;
  display: block;
}

.w3l-about5 .popup .close {
  position: absolute;
  top: -28px;
  right: 0px;
  transition: all 200ms;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  background: #fff;
  width: 30px;
  height: 30px;
  line-height: 28px;
  opacity: 1;
  text-align: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.w3l-about5 .popup .close:hover {
  opacity: 1;
}

@media screen and (max-width: 660px) {
  .w3l-about5 .popup {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .w3l-about5 .popup {
    width: 90%;
  }
}

/*-- index-block8 --*/
.w3l-about6 .btn-demo {
  padding: 12px 24px;
}

/*-- /index-block8 --*/

/* Magnific Popup CSS */
.mfp-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #0b0b0b;
  opacity: 0.8;
}

.mfp-wrap {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
  // -webkit-backface-visibility: hidden;
}

.mfp-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  box-sizing: border-box;
}

.mfp-container:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.mfp-align-top .mfp-container:before {
  display: none;
}

.mfp-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
}

.mfp-inline-holder .mfp-content,
.mfp-ajax-holder .mfp-content {
  width: 100%;
  cursor: auto;
}

.mfp-ajax-cur {
  cursor: progress;
}

.mfp-zoom-out-cur,
.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
  cursor: zoom-out;
}

.mfp-zoom {
  cursor: pointer;
  cursor: zoom-in;
}

.mfp-auto-cursor .mfp-content {
  cursor: auto;
}

.mfp-close,
.mfp-arrow,
.mfp-preloader,
.mfp-counter {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mfp-loading.mfp-figure {
  display: none;
}

.mfp-hide {
  display: none !important;
}

.mfp-preloader {
  color: #ccc;
  position: absolute;
  top: 50%;
  width: auto;
  text-align: center;
  margin-top: -0.8em;
  left: 8px;
  right: 8px;
  z-index: 1044;
}

.mfp-preloader a {
  color: #ccc;
}

.mfp-preloader a:hover {
  color: #fff;
}

.mfp-s-ready .mfp-preloader {
  display: none;
}

.mfp-s-error .mfp-content {
  display: none;
}

button.mfp-close,
button.mfp-arrow {
  overflow: visible;
  cursor: pointer;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  box-shadow: none;
  touch-action: manipulation;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.mfp-close {
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  right: 0px;
  top: -35px;
  text-decoration: none;
  text-align: center;
  padding: 0 0 18px 10px;
  color: #fff;
  font-style: normal;
  font-size: 28px;
  font-family: Arial, Baskerville, monospace;
  background: #fff;
}

.mfp-close-btn-in .mfp-close {
  color: #333;
}

.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: #fff;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%;
}

.mfp-counter {
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
}

.mfp-arrow {
  position: absolute;
  opacity: 0.65;
  margin: 0;
  top: 50%;
  margin-top: -55px;
  padding: 0;
  width: 90px;
  height: 110px;
  -webkit-tap-highlight-color: transparent;
}

.mfp-arrow:active {
  margin-top: -54px;
}

.mfp-arrow:hover,
.mfp-arrow:focus {
  opacity: 1;
}

.mfp-arrow:before,
.mfp-arrow:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 35px;
  margin-left: 35px;
  border: medium inset transparent;
}

.mfp-arrow:after {
  border-top-width: 13px;
  border-bottom-width: 13px;
  top: 8px;
}

.mfp-arrow:before {
  border-top-width: 21px;
  border-bottom-width: 21px;
  opacity: 0.7;
}

.mfp-arrow-left {
  left: 0;
}

.mfp-arrow-left:after {
  border-right: 17px solid #fff;
  margin-left: 31px;
}

.mfp-arrow-left:before {
  margin-left: 25px;
  border-right: 27px solid #3f3f3f;
}

.mfp-arrow-right {
  right: 0;
}

.mfp-arrow-right:after {
  border-left: 17px solid #fff;
  margin-left: 39px;
}

.mfp-arrow-right:before {
  border-left: 27px solid #3f3f3f;
}

.mfp-iframe-holder {
  padding-top: 40px;
  padding-bottom: 40px;
}

.mfp-iframe-holder .mfp-content {
  line-height: 0;
  width: 100%;
  max-width: 900px;
}

.mfp-iframe-holder .mfp-close {
  top: -40px;
}

.mfp-iframe-scaler {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
}

.mfp-iframe-scaler iframe {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #000;
}

/* Main image in popup */
img.mfp-img {
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 40px 0 40px;
  margin: 0 auto;
}

/* The shadow behind the image */
.mfp-figure {
  line-height: 0;
}

.mfp-figure:after {
  content: "";
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 40px;
  display: block;
  right: 0;
  width: auto;
  height: auto;
  z-index: -1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #444;
}

.mfp-figure small {
  color: #bdbdbd;
  display: block;
  font-size: 12px;
  line-height: 14px;
}

.mfp-figure figure {
  margin: 0;
}

.mfp-bottom-bar {
  margin-top: -36px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: auto;
}

.mfp-title {
  text-align: left;
  line-height: 18px;
  color: #f3f3f3;
  word-wrap: break-word;
  padding-right: 36px;
}

.mfp-image-holder .mfp-content {
  max-width: 100%;
}

.mfp-gallery .mfp-image-holder .mfp-figure {
  cursor: pointer;
}

@media screen and (max-width: 800px) and (orientation: landscape),
  screen and (max-height: 300px) {
  /**
       * Remove all paddings around the image on small screen
       */
  .mfp-img-mobile .mfp-image-holder {
    padding-left: 0;
    padding-right: 0;
  }
  .mfp-img-mobile img.mfp-img {
    padding: 0;
  }
  .mfp-img-mobile .mfp-figure:after {
    top: 0;
    bottom: 0;
  }
  .mfp-img-mobile .mfp-figure small {
    display: inline;
    margin-left: 5px;
  }
  .mfp-img-mobile .mfp-bottom-bar {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    margin: 0;
    top: auto;
    padding: 3px 5px;
    position: fixed;
    box-sizing: border-box;
  }
  .mfp-img-mobile .mfp-bottom-bar:empty {
    padding: 0;
  }
  .mfp-img-mobile .mfp-counter {
    right: 5px;
    top: 3px;
  }
  .mfp-img-mobile .mfp-close {
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    text-align: center;
    padding: 0;
  }
}

@media all and (max-width: 900px) {
  .mfp-arrow {
    transform: scale(0.75);
  }
  .mfp-arrow-left {
    transform-origin: 0;
  }
  .mfp-arrow-right {
    transform-origin: 100%;
  }
  .mfp-container {
    padding-left: 6px;
    padding-right: 6px;
  }
}

.main-container {
  background-color: #f6f6f6;
  border-radius: 4px;
  margin-top: -50px;
  width: 450px;
  margin-bottom: 20px;
  padding: 40px;
  margin-left: auto;
  margin-right: 50px;
}
</style>