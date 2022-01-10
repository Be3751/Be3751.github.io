<template>
  <v-container class="d-flex justify-center">
      <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-card elevation="3" width="800" class="mb-5">
          <v-row>
            <v-col>
              <v-card-title class="text-h5" v-text="item.name"></v-card-title>
              <v-card-text v-text="item.text"></v-card-text>
            </v-col>
            <v-col class="d-flex justify-end mr-5">
              <v-img :src="item.imgSrc" width="100"></v-img>
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
          name: 'Be3',
          text: 'Doshisha Univ B4',
          imgSrc: require('@/assets/img/gura_icon.png')
        },
        item2: {
          name: 'Skills',
          text: 'Language: Python, JavaScript, C#, Java, Framework: Django, Flask, WPF, Infra: AWS(EC2, S3, DynamoDB, Amplify, etc...), Docker',
          imgSrc: require('@/assets/img/vue_logo.png')
        },
        item3: {
          name: 'Career',
          text: 'hogehoge',
          imgSrc: require('@/assets/img/pc_logo.png')
        }
      }
    }),
  }
</script>
