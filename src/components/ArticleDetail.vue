<template>
  <v-card flat>
    <v-img :src="article.image.url" height="400"></v-img>
    <!-- <v-card-title>{{ article.title }}</v-card-title> -->
    <v-card-text><div v-html="sanitizedBody" class="text--primary"></div></v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";

export default {
  name: "ArticleDetail",
  data: function() {
    return {
       article: {}
    }
  },
  computed: {
    sanitizedBody() {
      return sanitizeHtml(this.article.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      });
    }
  },
  async mounted() {
    const response = await axios.get(
      "https://be3blog.microcms.io/api/v1/articles/" + this.$route.params.id,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.article = response.data;
  }
};
</script>
<style>
  h1, h2{
    line-height: 100%;
  }
</style>
