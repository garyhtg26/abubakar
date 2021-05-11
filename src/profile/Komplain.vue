<template>
  <div>
    <article class="card mb-3">
      <div class="card-body">
        <b-tabs content-class="mt-3">
          <b-tab title="Komplain Beli" active>
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

            <div class="css-1ynqz4z-unf-emptystate e1lf3yex0">
              <div
                class="css-lf23gq"
                data-testid="crdBomWrapOrderList"
     
              >
                <section class="order-bom css-rcp8on-unf-card eyk31ek0">
                  <div class="header flex">
                    <div class="trx-info trx-info--with-32">
                      <a
                        data-testid="lnkBomShopName-571157052"
                        class="font__size--m font--bold font--ellipsis css-1e6gctp-unf-link en8iawh0"
                        font-size="12"
                      >
                       Nama Barang
                      </a>
                      <span
                        data-testid="txtBomInvoiceNumber-571157052"
                        class="font--ellipsis"
                      >
                        (INV/12312382109410)
                      </span>
                    </div>
                    <div class="font--nowrap flex--column header__200">
                      <div data-testid="txtBomStatuTitle-571157052">Status</div>
                      <div
                        data-testid="txtBomStatuValue-571157052"
                        class="font--bold font__size--m"
                      >
                      Selesai
                      </div>
                    </div>
                    <div class="header__action header__150">
                      <div>
                        <span data-testid="txtBomPriceTitle-571157052">
                          Tipe Pengajuan
                        </span>
                        <div
                          data-testid="txtBomPriceValue-571157052"
                          class="font__type--trx font__size--l font--bold"
                        >
                          Pengembalian
                        </div>
                      </div>
                    </div>
                    <div class="header__action header__150">
                      <div>
                        <span data-testid="txtBomPriceTitle-571157052">
                          No
                        </span>
                        <div
                          data-testid="txtBomPriceValue-571157052"
                          class="font__type--trx font__size--l font--bold"
                        >
                         3123123
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>



              <div data-id="ComplaintInboxCardContainer">
                <div title="Oops..." action="Reset Filter" class="css-6v905x">
                  <img
                    style="height: 200px"
                    class="mb-3"
                    src="../assets/images/noreturn.png"
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
/deep/.b-form-btn-label-control.form-control > label.form-control-sm{
    overflow-x: auto !important;
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
.action-button {
  border-top: 0;
  padding-top: 20px;
}
.table-address .button {
  display: inline-block;
  min-width: 50px;
  margin: 0 0 10px;
  padding: 9px 15px 7px;
  font-size: 11px;

  border-radius: 3px;
  border: solid 1px #e0e0e0;
}
.table {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}
table,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.table-address thead tr {
  border-bottom: solid 1px #e0e0e0;
}
.table-address thead tr th {
  padding-bottom: 20px;
}
.table thead th {
  vertical-align: bottom;
}
.table th {
  font-weight: 700;
}
.table th,
.table td {
  padding: 8px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
label {
  color: grey;
}

.muted {
  color: rgba(0, 0, 0, 0.38);
}
.clear-b {
  clear: both;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.img-sm {
  width: 100%;
  height: auto;
  display: block;
  max-width: 200px;
}
.foto {
  width: 100%;
  height: auto;
  display: block;
}
.btn-link {
  font-weight: 400;
  color: green !important;
  text-decoration: none;
}
.icontext {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: middle;
}
.icontext .icon {
  position: relative;
  margin-right: 10px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}
.icontext .text {
  width: 100%;
  line-height: 1.2;
  color: #212529;
}
.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}
figure {
  margin-bottom: 0;
}
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
  width: 80%;
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
.ulasan-btn {
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
  background: radial-gradient(circle, transparent 1%, rgb(92, 184, 92) 1%)
    center center / 15000% rgb(92, 184, 92);
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
</style>