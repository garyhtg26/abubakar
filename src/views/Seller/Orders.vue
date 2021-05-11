<template>
  <div class="card">
    <div class="container">
      <div class="intro h-100" v-if="products == 0">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6" style="text-align: center">
            <h3 style="font-weight: 600">Orderan Kamu</h3>
            <p>belum ada orderan</p>
          </div>
          <div class="col-md-6">
            <img :src="icon" alt="" class="img-fluid" />
          </div>
        </div>
      </div>

      <hr />

      <div class="product-test">
        <h3 class="d-inline-block">Orders list</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Invoice</th>
                <th>Total</th>
                <th>Status</th>
                <th>Info</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in products">
                <td>
                  {{ product.created }}
                </td>
                <td>
                  {{ product.invoice }}
                </td>
                <td>
                  {{ product.total | currency }}
                </td>
                <td>
                  {{ product.status }}
                </td>
                <td>
                  <button class="btn btn-primary" @click="editProduct(product)">
                    Details
                  </button>
                  <!-- <button
                    class="btn btn-danger"
                    @click="deleteProduct(product)"
                  >
                    Delete
                  </button> -->
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <b-button v-if="page > 0" @click="getData">
                    Load more
                  </b-button>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <b-modal
      :title="product.invoice"
      scrollable
      id="product"
      size="lg"
      v-model="modal"
    >
      <div>
        <b-row>
          <b-col cols="5" class="my-auto">
            <b-list-group-item
              v-if="product.customer"
              class="flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <img :src="product.customer.profile" width="50px" />
                <ul class="justify-content-between">
                  <li v-text="product.customer.name"></li>
                  <li v-text="product.customer.phone"></li>
                </ul>
              </div>
            </b-list-group-item>
          </b-col>
          <b-col cols="7">
            <b-list-group-item
              v-if="product.address"
              class="flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <ul
                  class="justify-content-between"
                  v-if="product.address.district"
                >
                  <li v-text="product.address.type"></li>
                  <li v-text="product.address.penerima"></li>
                  <li v-text="product.address.telp"></li>
                  <li v-text="product.address.district.province"></li>
                  <li
                    v-text="
                      `${product.address.district.type} ${product.address.district.city}`
                    "
                  ></li>
                  <li
                    v-text="
                      `${product.address.district.subdistrict_name} ${product.address.city.postal_code}`
                    "
                  ></li>
                  <li v-text="product.address.address"></li>
                </ul>
              </div>
            </b-list-group-item>
          </b-col>
          <b-col cols="12" class="mt-5">
            <b-table striped hover :fields="fields" :items="product.products">
              <template #cell(thumbnail)="data">
                <img :src="data.item.thumbnail" width="50px" />
              </template>
              <template #cell(price)="data">
                {{ data.item.price | currency }}
              </template>
              <template #cell(subtotal)="data">
                {{ data.item.subtotal | currency }}
              </template>
            </b-table>
            <ul class="justify-content-between">
              <li>Total : {{ product.total | currency }}</li>
              <li>Catatan : {{ product.notes }}</li>
              <li>Kurir : {{ product.kurir }}, {{ product.service }}</li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
// import { fb, db } from "firebase";
import Axios from "axios";

export default {
  name: "Products",
  components: {
    VueEditor,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      icon: require("@/assets/images/novoucher.png"),
      fields: ["thumbnail", "name", "price", "qty", "subtotal"],
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      },
      activeItem: null,
      modal: false,
      tag: null,
      page: 1,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (!this.page) return;
      Axios.get("list-order?page=" + this.page).then((res) => {
        this.products.push(...res.data.data);
        if (res.data.data.length == 0) {
          this.page = false;
        } else {
          this.page += 1;
        }
      });
    },
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index, 1);

      image
        .delete()
        .then(function () {
          console.log("image deleted");
        })
        .catch(function (error) {
          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },

    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = fb
          .storage()
          .ref("products/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });
          }
        );
      }
    },

    reset() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      };
    },

    addNew() {
      this.modal = "new";
      this.reset();
      this.modal = true;
    },
    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      Toast.fire({
        type: "success",
        title: "Updated  successfully",
      });

      $("#product").modal("hide");
    },

    editProduct(product) {
      // this.modal = "edit";
      this.product = Object.assign(product);
      this.modal = true;
    },

    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc[".key"]).delete();

          Toast.fire({
            type: "success",
            title: "Deleted  successfully",
          });
        }
      });
    },
    readData() {},
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
</style>
