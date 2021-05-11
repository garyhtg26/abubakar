<template>
  <div>
    <b-modal
      ref="my-modal"
      hide-footer
      hide-header
      body-class="align-self: center;"
      content-class="background-color: transparent; border: transparent;"
    >
      <button type="button" aria-label="Close" class="close" @click="hideModal">
        <i class="fas fa-times-circle"></i>
      </button>
      <img :src="popup" width="400px" />
    </b-modal>
    <div class="hide">
      <audio controls autoplay>
        <source
          src="http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  watch: {
    enPopup(val) {
      if (val.isVisible) {
        this.showModal();
      }
    },
  },
  computed: {
    enPopup() {
      return this.$store.state.enPopup;
    },
  },
  mounted() {
    this.$store.dispatch("enPopup");
    if (this.$store.state.enPopup.isVisible) {
      this.showModal();
    }
    // this.showModal();
  },
  data() {
    return {
      popup: require("@/assets/images/popup.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/.modal-body {
  align-self: center !important;
}
/deep/.modal-content {
  background-color: transparent !important;

  border: transparent !important;
}

.hide {
  display: none;
}
</style>