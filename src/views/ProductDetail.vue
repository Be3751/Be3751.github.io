<template>
  <v-card flat>
    <v-img :src="this.product.image.url" height="200"></v-img>
    <v-card-title class="text-h4">{{ this.product.title }} - {{ this.product.subtitle }}</v-card-title>
    <v-card-actions>
      <v-btn class="ml-3" :href="this.product.reposUrl">
        <v-img
          class="shrink mb-1 mr-2"
          contain
          max-width="25"
          src="@/assets/img/github-icon.png"
          width="25"/>
        GitHub Repository
      </v-btn>
    </v-card-actions>
    <v-card-text><div v-html="sanitizedBody" class="text--primary"></div></v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
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
  async mounted() {
    const response = await axios.get(
      process.env.VUE_APP_MICROCMS_ENDPOINT + "/products/" + this.$route.params.id,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.product = response.data;
  }
}
</script>
<style>
h1{
  margin-bottom: 10px;
}
h2{
  margin-bottom: 10px;
}
</style>