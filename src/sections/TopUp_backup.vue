<template>
  <el-row style="margin: auto; max-width: 1400px">
    <el-col :span="3" :xs="6" v-for="(x, i) in ppob" :key="x.type" v-if="i < 7">
      <div
        v-b-popover.hover.top="x.type"
        class="bl-flex-item mt-16 mb-16 bl-dope-container__grid-item"
        style="flex: 0 1 100%; max-width: 105px"
      >
        <div class="bl-dope-item__body">
          <router-link to="/virtual">
            <img :src="x.photo" alt="abubakar" />
          </router-link>
        </div>
        <div class="bl-dope-item__footer">
          <p
            class="bl-text bl-text--body-default bl-text--semi-bold bl-text--ellipsis__2"
          ></p>
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div
        class="bl-flex-item mt-16 mb-16 bl-dope-container__grid-item"
        style="flex: 0 1 100%; max-width: 105px"
      >
        <a
          href="https://www.abubakar.com/promo-campaign/bikinasik-newnormal?referrer=recommendation&amp;from=homepage-menu-1"
        ></a>
        <div class="bl-dope-item__body">
          <!---->
          <!---->
          <!---->
          <router-link to="/virtual">
            <img :src="icon" alt="abubakar" />
          </router-link>
        </div>
        <div class="bl-dope-item__footer">
          <!---->
          <!---->
          <p
            class="bl-text bl-text--body-default bl-text--semi-bold bl-text--ellipsis__2"
          ></p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      ppob: [],
      icon: require("@/assets/images/icon/semua.png").default,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("ppob").then((res) => {
        this.ppob = res.data;
      });
    },
  },
};
</script>

<style>
/* kategori*/

.baseplate img {
  max-width: 100%;
}
.bl-dope-item__body img {
  width: 170%;
  height: auto;
  min-width: 75px;
  max-height: 80px;
  display: block;
  position: relative;
}
.baseplate .bl-dope-container__grid-item {
  margin-left: 20px;
  /* margin-right: 20px; */
}
.mb-16 {
  margin-bottom: 16px !important;
}
.bl-dope-item--medium .bl-dope-item__body {
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
}
.bl-dope-item__body {
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
}
.bl-dope-item__footer {
  text-align: center;
}
.bl-text--body-default.bl-text--ellipsis__2 {
  max-height: 48px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
}
.bl-dope-item {
  display: block;
}
.bl-text--body-default {
  font-size: 16px;
  line-height: 1.25;
}
.bl-text--semi-bold {
  font-weight: 600;
}
.bl-dope-item__badge {
  display: inline-block;
  width: 100%;
  position: absolute;
  top: -2px;
  left: 100%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.bl-capsule--informational {
  background-color: #d2e9fa;
  border-radius: 20px;
}
.bl-text--caption {
  font-size: 13px;
  line-height: 1.23077;
  text-align: center;
}
</style>
