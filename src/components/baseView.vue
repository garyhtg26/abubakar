<template>
  <div>
    <Navbar v-if="$route.name!=='invoice'"></Navbar>
    <section class="section-content padding-y">
      <el-collapse-transition>
        <router-view> </router-view>
      </el-collapse-transition>
    </section>
    <div style="margin-top: 50px"></div>
    <Login ></Login>
    <mini-cart></mini-cart>
    <Footer v-if="$route.name!=='invoice'"></Footer>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Axios from "axios";
export default {
  components: {
    Login,
  },
  mounted() {
    // this.$refs.focusMe.focus();
    if (this.$store.state.Authorizatioin) {
      Axios.get(`/user`)
        .then((res) => console.log(res.data))
        .catch((error) => {
          this.$store.commit("authentication", null);
          this.$store.commit("Authorization", false);
          this.$store.commit("cart", []);
          this.$store.commit("user", { role: "public", id: 0 });
        });
    }
  },
  methods: {
    showalert(e) {
      e.preventDefault();
      if (e.keyCode == 123) {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

@media (max-width: 839px) {
  
  .section-content{
    margin-top:264px;
  }
}
/deep/.VueCarousel-navigation-next {
    background-image: url(../assets/images/right.png)  !important;
    background-size: contain;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: inherit;
                                                                  
}
/deep/.VueCarousel-navigation-prev {
    background-image: url(../assets/images/left.png)  !important;
    background-size: contain;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: inherit;
                                                                  
}
/deep/.VueCarousel-navigation-button {
    
    color: transparent !important;
}

</style>
