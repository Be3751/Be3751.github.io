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
          title: "個人ページ",
          subtitle: "VuetifyによるGrid Systemを活用",
          img: require("@/assets/img/cat_hand.png"),
          description: "aaa"
      },
      item2: {
          title: "ILBe",
          subtitle: "研究室内の放置物品管理アプリ",
          img: require("@/assets/img/cat_hand.png"),
          description: "bbb"
      },
      item3: {
          title: "KR-Notifier",
          subtitle: "Zoom Meeting自動LINE通知ツール",
          img: require("@/assets/img/cat_hand.png"),
          description: "ccc"
      }
    }

  }),
  async mounted() {
    this.$emit("catchTitle", this.title);

    const response = await axios.get(
      "https://api.github.com/user/repos",
      {
        headers: { "Authorization": "token "+process.env.VUE_APP_GITHUB_ACCESS_KEY}
      }
    );
    console.log(response.data);
  }
}
</script>
