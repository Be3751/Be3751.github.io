<template>
  <v-container>
    <div class="mt-2 mb-5">
      <span class="text-h5">■ブログページ</span><br>
      <span>学んだ技術に関する記事を掲載しています。</span>
    </div>
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
      process.env.VUE_APP_MICROCMS_ENDPOINT+"/articles",
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY }
      }
    );
    this.articles = response.data.contents;

    // createdAtとupdatedAtからYYYY-MM-DDのみを取得
    this.articles.forEach(article => {
      article.createdAt = article.createdAt.substr(0, 10);
      article.updatedAt = article.updatedAt.substr(0, 10);
    });
  },
}
</script>
