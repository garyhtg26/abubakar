<template>
  <div>
    <el-button
      type="success"
      round
      v-if="current === 'catalog'"
      style="float: right; margin-bottom: 10px"
      @click="dialog = true"
    >
      Tambah {{ current }}
    </el-button>
    <el-button
      type="success"
      round
      v-else
      style="float: right; margin-bottom: 10px"
      @click="$router.push('/admin/upload')"
    >
      Tambah {{ current }}
    </el-button>
    <!-- no products -->
    <div
      class="css-1ynqz4z-unf-emptystate e1lf3yex0 mb-5 mx-auto"
      v-if="data.length == 0 && !isLoading"
    >
      <div class="unf-emptystate-img">
        <img
          alt="no-order-found"
          src="../../assets/images/noproduct.png"
          style="width: 250px"
        />
      </div>
    </div>
    <!-- products -->
    <el-table
      :data="filtered"
      :lazy="true"
      stripe
      fit
      style="width: 100%"
      class="mt-2"
      v-else
    >
      <el-table-column
        v-for="x in fields"
        :key="x.prop"
        :label="x.label"
        :prop="x.prop"
        :width="x.label === 'Name' ? '200px' : ''"
        sortable
      >
        <template slot-scope="scope">
          <div v-if="x.isPrice">{{ scope.row.price | currency }}</div>
          <div v-else>{{ scope.row[x.prop] }}</div>
        </template>
      </el-table-column>
      <el-table-column align="right" width="200" fixed="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            v-if="current === 'catalog'"
            @click="handleEdit(scope.$index, scope.row)"
          >
            Edit
          </el-button>
          <el-button
            size="mini"
            type="success"
            v-else
            @click="$router.push(`/admin/products/${scope.row.id}`)"
          >
            Edit
          </el-button>
          <el-button
            @click="destroy(scope.row, scope.$index)"
            type="warning"
            size="mini"
            >Hapus</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--  -->
    <el-dialog title="Tambah Catalog" :visible.sync="dialog" width="30%" center>
      <span>
        <el-input placeholder="Nama Catalog" v-model="forms.name"></el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="save">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    data: Array,
    fields: {
      type: Array,
      required: true,
    },
    isLoading: false,
    current: String,
    onSuccess: Function,
    onDelete: Function,
    onUpdate: Function,
  },
  data() {
    return {
      search: null,
      dialog: false,
      index: -1,
      forms: {
        name: null,
      },
    };
  },
  computed: {
    filtered() {
      const { search } = this;
      return this.data.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
  methods: {
    handleEdit(index, row) {
      this.forms = Object.assign({}, row);
      this.index = index;
      this.dialog = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    close() {
      this.index = -1;
      this.forms = {};
      this.dialog = false;
    },
    destroy(row, index) {
      this.$alert(`Hapus ${row.name} ?`, "Title", {
        confirmButtonText: "OK",
        type: "warning",
      })
        .then(() => {
          Axios.delete(this.current + "/" + row.id).then((res) => {
            if (this.onDelete) this.onDelete(row, index, this.current);
            this.$message({
              type: "info",
              message: res.data.message,
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
    save() {
      if (this.index == -1) {
        Axios.post(this.current, this.forms).then((res) => {
          if (this.onSuccess) this.onSuccess(this.index, res.data.data);
          this.$notify.success({
            title: "Sukses",
            text: res.data.message,
          });
          this.close();
        });
      } else {
        Axios.put(this.current + "/" + this.forms.id, this.forms).then(
          (res) => {
            if (this.onSuccess) this.onSuccess(this.index, res.data.data);
            this.$notify.success({
              title: "Sukses",
              text: res.data.message,
            });
            this.close();
          }
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/* belum transaksi */
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
</style>