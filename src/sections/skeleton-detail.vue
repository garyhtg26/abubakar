<template>
  <div>
    <b-row class="mt-md-3" v-if="isLoading">
      <b-col cols="12">
        <b-card no-body img-left>
          <b-skeleton-img
            card-img="left"
            width="500px"
            height="400px"
          ></b-skeleton-img>
          <b-card-body>
            <b-skeleton
              animation="wave"
              width="85%"
              class="mt-3"
              v-for="x in 5"
              :key="x"
            ></b-skeleton>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12">
        <b-skeleton
          animation="wave"
          width="85%"
          class="mt-3"
          v-for="x in 10"
          :key="x"
        ></b-skeleton>
      </b-col>
      <b-col cols="12" v-for="y in 8" :key="y" class="mt-3">
        <b-skeleton-img no-aspect height="100px"></b-skeleton-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
};
</script>

<style lang="scss" scoped>
</style>