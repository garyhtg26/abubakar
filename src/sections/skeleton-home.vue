<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-skeleton height="500px"></b-skeleton>
      </b-col>
      <b-col cols="12">
        <b-skeleton height="100px" style="border-radius: 30px"></b-skeleton>
      </b-col>
      <b-col cols="12" align="center">
        <b-row class="container">
          <b-col cols="2" v-for="x in 6" :key="`c${x}`">
            <b-skeleton
              style="border-radius: 20px"
              animation="wave"
              height="160px"
            ></b-skeleton>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="mt-2">
        <b-skeleton height="300px"></b-skeleton>
      </b-col>
      <b-col cols="12" align="center">
        <b-row class="container fluid">
          <b-col cols="2" class="mt-1" v-for="x in 12" :key="`pc${x}`">
            <b-skeleton-img animation="wave" height="260px"></b-skeleton-img>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>