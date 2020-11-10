<template>
  <div>
    <Navbar></Navbar>

    <div class="css-nawmhu p-5" style="margin-top:100px; background:white;  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);">
        <div class="css-1ri3tpq">
            <div class="css-rk44fn">Selesaikan pembayaran dalam</div>
            <p class="css-xc4elw-unf-heading e1qvo2ff8">23:56:05</p>
            <p class="css-1qtg50s-unf-heading e1qvo2ff8">Batas Akhir Pembayaran</p>
            <div class="css-0">
                <p class="css-zdn477-unf-heading e1qvo2ff8">Sabtu, 7 November 2020 13:04</p>
                </div></div>
                <div class="css-1jj2piy">
                    <div class="css-15hfysl">
                        <div class="css-1jr489l">BCA Virtual Account</div>
                        <img class="css-kh42z7" src="https://ecs7.tokopedia.net/img/toppay/payment-logo/icon-bca.png" alt="BCA Virtual Account"></div>
                        <div class="css-19midj6">
                            <div class="css-1g5b64m">
                                <div data-testid="gateway-code-label">Nomor Virtual Account</div>
                                <div class="css-69i1ev">
                                    <div id="copy-code" class="css-1h9cifw esfb9fm0">80777081383316926</div>
                                    <div class="css-i25n7q" data-testid="copy-content">Salin</div>
                                </div>
                            </div>
                            <div class="css-1g5b64m">
                                <div>Total Pembayaran</div>
                                <div class="css-69i1ev">
                                    <div color="#FA591D" class="css-4owoob esfb9fm0">Rp407.700</div>
                                    <div class="css-i25n7q" data-testid="btn-detail">Lihat Detail</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="css-1tuhf4i">
                    <button class="css-14738np-unf-btn e1ggruw00">
                        <span>Belanja Lagi</span>
                    </button>
                    <button class="css-12xm20p-unf-btn e1ggruw00">
                        <span>Cek Status Pembayaran</span>
                    </button>
                </div>
                <div data-testid="how-to-pay">
                    <div class="css-1uuqymz">Cara pembayaran</div>
                    <div class="css-1ujj9lw">
                        <div class="w-accordion" style="margin:0;">
                            <div class="w-accordion-menu">
                                ATM BCA
                                <div class="pull-right"><i class="fa fa-chevron-down"></i>
                                </div>
                            </div>
                            <div class="w-accordion-content" style="display: none;">
                                <ol>
                                    <li class="mt-10 mb-10">Masukkan Kartu ATM BCA &amp; PIN</li>
                                    <li class="mt-10 mb-10">Pilih menu Transaksi Lainnya &gt; Transfer &gt; ke Rekening BCA Virtual Account</li>
                                    <li class="mt-10 mb-10">Masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777081383316926)</li>
                                    <li class="mt-10 mb-10">Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan</li>
                                    <li class="mt-10 mb-10">Masukkan Jumlah Transfer sesuai dengan Total Tagihan</li><li class="mt-10 mb-10">Ikuti instruksi untuk menyelesaikan transaksi</li>
                                    <li class="mt-10 mb-10">Simpan struk transaksi sebagai bukti pembayaran</li></ol></div><div class="w-accordion-menu">m-BCA (BCA mobile)
                                        <div class="pull-right"><i class="fa fa-chevron-down"></i></div></div>
                                        <div class="w-accordion-content" style="display: none;">
                                            <ol>
                                                <li class="mt-10 mb-10">Lakukan log in pada aplikasi BCA Mobile</li>
                                                <li class="mt-10 mb-10">Pilih menu m-BCA, kemudian masukkan kode akses m-BCA</li><li class="mt-10 mb-10">Pilih m-Transfer &gt; BCA Virtual Account</li>
                                                <li class="mt-10 mb-10">Pilih dari Daftar Transfer, atau masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777081383316926)</li>
                                                <li class="mt-10 mb-10">Masukkan pin m-BCA</li><li class="mt-10 mb-10">Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran</li>
                                            </ol>
                                        </div>
                                        <div class="w-accordion-menu">Internet Banking BCA
                                            <div class="pull-right"><i class="fa fa-chevron-down"></i>
                                            </div></div>
                                                <div class="w-accordion-content">
                                                    <ol>
                                                        <li class="mt-10 mb-10">Login pada alamat Internet Banking BCA (<a href="https://klikbca.com" target="_blank">https://klikbca.com</a>)</li>
                                                        <li class="mt-10 mb-10">Pilih menu Pembayaran Tagihan &gt; Pembayaran &gt; BCA Virtual Account</li>
                                                        <li class="mt-10 mb-10">Pada kolom kode bayar, masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777081383316926)</li>
                                                        <li class="mt-10 mb-10">Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BCA Virtual Account, Nama Pelanggan dan Jumlah Pembayaran</li>
                                                        <li class="mt-10 mb-10">Masukkan <span class="italic">password</span> dan mToken</li>
                                                        <li class="mt-10 mb-10">Cetak/simpan struk pembayaran BCA Virtual Account sebagai bukti pembayaran</li>
                                                    </ol>
                                                </div>
                                                <div class="w-accordion-menu">Kantor Bank BCA
                                                    <div class="pull-right">
                                                        <i class="fa fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <div class="w-accordion-content">
                                                    <ol>
                                                        <li class="mt-10 mb-10">Ambil nomor antrian transaksi Teller dan isi slip setoran</li>
                                                        <li class="mt-10 mb-10">Serahkan slip dan jumlah setoran kepada Teller BCA</li>
                                                        <li class="mt-10 mb-10">Teller BCA akan melakukan validasi transaksi</li>
                                                        <li class="mt-10 mb-10">Simpan slip setoran hasil validasi sebagai bukti pembayaran</li>
                                                    </ol>
                                                </div>
                            </div>
                            <!-- <link href="https://cdn.tokopedia.net/built/40797d30ecd159deec1927c2949d2a98.css" rel="stylesheet">-->
                            </div></div></div> 




      
      <Login></Login>
      <mini-cart></mini-cart>
      <br>
  
<Footer></Footer>
  </div>

</template>

<script>
// @ is an alias to /src
// import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    Products,
    Login
  },
  data() {
      return {

    
      }
    },
};
</script>

<style scoped lang="scss">
.css-nawmhu {
    width: 600px;
    margin: 40px auto;
}
.css-1ri3tpq {
    padding: 16px;
    text-align: center;
    font-family: "Nunito Sans", -apple-system, sans-serif;
}
.css-rk44fn {
    font-size: 1.42857rem;
    font-weight: 800;
    color: rgba(49, 53, 59, 0.96);
}
.css-xc4elw-unf-heading {
    display: block;
    position: relative;
    line-height: 20px;
    text-decoration: initial;
    color: rgb(250, 89, 29);
    font-size: 1.42857rem;
    font-weight: 800;
    margin: 8px 0px 16px;
}
.css-1qtg50s-unf-heading {
    display: block;
    position: relative;
    font-weight: 400;
    line-height: 20px;
    color: rgba(49, 53, 59, 0.68);
    text-decoration: initial;
    margin: 0px 0px 8px;
    font-size: 1.14286rem;
}
.css-1ri3tpq {
    padding: 16px;
    text-align: center;
    font-family: "Nunito Sans", -apple-system, sans-serif;
}
.css-1jj2piy {
    border: 1px solid rgb(229, 231, 233);
    border-radius: 8px;
    margin-top: 40px;
}
.css-15hfysl {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 0.5px solid rgb(232, 232, 232);
    padding: 16px;
}
.css-1jr489l {
    font-size: 1.14286rem;
    font-weight: bold;
    color: rgba(49, 53, 59, 0.96);
    font-family: "Nunito Sans", -apple-system, sans-serif;
}
.css-kh42z7 {
    max-width: 64px;
}
img {
    border: 0;
}
.css-19midj6 {
    padding: 16px;
}
.css-1g5b64m {
    padding: 16px 0px;
}
.css-1h9cifw {
    font-size: 1.28571rem;
    font-weight: 800;
    color: rgba(49, 53, 59, 0.96);
    margin-top: 8px;
    display: flex;
    font-family: "Nunito Sans", -apple-system, sans-serif;
}
.css-i25n7q {
    color: rgb(3, 172, 14);
    cursor: pointer;
    font-size: 1.14286rem;
    font-weight: 800;
}
.css-69i1ev {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.css-4owoob {
    font-size: 1.28571rem;
    font-weight: 800;
    color: rgb(250, 89, 29);
    margin-top: 8px;
    display: flex;
    font-family: "Nunito Sans", -apple-system, sans-serif;
}
.css-1tuhf4i {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 40px 0px;
}
.css-1tuhf4i button:first-child {
    margin-right: 16px;
}

.css-14738np-unf-btn {
    color: rgb(3, 172, 14);
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    height: 40px;
    line-height: 20px;
    width: 100%;
    border-radius: 8px;
    font-weight: 800;
    outline: none;
    padding: 0px 16px;
    transition: background 0.8s ease 0s;
    cursor: pointer;
    display: block;
    background: radial-gradient(circle, transparent 1%, transparent 1%) center center / 15000% transparent;
    border: 1px solid rgb(3, 172, 14);
    text-indent: initial;
    position: relative;
}
.css-12xm20p-unf-btn {
    color: rgb(255, 255, 255);
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    height: 40px;
    line-height: 20px;
    width: 100%;
    border-radius: 8px;
    font-weight: 800;
    outline: none;
    padding: 0px 16px;
    transition: background 0.8s ease 0s;
    cursor: pointer;
    display: block;
    background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center center / 15000% rgb(3, 172, 14);
    border: none;
    text-indent: initial;
    position: relative;
}
.css-14738np-unf-btn span {
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
.css-1uuqymz {
    font-size: 1.28571rem;
    font-weight: 800;
    margin-bottom: 16px;
    font-family: "Nunito Sans", -apple-system, sans-serif;
}
.css-1ujj9lw .w-accordion-menu {
    border: none;
}
.w-accordion-menu {
    padding: 10px;
    color: #777;
    cursor: pointer;
    border: 1px solid #ddd;
    font-weight: 700;
}
.pull-right {
    float: right;
}
.css-1ujj9lw .w-accordion-content {
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid rgb(229, 231, 233);
    padding-bottom: 16px;
    margin-bottom: 16px;
}
.w-accordion-content {
    padding: 10px;
    border: 1px solid #ddd;
    color: #777;
    display: none;
}
.icon-chevron-down::before {
    content: "\e04d";
}
.mt-10 {
    margin-top: 10px;
}
</style>
