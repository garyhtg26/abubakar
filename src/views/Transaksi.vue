<template>
  <div class="container">
    <b-row style="margin-top: 80px">
      <b-col></b-col>
      <b-col cols="6" class="fill-height">
        <b-card>
          <b-embed
            type="iframe"
            aspect="1by1"
            :src="payment.invoice_url"
            allowfullscreen
            style="height: 100%"
          ></b-embed>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    Products,
    Login,
  },
  computed: {
    payment() {
      return this.$store.state.payment;
    },
  },
  data() {
    return {};
  },
};
</script>
