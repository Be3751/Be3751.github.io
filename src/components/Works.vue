<template>
  <v-container>
    <v-row>
      <v-col v-for="product, i in this.products" :key="i">
        <Product></Product>
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
    products: [1,2,3],
  }),
  async mounted() {
    this.$emit("catchTitle", this.title);

    const response = await axios.get(
      "https://api.github.com/user/repos",
      {
        headers: { "Authorization": "token "+process.env.VUE_APP_GITHUB_ACCESS_KEY}
      }
    );
    console.log(response.data);
  }
}
</script>
