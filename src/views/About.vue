<template>
  <div>
    <Navbar></Navbar>
    <!-- index-block1 -->
    <div class="w3l-index-block1 mt-5">
      <div class="content py-5">
        <div class="container">
          <div class="row align-items-center py-md-5 py-3">
            <div class="col-md-5 content-left pt-md-0 pt-5">
              <h1>{{ sec_1.title }}</h1>
              <p class="mt-3 mb-md-5 mb-4" v-html="sec_1.content"></p>
              <a href="#login.html" class="btn btn-primary btn-theme">
                Get Started
              </a>
            </div>
            <div class="col-md-7 content-right">
              <b-img-lazy :src="sec_1.image" height="500px" style="margin-left:160px" />
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <!-- //index-block1 -->
    <!-- index-block2 -->
    <section class="w3l-index-block2 py-5">
      <div class="container py-md-3">
        <div class="heading text-center mx-auto">
          <h3 class="head">{{ sec_2.header.title }}</h3>
          <p class="my-3 head" v-html="sec_2.header.content"></p>
        </div>
        <div class="row bottom_grids pt-md-3">
          <div
            class="col-lg-4 col-md-6 mt-5"
            v-for="x in sec_2.content"
            :key="x.id"
          >
            <div class="s-block">
              <a href="#blog-single.html" class="d-block p-lg-4 p-3">
                <b-img-lazy :src="x.image" class="w-full" fluid-grow style="height:300px" />
                <h3 class="my-3">{{ x.title }}</h3>
                <p class="" v-html="x.content"></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /index-block2 -->
    <!-- content-with-photo17 -->
    <section class="w3l-index-block3">
      <div class="section-info py-5">
        <div class="container py-md-3">
          <div class="row cwp17-two align-items-center">
            <div class="col-md-6 cwp17-image">
              <img :src="sec_3.image" class="img-fluid" alt="" />
            </div>
            <div class="col-md-6 cwp17-text">
              <h2>{{ sec_3.title }}</h2>
              <p v-html="sec_3.content"></p>
              <!-- <a href="#signup.html">Learn more &raquo;</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- content-with-photo17 -->
    <div class="w3l-index-block4">
      <div class="features-bg py-5">
        <!-- features15 block -->
        <div class="container py-md-3">
          <div class="heading text-center mx-auto">
            <h3 class="head">{{ sec_4.header.title }}</h3>
            <p class="my-3 head" v-html="sec_4.header.content"></p>
          </div>
          <div class="row">
            <div
              class="col-md-6 features15-col-text"
              v-for="x in sec_4.content"
              :key="x.id"
            >
              <a
                href="#url"
                class="d-flex flex-wrap feature-unit align-items-center"
              >
                <div class="col-sm-3">
                  <b-img-lazy
                    :src="x.image"
                    rounded
                    height="100px"
                  ></b-img-lazy>
                </div>
                <div class="col-sm-9 mt-sm-0 mt-4">
                  <div class="features15-para">
                    <h4>{{ x.title }}</h4>
                    <p v-html="x.content" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <!-- features15 block -->
          </div>
        </div>
      </div>
    </div>
    <!-- content-with-photo17 -->
    <section class="w3l-index-block7 py-5">
      <div class="container py-md-3">
        <div class="row cwp17-two align-items-center">
          <div class="col-md-6 cwp17-text">
            <h2>{{ sec_5.header.title }}</h2>
            <p v-html="sec_5.header.content"></p>
            <!-- <a href="#signup.html">Learn more &raquo;</a> -->
          </div>
          <div class="col-md-6 cwp17-image">
            <img :src="sec_5.header.image" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- content-with-photo17 -->
    <section class="w3l-index-block5">
      <!-- main-slider -->
      <!-- <div class="testimonials py-5">
        <div class="container text-center py-lg-3">
          <div class="heading text-center mx-auto">
            <h3 class="head">{{ sec_6.header.title }}</h3>
          </div>
          <div class="row">
            <div class="col-md-10 mx-auto" v-if="sec_6.content">
              <owlcarousel id="slider" autoplay nav>
                <div class="item" v-for="x in sec_6.content" :key="x.id">
                  <div class="slider-info mt-lg-4 mt-3">
                    <div class="img-circle">
                      <img
                        :src="x.image"
                        class="img-fluid rounded"
                        alt="client image"
                      />
                    </div>
                    <div class="message" v-html="x.content"></div>
                    <div class="name">{{ x.title }}</div>
                  </div>
                </div>
              </owlcarousel>
            </div>
          </div>
        </div>
      </div> -->
      <!-- /main-slider -->
    </section>
    <!-- partners -->
    <section class="w3l-index-block9" id="partners">
      <div class="partners py-5">
        <div class="container py-lg-3">
          <div class="heading text-center mx-auto">
            <h3 class="head">
              {{ sec_7.title }}
            </h3>
          </div>
          <div
            class="row col-md-10 justify-content-between grid-part text-center mx-auto"
          >
            <!-- <div class="parts-w3ls col-sm-2 col-6 mt-5">
              <span class="fa fa-cc-visa"></span>
            </div>
            <div class="parts-w3ls col-sm-2 col-6 mt-5">
              <span class="fa fa-digg"></span>
            </div>
            <div class="parts-w3ls col-sm-2 col-6 mt-5">
              <span class="fa fa-lastfm"></span>
            </div>
            <div class="parts-w3ls col-sm-2 col-6 mt-5">
              <span class="fa fa-cc-discover"></span>
            </div>
            <div class="parts-w3ls col-sm-2 col-6 mt-5">
              <span class="fa fa-ravelry"></span>
            </div>
            <div class="parts-w3ls col-sm-2 col-6 mt-5">
              <span class="fa fa-cc-stripe"></span>
            </div> -->
            <b-img-lazy :src="sec_7.image" style="max-width: 100%"></b-img-lazy>
          </div>
        </div>
      </div>
    </section>
    <!-- //partners -->
    <!-- subscribe section -->
    <!-- <section class="w3l-index-block6 py-5">
      <div class="container py-lg-3">
        <div class="subscribe mx-auto">
          <div class="heading text-center mx-auto">
            <h3 class="head">Stay Updated!</h3>
            <p class="my-3 head">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </p>
          </div>
          <form action="#" method="post" class="subscribe-wthree pt-2 mt-5">
            <div class="d-flex flex-wrap subscribe-wthree-field">
              <input
                class="form-control"
                type="email"
                placeholder="Enter your email..."
                name="email"
                required=""
              />
              <button class="btn form-control btn-primary" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section> -->
    <!-- //subscribe -->
    <section class="w3l-index-block10">
      <div
        class="new-block top-bottom"
        :style="`background-image: linear-gradient(to right,rgba(25, 51, 101, 0.85),rgba(0, 0, 0, 0.08)),url(${sec_8.image});`"
      >
        <div class="container">
          <div class="middle-section">
            <!-- <h5>Tagline</h5> -->
            <div class="section-width">
              <h2>
                {{ sec_8.title }}
              </h2>
            </div>
            <div class="link-list-menu">
              <p class="mb-5" v-html="sec_8.content"></p>
              <a href="about.html" class="btn btn-outline-light btn-more">
                Read More
                <span class="fa fa-arrow-right" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- index-block8 -->
    <Login></Login>
    <mini-cart></mini-cart>

    <Footer></Footer>
  </div>
</template>

<script>
import owlcarousel from "vue-owl-carousel";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Axios from "axios";

export default {
  components: { owlcarousel, Products, Login },
  data() {
    return {
      s1: require("@/assets/images/s1.png").default,
      s2: require("@/assets/images/s2.png").default,
      s3: require("@/assets/images/s3.png").default,
      data: [],
    };
  },
  computed: {
    sec_1() {
      if (this.data.length > 0) {
        return this.filterData(1)[0];
      }
      return [];
    },
    sec_2() {
      if (this.data.length > 0) {
        return {
          header: this.filterData(2).filter((x) => x.isHeader == 1)[0],
          content: this.filterData(2).filter((x) => x.isHeader == 0),
        };
      }
      return [];
    },
    sec_3() {
      if (this.data.length > 0) {
        return this.filterData(3)[0];
      }
      return [];
    },
    sec_4() {
      if (this.data.length > 0) {
        return {
          header: this.filterData(4).filter((x) => x.isHeader == 1)[0],
          content: this.filterData(4).filter((x) => x.isHeader == 0),
        };
      }
      return [];
    },
    sec_5() {
      if (this.data.length > 0) {
        return {
          header: this.filterData(5).filter((x) => x.isHeader == 1)[0],
          content: this.filterData(5).filter((x) => x.isHeader == 0),
        };
      }
      return [];
    },
    sec_6() {
      if (this.data.length > 0) {
        return {
          header: this.filterData(6).filter((x) => x.isHeader == 1)[0],
          content: this.filterData(3).filter((x) => x.isHeader == 0),
        };
      }
      return [];
    },
    sec_7() {
      if (this.data.length > 0) {
        return this.filterData(7)[0];
      }
      return [];
    },
    sec_8() {
      if (this.data.length > 0) {
        return this.filterData(8)[0];
      }
      return [];
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("page/content/about").then((res) => {
        this.data = res.data.data;
      });
    },
    filterData(section) {
      return this.data.filter((x) => x.section == section);
    },
  },
};
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif !important;
}
:host {
  --primary-color: #151965;
  --secondary-color: #28a745;
  --text-color: #6c757d;
  --title-color: #0f0f1a;
  --white-color: #ffffff;
  --light-bg-color: #fafafa;
  --card-box-shadow: 1px 2px 6px 1px rgba(53, 54, 102, 0.08);
  --card-hover-box-shadow: 0px 0px 8px rgba(53, 54, 102, 0.2);
  --card-curve: 6px;
}
/*--/content with photo5--*/
.w3l-index-block1 .content {
  position: relative;
  background: #fafafa;
  z-index: 1;
  overflow: hidden;
}

.w3l-index-block1 .content-left h1 {
  font-size: 40px;
  line-height: 46px;
  color: #0f0f1a;
  font-weight: 700;
}

.w3l-index-block1 .content-left p {
  color: #6c757d;
  font-size: 16px;
  line-height: 24px;
}

@media (max-width: 992px) {
  .w3l-index-block1 .content-photo img {
    display: block;
  }
}

@media (max-width: 568px) {
  .w3l-index-block1 .content-left h1 {
    font-size: 40px;
    line-height: 45px;
  }
}

@media (max-width: 375px) {
  .w3l-index-block1 .content-left h1 {
    font-size: 35px;
    line-height: 40px;
  }
}

/*-- index-block2 --*/
.w3l-index-block2 {
  background: white !important;
}
.w3l-index-block2 .s-block {
  box-shadow: 1px 2px 6px 1px rgba(53, 54, 102, 0.08);
  border-radius: 6px;
  transition: 0.3s ease-in;
}

.w3l-index-block2 .s-block:hover {
  box-shadow: 0px 0px 8px rgba(53, 54, 102, 0.2);
  transition: 0.3s ease-in;
}

.w3l-index-block2 .s-block h3 {
  color: #0f0f1a;
  font-size: 26px;
  line-height: 35px;
}

.w3l-index-block2 .s-block p {
  color: #6c757d;
  margin-top: 15px;
  font-size: 16px;
  line-height: 26px;
}

/*-- /index-block2 --*/
/*-- content-with-photo17 --*/
.w3l-index-block3 {
  background: white !important;
}
.w3l-index-block3 .cwp17-text h2 {
  font-size: 35px;
  line-height: 42px;
  color: #0f0f1a;
}

.w3l-index-block3 .cwp17-text p {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #6c757d;
  margin: 25px 0;
}

.w3l-index-block3 .cwp17-text a {
  text-decoration: none;
  font-size: 18px;
  line-height: 26px;
  color: #28a745;
  transition: 0.3s ease-out;
  display: block;
}

.w3l-index-block3 .cwp17-text a:hover {
  color: #151965;
  transition: 0.3s ease-out;
  text-decoration: underline;
}

@media all and (max-width: 800px) {
  .w3l-index-block3 .cwp17-image {
    order: 1;
  }
  .w3l-index-block3 .cwp17-text {
    order: 2;
  }
}

@media all and (max-width: 320px) {
  .w3l-index-block3 .cwp17-text h2 {
    font-size: 33px;
    line-height: 40px;
  }
}

/*-- features15 block --*/
.w3l-index-block4 .features-bg {
  background: var(--light-bg-color);
}

.w3l-index-block4 .feature-unit {
  border-radius: 6px;
  transition: 0.3s ease-in;
  padding: 2rem 1rem;
  box-shadow: 1px 2px 6px 1px rgba(53, 54, 102, 0.08);
  background: #fff;
}

.w3l-index-block4 .feature-unit:hover {
  box-shadow: 0px 0px 8px rgba(53, 54, 102, 0.2);
  transition: 0.3s ease-in;
}

.w3l-index-block4 .features15-col-text {
  margin-top: 30px;
}

.w3l-index-block4 .features15-para h4 {
  font-size: 22px;
  line-height: 25px;
  color: #0f0f1a;
}

.w3l-index-block4 .features15-para p {
  color: #6c757d;
  margin-top: 10px;
  font-size: 16px;
  line-height: 22px;
}

.w3l-index-block4 .features15-col-text:hover div.features15-para h4 {
  transition: 0.3s ease-in-out;
  color: #28a745;
}

.w3l-index-block4 .features15-para h4:hover {
  transition: 0.3s ease-in-out;
  color: #28a745;
}

.w3l-index-block4 .features15-info {
  background: #fff;
  width: 100px;
  height: 100px;
  margin: auto;
  line-height: 100px;
  border-radius: 50%;
  box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}

.w3l-index-block4 .features15-info span {
  font-size: 40px;
  color: #151965;
  line-height: 100px;
  display: block;
}

.w3l-index-block4 .features15-col-text:hover div.features15-info {
  background: #151965;
  color: #fff;
  transition: 0.3s ease-in-out;
}

.w3l-index-block4 .features15-col-text:hover span.fa {
  color: #fff;
}

@media (max-width: 576px) {
  .w3l-index-block4 .features15-info {
    background: #fff;
    width: 70px;
    height: 70px;
    line-height: 70px;
    margin-right: auto;
    margin-left: 0;
  }
  .w3l-index-block4 .features15-info span {
    font-size: 30px;
    line-height: 70px;
  }
}

.w3l-index-block5 {
  background: white !important;
}
.w3l-index-block5 .slider-info {
  max-width: 95%;
  margin: 0 auto;
  border-radius: 6px;
  padding: 3rem;
  box-shadow: 1px 2px 6px 1px rgba(53, 54, 102, 0.08);
  border: 1px solid #eee;
}

.w3l-index-block5 .img-circle {
  width: 120px;
  height: 120px;
  display: inline-block;
  overflow: hidden;
  background: #f3f6f9;
  border-radius: 50%;
}

.w3l-index-block5 .img-circle img {
  width: 100%;
  min-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.w3l-index-block5 .message {
  font-size: 20px;
  line-height: 32px;
  color: #0f0f1a;
  font-weight: 600;
  margin-top: 20px;
}

.w3l-index-block5 .name {
  font-size: 20px;
  margin-top: 1rem;
  color: #6c757d;
  font-style: italic;
}

@media (max-width: 1024px) {
  .w3l-index-block5 .slider-info {
    padding: 3rem 2rem;
  }
}

@media (max-width: 767px) {
  .w3l-index-block5 .slider-info {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .w3l-index-block5 .slider-info {
    padding: 2rem 15px;
  }
  .w3l-index-block5 .message {
    font-size: 16px;
    line-height: 28px;
    margin-top: 15px;
  }
}

.w3l-index-block6 {
  /* subscribe */
  /* //subscribe */
}
.w3l-index-block6 .subscribe form {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}
.w3l-index-block6 .subscribe-wthree-field {
  justify-content: space-between;
}
.w3l-index-block6 form.subscribe-wthree input[type="email"] {
  font-size: 16px;
  color: #000;
  padding: 0px 20px;
  height: 60px;
  flex-basis: 73%;
  border-right: none;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background: #fff;
  border: 1px solid #151965;
}
.w3l-index-block6 form.subscribe-wthree input[type="email"]:focus {
  background: #fff;
  border: 1px solid #151965;
}
.w3l-index-block6 form.subscribe-wthree button {
  color: #fff;
  padding: 0px 30px;
  height: 60px;
  font-size: 16px;
  border: none;
  box-shadow: -1px 2px 12px -9px rgba(0, 0, 0, 0.41);
  flex-basis: 27%;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
@media (max-width: 567px) {
  .w3l-index-block6 form.subscribe-wthree input[type="email"] {
    flex-basis: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .w3l-index-block6 form.subscribe-wthree button {
    flex-basis: 100%;
    margin-top: 15px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}

/*-- content-with-photo17 --*/
.w3l-index-block7 {
  background: white !important;
}
.w3l-index-block7 .cwp17-text h2 {
  font-size: 35px;
  line-height: 42px;
  color: #0f0f1a;
}

.w3l-index-block7 .cwp17-text p {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: #6c757d;
  margin: 25px 0;
}

.w3l-index-block7 .cwp17-text a {
  text-decoration: none;
  font-size: 18px;
  line-height: 26px;
  color: #28a745;
  transition: 0.3s ease-out;
  display: block;
}

.w3l-index-block7 .cwp17-text a:hover {
  color: #151965;
  transition: 0.3s ease-out;
  text-decoration: underline;
}

.w3l-index-block7 span.diff {
  color: #151965;
}

@media all and (max-width: 800px) {
  .w3l-index-block7 .cwp17-image {
    order: 1;
  }
  .w3l-index-block7 .cwp17-text {
    order: 2;
  }
}

@media all and (max-width: 320px) {
  .w3l-index-block7 .cwp17-text h2 {
    font-size: 33px;
    line-height: 40px;
  }
}

/*-- index-block8 --*/
/*-- /index-block8 --*/
/* partners */
.w3l-index-block9 .partners {
  background: var(--light-bg-color);
}

.w3l-index-block9 .parts-w3ls span {
  font-size: 4rem;
  color: #999;
  -webkit-filter: grayscale(100%) brightness(110%) contrast(120%);
  filter: grayscale(100%) brightness(110%) contrast(120%);
  transition: 0.3s ease-in;
}

.w3l-index-block9 .parts-w3ls span:hover {
  color: #0f0f1a;
  -webkit-filter: none;
  filter: none;
  opacity: 0.65;
  transition: 0.3s ease-in;
}

/* //partners */
.w3l-index-block10 .new-block {
  background-size: cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: grid;
  align-items: center;
  padding: 7rem 0;
}

.w3l-index-block10 .middle-section {
  max-width: 420px;
}

.w3l-index-block10 .middle-section h2 {
  color: #ffffff;
  font-size: 32px;
  line-height: 40px;
}

.w3l-index-block10 .link-list-menu p {
  font-size: 18px;
  color: #eee;
  line-height: 28px;
  padding-top: 25px;
}

.w3l-index-block10 .btn-more {
  font-size: 16px;
  display: inline-block;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  padding: 15px 30px;
}

.w3l-index-block10 .btn-more:hover span.fa.fa-arrow-right {
  padding-left: 3px;
  transition: 0.3s ease-in-out;
}

.w3l-index-block10 .btn-more span {
  font-size: 60%;
  vertical-align: middle;
  transition: 0.3s ease-in-out;
}

@media (max-width: 1080px) {
  .w3l-index-block10 .link-list-menu p {
    font-size: 23px;
    line-height: 32px;
  }
  .w3l-index-block10 .middle-section h2 {
    font-size: 45px;
    line-height: 55px;
  }
  .w3l-index-block10 .link-list-menu p {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (max-width: 800px) {
  .w3l-index-block10 .middle-section h2 {
    font-size: 50px;
  }
  .w3l-index-block10 .middle-section a {
    margin-top: 40px;
  }
  .w3l-index-block10 .middle-section h2 {
    font-size: 40px;
    line-height: 50px;
  }
  .w3l-index-block10 .link-list-menu p {
    font-size: 20px;
    line-height: 32px;
  }
}

@media (max-width: 667px) {
  .w3l-index-block10 .link-list-menu {
    max-width: 523px;
  }
  .w3l-index-block10 .link-list-menu p {
    padding-top: 19px;
  }
  .w3l-index-block10 .middle-section a {
    margin-top: 30px;
  }
  .w3l-index-block10 .middle-section h2 {
    font-size: 35px;
    line-height: 45px;
  }
  .w3l-index-block10 .link-list-menu p {
    font-size: 15px;
    line-height: 22px;
  }
}

@media (max-width: 640px) {
  .w3l-index-block10 .link-list-menu p {
    font-size: 23px;
  }
}

@media (max-width: 600px) {
  .w3l-index-block10 .middle-section h2 {
    font-size: 38px;
  }
  .w3l-index-block10 .link-list-menu p {
    padding-top: 13px;
  }
}

@media (max-width: 480px) {
  .w3l-index-block10 .middle-section h2 {
    font-size: 34px;
    line-height: 42px;
  }
  .w3l-index-block10 .link-list-menu p {
    font-size: 19px;
    line-height: 25px;
  }
}

@media (max-width: 440px) {
  .w3l-index-block10 .middle-section h2 {
    font-size: 29px;
  }
  .w3l-index-block10 .middle-section h2 {
    font-size: 30px;
    line-height: 40px;
  }
}

@media (max-width: 384px) {
  .w3l-index-block10 .link-list-menu p {
    font-size: 18px;
  }
  .w3l-index-block10 .middle-section a {
    margin-top: 25px;
  }
}

@media (max-width: 320px) {
  .w3l-index-block10 .link-list-menu {
    width: 281px;
  }
  .w3l-index-block10 .link-list-menu p {
    font-size: 20px;
  }
  .w3l-index-block10 .middle-section h2 {
    font-size: 33px;
  }
}
</style>