<template>
  <div>
    <v-row>
      <v-col cols="6" md="3" sm="4" v-for="x in data" :key="x.id">
        <v-card style="overflow: hidden" class="rounded-lg">
          <v-card-text class="ma-0 pa-0">
            <v-img :src="x.thumbnail" max-height="200px"></v-img>
            <v-checkbox
              off-icon="mdi-heart"
              color="red"
              on-icon="mdi-heart"
              v-model="x.isWishlist"
              style="position: absolute; top: 0px; right: 0px"
              @change="wish(x)"
            ></v-checkbox>
            <v-avatar
              v-if="x.discount_price"
              color="red"
              style="position: absolute; top: 10px; left: 5px"
              size="35px"
              class="white--text font-weight-bold"
            >
              {{ x.discount_display }}%
            </v-avatar>
            <v-avatar
         
              size="52px"
              style="position: absolute; z-index: 1; bottom: 5px; right: 5px"
            >
     
            </v-avatar>
          </v-card-text>
          <v-card-actions>
            <v-list class="pa-0 ma-0" dense max-width="100%" three-line>
              <v-list-item @click="show(x.name)">
                <v-list-item-content>
                  <v-list-item-subtitle>{{ x.name }}</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="!x.discount_price">
                    {{ x.price | currency }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <span class="text-decoration-line-through red--text">
                      {{ x.price | currency }}
                    </span>
                    <v-divider class="mx-2" vertical></v-divider>
                    {{ x.discount_price | currency }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>{{ x.store }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  props: {
    data: Array,
  },
  methods: {
    show(id) {
      // const params = typeof id === "number" ? id : id.replace(/[/\s/]/g, "-");
      this.$router.push(`/test/page/product-details/s/?v=${id}`);
    },
    wish(item) {
      if (item.isWishlist) {
        Axios.post("/page/wishlist", {
          product_id: item.id,
          store_id: item.store_id,
        })
          .then((res) => {
            alert(res.data.message);
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        Axios.delete("/page/wishlist/" + item.id)
          .then((res) => {
            alert(res.data.message);
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
</style>