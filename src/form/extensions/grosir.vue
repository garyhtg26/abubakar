<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="qty" label="Minimum Pembelian" width="180">
      </el-table-column>
      <el-table-column prop="price" label="Harga" width="180">
        <template slot-scope="scope">{{ scope.row.price | currency }}</template>
      </el-table-column>
      <el-table-column label="Aksi" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      :visible.sync="drawer"
      direction="btt"
      style="max-width: 500px"
      size="300px"
      class="mx-auto"
      @close="closed"
      :show-close="false"
    >
      <h5 slot="title">Tambah</h5>
      <el-form ref="form" class="pr-4" label-width="80px">
        <el-form-item label="Qty">
          <el-input class="w-100" v-model="forms.qty"></el-input>
        </el-form-item>
        <el-form-item label="Price">
          <el-input class="w-100" v-model="forms.price"></el-input>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="warning" @click="close">Cancel</el-button>
          <el-button type="success" @click="add">Create</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawer: Boolean,
    close: Function,
    placehold: Array,
  },

  data() {
    return {
      forms: {},
      tableData: [],
    };
  },
  watch: {
    placehold(val) {
      if (val && val.length > 0) {
        this.tableData = val;
      }
    },
  },
  methods: {
    handleDelete(index, item) {
      this.tableData.splice(index, 1);
    },
    handleEdit(index, item) {
      this.index = index;
      this.forms = Object.assign({}, item);
      this.$emit("open", true);
    },
    add() {
      this.tableData.push(this.forms);
      this.forms = {
        price: 100,
        stock: 1,
      };
      this.$emit("change", this.tableData);
    },
    closed(val) {
      if (this.close) this.close(true);
    },
  },
};
</script>