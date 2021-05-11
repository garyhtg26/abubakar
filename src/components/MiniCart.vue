<template>
  <div class="mini-cart">
    <!-- Modal -->
    <div
      class="modal fade"
      id="miniCart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="item in data" :key="item.id" class="media">
                <img
                  :src="item.thumbnail"
                  width="80px"
                  class="align-self-center mr-3"
                  alt=""
                />
                <div class="media-body">
                  <h5 class="mt-0">
                    {{ item.name }}

                    <span
                      style="cursor: pointer"
                      class="float-right"
                      @click="destroy(item)"
                      >X</span
                    >
                  </h5>
                  <p class="mt-0">{{ (item.price * item.qty) | currency }}</p>
                  <p class="mt-0">Quantity : {{ item.qty }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              to="/"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Continue Shopping
            </button>
            <button type="button" class="btn btn-primary" @click="checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      data: [],
      cart: [],
      search: null,
      headers: [
        { text: "images", value: "thumbnail" },
        { text: "name", value: "name" },
        { text: "Toko", value: "store" },
      ],
    };
  },
  mounted() {
    // this.getData();
  },
  methods: {
    getData() {
      if (!this.$store.state.Authourization) {
        return false;
      }
      Axios.get("/page/carts")
        .then((res) => {
          this.data = res.data.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    destroy(item) {
      const index = this.data.indexOf(item);
      const c = confirm(`Hapus Product ${item.name} dari cart ??`);
      if (c) {
        Axios.delete("/page/carts/" + item.cart_id)
          .then(() => {
            this.data.splice(index, 1);
          })
          .catch((error) => {
            alert(error);
          });
      }
    },
    checkout() {
      this.$store.dispatch("checkout", this.data);
      $("#miniCart").modal("hide");
      this.$router.push("/cart");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-body {
  background-position: top;
  background-repeat: no-repeat;
  background-size: 500px 160px;
}
</style>
