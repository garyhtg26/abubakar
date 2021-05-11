<template>
  <div class="container" style="margin-top: 90px">
    <b-row>
      <b-col cols="8">
        <b-skeleton
          height="250px"
          class="mt-6"
          v-if="isTransaction"
        ></b-skeleton>
        <b-row v-for="skel in 4" :key="skel" class="mt-2">
          <b-col cols="12">
            <b-skeleton></b-skeleton>
          </b-col>
          <b-col cols="1" style="margin: 25px 5px">
            <b-skeleton size="50px" type="avatar"></b-skeleton>
          </b-col>
          <b-col>
            <b-card>
              <b-skeleton animation="wave" width="85%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="70%"></b-skeleton>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="4">
        <b-card no-body img-bottom>
          <b-card-body>
            <b-skeleton type="input"></b-skeleton>
          </b-card-body>
          <b-skeleton-img card-img="bottom" aspect="3:2"></b-skeleton-img>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    isTransaction: Boolean,
  },
};
</script>

<style lang="scss" scoped>
</style>