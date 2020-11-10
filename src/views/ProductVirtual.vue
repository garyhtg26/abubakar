<template>
  <div>
      <Navbar></Navbar>
    <div style="margin-top:80px;">
         <vueper-slides 
    :slide-ratio="1 / 4" fixed-height="280px"
    ref="myVueperSlides"
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="slide.id"
    :title="slide.title"
    :content="slide.content"
    :image="slide.image"
    :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]" />
  <template v-slot:pause>
    <i class="icon pause_circle_outline"></i>
  </template>
  </vueper-slides>

<div class=" p-5">
      <h4 style="margin-bottom:20px">Beli Produk Virtual</h4>
   <div id="accordion">
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
         
        <b-tab active >
            <template v-slot:title>
                <img src="../assets/images/icon/game.png" alt="abubakar">
            </template>
        <div class="container">
            <p>
  <a class="btn btn-primary m-2" data-toggle="collapse" href="#google" role="button" aria-expanded="false" aria-controls="collapseExample">
    <img src="https://ecs7.tokopedia.net/img/attachment/2020/3/1/66301108/66301108_b0f2723c-bd0f-46ac-ab9c-4d0af068eb73.png">
  </a>
 <a class="btn btn-primary m-2" data-toggle="collapse" href="#ml" role="button" aria-expanded="false" aria-controls="collapseExample">
    <img src="https://ecs7.tokopedia.net/img/attachment/2019/9/24/66301108/66301108_0ae79264-8298-496b-b64a-967d9bb5dca2.jpg">
  </a>
   <a class="btn btn-primary m-2" data-toggle="collapse" href="#pubg" role="button" aria-expanded="false" aria-controls="collapseExample">
    <img src="https://ecs7.tokopedia.net/img/attachment/2019/9/24/66301108/66301108_4215dc60-1d8c-455c-8937-89e61f29b41a.png">
  </a>
</p>
<div class="collapse show" id="google" data-parent="#accordion">
  <div class="card card-body">
    <h4>Kode Voucher Google Play (IDR)</h4>
    <p>Satu tempat untuk segala bentuk hiburan:​ Film, buku, majalah, atau aplikasi dan game Android terbaru—semua tersedia di Google Play. Kapan saja, dimana saja:​ Akses film dan lainnya di perangkat Android, iPhone dan iPad, Chromecast, serta browser web Anda. Belanja dengan cepat dan fleksibel:​ Tak perlu kartu kredit untuk menukarkan kartu hadiah Google Play, dan masa berlaku saldo Anda tidak ada batasnya. Beli untuk orang terdekat atau hadiahkan kepada diri Anda sendiri. </p>
    <h6 class="text-muted">select product</h6>
    <b-form-select v-model="selected" style="width:30%" :options="options" size="sm" class="mb-3"></b-form-select>
<h5 > Harga</h5>
<h1 class="">{{selected}}</h1>
<b-button variant="success" style="width:30%;" class="m-2">Beli</b-button>
  </div>
</div>
<div class="collapse " id="ml" data-parent="#accordion">
  <div class="card card-body">
    <h4>Mobile Legends</h4>
    <p>Mobile Legends: Bang Bang adalah sebuah permainan piranti bergerak berjenis MOBA yang dikembangkan dan diterbitkan oleh Moonton.</p>
    <form>
      <div class="row">
      <div class="col-sm-3">
        <label>
    <p class="label-txt">User ID</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
      </div>
      <div class="col-sm-3">
        <label>
    <p class="label-txt">Server ID</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
      </div>
  
  </div>

</form>
    <h6 class="text-muted">select product</h6>
    <b-form-select v-model="selected" style="width:30%" :options="options" size="sm" class="mb-3"></b-form-select>
<h5 > Harga</h5>
<h1 class="">{{selected}}</h1>
<b-button variant="success" style="width:30%;" class="m-2">Beli</b-button>
  </div>
</div>
<div class="collapse " id="pubg" data-parent="#accordion">
  <div class="card card-body">
    <h4>PUBG Mobile</h4>
    <p>PlayerUnknown's Battlegrounds (PUBG) adalah sebuah permainan dengan genre battle royale, yang para pemainnya bisa bermain dengan 100 orang sekaligus secara daring. Di dalam permainan ini pemain bisa bermain solo, tim 2 orang, dan tim 4 orang, serta bisa mengundang teman untuk bergabung ke dalam permainan sebagai tim. Redeem Code PUBG Mobile yang berlaku akan dikirimkan kepada anda pada saat pembelian telah berhasil.</p>
    <h6 class="text-muted">select product</h6>
    <b-form-select v-model="selected" style="width:30%" :options="options" size="sm" class="mb-3"></b-form-select>
<h5 > Harga</h5>
<h1 class="">{{selected}}</h1>
<b-button variant="success" style="width:30%;" class="m-2">Beli</b-button>
  </div>
</div>
        </div>
       
  


        </b-tab>
      
        <b-tab >
            <template v-slot:title>
                <img src="../assets/images/icon/booking.png" alt="abubakar">
            </template>
        


        </b-tab>
        <b-tab >
            <template v-slot:title>
                <img src="../assets/images/icon/umroh.png" alt="abubakar">
            </template>
        


        </b-tab>
        <b-tab >
            <template v-slot:title>
                <img src="../assets/images/icon/wanita.png" alt="abubakar">
            </template>
        


        </b-tab>
        <b-tab >
            <template v-slot:title>
                <img src="../assets/images/icon/tiket.png" alt="abubakar">
            </template>
        


        </b-tab>
        <b-tab >
            <template v-slot:title>
                <img src="../assets/images/icon/zakat.png" alt="abubakar">
            </template>
        


        </b-tab>
        <b-tab >
            <template v-slot:title>
                <img src="../assets/images/icon/emas.png" alt="abubakar">
            </template>
        


        </b-tab>
      
        
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <!-- <div class="text-center">
      <b-button-group class="mt-2">
        <b-button v-if="tabIndex!=0" @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group>

    </div> -->
  </div>
  </div>
  

    </div>

   <Login></Login>
      <mini-cart></mini-cart>
      <br>
  
<Footer></Footer>
  </div>

</template>

<script>

import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'
export default {
  name: "home",
  components: {
    Products,
    Login,
      VueperSlides,
    VueperSlide
  },
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.namatoko = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  data() {
      return {
          form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Pilih Kategori', value: null }, 'Buku', 'Fashion Wanita', 'Fashion Pria', 'Electronik'],
        show: true,
        tabIndex: 0,
        src: require('@/assets/images/banner1.png'),
         src2: require('@/assets/images/banner2.png'),
          src3: require('@/assets/images/nav/banner.png'),
          image: require('@/assets/images/nav/background1.png'),
          icon: require('@/assets/images/icon/semua.png').default,

    headerOpt: { isVisible: false},
      footerOpt: { isVisible: false },
      slides: [
    {
      
      image: "https://ecs7.tokopedia.net/img/banner/2020/10/7/42484317/42484317_35c2040f-55d0-45f4-9286-42b7031908af.jpg"
    },
    {
      
      image: "https://ecs7.tokopedia.net/img/banner/2020/8/27/42484317/42484317_848eb75b-36c9-4bef-a254-115418ae5638.jpg"
    },
    {
      
      image: "https://ecs7.tokopedia.net/img/banner/2020/8/31/42484317/42484317_fa7e8881-26ca-411d-8371-86dd0aee2b1c.jpg"
    }
  ],
  selected: 'Rp 5.000',
        options: [
          { value: 'Rp 5.000', text: 'Rp 5.000' },
          { value: 'Rp 10.000', text: 'Rp 10.000' },
          { value: 'Rp 20.000', text: 'Rp 20.000' },
          { value: 'Rp 50.000', text: 'Rp 50.000' },
          { value: 'Rp 100.000', text: 'Rp 100.000', disabled: true }
        ]

      }
    },
    
};
</script>

<style scoped lang="scss">
.nav {
    width: 100%;
    background-color: #fbfbfb;
    border-bottom: 1px solid #ededed;
    position: -webkit-sticky;
    position: sticky;
    top: 61px;
    z-index: 6;
}
/deep/ .nav-tabs .nav-link.active, .nav-tabs .nav-item.show {
        border-radius: 3px !important;
    background-color:#c5c5c559 !important;
    box-shadow: rgba(146, 146, 146, 0.05) -1px -1px 4px 0px;
    border: 1px solid rgb(0, 0, 0);
    vertical-align: bottom;
    
}
/deep/.nav-link, .nav-link:hover {
    background: transparent !important;
    border-radius: 20px !important;
    margin: 10px;
    color: white;
}
img {
    height: 80px;
}
/deep/.card-header-tabs {
    
    place-content: center !important;
}

label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: rgb(120,120,120);
  transition: ease .3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #BCBCBC;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8BC34A;
  transition: ease .6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

</style>