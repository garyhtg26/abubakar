<template>
  <div>
    <article class="card mb-3">
      <div class="card-body">
        <b-tabs content-class="mt-3">
          <b-tab title="Komplain Jual" active>
            <div>
              <div class="css-1cxykns">
                <div class="css-4fth5t">
                  <div class="search-icon"></div>
                  <input
                    id="invoice-num"
                    type="text"
                    placeholder="Cari Invoice"
                    value=""
                  />
                  <div class="clear">×</div>
                </div>

                <b-dropdown
                  size="sm"
                  class="shadow-none css-115fpo6 m2"
                  text="Komplain Terbaru"
                  variant="outline-secondary"
                >
                  <b-dropdown-item href="#">Komplain Terbaru</b-dropdown-item>
                  <b-dropdown-item href="#">Komplain Terlama</b-dropdown-item>
                </b-dropdown>
                <b-form-datepicker
                  size="sm"
                  class="css-15hdwhl"
                  id="example-datepicker"
                  v-model="value"
                ></b-form-datepicker>

                <b-dropdown
                  size="sm"
                  class="shadow-none css-115fpo6 m2"
                  text="Tipe Pengajuan"
                  variant="outline-secondary"
                >
                  <b-dropdown-item href="#"
                    >Pengembalian Barang dan Dana</b-dropdown-item
                  >
                  <b-dropdown-item href="#"
                    >Barang Salah/Tidak Lengkap</b-dropdown-item
                  >
                  <b-dropdown-item href="#">Penukaran Barang</b-dropdown-item>
                </b-dropdown>
              </div>
   
              <div class="recommended-product nav-item active">
            <b-nav pills>
              <b-nav-item :active="tab === 1" @click="tab = 1">Produk Rekomendasi</b-nav-item>
              <b-nav-item :active="tab === 2" @click="tab = 2">Paling Laris</b-nav-item>
              <b-nav-item :active="tab === 3" @click="tab = 3">Harga Terbaik</b-nav-item>
              <b-nav-item :active="tab === 4" @click="tab = 4">Kategori Yang Dipilih</b-nav-item>
            </b-nav>
          </div>








              <div 
                data-id="ComplaintInboxCardContainer"

              >
                <div title="Oops..." action="Reset Filter" class="css-6v905x">
                  <img
                    style="height: 200px"
                    class="mb-3"
                    src="../../assets/images/noreturn.png"
                  />
                  <h5 class="css-1qnd4u9-unf-heading e1qvo2ff5">Oops...</h5>
                  <div class="text">
                    Kami tidak dapat menemukan komplain yang Anda cari
                  </div>
                  <button class="css-1y2lu4s-unf-btn e1ggruw00">
                    <span>Reset Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </b-tab>
          <!-- <b-tab title="Komplain Penjual"> </b-tab> -->
        </b-tabs>
      </div>
      <!-- card-body .// -->
    </article>
    <!-- card.// -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
    };
  },
};
</script>

<style scoped lang="scss">
.css-4fth5t {
  background-color: rgb(241, 241, 241);
  color: rgba(0, 0, 0, 0.38);
  border-radius: 8px;
  padding: 4px 8px;
  margin-right: 12px;
  display: flex;
  box-sizing: border-box;
  max-width: 20%;
  height: 32px;
  -webkit-box-align: center;
  align-items: center;
}
.css-4fth5t input {
  background-color: transparent;
  padding: 0px !important;
  box-shadow: none !important;
  outline: none;
  border: none !important;
  font-size: 12px !important;
}
@media (max-width: 1200px) {
  .css-1cxykns {
    padding: 25px 16px 0px;
  }
}
/deep/.b-form-btn-label-control.form-control > label.form-control-sm{
    overflow-x: auto !important;
}
.css-1cxykns {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
@media (max-width: 1200px) {
  .search-icon {
    height: 16px;
    width: 16px;
    background-size: 16px 16px;
    margin-top: 4px;
    display: none;
  }
}
.search-icon {
  height: 20px;
  width: 20px;
  background-size: 20px 20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA+xJREFUWAntVztMVEEUnZm3UcPXhK8UoKUWJiZijNFiaQgbdtFmpTBAYoGxsNHYii3RWmOiEWMBGwtgyRot2EJDARqihZRGQ0QREr5rJLtvvPfJW2bn3fczhmqn2Tv3N+fdmftZxsqrHIFyBDwjwD2lhDCTyRz8uZHvME2zB4xPg0oL46yOSbYK9DfJ2DshxERDTWQ6Fov9JlyEYgUGmEpJI2emrzLTHAIQR/xOAcdLTIihtqbqJ9FoNO+n7yYPBPBZKt1qFsxxKeUpN0dufM75vDDExb5k/KubjhffF+Dz0cn2vGlOQdQavRx5yeCQ5YgQ3Vd6E3NeepTME6AVuXxhzg0c52wL3t4nxvkq6NRzJo9LyapcDloWEaM9bCRdAWaz2ciX7xuz1LXCtX2UQtxpqjZeqolgJdD6TkwyPgR2J3WgeN0VRqI9meQFXea2dwU4Mjo5CJn6UDfkgt/vv5y4DYeZuszeAzgxMjY5LE150+bZv1yIwYHexCN77/dLAsRILK/tfNazFcEN9Pbc8nNqy5+OTtzTQcKBS42HDxxTI2/rU7+CYmKdc4CDa8XIUfpuPEuf8w+qHP2if5XnRZMAsQjrRvjmvK5V18e9pQ+1UJdR/nUde08ChGvADlFcmK2YEEVGCALtrGxXbHT/ishBkgBBq0XVhKxcCPpmVDukLTssRaWrxH+pqHRHA8Teqiz44hVlG56EOqkaYc1U9140DfBv4y/ahXFYNFIJKUs+GB7nmir2ommAMJWoRtghsPSovKC0ZcfZCVUfS42696JpgJy/V42wff3YLHSpvKA02hHtbyaoPQkQysO47oCb5l3sEDrfa4/6aKfrQMl6pfPc9uSBOGzq14C9FduXmyOKb7U7rSeD38WjjVVTlD7FIwFiaYCe6fxy6K1W+/KJJEaOanMIQDIxHGaAhQ+i179OM/jmdp+DY5qB7J2DQeFsmI7kChBhh5kHGZYSyFYiIfYiwHmOS/ZC1B263tfZub0ncKc8AaLZ/5ioHcdz9qbSqI0lk9Eth0xjkG9Q1cExHSdhuJZ5lR+YhmvVezE8xAvbhfVMKpUlp2/Vty9AVMYxva255gz8nbwGIQ9UZEFvkTFxA98czDVj6qEWHRCk7xXrjq2xXvtfbLVCaF+74Geg87xuba5N29maTqcrVjfxj5eM6v7g3Xped2iAjgMCMhDkypaZhmTq0E04428rIjVd1JsMdMW6w3/Zx+PxXH2ViEOpmdbtIbLnc4WNBzof9/sGEA9DkJVGQzcFEhLnEuroa18B4uHJ5LlfJEjOFnRwuN93gHioDRJK12NIAkyu2Ygh+1FWXuUIlCMQMgJ/AE/9jGlOwyVsAAAAAElFTkSuQmCC);
  content: "";
  margin-right: 8px;
}
@media (max-width: 1200px) {
  .css-4fth5t .clear {
    display: none;
  }
}

.css-4fth5t .clear {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  opacity: 0;
}
@media (max-width: 1200px) {
  .css-115fpo6 {
    margin-right: 8px;
  }
}

.css-115fpo6 {
  position: relative;
  margin-right: 12px;
}
@media (max-width: 1200px) {
  .css-115fpo6 .select-input {
    width: 132px;
    padding: 8px;
  }
}

.css-115fpo6 .select-input {
  padding: 8px 12px;
  border: 1px solid rgb(224, 224, 224);
  position: relative;
  width: 160px;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  height: 32px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  transition: all 0.3s ease-in-out 0s;
}
.css-115fpo6 .select-option {
  position: absolute;
  left: -1px;
  top: 31px;
  right: 0px;
  width: 100%;
  background: rgb(255, 255, 255);
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  font-weight: 400;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 12px;
  border-right: 1px solid rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
  border-image: initial;
  border-top: none;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.css-115fpo6 .select-option li {
  margin: 5px 8px;
  padding: 5px 8px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent;
}
li {
  line-height: 22px;
}
.ic-arrow,
.ic-arrow-up {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: all 0.3s ease-in-out;
}
.ic-arrow {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAdtJREFUaAXtlc9KQkEUxs/RIiUUsUVPENRDtGiT1CJx06Ig6hV6lF4gEzKxRVlCuApy1xMEreoBKrqIhHVPc65M2vjvzvXqxjNwmbnOnN853+fMXABp4oA4IA6IA+KAOCAOiAPigDgwqw5gEOGnV/ep+S9nJRGnp2w26wRh6JhKpZJwmrjaWkg8H+U2PvTvfvuI34V6Xb50u4nNz5eW6z6+N+j17OI6p+dse45lBrOYyWxbhrUAct0TAkpyIgJIEWA5X7zZtU3MMSr+khltFiWZbcuxFoBAy91JiGgOkM5tRHhrVQwRRLtZJrt7btDYWgAglk2YjYh28W7RizFBfdjmEvPdWkAkHTsGhLoJ8iOiU/x/55mFgA8e2wSPeLcWcJDJNKLp+JatiEHb5q/4pdg2s0fU2zMd6BplSqFWW/x5a96pk7xuUhHxGwj3D/d2vO3WKV6dF6N5zgcsnlGBBXCwHxG8jg95/z0Pdf43gzjvcRmtB0H7kSIUeFLFc81jC2DIMBE839PUJTCu85oZigCG+RYRYvGcNzQBvkSEXHzoAoaKmEDxnM/6O8BBw5r+TqirtKrX8TisPa+ZU+kLpeoaP1NJJknEAXFAHBAHxAFxQBwQB8QBcWDmHPgFxdjqO9iwghcAAAAASUVORK5CYII=);
  background-size: cover;
}
@media (max-width: 1200px) {
  .css-15hdwhl {
    width: 175px;
    margin-right: 8px;
    
  }
}

.css-15hdwhl {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 32px !important;
  border-radius: 8px;
  border: 1px solid rgb(224, 224, 224);
  box-sizing: border-box;
  padding: 1px;
  margin-right: 12px;
  position: relative;
  cursor: pointer;
  width: 200px;
  font-size: 12px;
}
.react-datepicker,
.react-datepicker-wrapper {
  display: inline-block;
}
.react-datepicker__input-container {
  position: relative;
  display: inline-block;
}
@media (max-width: 1200px) {
  .css-uq0656 .inbx__datepicker-input {
    margin-right: 0px;
  }
}

.css-uq0656 .inbx__datepicker-input {
  margin-right: 8px;
  font-weight: 400;
  cursor: pointer;
  border: none;
  box-shadow: none;
  width: auto;
  min-width: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
}
.reso-input {
  border-radius: 3px;
  -webkit-transition: border 0.5s ease-in-out;
  -o-transition: border 0.5s ease-in-out;
  transition: border 0.5s ease-in-out;
}
@media (max-width: 1200px) {
  .css-15hdwhl .mr-8 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.mr-8 {
  margin-right: 8px;
}
.ic-remove {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA35JREFUWAntWFtrE0EUHlOym8smDQVFqJRY6g1tlaqlImJFFLEPvuovsC/e/Rnefam/QF99qIoiVkQsVYu2irdSQ7EgCiVNNkmzpanzpZ04mc7sTtKXinteZnbmnPN9eyZnztkQ4osfAT8C/3YE1qyE/uuRDyftQqHPzuY7io4TnS06QfgLmcacaRg5KxYZtcLh/r2dO+7Vi1MXwVfD765M/fx9JmvnDB3gmBV1mtevvb2va9dlHX1epyaCb99/PPBj6tfAdHomxjvRnTclGrMbmtf17t65/YWujTbB4ZGxs+MTk9eLzlxA17lMzzSCpbbWlgtdne23ZPvimhZBkPv09fuNUqmkpS+CiM+BQGBh2+aN53VIegLiWL98Sw2uNHIiSURyy6Zkj9dxex4XfnMiuYaGAEk0xgmNhIi77Bk60IUNL/AJ3/yabO4aQWTr5/HUJd4QQL1HD5KmRJzQLCZPBodIJmvzKpV5PGaRIz3dhGYxmU5nyMDj52R+vlTZx2RrW/KqW3ZXv1aVKSG4SoQlCmaVyWEdwMcO7ycgIgrWsAcdCF4ItqLIMHgdJUFcwrJ7DtFC5JhEwqFlJBk57DGBjSzSwAAW0xNHJUE7V+gTlfFMM7l8rPnCbGWbJykjV6C6+CnAViYqLOi6EMx3yJxhDZF49PQlkZHEsfKRA7mHVFcWPebfzqmxlASLTnHxx8O8CKOKZK3k4NYNS0mQFX6BV9WjjCRT0Ikc03XDUhJkxvWOCzUZqm87JUG0TF4YsoRgNnzisDXVGDKDSiwlQdMw/94lEs8yckgaWeJA103csJQErWhkVOVURQ6ZrcpuN5JuWC4Ew/0ygqitKF9itoIYkoYlDpKECXRho6rdVlSOBXslQbTp6IQZCBsRCVa+sCbLVpDE3ceThI0sisBw+yRQEgQ42nSMvGRtu1z4sYbypbqEGUlWFtEswFYUGQavo87vJa37D55lxBYfHQ0KP0ioyhcDwbEiciAndjL4BDhx/FCc6cpG1wjCAN8QaC55YwClZzKe5GCDF4CuSA4+4Zv3K5t7EkTH25psuUgjUdvdK0NbWoMv+PTqpqHuecQMZ+jN2LmJ1OQ1sbtm+7ojIgdy3Xvab+rYaBOEs1X92cm/7ar9cOdJYk474VO02TyNfg4tE+tKFv/6MHOoEPQSvkPvubuirf/sR8CPwP8SgT8omr+KIzwBCgAAAABJRU5ErkJggg==);
  width: 20px;
  height: 20px;
  background-size: cover;
  position: absolute;
  right: 4px;
  top: 6px;
  cursor: pointer;
}
.css-110y76o {
  position: relative;
  margin-right: 12px;
}
@media (max-width: 1200px) {
  .css-110y76o .select-input--multiple {
    width: 132px;
    padding: 6px 8px;
  }
}

.css-110y76o .select-input--multiple {
  padding: 6px 12px;
  line-height: 15px;
  border: 1px solid rgb(224, 224, 224);
  position: relative;
  width: 160px;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  height: 32px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
  transition: all 0.3s ease-in-out 0s;
}
.css-110y76o .select-option--multiple {
  position: absolute;
  width: 100%;
  background: rgb(255, 255, 255);
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  border-radius: 3px 3px 8px 8px;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid rgb(224, 224, 224);
  min-width: 330px;
  top: 30px;
  left: -1px;
  padding-top: 8px;
}

.css-110y76o * {
  box-sizing: border-box;
}
.css-110y76o .select-option--multiple li {
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
  font-size: 13px;
}

.css-110y76o * {
  box-sizing: border-box;
}
.css-110y76o .divider {
  height: 1px;
  background-color: rgb(224, 224, 224);
  margin: 10px 16px 16px;
}
.b-form-btn-label-control.form-control > label.form-control-sm {
    overflow: auto !important;
}
.css-110y76o .action-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px 16px 12px;
}
.css-110y76o .action-container div {
  color: rgb(3, 172, 14);
  cursor: pointer;
  font-size: 12px;
}
.css-1y2lu4s-unf-btn {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.857143rem;
  height: 40px;
  line-height: 24px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  overflow: hidden;
  padding: 0px 16px;
  text-overflow: ellipsis;
  transition: background 0.8s ease 0s;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center
    center / 15000% rgb(3, 172, 14);
  border: none;
  text-indent: initial;
  position: relative;
}
.css-1y2lu4s-unf-btn span {
  font-size: inherit;
  opacity: 1;
  position: relative;
  top: 0px;
  transition: opacity 0.3s linear 0s, top 0.3s linear 0s;
}
.css-9j0npc {
  position: relative;
}
.css-1aw2lzi {
  padding: 16px 24px 0px;
  width: 100%;
  box-sizing: border-box;
}
@media (max-width: 1200px) {
  .css-1upni07-unf-chip {
    max-width: 123px;
  }
}

.css-1upni07-unf-chip {
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
  margin-bottom: 8px;
  margin-right: 8px;
  overflow: hidden;
  padding: 0px 12px;
  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
}
@media (max-width: 1200px) {
  .css-s7sru4-unf-chip {
    max-width: 123px;
  }
}

.css-s7sru4-unf-chip {
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
  margin-bottom: 8px;
  margin-right: 8px;
  overflow: hidden;
  padding: 0px 12px;
  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
}
.css-111tojl {
  font-weight: 600;
  padding: 0px 8px;
  cursor: pointer;
  color: rgb(3, 172, 14);
  height: 40px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
}
.css-6v905x {
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  padding: 100px;
}

.css-1qnd4u9-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
}
.css-6v905x .text {
  max-width: 300px;
  margin-bottom: 24px;
}
.css-1y2lu4s-unf-btn {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.857143rem;
  height: 40px;
  line-height: 24px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  overflow: hidden;
  padding: 0px 16px;
  text-overflow: ellipsis;
  transition: background 0.8s ease 0s;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center
    center / 15000% rgb(3, 172, 14);
  border: none;
  text-indent: initial;
  position: relative;
}
.css-1y2lu4s-unf-btn span {
  font-size: inherit;
  opacity: 1;
  position: relative;
  top: 0px;
  transition: opacity 0.3s linear 0s, top 0.3s linear 0s;
}
@media (max-width: 1200px) {
  .css-9j0npc .select-input {
    width: 122px;
    padding: 8px;
  }
}
.css-9j0npc .select-option {
  position: absolute;
  left: -1px;
  top: 31px;
  right: 0px;
  width: 100%;
  background: rgb(255, 255, 255);
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  font-weight: 400;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 12px;
  border-right: 1px solid rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
  border-image: initial;
  border-top: none;
}

.css-9j0npc .select-option li {
  margin: 5px 8px;
  padding: 5px 8px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent;
}
.css-9j0npc .select-input {
  padding: 8px 12px;
  border: 1px solid rgb(224, 224, 224);
  position: relative;
  width: 140px;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  height: 32px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
  line-height: 12px;
  transition: all 0.3s ease-in-out 0s;
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
/deep/ .btn-outline-secondary:hover,
.btn-outline-secondary:link,
.btn-outline-secondary:visited,
.btn-outline-secondary:hover,
.btn-outline-secondary:active,
.btn-outline-secondary:focus {
  color: grey;
  background-color: transparent !important;
  border-color: #e0e0e0 !important;
  outline: 0 !important;
  background-image: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
/deep/.btn-outline-secondary {
  border-color: #e0e0e0 !important;
  border-radius: 10px;
}
/deep/.show > .btn-outline-secondary.dropdown-toggle {
  color: grey !important;
  background-color: #e0e0e0 !important;
  border-color: #e0e0e0 !important;
}
.recommended-product {
  background: #fff;
  padding: 0px 5px;
  height: 20%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  border-radius: 20px;
}
.nav-item {
  border-radius: 20px;
  font-weight: 600;
}
.nav-link,
.nav-link:hover {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px !important;
  margin: 10px;
  color: grey;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: rgb(46, 185, 53);
  background-color: #ceffd5 !important;
  border: 1px solid rgb(46, 185, 53);
}
</style>