<template>
    <v-card width="90vw" height="auto" elevation="3" class="mb-8 " color="#EEEEEE">  
        <v-card-title class="text-h4 mt-5 mb-5 d-flex justify-center">Experience</v-card-title>
        <v-row style="height: auto;" justify="center" align-content="center" class="mb-5">
        <v-col cols="12" sm="8" md="5" lg="4" xl="3">
            <!-- <v-card-text v-text="items.text1" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text2" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text3" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text4" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text5" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text6" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text7" class="pt-1 pb-1"></v-card-text> -->
            <v-timeline
              align-top
              dense
            >
              <v-timeline-item 
                v-for="(item, i) in this.items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>{{ item.year }}</strong>
                  </v-col>
                  <v-col>
                    <strong>{{ item.main }}</strong>
                    <div class="text-caption">
                      {{ item.caption }}
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
        </v-col>
        <!-- <v-col cols="12" sm="8" md="5" lg="4" xl="3" class="d-flex justify-center" style="height: 300px">
            <v-img :src="items.imgSrc" max-width="180" max-height="180" aspect-ratio="4/4" class=""></v-img>
        </v-col> -->
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
        item1: {
          color: "red",
          icon: "mdi-lightbulb-outline",
          year: "2018",
          main: "学部1年",
          caption: "大学の講義やPyConJP主催のセミナーを通じてプログラミング学習の開始"
        },
        item2: {
          color: "red",
          icon: "mdi-account-group",
          year: "2019",
          main: "学部2年",
          caption: "弊学文化祭iOSアプリの開発"
        },
        item3: {
          color: "red",
          icon: "mdi-airplane",
          year: "2019",
          main: "学部2年 夏",
          caption: "ケンブリッジ大学短期留学プログラムへの参加"
        },
        item4: {
          color: "red",
          icon: "mdi-bird",
          year: "2020",
          main: "学部3年",
          caption: "英語学習に注力, オンライン型英語レッスン事業の開始"
        },
        item5: {
          color: "red",
          icon: "mdi-bird",
          year: "2021",
          main: "学部4年",
          caption: "ジャスチャー判定を用いた教育アプリの開発"
        },
        item6: {
          color: "red",
          icon: "mdi-bird",
          year: "2021",
          main: "学部4年",
          caption: "Webアプリ自動テストツールの開発"
        },
        item7: {
          color: "red",
          icon: "mdi-bird",
          year: "2021",
          main: "学部4年",
          caption: "画像が喚起する感情を推定する深層学習モデルの構築"
        },
      },
      imgSrc: require('@/assets/img/pc_logo.png')
    }),
    mounted() {
      
    }
  }
</script>
<style>

</style>