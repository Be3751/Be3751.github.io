<template>
  <v-container class="d-flex justify-center">
      <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-card elevation="3" width="800" class="mb-5">
          <v-row
            style="height: 300px;"
            justify="center" align-content="center"
          >
            <v-col cols="7">
              <v-card-title v-text="item.name" class="text-h4"></v-card-title>
              <v-card-text v-text="item.text1" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text2" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text3" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text4" class="pt-1 pb-1"></v-card-text>
            </v-col>
            <v-col cols="3" class="d-flex justify-center mr-5" style="height: 300px">
              <v-img :src="item.imgSrc" max-width="180" max-height="180" aspect-ratio="4/4" style="margin-top:30px"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
    methods:{
        
    },
    data: () => ({
      items: {
        item1: {
          name: "Basic Info",
          text1: "所属：同志社大学M1（24卒）",
          text2: "研究テーマ：画像が喚起する感情の推定をするモデルの構築",
          text3: "趣味：猫，洋服，銭湯，スマブラ",
          imgSrc: require('@/assets/img/gura_icon.png')
        },
        item2: {
          name: "Skills",
          text1: "言語: Python(daily), JavaScript(sometimes), C#(product dev), Java(sometimes), Go(learning)",
          text2: "フレームワーク: Django, Flask, WPF",
          text3: "インフラ: AWS(EC2, S3, DynamoDB, Amplify, etc...), Docker, Linux",
          text4: "語学：TOEIC855, 英検準1級",
          imgSrc: require('@/assets/img/vue_logo.png')
        },
        item3: {
          name: "Experience",
          text1: "hogehoge",
          text2: "Azure Kinectを用いたWPFアプリ開発, Puppeteerを用いた業務効率化プログラムの開発 at 株式会社タカヤコミュニケーションズ",
          text3: "",
          imgSrc: require('@/assets/img/pc_logo.png')
        }
      }
    }),
  }
</script>
<style>

</style>
