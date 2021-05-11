<template>
  <div>
    <article class="card mb-3">
      <div class="card-body">
        <b-tabs content-class="mt-3" v-model="tab">
          <!-- transaksi topup -->
          <b-tab title="Promo">
            <!-- <div class="css-1ynqz4z-unf-emptystate e1lf3yex0">
              <div class="unf-emptystate-img">
                <img
                  alt="no-order-found"
                  src="../../assets/images/unta3.png"
                  style="width: 250px"
                />
              </div>
              <div>
                <h3 class="css-1og3umh-unf-heading e1qvo2ff3">Comming soon!</h3>
                <p class="css-1ers9d0-unf-heading e1qvo2ff8">
                  Tunggu kami segera up content ini
                </p>
              </div>
            </div> -->
            <b-row>
              <b-col cols="3">
                <div class="css-2imjyh">
                  <div class="css-1kklei2" data-testid="crdShopSubmtopAds">
                    <div class="css-daidt5">
                      <span class="css-n7b3r7"><i class="css-bt1ygv"></i></span>
                    </div>
                    <section class="css-1v576o7-unf-card eyk31ek0">
                      <div class="css-1iaxm6y">
                        <div class="title">
                          <h3 class="css-1umplph-unf-heading e1qvo2ff3">
                            TopAds
                          </h3>
                        </div>
                        <p class="css-87s24p-unf-heading e1qvo2ff8">
                          Iklankan produkmu untuk menjangkau lebih banyak
                          pembeli
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </b-col>
              <b-col cols="3">
                <router-link to="/admin/ongkir">
                  <div
                    class="css-1kklei2"
                    data-testid="crdShopSubmvoucherTokoShipping"
                  >
                    <div class="css-daidt5">
                      <span class="css-n7b3r7"
                        ><i class="css-1nsyx2z"></i
                      ></span>
                    </div>
                    <section class="css-1v576o7-unf-card eyk31ek0">
                      <div class="css-1iaxm6y">
                        <div class="title">
                          <h3 class="css-1umplph-unf-heading e1qvo2ff3">
                            Voucher Gratis Ongkir
                          </h3>
                        </div>
                        <p class="css-87s24p-unf-heading e1qvo2ff8">
                          Berikan voucher pengiriman ke pembeli dengan kurir
                          pilihan sesuai kebutuhan bisnismu.
                        </p>
                      </div>
                    </section>
                  </div>
                </router-link>
              </b-col>
              <b-col cols="3">
                <router-link to="/admin/cashback">
                  <div
                    class="css-1kklei2"
                    data-testid="crdShopSubmvoucherTokoCashback"
                  >
                    <div class="css-daidt5">
                      <span class="css-n7b3r7"
                        ><i class="css-1nsyx2z"></i
                      ></span>
                    </div>
                    <section class="css-1v576o7-unf-card eyk31ek0">
                      <div class="css-1iaxm6y">
                        <div class="title">
                          <h3 class="css-1umplph-unf-heading e1qvo2ff3">
                            Voucher Cashback
                          </h3>
                        </div>
                        <p class="css-87s24p-unf-heading e1qvo2ff8">
                          Tambah minat pembeli untuk berbelanja lebih di tokomu
                          dengan cashback.
                        </p>
                      </div>
                    </section>
                  </div>
                </router-link>
              </b-col>
              <b-col cols="3">
                <div class="css-1kklei2" data-testid="crdShopSubmbroadcastChat">
                  <div class="css-daidt5">
                    <span class="css-n7b3r7"><i class="css-4j164a"></i></span>
                  </div>
                  <section class="css-1v576o7-unf-card eyk31ek0">
                    <div class="css-1iaxm6y">
                      <div class="title">
                        <h3 class="css-1umplph-unf-heading e1qvo2ff3">
                          Broadcast Chat
                        </h3>
                      </div>
                      <p class="css-87s24p-unf-heading e1qvo2ff8">
                        Tingkatkan penjualan dengan kirim pesan promosi ke
                        pembeli
                      </p>
                    </div>
                  </section>
                </div>
              </b-col>
            </b-row>

            <div class="css-1kklei2" data-testid="crdShopSubmcampaignToko">
              <div class="css-daidt5">
                <span class="css-n7b3r7"><i class="css-ltgk1"></i></span>
              </div>
              <section class="css-1v576o7-unf-card eyk31ek0">
                <div class="css-1iaxm6y">
                  <div class="title css-1jt57iv">
                    <h3 class="css-1umplph-unf-heading e1qvo2ff3">
                      Comming Soon
                      <!-- <span id="chip-new-release"></span> -->
                    </h3>
                  </div>
                </div>
              </section>
            </div>
          </b-tab>
          <b-tab title="List Promo">
            <list-promo :tabs="tab"></list-promo>
          </b-tab>
        </b-tabs>
      </div>
    </article>
  </div>
</template>

<script>
import List_promo from "./List_promo.vue";
export default {
  components: { "list-promo": List_promo },
  data() {
    return {
      tab: 0,
    };
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
.css-2imjyh {
  display: flex;
  flex-wrap: wrap;
}
.css-1kklei2 {
  display: flex;
  flex-direction: column;
  height: 248px;
  width: 220px;

  flex-shrink: 0;
}
.css-daidt5 {
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: 9;
}
.css-n7b3r7 {
  display: flex;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/09771fb9.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 56px;
  width: 60px;
  height: 60px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-bt1ygv {
  width: 36px;
  height: 36px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/3f1b4d7a.svg);
}
.css-1v576o7-unf-card {
  display: block;
  position: relative;
  padding: 16px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);

  border-radius: 8px;
  height: 100%;
  margin: -28px 8px 8px;
}
.css-1iaxm6y {
  text-align: center;
}

.css-1iaxm6y .title {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 4px;
}
.css-1umplph-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  line-height: 26px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 16px 0px;
  font-size: 18px;
}
.css-1iaxm6y > p {
  font-size: 0.8125rem;
}
.css-87s24p-unf-heading {
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 0.857143rem;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.68);
  text-decoration: initial;
}

.css-1nsyx2z {
  width: 36px;
  height: 36px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/952465af.svg);
}
.css-4j164a {
  width: 36px;
  height: 36px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/168439d1.svg);
}
.css-ofvsbq {
  width: 36px;
  height: 36px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/4923dcf4.svg);
}
.css-ltgk1 {
  width: 36px;
  height: 36px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/4511648f.svg);
}

.css-1jt57iv {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-1jt57iv > h3 {
  color: rgb(49, 53, 59);
}

.css-bqaqg3-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.42857rem;
  line-height: 26px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
  margin: 20px 0px 1px;
}
.css-1jt57iv #chip-new-release {
  color: rgb(255, 255, 255);
  margin-left: 4px;
  background-color: rgb(255, 92, 132);
  border-radius: 3px;
  padding: 2px 7px;
  font-size: 0.7rem;
}
.css-hxd4x2 {
  width: 36px;
  height: 36px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/c9ea9a53.svg);
}
.css-exl1ax-unf-label {
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  border-radius: 3px;
  line-height: 16px;
  height: 20px;
  font-family: "Open Sans", Nunito Sans, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Ubuntu", sans-serif;
  font-size: 0.714286rem;
  background-color: rgb(218, 245, 219);
  color: rgb(66, 181, 73);
  margin: 0px 0px 0px 4px;
  overflow: initial;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 280ms ease-out 0s;
  padding: 2px 4px;
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
