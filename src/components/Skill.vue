<template>
    <v-card width="80vw" height="auto" elevation="3" class="mb-8 " color="#EEEEEE">  
        <v-card-title v-text="items.name" class="text-h4 mt-5 mb-5 d-flex justify-center"></v-card-title>
        <v-row style="height: auto;" justify="center" align-content="center" class="mb-5">
        <v-col cols="12" sm="8" md="5" lg="4" xl="3">
            <v-card-text v-text="items.text1" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text2" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text3" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text4" class="pt-1 pb-1"></v-card-text>
            <v-card-text v-text="items.text5" class="pt-1 pb-1"></v-card-text>
        </v-col>
        <v-col cols="12" sm="8" md="5" lg="4" xl="3" class="d-flex justify-center" style="height: 300px">
            <v-img :src="items.imgSrc" max-width="180" max-height="180" aspect-ratio="4/4" class=""></v-img>
        </v-col>
        </v-row>
    </v-card>
</template>

<script>
  export default {
    name: 'Skill',
    methods:{
        
    },
    data: () => ({
      items: {
        name: "Skill",
        text1: "言語: Python(often), JavaScript(sometimes), C#(sometimse), Java(sometimes), Go(learning)",
        text2: "フレームワーク: Django, Flask, WPF",
        text3: "インフラ: AWS(EC2, S3, Lambda, DynamoDB, etc...), Docker",
        text4: "その他: Git/GitHub, Linux",
        text5: "語学: TOEIC855, 英検準1級",
        imgSrc: require('@/assets/img/vue_logo.png')
      },
    }),
    mounted() {
      
    }
  }
</script>
<style>

</style>