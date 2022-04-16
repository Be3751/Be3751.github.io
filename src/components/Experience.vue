<template>
    <v-card width="80vw" height="auto" elevation="3" class="mb-8 " color="#EEEEEE">  
        <v-card-title class="text-h4 mt-5 mb-5 d-flex justify-center">Experience</v-card-title>
        <v-row style="height: auto;" class="ml-5 mb-5 d-flex justify-center">
            <v-timeline
              align-top
              dense
            >
              <v-timeline-item 
                v-for="(item, i) in this.items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
              >
                <v-row class="pt-1">
                  <v-col cols="3" class="hidden-sm-and-down">
                    <strong>{{ item.year }}</strong>
                  </v-col>
                  <v-col cols="9">
                    <strong>{{ item.main }}</strong>
                    <div class="text-caption">
                      {{ item.caption }}
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
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
          color: "green",
          icon: "mdi-bird",
          year: "2018",
          main: "学部1年",
          caption: "大学の講義やPyConJP主催のセミナーを通じてプログラミング学習の開始"
        },
        item2: {
          color: "orange",
          icon: "mdi-airplane",
          year: "2018.3",
          main: "学部1年 春",
          caption: "学内のプログラムに参加しフィリピンにて語学留学"
        },
        item3: {
          color: "yellow",
          icon: "mdi-account-group",
          year: "2019",
          main: "学部2年",
          caption: "弊学文化祭iOSアプリの開発"
        },
        item4: {
          color: "red",
          icon: "mdi-airplane",
          year: "2019.8",
          main: "学部2年 夏",
          caption: "ケンブリッジ大学短期留学プログラムへの参加"
        },
        item5: {
          color: "blue",
          icon: "mdi-lead-pencil",
          year: "2020",
          main: "学部3年",
          caption: "英語学習に注力しTOEIC/英検を取得, オンライン型英語レッスン事業の開始"
        },
        item6: {
          color: "grey",
          icon: "mdi-dog-side",
          year: "2020.9",
          main: "ソフトバンク 2daysインターンシップ",
          caption: "コロナウィルスの影響で本社2週間勤務だったはずがオンライン2日間に変更となり絶望"
        },
        item7: {
          color: "green",
          icon: "mdi-human-greeting",
          year: "2021.5~2022.4",
          main: "タカヤコミュニケーションズ アルバイト",
          caption: "Azure Kinectを用いたジェスチャー認識機能付き教育アプリの開発, Puppeteerを用いたWebアプリの挙動確認効率化ツールの開発",
        },
        item8: {
          color: "red",
          icon: "mdi-school-outline",
          year: "2021.4~",
          main: "研究",
          caption: "CNNを用いた感情推定モデルの構築"
        },
        item9: {
          color: "purple",
          icon: "mdi-laptop",
          year: "2022.4~",
          main: "JX通信社 長期インターン",
          caption: "FastAPI（Python）を用いたバックエンド開発"
        },
      },
    }),
    mounted() {
      
    }
  }
</script>
<style>

</style>