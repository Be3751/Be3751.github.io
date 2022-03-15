<template>
    <v-card width="80vw" height="auto" elevation="3" class="mb-8 " color="#EEEEEE">  
        <v-card-title class="text-h4 mt-5 mb-5 d-flex justify-center">Experience</v-card-title>
        <v-row style="height: auto;" class="mb-5">
        <v-col cols="12" class="d-flex justify-center">
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
                  <v-col cols="3">
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
          caption: "学内のプログラムに参加しフィリピンで語学留学"
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
          caption: "英語学習に注力, オンライン型英語レッスン事業の開始"
        },
        item6: {
          color: "grey",
          icon: "mdi-lead-pencil",
          year: "2020.9",
          main: "学部3年",
          caption: "ソフトバンク インターンシップに参加"
        },
        item7: {
          color: "green",
          icon: "mdi-human-greeting",
          year: "2021.5~",
          main: "学部4年 春〜",
          caption: "Azure Kinectによるジャスチャー判定を用いた教育アプリの開発",
          caption2: "Puppeteerを用いたWebアプリ自動テストツールの開発"
        },
        item8: {
          color: "purple",
          icon: "mdi-robot-outline",
          year: "2021",
          main: "学部4年",
          caption: ""
        },
        item9: {
          color: "red",
          icon: "mdi-school-outline",
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