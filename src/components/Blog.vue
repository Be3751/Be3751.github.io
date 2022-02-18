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
          articles: []
      }
  },
  async mounted() {
      const response = await axios.get(
      "https://be3blog.microcms.io/api/v1/articles",
      {
        headers: { "X-MICROCMS-API-KEY": "06cb9782f69d439397ed49767c3158854b33" }
      }
    );
    this.articles = response.data.contents;
  },
}
</script>
