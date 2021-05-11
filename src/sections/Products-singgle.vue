<template>
  <div>
    <div class="product-card" style="width: 100%">
      <div class="btn-wishlist">
        <i
          @click="wish(data)"
          class="icon-wishlist fa fa-heart"
          :style="`color:${data.isWishlist ? 'red' : 'grey'}`"
        ></i>
      </div>
      <router-link class="product-container" :to="'/product/' + data.id">
        <div class="product-wrapper">
          <div class="css-79elbk">
            <div class="css-1c0vu8l" data-testid="imgWishlistRecomProduct">
              <div class="css-12wxb0f e18n9kgb0">
                <img
                  class="success fade product-img"
                  :src="data.thumbnail"
  
                />
              </div>
            </div>
          </div>
          <div class="css-11s9vse">
            <span class="css-1bjwylw" data-testid="btnWishlistRecomProductName">
              {{ data.name }}
            </span>
            <div class="css-rfiksa" v-if="data.discount_display">
              <div data-testid="lblProductDiscount#3">
                {{ data.discount_display }}%
              </div>
              <div data-testid="lblProductSlashPrice#3">
                {{ data.price | currency }}
              </div>
            </div>
            <div>
              <div
                class="css-1beg0o7"
                data-testid="lblWishlistRecomProductPrice"
              >
                <!-- <span class="css-o5uqvq">{{ data.price | currency }}</span> -->
                <span class="css-o5uqvq" v-if="data.discount_display">
                  {{ data.discount_price | currency }}
                </span>
                <span class="css-o5uqvq" v-else>
                  {{ data.price | currency }}
                </span>
              </div>
            </div>
            <div class="css-tpww51">
              <div class="css-vbihp9">
                <span class="css-1kr22w3">{{ data.store }}</span>
                <span class="css-1kr22w3" data-testid="btnWishlistRecomShop">
                  {{ data.kota }}
                </span>
              </div>
            </div>
            <div class="css-153qjw7">
              <div style="background-color: white">
                <b-form-rating
                  disabled
                  inline
                  style="background-color: white; color: #ffc107 !important"
                  variant="warning"
                  v-model="data.ratings"
                  no-border
                  size="sm"
                ></b-form-rating>
                <span style="color:grey">({{ data.reviews }})</span>
              </div>
            </div>
            <div class="flexible"></div>
          </div>
          <div class="flexible"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  props: {
    data: Object,
  },
  methods: {
    show(id) {
      // const params = typeof id === "number" ? id : id.replace(/[/\s/]/g, "-");
      this.$router.push(`/test/page/product-details/s/?v=${id}`);
    },
    wish(item) {
      if (!item.isWishlist) {
        Axios.post("/page/wishlist", {
          product_id: item.id,
          store_id: item.store_id,
        })
          .then((res) => {
            item.isWishlist = true;
            this.$store.dispatch("countWish");
            this.$bvToast.toast(res.data.message, {
              title: "OK",
              autoHideDelay: 3000,
              appendToast: false,
            });
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        Axios.delete("/page/wishlist/" + item.id)
          .then((res) => {
            item.isWishlist = false;
            this.$bvToast.toast(res.data.message, {
              title: "OK",
              autoHideDelay: 3000,
              appendToast: false,
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  padding: 0 0.8% 3%;
  width: 16.667%;
  box-sizing: border-box;
}
.product-container {
  font-family: "open sans", "tahoma", sans-serif;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  min-height: 340px;
  display: inline-flex;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 10px;
  box-sizing: border-box;
}
.product-wrapper {
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.product-wrapper:hover {
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.product-img{
  max-height: auto;
}
@media (max-width: 1500px) {
  .product-img{
    max-height: 188px;
  }
}
.btn-wishlist {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  z-index: 1;
  text-align: center;
  border-radius: 14px;
  background-color: #e1e1e1;
  cursor: pointer;
}
.icon-wishlist {
  margin-top: 2px;
  padding-top: 5px;
}
.css-lr6een {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  z-index: 1;
  text-align: center;
  background-color: rgb(243, 244, 245);
  border-radius: 14px;
}
.css-gu7dmw {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  border-top-right-radius: 4px;
}
.css-1a7a6ct {
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6621512d.svg);
  animation: 0.5s ease-in-out 0.1s 1 normal none running animation-1xjtxag;
  transition: all 0.25s ease 0s;
}

.css-y8vkn8 {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/bb8f5839.svg);
  background-size: cover;
  width: 20px;
  height: 20px;
  z-index: 1;
  transition: all 0.25s ease 0s;
}
.css-ckbit5 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
}
.css-16vw0vn {
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.css-79elbk {
  position: relative;
}
.css-1c0vu8l {
  position: relative;
  height: 0px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-bottom: 100%;
  width: 100%;
  background: rgb(246, 246, 246);
  transition: box-shadow 0.25s ease 0s;
  text-overflow: ellipsis;
  overflow: hidden;
}
.css-12wxb0f {
  background-color: transparent;
  display: inline-block;
  margin: 0px auto;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
}
.css-12wxb0f > img.fade.success,
.css-12wxb0f > img.fade.default {
  opacity: 1;
}
.css-11s9vse {
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.css-1bjwylw {
  color: rgba(0, 0, 0, 0.7);
  display: -webkit-box;
  max-height: 38px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  overflow: hidden;
  white-space: normal;
  overflow-wrap: break-word;
}
.css-1beg0o7 {
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
}
.css-1beg0o7 > span:only-child {
  margin: 0px;
}
.css-tpww51 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.857143rem;
  line-height: 1.5;
  margin: 4px 0px;
}
.css-vbihp9 {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
  vertical-align: top;
}
.css-1kr22w3 {
  display: block;
  width: 100%;
  font-size: 0.857143rem;
  height: 20px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: transform 0.3s ease 0s;
  transform: unset;
  max-width: 140px;
}
.css-1kr22w3 {
  display: block;
  width: 100%;
  font-size: 0.857143rem;
  height: 20px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: transform 0.3s ease 0s;
  transform: unset;
  max-width: 140px;
}
.css-153qjw7 {
  min-height: 14px;
  font-size: 0.857143rem;
}
.css-153qjw7 div {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 4px 0px;
}
.css-177n1u3 {
  height: 12px;
  width: 12px;
  margin: 0.5px;
}
.css-e9chkm {
  margin: 8px;
}
.css-e9chkm button {
  width: 100%;
  padding: 0px;
}
.css-1ldonwk-unf-btn {
  color: red;
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
  background: radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%)
    center center / 15000% rgb(255, 255, 255);
  border: 1px solid red;
  text-indent: initial;
  position: relative;
}
.css-1s3656b button {
  cursor: pointer;
}
.css-1ldonwk-unf-btn span {
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
.flexible {
  flex-grow: 1;
}
//disc
.css-rfiksa {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 4px;
}
.css-rfiksa div:nth-child(1) {
  width: 30px;
  height: 20px;
  border-radius: 3px;
  background-color: rgb(255, 234, 239);
  font-size: 0.71rem;
  font-weight: bold;
  color: rgb(255, 92, 132);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.css-rfiksa div:nth-child(2) {
  font-size: 0.71rem;
  color: rgba(49, 53, 59, 0.44);
  text-decoration: line-through;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0px 0px 0px 4px;
}
</style>
