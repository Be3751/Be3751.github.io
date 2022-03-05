<template>
  <v-card
    class="mx-auto"
    max-width="360"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.image.url"
    >
    </v-img>

    <v-card-subtitle class="pb-0 pt-2">作成日：{{ article.createdAt }}</v-card-subtitle>
    <v-card-subtitle class="pb-1 pt-1">更新日：{{ article.updatedAt }}</v-card-subtitle>

    <!-- <v-card-title>{{ article.title }}</v-card-title> -->
    <v-card-text class="text--primary pt-2 pb-0">
      <div>{{ article.title }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text @click="showDetail(article)"> Detail </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Article',
  props:["article"],
  data: function(){
      return {
          
      }
  },
  methods: {
      showDetail: function(article) {
          this.$router.push({
              name: "article-detail",
              params: { id: article.id}
          })
      }
  }
}
</script>