<template>
  <carousel
    :perPageCustom="[
      [200, 4],
      [600,6],
      [840, 8],
    ]"
    :key="data.length"
    touchDrag
    mouseDrag
    centerMode

    :paginationEnabled="false"
    :navigationEnabled="true"
  >
    <slide v-for="(x, i) in ppob" :key="`pp${x.id}`" class="px-2">
      <div
        class="col-md-12 col-10"
        @click="$router.push(`/virtual?type=${x.type}&id=${i}`)"
        style="cursor: pointer"
      >
        <b-img-lazy
          width="90%"
          center
          :src="x.photo"
        ></b-img-lazy>
        <h6 class="tipe">{{x.type}}</h6>
      </div>
    </slide>
  </carousel>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      data: [],
      // icon: require('@/assets/images/icon/semua1.png'),
    }
  },
  computed: {
    ppob() {
      if(this.data.length > 0){ return this.data; }
      return []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("ppob").then((res) => {
        this.data = res.data;
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
  width: 75px;
  height: 80px;
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

.tipe {
  text-align: center;
    margin-top: 8px;
    font-weight: 600;

}

</style>
