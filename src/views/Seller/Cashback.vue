<template>
  <div class="css-1ip48go">
    <h2
      data-testid="lblVoucherAddTitle"
      class="css-1wnl5xc-unf-heading e1qvo2ff2 mb-4"
    >
      Tambah Voucher Gratis Cashback
    </h2>
    <div class="css-1yp4ln">
      <div class="css-1qnlgek">
        <section
          class="css-1cs3jyh-unf-card eyk31ek0"
          data-testid="crdVoucherTypeForm"
        >
          <div class="css-60dn7l">
            <h4 class="css-13ic1f6-unf-heading e1qvo2ff4">Target Voucher</h4>

            <div data-testid="rdoVoucherTargetVoucher" class="css-ntj8ly">
              <div class="css-1bh52ki e12o1eyi0">
                <label class="css-14vgcl7-unf-radio e12o1eyi3"
                  ><input
                    type="radio"
                    class="css-90nakk e12o1eyi2"
                    name="target"
                    value="A"
                    checked="" /><span
                    class="css-12tb2l0-unf-radio__area e12o1eyi1"
                  ></span
                ></label>
              </div>
              <div class="form-radio--caption">
                <p>Publik</p>
                <span
                  >Voucher akan ditampilkan di halaman Toko dan dapat digunakan
                  oleh semua calon pembeli.</span
                >
              </div>
            </div>
            <div data-testid="rdoVoucherTargetVoucher" class="css-o9vvsl">
              <div class="css-1bh52ki e12o1eyi0">
                <label class="css-14vgcl7-unf-radio e12o1eyi3"
                  ><input
                    type="radio"
                    class="css-90nakk e12o1eyi2"
                    name="target"
                    value="B" /><span
                    class="css-12tb2l0-unf-radio__area e12o1eyi1"
                  ></span
                ></label>
              </div>
              <div class="form-radio--caption">
                <p>Terbatas</p>
                <span
                  >Voucher tidak ditampilkan di halaman Toko tetapi dapat
                  dibagikan secara pribadi ke pelanggan Anda.</span
                >
              </div>
            </div>
          </div>
          <div class="css-60dn7l">
            <h4 class="small-space css-13ic1f6-unf-heading e1qvo2ff4">
              Nama Voucher
            </h4>
            <div class="row--caption">
              Buat nama voucher yang menarik perhatian pembeli. <br />Contoh:
              Kejutan Promo Spesial
            </div>
            <div class="css-13d6wom ed3tosx0">
              <div class="css-79elbk ed3tosx2">
                <div class="css-vj2aaj ed3tosx3">
                  <input
                    required
                    v-model="message"
                    @keyup="charCount()"
                    maxlength="30"
                    placeholder="Masukkan Nama Voucher"
                    type="text"
                    data-testid="txtVoucherName"
                    class="css-4eg0ft e16vycsw0"
                    value="dasdas"
                  />
                </div>
              </div>
              <div class="css-x1sij0 ed3tosx7">
                <span class="css-wtkndi ed3tosx9"
                  >{{ totalcharacter }}/30
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          class="css-1cs3jyh-unf-card eyk31ek0"
          data-testid="crdVoucherNominalTypeForm"
        >
          <div class="css-60dn7l row--small-space">
            <h4 class="css-13ic1f6-unf-heading e1qvo2ff4">
              Nominal Gratis Cashback
            </h4>
          </div>
          <div class="css-60dn7l row--small-space row--large-space">
            <div data-testid="rdoVoucherBenefitIdr" class="css-ntj8ly">
              <div class="css-1bh52ki e12o1eyi0">
                <label class="css-14vgcl7-unf-radio e12o1eyi3"
                  ><input
                    type="radio"
                    class="css-90nakk e12o1eyi2"
                    value=""
                    checked="" /><span
                    class="css-12tb2l0-unf-radio__area e12o1eyi1"
                  ></span
                ></label>
              </div>
              <div class="form-radio--caption">
                <p>Dalam Rupiah (Rp)</p>
              </div>
            </div>
            <div class="css-13d6wom ed3tosx0">
              <div class="css-79elbk ed3tosx2">
                <div class="css-vj2aaj ed3tosx3">
                  <div class="css-kbexj1 ed3tosx4">Rp</div>
                  <input
                    required
                    type="number"
                    data-testid="txtVoucherBenefitIdr"
                    class="css-4eg0ft e16vycsw0"
                    value="20.000"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="css-60dn7l">
            <h4 class="css-13ic1f6-unf-heading e1qvo2ff4">Minimum Pembelian</h4>
            <div class="css-13d6wom ed3tosx0">
              <div class="css-79elbk ed3tosx2">
                <div class="css-vj2aaj ed3tosx3">
                  <div class="css-kbexj1 ed3tosx4">Rp</div>
                  <input
                    required
                    type="number"
                    data-testid="txtVoucherMinPurchase"
                    class="css-4eg0ft e16vycsw0"
                    value="100.000"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="css-60dn7l">
            <h4 class="css-13ic1f6-unf-heading e1qvo2ff4">Kuota</h4>
            <div class="css-13d6wom ed3tosx0">
              <div class="css-79elbk ed3tosx2">
                <div class="css-vj2aaj ed3tosx3">
                  <input
                    required
                    type="text"
                    data-testid="txtVoucherQuota"
                    class="css-4eg0ft e16vycsw0"
                    value="25"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="css-60dn7l">
            <h4 class="css-13ic1f6-unf-heading e1qvo2ff4">
              Maksimum Estimasi Pengeluaran Toko
            </h4>
            <div class="text-disabled css-13d6wom ed3tosx0">
              <div class="css-79elbk ed3tosx2">
                <div disabled="" class="css-p7pcxo ed3tosx3">
                  <div class="css-kbexj1 ed3tosx4">Rp</div>
                  <input
                    disabled=""
                    type="text"
                    class="css-1fw5q9r e16vycsw0"
                    value="500.000"
                  />
                </div>
              </div>
              <div class="css-x1sij0 ed3tosx7">
                <p class="css-1hws533 ed3tosx8">
                  Potongan Harga * Kuota Voucher
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="css-1cs3jyh-unf-card eyk31ek0">
          <div class="css-60dn7l">
            <h4 class="css-13ic1f6-unf-heading e1qvo2ff4">Periode</h4>
          </div>
          <div class="css-60dn7l row--small-space row--with-column">
            <div class="css-12wpduw">
              <div class="css-1t1ju7b">
                <span>Tanggal Mulai</span>
                <b-form-datepicker
                  id="tanggal-mulai"
                  v-model="mulai"
                  class="css-rn7hx6-unf-chip e181j6nn3"
                ></b-form-datepicker>
              </div>
            </div>
            <div class="css-12wpduw">
              <div class="css-1t1ju7b">
                <span>Waktu Mulai</span>
                <div class="css-g99td1 css-rj8hz7">
                  <b-form-select
                    v-model="waktumulai"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-select>
                </div>
              </div>
            </div>
          </div>
          <div class="css-60dn7l row--with-column">
            <div class="css-12wpduw">
              <div class="css-1t1ju7b">
                <span>Tanggal Selesai</span>
                <b-form-datepicker
                  id="tanggal-selesai"
                  v-model="selesai"
                  class="css-rn7hx6-unf-chip e181j6nn3"
                ></b-form-datepicker>
              </div>
            </div>
            <div class="css-12wpduw">
              <div class="css-1t1ju7b">
                <span>Waktu Selesai</span>
                <div class="css-g99td1 css-rj8hz7">
                  <b-form-select
                    v-model="waktuselesai"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="css-kimmkb mb-5">
          <div
            class="tnc__item tnc__item--checkbox"
            data-testid="lblVoucherTNC"
          >
            <div class="css-1bh52ki e4ba57s0">
              <label class="css-cdg5bv-unf-checkbox e4ba57s2"
                ><input
                  required
                  type="checkbox"
                  class="css-100izxs-unf-checkbox__input e4ba57s4"
                  value="" /><span
                  class="css-12a5v84-unf-checkbox__area e4ba57s1"
                ></span
              ></label>
            </div>
            <div class="tnc__item--description">
              Bersama ini Anda menyetujui persyaratan Abubakar.
            </div>
          </div>
          <div class="tnc__item tnc__item--button">
            <button
              data-testid="btnVoucherCancelSubmit"
              class="css-1b3mrzj-unf-btn e1ggruw00"
            >
              <span>Batal</span></button
            ><button
              data-testid="btnVoucherSubmit"
              class="css-1axkmtl-unf-btn e1ggruw00"
              disabled=""
            >
              <span>Buat Voucher</span>
            </button>
          </div>
        </div>
      </div>
      <div class="css-x3vtoz">
        <div>
          <div class="" data-testid="previewVoucher">
            <section class="css-1gufc6p-unf-card eyk31ek0">
              <div class="css-ymxyxo">
                <img
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/26f7e972.png"
                  alt="Icon"
                />
                <p>Info</p>
              </div>
              <div>
                Pembeli dapat menukar voucher ini pada halaman toko Anda dan
                halaman produk.
                <a class="css-15euf2d" href="https://abubakar.id/pusat-bantuan"
                  ><b>Pelajari Selengkapnya</b></a
                >
              </div>
            </section>
            <!-- <section class="css-bg5o7f-unf-card eyk31ek0">
                  <div class="css-ymxyxo">
                     <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/641b7ff9.png" alt="Icon">
                     <p>Preview Voucher</p>
                     <span>
                        <div class="css-ypd15i-unf-tooltip">
                           <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/86f481cb.png" alt="Info">
                           <div class="css-eic2sn e1hrfe840">Anda dapat mendownload gambar voucher dan membagikannya ke media sosial setelah voucher ini ditambahkan</div>
                        </div>
                     </span>
                  </div>
                  <div class="css-pm9uyg">
                     <div data-testid="crdVoucherContainerVoucherImage">
                        <canvas width="330" height="110"></canvas>
                     </div>
                     <div class="content-preview--description">
                        <h4>dasdas</h4>
                        <div class="css-nuy38h">
                           <div>Kode Voucher</div>
                           <p>-</p>
                        </div>
                        <div class="css-nuy38h" data-testid="typeVoucher">
                           <div>Gratis Cashback</div>
                           <p>Rp20.000</p>
                        </div>
                        <div class="css-nuy38h">
                           <div>Minimum Pembelian</div>
                           <p>Rp100.000</p>
                        </div>
                        <div class="css-nuy38h">
                           <div>Periode Promo</div>
                           <p>22 Desember 2020 19:00 WIB <br>- 29 Desember 2020 00:30 WIB</p>
                        </div>
                     </div>
                  </div>
               </section> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      totalcharacter: 0,
      selesai: "",
      mulai: "",
      waktumulai: "10",
      waktuselesai: "11",
      options: [
        { item: "A", name: "00:30 WIB" },
        { item: "B", name: "01:00 WIB" },
        { item: "C", name: "01.30 WIB" },
        { item: "D", name: "02:00 WIB" },
        { item: "E", name: "02.30 WIB" },
        { item: "F", name: "03:00 WIB" },
        { item: "G", name: "03.30 WIB" },
        { item: "H", name: "04:00 WIB" },
        { item: "I", name: "04.30 WIB" },
        { item: "J", name: "05:00 WIB" },
        { item: "K", name: "05.30 WIB" },
        { item: "L", name: "06:00 WIB" },
        { item: "M", name: "06.30 WIB" },
        { item: "N", name: "07:00 WIB" },
        { item: "O", name: "07.30 WIB" },
        { item: "P", name: "08:00 WIB" },
        { item: "Q", name: "08.30 WIB" },
        { item: "R", name: "09:00 WIB" },
        { item: "S", name: "09.30 WIB" },
        { item: "T", name: "10:00 WIB" },
        { item: "U", name: "10.30 WIB" },
        { item: "V", name: "11:00 WIB" },
        { item: "W", name: "11.30 WIB" },
        { item: "X", name: "12:00 WIB" },
        { item: "Y", name: "12.30 WIB" },
        { item: "Z", name: "13:00 WIB" },
        { item: "1", name: "13.30 WIB" },
        { item: "2", name: "14:00 WIB" },
        { item: "3", name: "14.30 WIB" },
        { item: "4", name: "15:00 WIB" },
        { item: "5", name: "15.30 WIB" },
        { item: "6", name: "16:00 WIB" },
        { item: "7", name: "16.30 WIB" },
        { item: "8", name: "17:00 WIB" },
        { item: "9", name: "17.30 WIB" },
        { item: "10", name: "18:00 WIB" },
        { item: "11", name: "18.30 WIB" },
        { item: "12", name: "19:00 WIB" },
        { item: "13", name: "19.30 WIB" },
        { item: "14", name: "20:00 WIB" },
        { item: "15", name: "20.30 WIB" },
        { item: "16", name: "21:00 WIB" },
        { item: "17", name: "21.30 WIB" },
        { item: "18", name: "22:00 WIB" },
        { item: "19", name: "22.30 WIB" },
        { item: "20", name: "23:00 WIB" },
        { item: "21", name: "23.30 WIB" },
      ],
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    charCount() {
      this.totalcharacter = this.message.length;
    },
    getNow() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const date7 =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        (today.getDate() + 7);
      this.mulai = date;
      this.selesai = date7;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  border-radius: 9px !important;
  border: 1px solid #e5e7e9 !important;
}
.b-form-btn-label-control.form-control > label {
  overflow: hidden !important;
}
.css-1ip48go {
  max-width: 1100px;
  width: 100%;
  display: block;
  margin: 0px auto;
  padding: 20px 0px 150px;
}
.css-1wnl5xc-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.71429rem;
  line-height: 30px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
}
.css-1qnlgek {
  width: 674px;
  margin-right: 24px;
}
.css-1yp4ln {
  display: flex;
  align-items: flex-start;
}
.css-1cs3jyh-unf-card {
  display: block;
  position: relative;
  padding: 24px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  border-radius: 8px;
  margin: 0px 0px 30px;
}
.css-60dn7l {
  margin: 0px 0px 32px;
}
.css-60dn7l h4 {
  margin: 0px 0px 15px;
}

.css-13ic1f6-unf-heading {
  display: block;
  position: relative;
  font-weight: 800;
  font-family: "Nunito Sans", -apple-system, sans-serif;
  font-size: 1.14286rem;
  line-height: 22px;
  color: rgba(49, 53, 59, 0.96);
  text-decoration: initial;
}
.css-ntj8ly {
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;
  margin: 0px 0px 12px;
}
.css-1bh52ki {
  width: 24px;
  height: 24px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-14vgcl7-unf-radio {
  cursor: pointer;
  display: inline-block;
}
.css-90nakk {
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  appearance: none;
  margin: 0px;
  padding: 0px;
}
.css-90nakk:checked + .e12o1eyi1 {
  border-color: rgb(3, 172, 14);
}

.css-ntj8ly span {
  font-size: 0.785714rem;
}

.css-12tb2l0-unf-radio__area {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  border: 2px solid rgb(159, 166, 176);
  border-radius: 50%;
  position: relative;
  display: inline-block;
}
.css-ntj8ly .form-radio--caption {
  margin: 2px 0px 0px 8px;
  line-height: 20px;
}
.css-ntj8ly p {
  margin: 0px;
  font-weight: bold;
  color: rgb(49, 53, 59);
}
.css-ntj8ly span {
  font-size: 0.785714rem;
}
.css-o9vvsl {
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;
}
.css-14vgcl7-unf-radio {
  cursor: pointer;
  display: inline-block;
}
.css-12tb2l0-unf-radio__area {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  border: 2px solid rgb(159, 166, 176);
  border-radius: 50%;
  position: relative;
  display: inline-block;
}
.css-o9vvsl span {
  font-size: 0.785714rem;
}
.css-o9vvsl .form-radio--caption {
  margin: 2px 0px 0px 8px;
  line-height: 20px;
}
.css-o9vvsl p {
  margin: 0px;
  font-weight: bold;
  color: rgb(49, 53, 59);
}
.css-60dn7l {
  margin: 0px 0px 32px;
}
.css-60dn7l h4.small-space {
  margin: 0px 0px 5px;
}
.css-60dn7l .row--caption,
.css-60dn7l.row--small-space {
  margin: 0px 0px 8px;
}
.css-13d6wom {
  margin-bottom: 8px;
  width: 350px;
}
.css-79elbk {
  position: relative;
}
.css-vj2aaj {
  height: 40px;
  border-radius: 8px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  position: relative;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 231, 233);
}
.css-vj2aaj .e16vycsw0 {
  padding-right: 12px;
  padding-left: 12px;
}
.css-4eg0ft {
  min-width: 0px;
  min-height: 0px;
  width: 100%;
  color: rgba(49, 53, 59, 0.96);
  font-family: inherit;
  background-color: transparent;
  line-height: 22px;
  border: none;
  outline: none;
  height: auto;
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.css-x1sij0 {
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
}
.css-wtkndi {
  color: rgba(49, 53, 59, 0.68);
  font-size: 12px;
  line-height: 18px;
  margin: 4px 0px 0px auto;
  padding-left: 16px;
}
.css-1cs3jyh-unf-card {
  display: block;
  position: relative;
  padding: 24px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  border-radius: 8px;
  margin: 0px 0px 30px;
}
.css-60dn7l .row--caption,
.css-60dn7l.row--small-space {
  margin: 0px 0px 8px;
}
.css-60dn7l.row--large-space {
  margin: 0px 0px 32px;
}
.css-kbexj1 {
  font-size: 14px;
  font-weight: 800;
  line-height: 22px;
  white-space: nowrap;
  display: flex;
  align-self: stretch;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 12px;
  background-color: rgb(243, 244, 245);
  padding-right: 12px;
}
.css-p7pcxo {
  height: 40px;
  border-radius: 8px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  position: relative;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  background-color: rgb(229, 231, 233);
  border: 1px solid rgb(229, 231, 233);
}
.css-p7pcxo .e16vycsw0 {
  padding-right: 12px;
  padding-left: 12px;
}
.css-1fw5q9r {
  min-width: 0px;
  min-height: 0px;
  width: 100%;
  color: rgba(49, 53, 59, 0.96);
  font-family: inherit;
  background-color: transparent;
  line-height: 22px;
  border: none;
  outline: none;
  height: auto;
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.css-1hws533 {
  color: rgba(49, 53, 59, 0.68);
  font-size: 12px;
  line-height: 18px;
  position: relative;
  margin: 4px 0px 0px;
}
.css-60dn7l.row--with-column {
  display: flex;
}
.css-12wpduw:first-child {
  margin-left: 0px;
}

.css-12wpduw {
  margin: 0px 0px 0px 12px;
}
.css-rn7hx6-unf-chip {
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 231, 233);
  display: inline-flex;
  vertical-align: top;
  flex: 1 1 0%;
  flex-wrap: nowrap;
  font-size: 1rem;
  height: 40px;
  line-height: 16px;
  margin-bottom: 8px;
  margin-right: 8px;

  text-overflow: ellipsis;
  transition: all 0.28s ease-in-out 0s;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 8px;
  width: 280px;
  height: 40px !important;
  position: relative;
  color: rgb(49, 53, 59);
}
.css-rn7hx6-unf-chip i:nth-child(1) {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  background-size: 20px;
}

.css-rn7hx6-unf-chip .e181j6nn0 {
  opacity: 1;
}

.css-1wjvfpz {
  width: 24px;
  height: 24px;
  font-weight: 600;
  line-height: 16px;
  margin-right: 4px;
  margin-left: -4px;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/d00dc0e3.png);
  background-position: right center;
  background-size: 24px;
  border-radius: 4px;
  background-repeat: no-repeat;
}
.css-rn7hx6-unf-chip i:nth-child(2) {
  position: absolute;
  right: 12px;
}

.css-10pjz21 {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/icarus/kratos/c93e3895.svg);
  background-position: center center;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin: 0px -4px 0px 8px;
  transition: transform 280ms ease 0s;
  transform: rotate(-180deg);
}
.css-rj8hz7 {
  width: 200px;
}
.css-g99td1 {
  position: relative;
  width: auto;
}
.css-rj8hz7 > div:nth-child(1) {
  padding-left: 8px;
  border-color: rgb(229, 231, 233);
}

.css-1vhwsws {
  cursor: pointer;
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  font-size: 1rem;
  letter-spacing: 0px;
  min-width: 180px;
  padding: 10px 8px 10px 16px;
  border-radius: 8px;
  border: 1px solid rgb(229, 231, 233);
  color: rgb(159, 166, 176);
}
.css-1vhwsws .chevron {
  margin-left: auto;
  top: 50%;
  transform: translateY(-50%);
  height: 9px;
  width: 14px;
  position: absolute;
  right: 10px;
  background-size: contain;
  background-image: url(https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/icarus/production/60b87db6.png);
  background-position: center center;
  transition: all 200ms ease 0s;
}
.css-19zxj6t {
  width: 100%;
  height: auto;
  max-height: 210px;
  overflow: hidden scroll;
  list-style-type: none;
  position: absolute;
  z-index: 2;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(229, 231, 233);
  margin: 0px;
  padding: 8px 0px;
  display: none;
}
.css-kimmkb {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.css-kimmkb .tnc__item--checkbox {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.css-kimmkb .tnc__item {
  width: 50%;
}
.css-1bh52ki {
  width: 24px;
  height: 24px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-cdg5bv-unf-checkbox {
  cursor: pointer;
  display: inline-block;
}
.css-100izxs-unf-checkbox__input {
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  appearance: none;
  margin: 0px;
  padding: 0px;
}
.css-12a5v84-unf-checkbox__area {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(159, 166, 176);
  border-radius: 4px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  transition: transform 280ms ease 0s;
  transform-box: fill-box;
}
.css-kimmkb .tnc__item--description {
  margin: 0px 0px 0px 8px;
  font-size: 0.857143rem;
  line-height: 20px;
}
.css-15euf2d {
  color: rgb(3, 172, 14);
  cursor: pointer;
}
.css-kimmkb .tnc__item--button {
  text-align: right;
}
.css-kimmkb .tnc__item--button button {
  margin: 0px 8px 0px 0px;
  width: 150px;
}

.css-1b3mrzj-unf-btn {
  color: rgba(49, 53, 59, 0.68);
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  height: 40px;
  line-height: 20px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;
  cursor: pointer;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, transparent 1%) center
    center / 15000% transparent;
  border: 1px solid rgb(229, 231, 233);
  text-indent: initial;
  position: relative;
}
.css-1b3mrzj-unf-btn span {
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
.css-kimmkb .tnc__item--button button:last-child {
  margin-right: 0px;
}

.css-kimmkb .tnc__item--button button {
  margin: 0px 8px 0px 0px;
  width: 150px;
}
.css-1axkmtl-unf-btn {
  color: rgba(49, 53, 59, 0.32);
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  height: 40px;
  line-height: 20px;
  width: auto;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  padding: 0px 16px;
  transition: background 0.8s ease 0s;
  cursor: not-allowed;
  display: inline-block;
  background: radial-gradient(circle, transparent 1%, rgb(229, 231, 233) 1%)
    center center / 15000% rgb(229, 231, 233);
  border: none;
  text-indent: initial;
  position: relative;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
.css-1axkmtl-unf-btn span {
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
.css-x3vtoz {
  width: 378px;
  margin-left: 24px;
}
.css-1gufc6p-unf-card {
  display: block;
  position: relative;
  padding: 24px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  border-radius: 8px;
  margin: 0px 0px 24px;
}
.css-bg5o7f-unf-card {
  display: block;
  position: relative;
  margin: 0px;
  padding: 24px;
  box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  cursor: default;
  border-radius: 8px;
}
.css-ymxyxo {
  font-weight: bold;
  font-size: 1.14286rem;
  padding: 0px 0px 12px;
  margin: 0px 0px 24px;
  border-bottom: thin solid rgb(219, 222, 226);
  color: rgb(49, 53, 59);
}
.css-ymxyxo > img {
  display: inline-block;
  vertical-align: middle;
  margin: 0px 8px 0px 0px;
  height: 30px;
}
.css-ymxyxo p {
  margin: 0px;
  display: inline-block;
  vertical-align: middle;
}
.css-pm9uyg .content-preview--description h4 {
  font-size: 1rem;
  margin: 4px 0px 8px;
  color: rgb(49, 53, 59);
}
.css-nuy38h {
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px 0px 12px;
  font-size: 1rem;
}
.css-nuy38h:last-child {
  margin: 0px;
}
.css-rj8hz7 .periodTime__display img {
  width: 20px;
  margin-right: 8px;
}
.css-90nakk:checked + .e12o1eyi1::before {
  background: rgb(3, 172, 14);
  transform: scale(1);
}

.css-12tb2l0-unf-radio__area::before {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  transform: scale(0);
  transform-origin: center center;
  transition: transform 280ms ease 0s;
}
</style>