<template>
   <header class="section-heading heading-line">
        <div class="blu-card recommended-product">
          <div class="recommended-product nav-item active">
            <b-nav pills>
               <carousel 

                      :perPageCustom="[[400,2],[840, 4]]"
                      :paginationEnabled="false"
                      navigationEnabled
                      >
              <slide>
              <b-nav-item :active="tab === 1" @click="$emit('tab', 1)">
                Produk Rekomendasi
              </b-nav-item>
              </slide>
              <slide>
              <b-nav-item :active="tab === 2" @click="$emit('tab' , 2)">
                Paling Laris
              </b-nav-item>
              </slide>
              <slide>
              <b-nav-item :active="tab === 3" @click="$emit('tab' , 3)">
                Harga Terbaik
              </b-nav-item>
              </slide>
              <slide>
              <b-nav-item :active="tab === 4" @click="$emit('tab' , 4)">
                Kategori Yang Dipilih
              </b-nav-item>
              </slide>

            </carousel>
            </b-nav>
          </div>
          <div></div>
        </div>
      </header>
</template>

<script>
export default {
    props: {tab:Number},
data(){
    
}
}
</script>

<style lang="scss" scoped>
/deep/.VueCarousel-inner {
    flex-basis: auto !important;
}
.heading-line {
  position: sticky;
    top: 80px;
    z-index: 999;
}

</style>