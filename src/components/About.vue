<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-row class="grey lighten-3" style="height: 300px;">
          <v-col cols="12" sm="4" md="6" lg="6" xl="6" style="background-color: white">
            <v-card
            elevation="3"
            >
              <v-card-title>
                {{ item.name }}
              </v-card-title>
              <v-card-text>
                {{ item.text }}
              </v-card-text>
              <p class="text-sm-h8 text-md-h7 text-lg-h6 font-weight-bold"></p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="6" lg="6" xl="6" style="background-color: white">
            <v-img :src="item.imgSrc" width="200px"></v-img>
          </v-col>
        </v-row>
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
          imgSrc: require('@/assets/img/gura_icon.jpg')
        },
        item2: {
          name: 'Skills',
          text: 'Language: Python, JavaScript, C#, Java, Framework: Django, Flask, WPF, Infra: AWS(EC2, S3, DynamoDB, Amplify, etc...), Docker',
          imgSrc: require('@/assets/img/gura_icon.jpg')
        },
        item3: {
          name: 'Career',
          text: 'hogehoge',
          imgSrc: require('@/assets/img/gura_icon.jpg')
        }
      }
    }),
  }
</script>
