<template>
  <v-card flat>
    <v-img :src="article.image.url" height="400"></v-img>
    <v-card-title class="text-h4">{{ article.title }}</v-card-title>
    <v-card-text>
        <span>
          <v-icon small class="mb-1">mdi-lead-pencil</v-icon>
          作成日：{{ article.createdAt }}
        </span><br/>
        <span>
          <v-icon small class="mb-1">mdi-clock-time-eight-outline</v-icon>
          更新日：{{ article.updatedAt }}
        </span>
    </v-card-text>
    <v-card-text>
      <div v-html="sanitizedBody" class="text--primary"></div>
    </v-card-text>
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
      process.env.VUE_APP_MICROCMS_ENDPOINT + "/articles/" + this.$route.params.id,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.article = response.data;

    // YYYY-MM-DD形式に加工
    this.article.createdAt = this.article.createdAt.substr(0, 10);
    this.article.updatedAt = this.article.updatedAt.substr(0, 10);
  }
};
</script>
<style>
  h1, h2{
    line-height: 100%;
  }
</style>
