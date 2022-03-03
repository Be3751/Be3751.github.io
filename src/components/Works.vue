<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, i) in this.products" :key="i">
        <Product :product="product"></Product>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from "@/components/Product"
import axios from "axios";
export default {
  name: 'Works',
  components: {
    Product
  },
  data: () => ({
    title: "/Works",
    products: [],
  }),
  async mounted() {
    // タイトルをApp.vueに送信
    this.$emit("catchTitle", this.title);

    // MicroCMSから記事情報を取得
    const response = await axios.get(
      "https://be3blog.microcms.io/api/v1/products",
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.products = response.data.contents;
  }
}
</script>
