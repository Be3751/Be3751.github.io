<template>
  <v-container class="d-flex justify-center" style="height: 1000px; max-width: 2400px;">
      <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-card elevation="3" width="70vw" class="mb-8">
          <v-row
            style="height: 400px;"
            justify="center" align-content="center"
          >
            <v-col cols="7">
              <v-card-title v-text="item.name" class="text-h4"></v-card-title>
              <v-card-text v-text="item.text1" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text2" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text3" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text4" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text5" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text6" class="pt-1 pb-1"></v-card-text>
              <v-card-text v-text="item.text7" class="pt-1 pb-1"></v-card-text>
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
          name: "Basic Information",
          text1: "所属: 同志社大学M1（24卒）",
          text2: "研究テーマ: 画像が喚起する感情の推定をするモデルの構築",
          text3: "趣味: 猫, 洋服, 銭湯, スマブラ",
          text4: "最近の興味: GoによるAPI実装, 応用情報, 英検1級",
          imgSrc: require('@/assets/img/gura_icon.png')
        },
        item2: {
          name: "Skill",
          text1: "言語: Python(often), JavaScript(sometimes), C#(sometimse), Java(sometimes), Go(learning)",
          text2: "フレームワーク: Django, Flask, WPF",
          text3: "インフラ: AWS(EC2, S3, Lambda, DynamoDB, etc...), Docker",
          text4: "その他: Git/GitHub, Linux",
          text5: "語学: TOEIC855, 英検準1級",
          imgSrc: require('@/assets/img/vue_logo.png')
        },
        item3: {
          name: "Experience",
          text1: "大学の講義やPyConJP主催のセミナーを通じてプログラミング学習の開始/学部1年, 2018年",
          text2: "弊学文化祭アプリの開発/学部2年, 2019年",
          text3: "ケンブリッジ大学短期留学プログラムへの参加/学部2年, 2019年",
          text4: "英語学習に注力, オンライン型英語レッスン事業の開始/学部3年, 2020年",
          text5: "ジャスチャー判定を用いた教育アプリの開発/学部4年, 2021年",
          text6: "Webアプリ自動テストツールの開発/学部4年, 2021年",
          text7: "画像が喚起する感情を推定する深層学習モデルの構築/学部4年, 2021年",
          imgSrc: require('@/assets/img/pc_logo.png')
        }
      }
    }),
  }
</script>
<style>

</style>
