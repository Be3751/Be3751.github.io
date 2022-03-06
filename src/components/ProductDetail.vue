<template>
  <v-card flat>
    <!-- <v-img :src="this.product.image.url" height="200"></v-img> -->
    <!-- <v-card-title class="text-h3">{{ this.product.title }} - {{ this.product.subtitle }}</v-card-title> -->
    <v-card-text><div v-html="sanitizedBody" class="text--primary"></div></v-card-text>
  </v-card>
</template>

<script>

import sanitizeHtml from "sanitize-html";
export default {
  name: "ProductDetail",
  data: function() {
    return {
        product: [],
    }
  },
  computed: {
    sanitizedBody() {
      return sanitizeHtml(this.product.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      });
    }
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