<template>
  <div
    id="app"
  
    ref="apps"

  >
    <el-collapse-transition>
      <router-view />
    </el-collapse-transition>
    <fab
      :position="position"
      :bg-color="bgColor"
      fixed-tooltip
      icon-size="small"
      style="max-width: 10px; padding: 0px"
      main-tooltip="feedback"
      v-b-modal.modal-1
      :main-icon="mainIcon"
    ></fab>
    <b-modal id="modal-1" @ok="save" title="Feedback Report">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            required
            v-model="forms.email"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Feedback:" label-for="input-2">
          <b-form-textarea
            id="textarea"
            v-model="forms.message"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-3" label="Rating:" label-for="input-2">
          <b-form-rating
            no-border
            v-model="forms.ratings"
            variant="warning"
          ></b-form-rating>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Axios from "axios";
import fab from "vue-fab";
$(document).ready(function () {});
export default {
  components: {
    fab,
  },
  data() {
    return {
      mainIcon: "feedback",
      bgColor: "red",
      position: "bottom-right",
      forms: {},
      modal: false,
      fabActions: [
        {
          name: "cache",
          icon: "cached",
        },
        {
          name: "alertMe",
          icon: "add_alert",
        },
      ],
    };
  },
  watch: {
    "$route.name"(val) {
      // console.log(val);

    },
  },
  mounted() {

    this.forms.email = this.$store.state.user.email;
  },
  methods: {
    al(e) {
      e.preventDefault();
      console.log(e);
      return false;
      this.alert("event");
    },
    save() {
      console.log(this.forms);
      Axios.post("page/feedback", this.forms).then((res) => {
        this.$notify({
          title: "Info",
          message: res.data.message,
          type: "info",
        }).catch((error) => {
          this.$notify({
            title: "Error",
            message: "Mohon periksa kembali inputan anda",
            type: "error",
          });
        });
      });
    },
    cache() {
      console.log("Cache Cleared");
    },
    alert() {
      alert("Clicked on alert icon");
    },
  },
};
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

#app {
  font-family: "Quicksand";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  max-width: 100%;
  // overflow-x: hidden;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:link,
.btn-primary:visited,
.btn-primary {
  background-color: #28a745 !important;
  border-color: #28a745 !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: 0;
  outline-offset: -2px;
}
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:active,
.btn-secondary:link,
.btn-secondary:visited,
.btn-secondary {
  background-color: #b6ad15 !important;
  border-color: #b6ad15 !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: 0;
  outline-offset: -2px;
}
.fab-wrapper {
  z-index: 999;
  outline: 0 !important;
}
</style>
