<template>
    <div>
		<article class="card mb-3">
			<div class="card-body">
				<b-tabs content-class="mt-3">
					<b-tab title="Daftar Belanja" active>
						<div class="container">
                            <div class="css-1ivs0au">
                                <div class="css-1ivs0au__content">
                                    <div class="css-huluao">
                                        <div class="css-1ba2565" data-testid="btnBomWrapDate">
                                            <div class="css-1ba2565__item">
                                                <div class="css-s9s691">
                                                    <span>Lihat Transaksi:</span>
                                                    <span>05 Aug 2020 - 03 Nov 2020</span>
                                                    <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8c077721.png" alt="icon calendar">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="css-sh10tr" data-testid="btnBomWrapSort">
                                        <div width="" class="css-1yy9eh2 e15j6tp62">
                                            <button type="button" class="css-5eobf8 e15j6tp61">
                                                <label value="" class="css-1jk4ov e15j6tp63">Urutkan</label>
                                            </button>
                                            <div class="css-msew48 e15j6tp60">
                                                <ul role="listbox" class="css-jof6us e15j6tp64">
                                                    <li role="option" aria-selected="false" aria-label="dropdown" data-testid="lstBomFilterSort-1" class="css-r1bgnv e15j6tp65">
                                                        <button type="button">Terbaru</button>
                                                    </li>
                                                    <li role="option" aria-selected="false" data-testid="lstBomFilterSort-2" class="css-r1bgnv e15j6tp65">
                                                        <button type="button">Nilai Transaksi</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="css-1qe2r3h" data-testid="btnBomWrapReset">Reset Filter</div>
                                    <div class="css-fo2jrt">
                                        <div class="css-1sjxsra e1v0ehno0" height="auto" data-testid="txtBomSearchBar">
                                            <button aria-label="Tombol pencarian" height="auto" type="submit" class="css-1ymn4im e1v0ehno1"></button>
                                            <input aria-label="Bidang pencarian" placeholder="Cari Nama Barang, Toko, Invoice" type="text" class="css-4eg0ft e16vycsw0" value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="css-elqn49">
                                <div class="css-elqn49__flex">
                                    <div class="css-4eqazr css-4eqazr--text">Filter Status</div>
                                    <div data-testid="crdBomFilterStatusItem" class="css-4eqazr css-4eqazr--status">
                                        <div class="css-1lm1cch">
                                            <div disabled="" data-testid="btnBomFilterSemua" class="css-1jvzjqm-unf-chip e181j6nn3">Semua</div>
                                            <div data-testid="btnBomFilterMenungguKonfirmasi" class="css-1dgmgkd-unf-chip e181j6nn3">Menunggu Konfirmasi</div>
                                            <div data-testid="btnBomFilterPesananDiproses" class="css-1dgmgkd-unf-chip e181j6nn3">Pesanan Diproses</div>
                                            <div data-testid="btnBomFilterPesananDikirim" class="css-1dgmgkd-unf-chip e181j6nn3">Pesanan Dikirim</div>
                                            <div data-testid="btnBomFilterPesananTiba" class="css-1dgmgkd-unf-chip e181j6nn3">Pesanan Tiba</div>
                                            <div data-testid="btnBomFilterPesananDikomplain" class="css-1dgmgkd-unf-chip e181j6nn3">Pesanan Dikomplain</div>
                                            <div data-testid="btnBomFilterPesananSelesai" class="css-1dgmgkd-unf-chip e181j6nn3">Pesanan Selesai</div>
                                            <div data-testid="btnBomFilterPesananDibatalkan" class="last-chip css-1dgmgkd-unf-chip e181j6nn3">Pesanan Dibatalkan</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="css-elqn49__nav">
                                    <div class="css-wo2tyn css-wo2tyn__left">
                                        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/d8117ce0.png" alt="left-icon">
                                    </div>
                                    <div class="css-wo2tyn css-wo2tyn__right">
                                            <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6c5bd274.png" alt="right-icon">
                                    </div>
                                </div>
                            </div>
				        </div>
                        <div class="css-lf23gq" data-testid="crdBomWrapOrderList">
                            <section class="order-bom css-rcp8on-unf-card eyk31ek0">
                                <div class="flex flex--between padding border--bottom">
                                    <div>25 Sep 2020</div>
                                </div>
                                <div class="header flex">
                                    <div class="trx-info trx-info--with-32">
                                        <a href="https://www.tokopedia.com/gudangnet" data-testid="lnkBomShopName-595179096" target="_blank" class="font__size--m font--bold font--ellipsis css-1e6gctp-unf-link en8iawh0" font-size="12">Gudang Network.</a>
                                        <span data-testid="txtBomInvoiceNumber-595179096" class="font--ellipsis">(INV/20200925/XX/IX/636738989)</span>
                                    </div>
                                    <div class="font--nowrap flex--column header__200">
                                        <div data-testid="txtBomStatuTitle-595179096">Status</div>
                                        <div data-testid="txtBomStatuValue-595179096" class="font--bold font__size--m ">Pesanan Selesai</div>
                                    </div>
                                    <div class="header__action header__150">
                                        <div>
                                            <span data-testid="txtBomPriceTitle-595179096">Total Belanja</span>
                                            <div data-testid="txtBomPriceValue-595179096" class="font__type--trx font__size--l font--bold">Rp 84.400</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="body flex">
                                    <div class="content">
                                        <div>
                                            <div class="product__item bom">
                                                <a font-size="12" class="css-1e6gctp-unf-link en8iawh0">
                                                    <img data-testid="undefinedProductImage-595179096" src="https://ecs7.tokopedia.net/img/cache/100-square/product-1/2020/8/6/35174756/35174756_1db99ab2-fc96-44a7-98e8-02e75ec593e4_700_700" class="css-1dhisgl" alt="img-product"></a>
                                                    <a class="product__item__desc css-1e6gctp-unf-link en8iawh0" font-size="12">
                                                        <div class="font__size--m font--bold ellipsis-two-line">
                                                            <div data-testid="lnkBomProductName-595179096">TP-LINK TL-WN725N USB Nano Receiver / Wireless USB WiFi TPLINK WN725N</div>
                                                        </div>
                                                        <div>
                                                            <span data-testid="txtBomProductDetailPrice-595179096" class="font__type--trx">Rp 74.000</span>
                                                            <span data-testid="txtBomProductDetailQtyWeight-595179096" class="css-1n5r376 padding--left">1 Produk (250 gr)</span>
                                                        </div>
                                                    </a>
                                                    <div class="flex--grow2 bordered--left">
                                                        <div data-testid="txtBomProductDetailTotalPriceTitle-595179096">Total Harga Produk</div>
                                                        <div data-testid="txtBomProductDetailTotalPriceValue-595179096" class="font__type--trx font__size--m font--bold">Rp 74.000</div>
                                                    </div>
                                                    <div>
                                                        <button data-testid="btnBomBuyAgain-595179096" class="css-duvvqm-unf-btn e1ggruw00">
                                                            <span>Beli Lagi</span>
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer flex font__size--m">
                                        <div class="flex flex--center">
                                            <div data-testid="btnBomLihatDetailPesanan-595179096" class="css-1v0ixe8">
                                                <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/0ff51540.png" alt="icon-see">
                                                <span>Lihat Detail Pesanan</span>
                                            </div>
                                            <div class="css-gcemtj">
                                                <div class="css-1jyc08" data-testid="btnBomChatPenjual-595179096">
                                                    <img height="16" width="20" class="margin--right" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8db3ee49.png" alt="Chat">Chat Penjual
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="order-bom css-rcp8on-unf-card eyk31ek0">
                                <div class="flex flex--between padding border--bottom">
                                    <div>23 Agu 2020</div>
                                    <div class="order-bom__label" data-testid="lstBomOrderLabel">
                                        <div class="margin--left label__status css-19sjaz5-unf-label e143v2d00">Next Day</div>
                                    </div>
                                </div>
                                <div class="header flex"><div class="trx-info trx-info--with-32"><a href="https://www.tokopedia.com/slempang-pesta" data-testid="lnkBomShopName-571157052" target="_blank" class="font__size--m font--bold font--ellipsis css-1e6gctp-unf-link en8iawh0" font-size="12">Satria Slempang</a><span data-testid="txtBomInvoiceNumber-571157052" class="font--ellipsis">(INV/20200823/XX/VIII/612716944)</span></div><div class="font--nowrap flex--column header__200"><div data-testid="txtBomStatuTitle-571157052">Status</div><div data-testid="txtBomStatuValue-571157052" class="font--bold font__size--m ">Pesanan Selesai</div></div><div class="header__action header__150"><div><span data-testid="txtBomPriceTitle-571157052">Total Belanja</span><div data-testid="txtBomPriceValue-571157052" class="font__type--trx font__size--l font--bold">Rp 68.300</div></div></div></div><div class="body flex"><div class="content"><div><div class="product__item bom"><a font-size="12" class="css-1e6gctp-unf-link en8iawh0"><img data-testid="undefinedProductImage-571157052" src="https://ecs7.tokopedia.net/img/cache/100-square/product-1/2019/3/4/399542470/399542470_9d691a54-3e5e-43d4-9c13-9612aa2fb103_960_960.jpg" class="css-1dhisgl" alt="img-product"></a><a class="product__item__desc css-1e6gctp-unf-link en8iawh0" font-size="12"><div class="font__size--m font--bold ellipsis-two-line"><div data-testid="lnkBomProductName-571157052">Selempang Wisuda Kilat Langsung Jadi</div></div><div><span data-testid="txtBomProductDetailPrice-571157052" class="font__type--trx">Rp 50.000</span><span data-testid="txtBomProductDetailQtyWeight-571157052" class="css-1n5r376 padding--left">1 Produk (120 gr)</span></div></a><div class="flex--grow2 bordered--left"><div data-testid="txtBomProductDetailTotalPriceTitle-571157052">Total Harga Produk</div><div data-testid="txtBomProductDetailTotalPriceValue-571157052" class="font__type--trx font__size--m font--bold">Rp 50.000</div></div><div><button data-testid="btnBomBuyAgain-571157052" class="css-duvvqm-unf-btn e1ggruw00"><span>Beli Lagi</span></button></div></div></div></div><div class="footer flex font__size--m"><div class="flex flex--center"><div data-testid="btnBomLihatDetailPesanan-571157052" class="css-1v0ixe8"><img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/0ff51540.png" alt="icon-see"><span>Lihat Detail Pesanan</span></div><div class="css-gcemtj"><div class="css-1jyc08" data-testid="btnBomChatPenjual-571157052"><img height="16" width="20" class="margin--right" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8db3ee49.png" alt="Chat">Chat Penjual</div></div></div></div></div></section><div class="css-13ztd2f"><div class="css-nhptg7" data-testid="crdBomPagination"><span data-testid="btnBomPaging-1" class="css-3313ob">1</span></div></div>
                                
                        </div>
					</b-tab>
					<b-tab title="Daftar Transaksi Top-Up">
						
					<div class="css-1ynqz4z-unf-emptystate e1lf3yex0">
                        <div class="unf-emptystate-img">
                            <img alt="no-order-found" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/dd7dcb8c.png">
                        </div>
                        <div>
                            <h3 class="css-1og3umh-unf-heading e1qvo2ff3">Belum ada transaksi :(</h3>
                            <p class="css-1ers9d0-unf-heading e1qvo2ff8">Setelah melakukan transaksi, kamu bisa pantau proses transaksi di sini</p>
                            <div class="unf-emptystate-Action">
                                <div class="unf-emptystate-Action__button">
                                <router-link to="/search">
                                <button class="css-6rq8n6-unf-btn e1ggruw00">
                                    <span>Transaksi Sekarang</span>
                                </button>
                                </router-link>
                                </div></div></div></div>
                                



					</b-tab>
					
				</b-tabs>
				

			</div> <!-- card-body .// -->
		</article> 
    </div>
</template>

<script>
import {   mapGetters
} from 'vuex';
export default {
	

data() {
      return {
        src: require('@/assets/images/products/product1.jpg'),
         item1: require('@/assets/images/items/1.jpg'),
        item2: require('@/assets/images/items/2.jpg'),
		item3: require('@/assets/images/items/3.jpg'),
       
      }
	},


}
</script>

<style scoped lang="scss">
.action-button{
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
table, tbody, tfoot, thead, tr, th, td {
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
.table th, .table td {
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
    color: rgba(0,0,0,.38);
}
.clear-b {
    clear: both;
}


.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f7f7f7;
    border: 1px solid rgba(0,0,0,.15);
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
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
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
    transition: transform 280ms ease-out 0s, opacity 0.16s ease 0s, visibility 0.16s ease 0s;
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

.css-s9s691  {
    display: inline-block;
    vertical-align: middle;
}
@media (max-width: 1198px){

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
    height: 37px;;
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
  
.css-3lpl5n a, .css-3lpl5n p, .css-3lpl5n span, .css-3lpl5n li {
    font-family: "open sans", tahoma, sans-serif;
}
  
.css-1e6gctp-unf-link {
    color: rgb(66, 181, 73);
    font-size: 0.857143rem;
    text-decoration: none;
    cursor: pointer;
}
a {
    color: rgba(0,0,0,.7);
    text-decoration: none;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

  
.css-3lpl5n a, .css-3lpl5n p, .css-3lpl5n span, .css-3lpl5n li {
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
    color: rgb(250, 89, 29);
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
    background: radial-gradient(circle, transparent 1%, rgb(250, 89, 29) 1%) center center / 15000% rgb(250, 89, 29);
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
    background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%) center center / 15000% rgb(3, 172, 14);
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
/deep/ .nav-tabs .nav-link.active, .nav-tabs .nav-item.show {
       background-color: #199C43;
    border-radius: 20px !important;
    margin: 10px;
    color: white;
    
}
/deep/.nav-link, .nav-link:hover {
  color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6;
}
</style>