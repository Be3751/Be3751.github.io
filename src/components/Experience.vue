<template>
    <v-card width="90vw" height="auto" elevation="3" class="mb-8 " color="#EEEEEE">  
        <v-card-title v-text="items.name" class="text-h4 mt-5 mb-5 d-flex justify-center"></v-card-title>
        <v-row style="height: auto;" justify="center" align-content="center" class="mb-5">
        <v-col cols="12" sm="8" md="5" lg="4" xl="3">
            <v-card-text v-text="items.text1" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text2" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text3" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text4" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text5" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text6" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text7" class="pt-1 pb-1"></v-card-text>
        </v-col>
        <v-col cols="12" sm="8" md="5" lg="4" xl="3" class="d-flex justify-center" style="height: 300px">
            <v-img :src="items.imgSrc" max-width="180" max-height="180" aspect-ratio="4/4" class=""></v-img>
        </v-col>
        </v-row>
    </v-card>
</template>

<script>
  export default {
    name: 'Experience',
    methods:{
        
    },
    data: () => ({
      items: {
        name: "Experience",
        text1: "大学の講義やPyConJP主催のセミナーを通じてプログラミング学習の開始/学部1年, 2018年",
        text2: "弊学文化祭アプリの開発/学部2年, 2019年",
        text3: "ケンブリッジ大学短期留学プログラムへの参加/学部2年, 2019年",
        text4: "英語学習に注力, オンライン型英語レッスン事業の開始/学部3年, 2020年",
        text5: "ジャスチャー判定を用いた教育アプリの開発/学部4年, 2021年",
        text6: "Webアプリ自動テストツールの開発/学部4年, 2021年",
        text7: "画像が喚起する感情を推定する深層学習モデルの構築/学部4年, 2021年",
        imgSrc: require('@/assets/img/pc_logo.png')
      },
    }),
    mounted() {
      
    }
  }
</script>
<style>

</style>