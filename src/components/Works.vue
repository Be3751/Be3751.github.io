<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, i) in this.items" :key="i">
        <Product :product="product"></Product>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from "@/components/Product"
import axios from "axios";
export default {
  name: 'Works',
  components: {
    Product
  },
  data: () => ({
    title: "/Works",
    items: {
      item1: {
          title: "mypage",
          subtitle: "個人ページ",
          img: require("@/assets/img/cat_hand.png"),
          summary: "VuetifyによるGrid Systemを活用",
          reposName: "mypage",
          reposUrl: "https://github.com/Be3751/mypage"
      },
      item2: {
          title: "ILBe",
          subtitle: "研究室内の放置物品管理アプリ",
          img: require("@/assets/img/cat_hand.png"),
          summary: "bbb",
          reposName: "ILBe",
          reposUrl: "https://github.com/Be3751/ILBe"
      },
      item3: {
          title: "KR-Notifier",
          subtitle: "Zoom Meeting自動LINE通知ツール",
          img: require("@/assets/img/cat_hand.png"),
          summary: "ccc",
          reposName: "KRManager",
          reposUrl: "https://github.com/Be3751/KRManager"
      },
      item4: {
          title: "CatDog-Classification",
          subtitle: "犬猫分類器",
          img: require("@/assets/img/cat_hand.png"),
          summary: "ccc",
          reposName: "CatDog-Classification",
          reposUrl: "https://github.com/Be3751/CatDog-Classification"
      },
    }

  }),
  async mounted() {
    this.$emit("catchTitle", this.title);

    // const response = await axios.get(
    //   "https://api.github.com/user/repos",
    //   {
    //     headers: { "Authorization": "token "+process.env.VUE_APP_GITHUB_ACCESS_KEY}
    //   }
    // );
    // console.log(response.data);
  }
}
</script>
