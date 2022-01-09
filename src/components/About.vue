<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
  
          <!-- <v-row class="white" style="height: 400px;">
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" style="background-color: white"> -->
              <v-card
                elevation="3"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.name"
                    >
                    </v-card-title>
                    <v-card-text
                      v-text="item.text"
                    >
                    </v-card-text>
                  </div>
                  <v-img :src="item.imgSrc" width="200px"></v-img>
                </div>
              </v-card>
            <!-- </v-col> -->
            <!-- <v-col cols="12" sm="6" md="6" lg="6" xl="6" style="background-color: white" > -->
              
            <!-- </v-col>
          </v-row> -->

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
