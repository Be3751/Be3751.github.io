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
export default {
  name: 'Works',
  components: {
    Product
  },
  data: () => ({
    title: "/Works",
    products: [1,2,3],
  }),
  mounted() {
    this.$emit("catchTitle", this.title)
  }
}
</script>
