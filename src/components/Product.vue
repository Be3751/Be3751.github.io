<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-img :src="product.img" height="200px"></v-img>

        <v-card-title>
        {{ product.title }}
        </v-card-title>

        <v-card-subtitle>
        {{ product.subtitle }}
        </v-card-subtitle>

        <v-card-actions>
        <v-btn color="orange lighten-2" text @click="showDetail">Detail</v-btn>
        <v-btn icon :href="product.reposUrl" class="mr-10 ml-2">
          <v-img
            class="shrink mb-1"
            contain
            max-width="25"
            src="@/assets/img/github-icon.png"
            width="25"/>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                {{ product.summary }}
                </v-card-text>
            </div>
        </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  data: function() {
    return {
        show: false,
    }
  },
  computed: {

  },
  mounted() {
    // console.log(this.product);
  },
  methods: {
      showDetail: function(){
          this.$router.push({
              name: "product-detail",
              params: { id: "prdct_" + this.product.title , product:this.product }
          })
      }
  }
};
</script>