<template>
  <v-container>
    <v-row>
      <h1>{{ this.product.title }}</h1>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductDetail",
  data: function() {
    return {
        product: [],
    }
  },
  computed: {

  },
  mounted() {
    this.product = this.$route.params.product;
    console.log(this.product);
    // this.article = response.data;
  }
}
</script>
<style>

</style>