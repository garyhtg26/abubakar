<template>

  <div class="container invoice-box my-5" >
  <table cellpadding="0" cellspacing="0" >
    <tr class="top">
      <td colspan="4">
        <table>
          <tr>
            <td class="title">
              <img src="../assets/images/logo2.png" style="width:100%; max-width:300px;">
            </td>

            <td>
              <br>Invoice : ({{data[0].invoice}})<br> Tanggal: {{data[0].created_at}}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr class="information">
      <td colspan="4">
        <table>
          <tr>
            <td>
              Tujuan Pengirim: <br> 
                              {{ address.address }},{{
                              address.district.subdistrict_name
                            }}
                            <br> 
                            {{ address.city.city_name }},
                            {{ address.province.province }},
                            {{ address.city.postal_code }}
            </td>

            <td>
              Data Penerima: <br> {{ this.$store.state.user.name }}<br> {{ this.$store.state.user.email }}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr class="heading">
      <td colspan="3">Pembayaran</td>
      <td></td>
    </tr>

    <tr class="details">
      <td colspan="3">BCA Virtual Account</td>
      <td><img src="https://ecs7.tokopedia.net/img/toppay/payment-logo/icon-bca.png"></td>
    </tr>

    <tr class="heading">
      <td>Nama Produk</td>
      <td>Harga</td>
      <td>Jumlah</td>
      <td>Subtotal</td>
    </tr>

    <tr class="item" v-for="y in data[0].details" :key="y.id">
      <td>{{ y.products.name }}</td>
      <td>{{ y.products.price | currency }}</td>
      <td>{{ y.qty }}</td>
      <td>{{y.qty * y.products.price | currency}}</td>
    </tr>
<div style="float:right;">
                                <table>
                                    <!-- subtotal ongkir -->
                                    <tbody><tr>
                                        <td>
                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                <tbody><tr>
                                                    <td style="width: 50%;"></td>
                                                    <td style="width: 50%;">
                                                        <table width="100%" style="width: 430px; margin-top: 15px; padding: 15px; border-radius: 4px; border: thin dashed #cccccc; font-size: 14px; font-weight: 600;">
                                                            <tbody><tr style="font-weight: normal; font-size: 12px;">
                                                                <td style="padding-bottom: 10px;">
                                                                    {{data[0].driver_id}}
                                                                    (Berat:
                                                                    1 kg)</td>
                                                                <td style="padding-bottom: 10px;text-align: right; white-space: nowrap; vertical-align: top;">
                                                                    </td>
                                                            </tr>
                                                            <!-- show this in invoice section subtotal ongkos kirim -->
                                                            
                                                            <tr>
                                                                <td style="border-top: thin solid #e0e0e0; padding-top: 10px;">
                                                                    Subtotal Ongkos Kirim</td>
                                                                <td style="border-top: thin solid #e0e0e0; padding-top: 10px; text-align: right; white-space: nowrap;">
                                                                    {{data[0].additional | currency}}
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    <!-- subtotal biaya lain -->
                                    
                                    <tr>
                                        <td>
                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                <tbody><tr>
                                                    <td style="width: 50%;"></td>
                                                    <td style="width: 50%;">
                                                        <table width="100%" style="width: 430px; margin-top: 15px; padding: 15px; border-radius: 4px; border: thin dashed #cccccc; font-size: 12px; font-weight: 600;">
                                
                                                            <tbody><tr style="font-weight: normal;">
                                                                <td style="padding-bottom: 10px;">
                                                                    Asuransi
                                                                    
                                                                    <div style="font-size: 11px; color: rgba(0, 0, 0, 0.54); margin-top: 8px;">
                                                                        Paket ini tidak menggunakan asuransi pihak logistik, penjual <strong>tidak perlu bayar asuransi</strong> ke kurir.
                                                                    </div>   
                                                                </td>
                                                                <td style="padding-bottom: 10px;text-align: right; white-space: nowrap; vertical-align: top;">
                                                                    Rp 0</td>
                                                            </tr>
                                                            <tr style="font-size: 14px;">
                                                                <td style="border-top: thin solid #e0e0e0; padding-top: 10px;">
                                                                    Subtotal Biaya Lainnya</td>
                                                                <td style="border-top: thin solid #e0e0e0; padding-top: 10px; text-align: right; white-space: nowrap;">
                                                                    Rp 0</td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>

                    <tr>
                        <td>
                            <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                    <td style="width: 50%;"></td>
                                    <td style="width: 50%;">
                                        <table width="100%" style="width: 430px; margin-top: 15px; padding: 15px; border-radius: 4px; border: thin solid rgba(0, 0, 0, 0.54); font-size: 14px; font-weight: 600;">
                                            <tbody><tr>
                                                <td>Total Bayar</td>
                                                <td style="text-align: right;">
                                                    {{data[0].total | currency}}</td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>

                    <!-- Keterangan -->
                    
                </tbody></table>
            </div>
   

  
  </table>
</div>
</template>
<script>
import Axios from "axios";

export default {
 
  data() {
    return {
      isLoading: false,
      data: [],
      address: {},

    };
  },
  watch: {
    "$route.params.id"(val) {
      this.getData(val);
    },
    "forms.qty"(val) {
      const f = this.data.grosir.filter((x) => val >= x.qty);
      if (f.length > 0) {
        this.data.price = f[0].price;
      } else {
        this.data.price = this.origin_price;
      }
    },
  },
  mounted() {

    const id = this.$route.params.id;
    this.getData(id);
    this.getAddress();
  },
  methods: {
    getData(id) {
      this.isLoading = true;
      // const params = typeof id === "number" ? id : id.replace(/\s/g, "-");
     Axios.get(`history-transactions/${id}`).then((res) => {
        this.data = res.data.data
        this.loading = false
      });
    },
    getAddressUser(id) {
      Axios.get(`/users/${id}`).then((res) => {
        this.addressUser = res.data.data.address;
        this.snack = {
          model: true,
          color: "green accent-4",
          text: res.data.message,
        };
        this.$store.commit("loading", false);
      });
    },
     getAddress() {
      const id = this.$store.state.user.id;
      Axios.get("/address/" + id).then((res) => {
        this.address = res.data;
        this.lists.address_id = res.data.id;
        this.getAddressUser(id);
      });
    },


  },
};
</script>


<style lang="scss" scoped>
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}


</style>