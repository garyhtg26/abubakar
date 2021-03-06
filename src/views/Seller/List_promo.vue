<template>
  <div>
    <article class="card mb-3">
      <div class="card-body">
        <el-button @click="dialog = true">Tambah Diskon</el-button>
        <el-table :data="data" style="width: 100%" class="mt-2">
          <el-table-column
            v-for="x in headers"
            :key="x.value"
            :label="x.text"
            :prop="x.value"
            sortable
            width="150"
          >
            <template slot-scope="scope">
              <div v-if="x.value === 'products'">
                <el-popover
                  placement="right"
                  trigger="hover"
                  style="overflow: auto"
                >
                  <el-table
                    :data="scope.row.products"
                    style="overflow: auto"
                    height="400"
                  >
                    <el-table-column
                      width="300"
                      property="name"
                      label="name"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="stock"
                      label="stock"
                    ></el-table-column>
                  </el-table>
                  <el-button slot="reference">Lihat Produk</el-button>
                </el-popover>
              </div>
              <div v-else>{{ scope.row[x.value] }}</div>
            </template>
          </el-table-column>
          <el-table-column align="right" width="200" fixed="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                @click="editItem(scope.$index, scope.row)"
              >
                Edit
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteItem(scope.$index, scope.row)"
              >
                Hapus
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- dialog discount -->
        <b-modal v-model="dialog" scrollable hide-footer>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Name">
              <el-input v-model="editedItem.name"></el-input>
            </el-form-item>
            <el-form-item label="Discount">
              <el-input v-model="editedItem.discount"></el-input>
            </el-form-item>
            <el-form-item label="Max Used">
              <el-input v-model="editedItem.maxUse"></el-input>
            </el-form-item>
            <el-form-item label="Products" style="overflow: hidden">
              <el-select
                v-model="editedItem.products"
                filterable
                placeholder="Products"
                multiple
                class="w-100"
              >
                <el-option
                  v-for="x in products"
                  :key="x.id"
                  :label="x.name"
                  :value="x.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Available">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="Start"
                  v-model="editedItem.start"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="End"
                  v-model="editedItem.end"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="All Product">
              <el-switch v-model="editedItem.isAllProduct"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="save">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </b-modal>
      </div>
      <!-- card-body .// -->
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    disabled: Boolean,
    tabs: Number,
  },
  data: () => ({
    dialog: false,
    search: null,
    form: {},
    snack: {
      model: false,
      color: "blue accent-4",
      text: "succes",
    },
    loading: false,
    headers: [
      { text: "NAME", value: "name" },
      // { text: "STORE", value: "category.name" },
      { text: "DISCOUNT", value: "discount" },
      { text: "MAXUSE", value: "maxUse" },
      { text: "USED", value: "used" },
      { text: "PRODUCT", value: "products" },
      { text: "START", value: "start" },
      { text: "END", value: "end" },
      // { text: "Actions", value: "actions" },
    ],
    products: [],
    category: [],
    data: [],
    editedIndex: -1,
    editedItem: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New discount" : "Edit discount";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    tabs(val) {
      if (val == 1 && this.products.length == 0) {
        this.initialize();
      }
    },
  },

  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.loading = true;
      axios
        .get("/discount")
        .then((res) => {
          this.loading = false;
          this.data = res.data.data;
          this.products = res.data.products;
          this.category = res.data.category;
          this.snack = {
            model: true,
            color: "green accent-3",
            text: res.data.message,
          };
        })
        .catch((error) => {
          this.snack = {
            model: true,
            color: "red",
            text: error,
          };
        });
    },

    editItem(index, item) {
      this.editedIndex = index;
      this.editedItem = Object.assign({}, item);
      this.editedItem.products = item.products.map((x) => x.id);
      this.dialog = true;
    },

    deleteItem(index, item) {
      const c = confirm("Are you sure you want to delete this item?");
      if (c) {
        axios
          .delete("/discount/" + item.id)
          .then((res) => {
            this.loading = false;
            this.data.splice(index, 1);
            this.snack = {
              model: true,
              color: "green accent-3",
              text: res.data.message,
            };
          })
          .catch((error) => {
            this.snack = {
              model: true,
              color: "red",
              text: error,
            };
          });
      }
    },

    close() {
      this.dialog = false;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    },

    save() {
      if (this.editedIndex > -1) {
        const id = this.editedItem.id;
        axios
          .put("/discount/" + id, this.editedItem)
          .then((res) => {
            this.loading = false;
            Object.assign(this.data[this.editedIndex], res.data.data);
            this.snack = {
              model: true,
              color: "green accent-3",
              text: res.data.message,
            };
            this.close();
          })
          .catch((error) => {
            this.snack = {
              model: true,
              color: "red",
              text: error,
            };
          });
      } else {
        axios
          .post("/discount", this.editedItem)
          .then((res) => {
            this.loading = false;
            this.data.push(res.data.data);
            this.snack = {
              model: true,
              color: "green accent-3",
              text: res.data.message,
            };
            this.close();
          })
          .catch((error) => {
            this.snack = {
              model: true,
              color: "red",
              text: error,
            };
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.btn-outline-primary {
  color: green !important;
}
.btn-outline-primary:hover {
  color: white !important;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6;
}

.css-1ivs0au {
  margin: 0px 0px 16px;
}
.css-2n8ir {
  font-weight: 400;
  font-family: "open sans", tahoma, sans-serif;
  font-size: 14px;
  padding-left: 30px;
  width: 80%;
  margin-bottom: 56px;
}
.css-1ivs0au__content {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
}
.css-huluao {
  margin: 0px 16px 0px 0px;
}
.css-1ba2565 {
  border: thin solid rgb(224, 224, 224);
  padding: 7.5px 12px;
  border-radius: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  height: 40px;
}
.css-s9s691 span {
  line-height: 22px;
  margin-top: 1px;
  color: rgba(49, 53, 59, 0.44);
}
.css-s9s691 span + span {
  margin-left: 8px;
  font-weight: bold;
  color: rgba(49, 53, 59, 0.96);
}
.css-s9s691 img {
  width: 15px;
  margin-left: 8px;
}

.css-s9s691 > * {
  display: inline-block;
  vertical-align: middle;
}
img {
  border-style: none;
}
.css-s9s691 {
  display: flex;
  align-self: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}
.css-1ba2565 {
  border: thin solid rgb(224, 224, 224);
  padding: 7.5px 12px;
  border-radius: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  height: 40px;
}
.css-huluao {
  margin: 0px 16px 0px 0px;
}
.css-sh10tr {
  margin: 0px 16px 0px 0px;
  width: 160px;
}
.css-1yy9eh2 {
  position: relative;
  width: initial;
}
.css-1yy9eh2 .e15j6tp61 {
  border-radius: 8px;
}
.css-5eobf8 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 8px 0px 16px;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 233);
  user-select: none;
  transition: border-radius 280ms ease 0s;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  background-color: rgb(255, 255, 255);
  pointer-events: all;
  text-align: left;
}
.css-sh10tr label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 0px;
}

.css-1jk4ov {
  flex: 1 1 0%;
  color: rgba(0, 0, 0, 0.24);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.css-5eobf8::after {
  content: "";
  display: inline-block;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/1def3953.svg);
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 280ms ease 0s, background-color 0.12s ease 0s;
  transform: rotate(0deg);
  border-radius: 50%;
}
.css-1yy9eh2 .e15j6tp61 {
  border-radius: 8px;
}
.css-1yy9eh2 .e15j6tp60 {
  transition: transform 280ms ease-out 0s, opacity 0.16s ease 0s,
    visibility 0.16s ease 0s;
  width: 100%;
  padding: 0px 8px;
  overflow: auto;
  position: absolute;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 0px 0px 8px 8px;
  transform-origin: center top;
  transform: translateY(-8px);
  opacity: 0;
  visibility: hidden;
}
.css-jof6us {
  list-style: none;
  padding: 0px;
  margin: 4px 0px;
}
.css-s9s691 img {
  width: 15px;
  margin-left: 8px;
}

.css-s9s691 {
  display: inline-block;
  vertical-align: middle;
}
@media (max-width: 1198px) {
  .css-s9s691 span:nth-child(1) {
    display: none;
  }
}
.css-1qe2r3h {
  color: rgb(66, 181, 73);
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}
.css-fo2jrt {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  margin-left: auto;
  position: relative;
}
.css-1sjxsra {
  border-radius: 8px;
  display: flex;
  -webkit-box-flex: inherit;
  flex-grow: inherit;
  -webkit-box-align: stretch;
  align-items: stretch;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 231, 233);
  flex-direction: row-reverse;
  margin: 0px;
}
.css-fo2jrt button {
  height: 38px;
  width: 38px;
  padding: 10px;
  position: absolute;
  right: 1px;
  top: 1px;
  border: none;
  background-color: rgb(244, 244, 244);
  border-radius: 0px 8px 8px 0px;
}
.css-1ymn4im::after {
  content: "";
  background-size: 24px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg);
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.css-1sjxsra input[type="text"] {
  margin: 0px;
  border: none;
  width: 290px;
  height: 37px;
  font-size: 13px;
}

/* filter */
.css-elqn49 {
  margin: 0px 0px 6px;
  position: relative;
}
.css-elqn49__flex {
  display: -webkit-flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
}
.css-4eqazr--text {
  white-space: nowrap;
  width: 100px;
  font-weight: bold;
  color: rgba(49, 53, 59, 0.96);
}

.css-4eqazr {
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
}
.css-4eqazr--status {
  margin: 0px;
  width: calc(100% - 120px);
  padding-left: 30px;
}
.css-1lm1cch {
  overflow: auto hidden;
  white-space: nowrap;
  width: 5000px;
}
.css-1jvzjqm-unf-chip:first-child {
  margin-left: 25px;
}

.css-1jvzjqm-unf-chip {
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(235, 255, 239);
  border-radius: 16px;
  border: 1px solid rgb(79, 209, 90);
  color: rgb(3, 172, 14);
  display: inline-flex;
  vertical-align: top;
  flex: 1 1 0%;
  flex-wrap: nowrap;
  height: 40px;
  line-height: 16px;
  margin-right: 8px;
  overflow: hidden;
  padding: 0px 12px;
  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: not-allowed;
  font-size: 12px;
  margin-bottom: 0px;
}
.css-1dgmgkd-unf-chip {
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  border: 1px solid rgb(229, 231, 233);
  color: rgba(49, 53, 59, 0.68);
  display: inline-flex;
  vertical-align: top;
  flex: 1 1 0%;
  flex-wrap: nowrap;
  height: 40px;
  line-height: 16px;
  margin-right: 8px;
  overflow: hidden;
  padding: 0px 12px;
  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 0px;
}
.css-1dgmgkd-unf-chip.last-chip {
  margin-right: 25px;
}
.css-elqn49__nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
.css-wo2tyn__left {
  left: 110px;
}

.css-wo2tyn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 0.9px solid rgb(224, 224, 224);
  background-color: rgb(255, 255, 255);
  position: absolute;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 5px;
  transition: all 0.3s ease-in-out 0s;
}
.css-wo2tyn img {
  width: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.css-wo2tyn__right {
  right: 0px;
}

/* product */

.css-lf23gq {
  margin: 16px 0px 0px;
}
.css-rcp8on-unf-card {
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  color: rgba(0, 0, 0, 0.68);
  display: flex;
  font-size: 12px;
  flex-direction: column;
  line-height: 20px;
  margin: 0px 0px 24px;
  padding: 0px;
}
.css-rcp8on-unf-card.order-bom .padding {
  padding: 8px 16px;
}

.css-rcp8on-unf-card .border--bottom {
  border-bottom: 1px solid rgb(240, 240, 240);
}

.css-rcp8on-unf-card .padding {
  padding: 16px;
}

.css-rcp8on-unf-card .flex--between {
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-rcp8on-unf-card .flex {
  display: flex;
  width: 100%;
}

.css-rcp8on-unf-card .header {
  padding: 16px;
  border-bottom: 1px solid rgb(240, 240, 240);
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-rcp8on-unf-card .header > div:not(:last-child) {
  padding-right: 16px;
}

.css-rcp8on-unf-card .header .trx-info--with-32 {
  width: 32.2%;
}

.css-rcp8on-unf-card .header .trx-info {
  display: flex;
  flex-direction: column;
}
.css-rcp8on-unf-card .header .trx-info a {
  text-transform: capitalize;
}

.css-rcp8on-unf-card .header a {
  display: block;
  position: relative;
}

.css-rcp8on-unf-card .font--ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.css-rcp8on-unf-card .font--bold {
  font-weight: bold;
}

.css-rcp8on-unf-card .font__size--m {
  font-size: 14px;
}

.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: "open sans", tahoma, sans-serif;
}

.css-1e6gctp-unf-link {
  color: rgb(66, 181, 73);
  font-size: 0.857143rem;
  text-decoration: none;
  cursor: pointer;
}
a {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

.css-3lpl5n a,
.css-3lpl5n p,
.css-3lpl5n span,
.css-3lpl5n li {
  font-family: "open sans", tahoma, sans-serif;
}
.css-rcp8on-unf-card .header > div:not(:last-child) {
  padding-right: 16px;
}

.css-rcp8on-unf-card .header > div:not(:first-child) {
  padding-left: 16px;
  border-left: 1px solid rgb(241, 241, 241);
}

.css-rcp8on-unf-card .font--nowrap {
  white-space: nowrap;
}

.css-rcp8on-unf-card .flex--column {
  flex-direction: column;
}

.css-rcp8on-unf-card .header__200 {
  width: 200px;
}
.css-rcp8on-unf-card .header > div:not(:first-child) {
  padding-left: 16px;
  border-left: 1px solid rgb(241, 241, 241);
}

.css-rcp8on-unf-card .header__150 {
  width: 150px;
}
.css-rcp8on-unf-card .font__type--trx {
  color: red;
}

.css-rcp8on-unf-card .font__size--l {
  font-size: 16px;
}
.css-rcp8on-unf-card.order-bom .body {
  padding-bottom: 12px;
}

.css-rcp8on-unf-card .body {
  padding: 0px 16px 16px;
  flex-direction: column;
}

.css-rcp8on-unf-card.order-bom .content {
  padding-bottom: 12px;
}

.css-rcp8on-unf-card .content {
  padding-bottom: 16px;
}
.css-rcp8on-unf-card .product__item.bom:last-child {
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(241, 241, 241);
}

.css-rcp8on-unf-card .product__item:last-child {
  border-bottom: none;
  padding-bottom: 0px;
}

.css-rcp8on-unf-card .product__item {
  display: flex;
  padding: 16px 0px;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.css-1dhisgl {
  height: 56px;
  width: 56px;
  border-radius: 8px;
}
img {
  border-style: none;
}
.css-rcp8on-unf-card.order-bom .product__item__desc {
  width: 34.2%;
  max-width: 34.2%;
}

.css-rcp8on-unf-card .product__item__desc {
  margin: 0px 16px;
  max-width: 33%;
  width: 33%;
  text-transform: capitalize;
}

.css-rcp8on-unf-card .product__item__desc {
  margin: 0px 16px;
  max-width: 33%;
  width: 33%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-transform: capitalize;
}
.css-rcp8on-unf-card .ellipsis-two-line {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.css-rcp8on-unf-card .padding--left {
  padding-left: 8px;
}

.css-1n5r376 {
  color: rgba(0, 0, 0, 0.68);
}
.css-rcp8on-unf-card .bordered--left {
  border-left: 1px solid rgb(241, 241, 241);
  padding-left: 16px;
}

.css-rcp8on-unf-card .flex--grow2 {
  -webkit-box-flex: 2;
  flex-grow: 2;
}

.css-rcp8on-unf-card .product__item > div {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-rcp8on-unf-card button {
  min-width: 116px;
  font-size: 12px;
}

.css-duvvqm-unf-btn {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.857143rem;
  height: 32px;
  line-height: 18px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;
  cursor: pointer;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, red 1%)
    center center / 15000% red;
  border: none;
  text-indent: initial;
  position: relative;
}
.css-duvvqm-unf-btn span {
  display: block;
  font-size: inherit;
  opacity: 1;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  top: 0px;
  transition: opacity 0.3s linear 0s, top 0.3s linear 0s;
  white-space: nowrap;
}

.css-rcp8on-unf-card .footer {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-rcp8on-unf-card .flex--center {
  -webkit-box-align: center;
  align-items: center;
}

.css-1v0ixe8 {
  color: rgba(49, 53, 59, 0.68);
  padding: 0px;
  margin: 0px;
  border: 0px;
}
.css-1v0ixe8 img {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
.css-1v0ixe8 span {
  display: inline-block;
  vertical-align: middle;
}
.css-gcemtj {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
  margin-left: 8px;
  color: rgba(49, 53, 59, 0.68);
}
.css-1jyc08 {
  color: rgba(49, 53, 59, 0.68);
}
.css-rcp8on-unf-card .margin--right {
  margin-right: 8px;
}

.css-1jyc08 img {
  margin-right: 8px;
}

.css-gcemtj img {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
/* belum transaksi */
.css-1ynqz4z-unf-emptystate {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex: initial;
  text-align: center;
  padding: 20px 20px 40px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-img {
  max-width: 300px;
  max-height: 300px;
}
.css-1ynqz4z-unf-emptystate img {
  width: 200px;
}

.css-1ynqz4z-unf-emptystate img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.css-1og3umh-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.42857rem;
  line-height: 26px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 8px 0px 0px;
}
.css-1ers9d0-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.68);
  text-decoration: initial;
  margin: 4px 0px 0px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-Action {
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 24px;
  margin-left: -4px;
  margin-right: -4px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-Action__button:first-child {
  margin-top: 0px;
}

.css-1ynqz4z-unf-emptystate .unf-emptystate-Action__button {
  width: 100%;
  padding-right: 4px;
  padding-left: 4px;
  margin-top: 8px;
}
.css-1ynqz4z-unf-emptystate .unf-emptystate-Action__button button {
  min-width: 300px;
}

.css-6rq8n6-unf-btn {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.14286rem;
  height: 48px;
  line-height: 22px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;
  cursor: pointer;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center
    center / 15000% rgb(3, 172, 14);
  border: none;
  text-indent: initial;
  position: relative;
}
.css-6rq8n6-unf-btn span {
  display: block;
  font-size: inherit;
  opacity: 1;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  top: 0px;
  transition: opacity 0.3s linear 0s, top 0.3s linear 0s;
  white-space: nowrap;
}
/deep/ .nav-tabs .nav-link.active,
.nav-tabs .nav-item.show {
  background-color: #199c43;
  border-radius: 20px !important;
  margin: 10px;
  color: white;
}
/deep/.nav-link,
.nav-link:hover {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6;
}
</style>