<template>
  <div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="size" label="Size" width="80"> </el-table-column>
      <el-table-column prop="color" label="Color" width="100">
        <template slot-scope="scope">
          <div
            :style="`width:20px;height:20px;background-color:${scope.row.color}`"
          ></div>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="Type" width="80"> </el-table-column>
      <el-table-column prop="price" label="Harga" width="180">
        <template slot-scope="scope">{{ scope.row.price | currency }}</template>
      </el-table-column>
      <el-table-column prop="stock" label="Stock" width="100">
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
      size="360px"
      class="mx-auto"
      @close="closed"
      :show-close="false"
    >
      <h5 slot="title">Tambah Variant</h5>
      <el-form ref="form" class="pr-4" label-width="80px">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="Color">
              <el-input type="color" v-model="forms.color" />
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="Ukuran">
              <el-input v-model="forms.size"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="Type">
              <el-select
                v-model="forms.type"
                placeholder="Select"
                class="w-100"
              >
                <el-option
                  v-for="item in type"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="Stock">
              <el-input
                type="number"
                class="w-100"
                v-model="forms.stock"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="Price">
          <el-input-number
            class="w-100"
            v-model="forms.price"
          ></el-input-number>
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
      type: ["XL", "M", "L", "XXL", "S"],
      index: -1,
      forms: {
        size: 20,
        color: "#000000",
        type: "M",
        price: 100,
        stock: 1,
      },
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
      if (this.index == -1) {
        this.tableData.push(this.forms);
      } else {
        Object.assign(this.tableData[this.index], this.forms);
        this.closed();
      }
      this.forms = {
        size: 20,
        color: "#000000",
        type: "M",
        price: 100,
        stock: 1,
      };
      this.$emit("change", this.tableData);
    },
    closed(val) {
      this.index = -1;
      if (this.close) this.close(true);
    },
  },
};
</script>