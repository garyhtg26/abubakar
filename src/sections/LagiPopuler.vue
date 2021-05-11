<template>
  <div class="container-fluid  p-5" style="margin-right: 0px">
    <el-row style=" margin: auto">
      <el-col class="mx-4 " :span="3" v-for="(x, i) in data" :key="x.id" v-if="i < 11">
        <img
          :src="x.photo"
          class="card-1 image click"
          @click="$router.push(`/kategori/${x.name}`)"
        />
        <h6 class="name">{{x.name}}</h6>
      </el-col>
      <el-col class="mx-4 " :span="3" >
        <img
          src=""
          class="image click card-1"
          @click="$router.push(`/kategori/`)"
        />
        <h6 class="name ">Semua</h6>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    onClicked: Function,
  },
};
</script>

<style  scoped>
.image{
  height: 150px;
}
@media (max-width: 839px) {
  .image{
    height: 80px !important;
  }
}
.el-col {
  padding: 10px;
}
.click{
  cursor: pointer;
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  min-height:151px;
  padding: 10px;

  
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.name{
  text-align: center;
    margin-top: 15px;
    font-weight: 600;
}
</style>

