<template>
  <div>
    <div class="container">
      <h5 style="padding-top: 60px; padding-bottom: 15px">Tambah Produk</h5>

      <div class="card card-default px-4 py-4">
        <div class="card-header">
          <strong>Informasi Product</strong>
          <br />
        </div>
        <div class="card-body">
          <div>
            <b-form @submit="onSubmit" v-if="show">
              <b-row class="mt-2">
                <b-col sm="2">
                  <label description="test">Nama Product:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-group
                    id="input-nama-produk"
                    description="Nama produk min. 5 kata dan terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe."
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.name"
                      required
                      placeholder="Contoh: Sepatu Pria"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col sm="2">
                  <label>Kategori:</label>
                </b-col>
                <b-col sm="10">
                  <el-cascader
                    placeholder="Kategori"
                    filterable
                    v-model="form.categories"
                    :options="categories"
                    class="w-100"
                  >
                    <template slot-scope="{ node, data }" v-if="node.isLeaf">
                      <span>{{ data.label }}</span>
                      <span v-if="!node.isLeaf">
                        ({{ node.isLeaf }}{{ data.children.length }})
                      </span>
                    </template>
                    <div slot="empty">No result</div>
                  </el-cascader>
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col sm="2">
                  <label description="test">Brand:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-group
                    id="input-nama-produk"
                    :description="`Pilih Brand Produk (${form.suplier_id})`"
                  >
                    <el-select
                      filterable
                      allow-create
                      :placeholder="`Brand`"
                      v-model="form.suplier_id"
                      class="w-80"
                    >
                      <el-option
                        v-for="item in brands"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                        <span style="float: left">{{ item.name }}</span>
                        <img
                          style="
                            float: right;
                            color: #8492a6;
                            font-size: 13px;
                            height: 30px;
                          "
                          :src="item.profile"
                        />
                      </el-option>
                    </el-select>
                  </b-form-group>
                </b-col>
                <!--  -->
                <b-col sm="2">
                  <label description="test">Katalog:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-group
                    description="`Pilih Katalog produk untuk mempermudah pembeli mencari produk pilihannya"
                  >
                    <el-select
                      filterable
                      allow-create
                      :placeholder="`Catalog`"
                      v-model="form.category_id"
                      class="w-80"
                    >
                      <el-option
                        v-for="item in catalogs"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
      <div class="card card-default px-4 py-4">
        <div class="card-header">
          <strong>Deskripsi Product</strong>
          <br />
        </div>
        <div class="card-body">
          <div>
            <b-row class="mt-2">
              <b-col sm="2">
                <label>Stock:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input
                  id="input-1"
                  v-model="form.stock"
                  type="number"
                  required
                  placeholder="Masukan Jumlah Stock"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col sm="2">
                <label>Berat/Gram:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input
                  id="input-1"
                  v-model="form.weight"
                  type="number"
                  required
                  placeholder="Masukan Berat Produk"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col sm="2">
                <label for="textarea-default">Harga Satuan:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input
                  v-model="form.price"
                  type="number"
                  required
                  placeholder="1.000"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col sm="2">
                <label for="textarea-default">Keterangan Produk:</label>
              </b-col>
              <b-col sm="10">
                <b-form-group
                  id="input-keterangan-produk"
                  description="Cantumkan deskripsi lengkap sesuai produk, seperti keunggulan, spesifikasi, material, ukuran, masa berlaku, dan lainnya. Panjang deskripsi antara 450-2000 karakter."
                >
                  <!-- <vue-editor v-model="form.description"></vue-editor> -->
                  <wysiwyg v-model="form.description" />
                </b-form-group>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <el-collapse class="my-4" v-model="extensions">
        <el-collapse-item name="1">
          <div slot="title">
            <strong>Produk Varian</strong>
          </div>
          <div>
            <el-button
              align="right"
              style="margin-left: 80%"
              type="success"
              @click="drawer.variant = true"
              >Tambah Varian</el-button
            >
          </div>
          <hr class="mt-2" />
          <div>
            <variant-vue
              @open="drawer.variant = $event"
              :drawer="drawer.variant"
              :placehold="form.attributes"
              @change="form.variant = $event"
              :close="
                () => {
                  drawer.variant = false;
                }
              "
            />
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <div slot="title">
            <strong>Produk Grosir</strong>
          </div>
          <div>
            <el-button
              align="right"
              style="margin-left: 80%"
              type="success"
              @click="drawer.grosir = true"
              >Tambah</el-button
            >
          </div>
          <hr class="mt-2" />
          <div>
            <grosir-vue
              @open="drawer.variant = $event"
              :drawer="drawer.grosir"
              :placehold="form.grosir"
              @change="form.grosir = $event"
              :close="
                () => {
                  drawer.grosir = false;
                }
              "
              class="mx-auto"
            />
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="card card-default px-4 py-4">
        <div class="card-header">
          <strong>Upload Product</strong>
          <span class="badge badge-secondary ml-2">Wajib</span>
          <br />
          <small>
            Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
            (Maximal 3 gambar)
          </small>
        </div>
        <div class="card-body">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :file-list="images"
            accept=".png,.jpg,.jpeg"
            :limit="3"
            :on-change="onChange"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </div>
      </div>
      <b-row align-h="end" style="margin-bottom: 50px">
        <b-col cols="2">
          <button
            @click="$router.go(-1)"
            class="btn btn-block btn-outline-primary"
          >
            Kembali
          </button>
        </b-col>
        <b-col cols="2">
          <button @click="postData" class="btn btn-block btn-success">
            Simpan
          </button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Axios from "axios";
import variantVue from "./extensions/variant.vue";
import grosirVue from "./extensions/grosir.vue";
export default {
  components: {
    VueEditor,
    variantVue,
    grosirVue,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
        grosir: [],
        variant: [],
      },
      drawer: {
        variant: false,
        grosir: false,
      },
      extensions: [],
      categories: [],
      catalogs: [],
      brands: [],
      current: 0,
      images: [],
      show: true,
    };
  },
  watch: {
    extensions(val) {
      if (val.indexOf("1") > -1) {
        // this.drawer.variant = true;
      }
      if (val.indexOf("2") > -1) {
        // this.drawer.grosir = true;
      }
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("category-brands?withChild=true").then((res) => {
        this.categories = res.data.categories.map(function (cat) {
          if (cat.childs.length == 0) {
            return {
              value: cat.id,
              label: cat.name,
            };
          }
          return {
            value: cat.id,
            label: cat.name,
            children: cat.childs.map(function (ch) {
              if (ch.second_childs.length == 0) {
                return {
                  value: ch.id,
                  label: ch.name,
                };
              }
              return {
                value: ch.id,
                label: ch.name,
                children: ch.second_childs.map(function (sc) {
                  return {
                    value: sc.id,
                    label: sc.name,
                  };
                }),
              };
            }),
          };
        });
        this.brands = res.data.data;
        if (this.$route.params.id) {
          this.getProducts(this.$route.params.id);
        }
        this.getCatalog();
      });
    },
    getProducts(id) {
      Axios.get("products/" + id).then((res) => {
        this.form = res.data.data;
        this.form.category_id = parseInt(res.data.data.category_id);
        this.images = res.data.data.images.map(function (x) {
          return {
            id: x.id,
            url: x.photo,
            name: x.photo,
          };
        });
      });
    },
    getCatalog() {
      Axios.get("catalog").then((res) => {
        this.catalogs = res.data.data;
      });
    },
    postData() {
      if (this.form.id) {
        Axios.put("products/" + this.form.id, this.form)
          .then((res) => {
            this.form.id = res.data.data.id;
            this.$notify.success({
              title: "Success",
              message: res.data.message,
              offset: 100,
            });
            this.prepareUpload();
          })
          .catch((error) => {
            this.$notify.error({
              title: "Error :(",
              message: error,
              offset: 100,
            });
          });
      } else {
        Axios.post("products", this.form)
          .then((res) => {
            this.form.id = res.data.data.id;
            this.$notify.success({
              title: "Success",
              message: res.data.message,
              offset: 100,
            });
            this.prepareUpload();
          })
          .catch((error) => {
            this.$notify.error({
              title: "Error :(",
              message: error,
              offset: 100,
            });
          });
      }
    },
    prepareUpload() {
      console.log({ cr: this.current, iml: this.images.length });
      if (this.current < this.images.length && this.images[this.current].raw) {
        const image = this.images[this.current];
        const fd = new FormData();
        fd.append("file", image.raw);
        fd.append("type", "products");
        fd.append("imageable_id", this.form.id);
        this.uploadImages(fd);
      }
    },
    uploadImages(fd) {
      Axios.post("photos", fd).then((res) => {
        this.$message("Photo produk berhasil diupload");
        this.current += 1;
      });
    },
    handleRemove(file) {
      const index = this.images.indexOf(file);
      this.images.splice(index, 1);
      console.log(file);
    },
    onChange(file) {
      this.images.push(file);
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  max-width: 800px;
  margin: 10em auto;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.editr {
  border: 1px solid #e4e4e4;
  width: 100%;
}
.editr--toolbar {
  background: #f6f6f6;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
  display: flex;
  height: 32px;
}
.editr--toolbar a {
  display: inline-block;
  width: 8vw;
  max-width: 32px;
  height: 32px;
  color: #333;
  fill: #333;
  cursor: pointer;
  text-align: center;
  line-height: 1;
}
.editr--toolbar a:hover {
  background: rgba(0, 0, 0, 0.1);
}
.editr--toolbar a:active {
  background: rgba(0, 0, 0, 0.2);
}
.editr--toolbar a svg {
  width: 16px;
  height: 16px;
  margin: 8px auto;
}
.editr--toolbar a svg path {
  fill: inherit;
}
.editr--toolbar a.vw-btn-separator {
  width: 1px;
  margin: 0 8px;
}
.editr--toolbar a.vw-btn-separator:hover {
  background: initial;
  cursor: default;
}
.editr--toolbar a.vw-btn-separator i.vw-separator {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  position: absolute;
  width: 1px;
}
.editr--toolbar .dashboard {
  width: 100%;
  position: absolute;
  top: 32px;
  left: 0;
  text-align: left;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #f6f6f6;
}
.editr--content {
  min-height: 150px;
  padding: 12px 8px 16px 8px;
  line-height: 1.33;
  font-family: inherit;
  color: inherit;
  overflow-y: auto;
}
.editr--content[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  color: rgba(0, 0, 0, 0.3);
  display: block; /* For Firefox */
}
.editr--content img {
  max-width: 100%;
}
.editr--content table {
  width: 100%;
  border-collapse: collapse;
}
.editr--content table th {
  text-align: left;
}
.editr--content table th,
.editr--content table td {
  border: 1px solid #ddd;
  padding: 2px;
}
.editr--content:focus {
  outline: 0;
}
.editr--content ul li,
.editr--content ol li {
  list-style-position: inside;
}
@media screen and (max-width: 320px) {
  .editr--toolbar a {
    margin: 0 2px;
  }
  .editr--toolbar a.vw-btn-separator {
    display: none;
  }
}
.form[data-v-ebce4d12] {
  display: flex;
  align-content: flex-end;
}
.form label[data-v-ebce4d12] {
  margin-right: 1rem;
}
/*  */
.card {
  margin-bottom: 25px;
}

.upload-drop-zone {
  height: 200px;
  border-width: 2px;
  margin-bottom: 20px;
}

/* skin.css Style*/
.upload-drop-zone {
  color: #ccc;
  border-style: dashed;
  border-color: #ccc;
  line-height: 200px;
  text-align: center;
}
.upload-drop-zone.drop {
  color: #222;
  border-color: #222;
}
</style>
