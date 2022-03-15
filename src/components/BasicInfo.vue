<template>
    <v-card width="80vw" height="auto" elevation="3" class="mb-8 mt-8" color="#EEEEEE">  
        <v-row class="mt-1" style="height:auto;" justify="center" align-content="center">
          <v-card-title class="text-h4 mt-5 d-flex justify-center">Basic Information</v-card-title>
        </v-row>
        <v-row style="height:auto;" justify="center" align-content="center">
          <v-col cols="12" sm="8" md="5" lg="4" xl="3">
              <v-card-text v-text="items.text1" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="items.text2" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="items.text3" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="items.text4" class="pt-1 pb-1"></v-card-text>
          </v-col>
          <v-col cols="12" sm="8" md="5" lg="4" xl="3" class="d-flex justify-center" style="height:200px">
            <v-img :src="items.imgSrc" max-width="180" max-height="180" aspect-ratio="4/4" class=""></v-img>
          </v-col>
        </v-row>
        <v-row class="mb-7 mt-5 d-flex justify-center">
            <v-btn href="https://github.com/Be3751" icon color="black" class="mr-5">
              <v-icon x-large>mdi-github</v-icon>
            </v-btn>
            <v-btn href="https://twitter.com/Blossomrail" icon color="blue">
              <v-icon x-large>mdi-twitter</v-icon>
            </v-btn>
        </v-row>
    </v-card>
</template>

<script>
  export default {
    name: 'BasicInfo',
    methods:{
        
    },
    data: () => ({
      items: {
        text1: "所属: 同志社大学M1（24卒）",
        text2: "研究テーマ: 画像が喚起する感情の推定をするモデルの構築",
        text3: "趣味: 猫, 洋服, 銭湯, スマブラ, 動画鑑賞（主にYouTubeとPrime Video）",
        text4: "最近の興味: GoによるAPI実装, サーバ構築・運用，応用情報, 英検1級",
        imgSrc: require('@/assets/img/gura_icon.png')
      },
    }),
    mounted() {
      
    }
  }
</script>
<style>

</style>
