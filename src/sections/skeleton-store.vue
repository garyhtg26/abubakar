<template>
  <div class="container">
    <b-skeleton type="input" height="200px"></b-skeleton>
    <b-row>
      <b-col cols="2">
        <b-skeleton
          style="margin-top: 10px"
          height="300px"
          type="input"
        ></b-skeleton>
      </b-col>
      <b-col cols="10">
        <b-row>
          <b-col col="3" v-for="x in 15" :key="x" style="margin-top: 10px">
            <b-skeleton-img width="150px" height="200px"></b-skeleton-img>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>