<template>
  <div>
    <b-modal
      v-model="show"
      scrollable
      button-size="sm"
      @close="close"
      @hidden="close"
      @cancel="close"
      @ok="close"
      no-enforce-focus
    >
      <div slot="modal-header">Cart</div>
      <!-- contemy -->
      <b-list-group v-if="data.length > 0">
        <b-list-group-item
          class="flex-column align-items-start"
          style="padding: 3px"
          v-for="x in data"
          :key="x.id"
        >
          <b-row>
            <b-col cols="1">
              <img
                :src="x.thumbnail"
                width="80px"
                style="border-radius: 30px"
              />
            </b-col>
            <b-col cols="10">
              <div class="d-flex w-100 justify-content-between">
                <ul class="list-cart">
                  <li
                    style="font-size: 12px; font-weight: bold"
                    :title="x.name"
                  >
                    {{ x.name }}
                  </li>
                  <li>{{ x.price | currency }} ({{ x.qty }})</li>
                  <li style="font-size: 12px">{{ x.store }}</li>
                </ul>
              </div>
            </b-col>
            <b-col cols="1">
              <i
                class="fa fa-trash-o icon-delete"
                @click="destroy(x)"
                aria-hidden="true"
              ></i>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
      <div v-else-if="loading">
        <b-card v-for="l in 4" :key="l">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-card>
      </div>
      <div v-else>
        <center>
          <b-icon
            icon="cart-x"
            style="width: 200px; height: 200px; color: red"
            class="mx-auto"
          >
          </b-icon>
          <h3 class="mt-5">Cart Masih kosong</h3>
        </center>
      </div>
      <!-- footer -->
      <b-container slot="modal-footer">
        <b-row align-content="end" align-h="end" align-v="end">
          <b-col></b-col>
          <b-col cols="5">
            <b-button @click="close" variant="success">
              Lanjutkan Belanja
            </b-button>
          </b-col>
          <b-col cols="3">
            <b-button @click="checkout" style="width:100%">  Beli  </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    show: Boolean,
    onClosed: Function,
  },
  data() {
    return {
      data: [],
      loading: false,
    };
  },
  watch: {
    show(val) {
      if (val) {
        this.getData();
      }
    },
  },
  methods: {
    close() {
      if (this.onClosed) this.onClosed(true);
    },
    getData() {
      this.loading = true;
      Axios.get("/page/carts?data-only=true").then((res) => {
        this.data = res.data;
        this.loading = false;
      });
    },
    destroy(item) {
      const index = this.data.indexOf(item);
      this.$confirm(`Hapus Product ${item.name} dari cart ??`, "Warning", {
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
        type: "warning",
      })
        .then(() => {
          Axios.delete("/page/carts/" + item.cart_id).then((res) => {
            this.data.splice(index, 1);
            this.$message({
              type: "success",
              message: res.data.message,
            });
            this.$store.dispatch("countCart");
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
      // const c = confirm();
      // if (c) {

      // }
    },
    checkout() {
      this.close();
      this.$store.dispatch("checkout", this.data);
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss" scoped>
.list-cart {
  list-style: none;
  // white-space: nowrap;
  overflow: hidden;
}
.icon-delete {
  font-size: 20px;
  margin-top: 30px;
  margin-left: -10px;
  cursor: pointer;
}
.icon-delete:hover {
  color: red;
}
</style>