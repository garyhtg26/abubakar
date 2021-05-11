<template>
  <div class="hero">
    <div class="container-fluid">
      <template>
        <vueper-slides
          v-if="sliders.length > 0"
          ref="myVueperSlides"
          autoplay
          @autoplay-pause="internalAutoPlaying = false"
          @autoplay-resume="internalAutoPlaying = true"
        >
          <vueper-slide
            v-for="(slide, i) in sliders"
            :key="slide.id"
            :image="slide.image"
            :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]"
          />
          <template v-slot:pause>
            <i class="icon pause_circle_outline"></i>
          </template>
        </vueper-slides>
      </template>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {
    sliders: Array,
  },
  data: () => ({
    headerOpt: { isVisible: false },
    footerOpt: { isVisible: false },
    slides: [
      {
        image: require("@/assets/images/6.jpg"),
      },
      {
        image: require("@/assets/images/7.jpg"),
      },
      {
        image: require("@/assets/images/banners/banner1.jpg"),
      },
    ],
    pilihan: [
      {
        image: require("@/assets/images/1.png"),
      },
      {
        image: require("@/assets/images/2.png"),
      },
      {
        image: require("@/assets/images/3.png"),
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.c-main-body {
  border-radius: 10px;
  margin: 0px !important;
}
.image {
  width: 100%;
  display: block;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.hero {
  padding-top: 5rem;
}
.vcc {
  height: 50vh;
  width: 60vw;
}
</style>
