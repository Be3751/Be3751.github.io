<template>
  <v-container>
    <v-row>
      <v-col v-for="(article, i) in this.articles" :key="i">
        <Article :article="article"></Article>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Article from "@/components/Article";

export default {
  name: 'Blog',
  components: {
    Article
  },
  data: function(){
      return {
        title: "/Blog",
        articles: [],
      }
  },
  async mounted() {
    // タイトルをApp.vueに送信
    this.$emit("catchTitle", this.title);

    // MicroCMSから記事情報を取得
    const response = await axios.get(
      "https://be3blog.microcms.io/api/v1/articles",
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.articles = response.data.contents;
  },
}
</script>
