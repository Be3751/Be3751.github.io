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
                    <strong class="d-flex d-sm-none d-none d-sm-flex d-md-none">{{ item.year }}</strong>
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
          main: "プログラミング学習の開始",
          caption: "大学の講義やPyConJP主催のセミナーを通じてプログラミングの楽しさを知る"
        },
        item2: {
          color: "orange",
          icon: "mdi-airplane",
          year: "2018.3",
          main: "学内のプログラムを活用しフィリピンにて語学留学",
          caption: "英会話の楽しさに気付き、帰国後は英会話サークルの運営や留学生との交流が好きになる"
        },
        item3: {
          color: "yellow",
          icon: "mdi-account-group",
          year: "2019",
          main: "弊学文化祭iOSアプリの開発",
          caption: "同志社大学と株式会社ROHMが協賛して支援する学生プロジェクトに幹部メンバとして参画し、プロジェクト運営とJavaScriptによる開発に勤しむ"
        },
        item4: {
          color: "red",
          icon: "mdi-airplane",
          year: "2019.8",
          main: "ケンブリッジ大学短期留学プログラムへの参加",
          caption: "英語学習に加えて、人種差別や歴史認識といった国際的な問題に対する関心が増す"
        },
        item5: {
          color: "grey",
          icon: "mdi-dog-side",
          year: "2020.9",
          main: "ソフトバンク 2daysインターンシップ",
          caption: "コロナウィルスの影響で本社2週間勤務だったはずがオンライン2日間に変更となった辛い思い出"
        },
        item6: {
          color: "green",
          icon: "mdi-human-greeting",
          year: "2021.5~2022.4",
          main: "タカヤコミュニケーションズ 開発アルバイト",
          caption: "Azure Kinectを用いたジェスチャー認識機能付き教育アプリの開発、Puppeteerを用いたWebアプリの挙動確認半自動化ツールの開発",
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
          year: "2022.4~7",
          main: "JX通信社 長期インターンシップ",
          caption: "FastAPI，aiohttp（Python）を用いたバックエンド開発、APIテスト、CI環境の作成"
        },
        item10: {
          color: "blue",
          icon: "mdi-microsoft",
          year: "2022.8~2022.9",
          main: "日本マイクロソフト サマーインターンシップ",
          caption: "Azureを用いたクラウド設計、Microsoft製品と連携したアプリケーション開発の業務を支援"
        },
        item11: {
          color: "red",
          icon: "mdi-tshirt-crew",
          year: "2022.10",
          main: "ファーストリテイリング インターンシップ",
          caption: "ソフトウェアの品質保証を学び、APIに対する自動テストを実装"
        },
        item12: {
          color: "orange",
          icon: "mdi-cellphone-text",
          year: "2022.11~Present",
          main: "MIXI インターンシップ",
          caption: "NFT売買サービスにおけるAPIへの機能追加"
        },
      },
    }),
    mounted() {
      
    }
  }
</script>
<style>

</style>