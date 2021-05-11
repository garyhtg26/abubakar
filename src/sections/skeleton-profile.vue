<template>
  <div>
    <b-row>
      <b-col cols="5">
        <b-skeleton height="250px"></b-skeleton>
        <b-skeleton height="80px"></b-skeleton>
      </b-col>
      <b-col cols="7">
        <b-skeleton
          animation="wave"
          width="85%"
          height="15px"
          class="mt-3"
          v-for="x in 10"
          :key="x"
        ></b-skeleton>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>