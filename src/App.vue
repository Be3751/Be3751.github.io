<template>
  <v-app>
    <v-app-bar app color="grey" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/img/cat_hand.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-0 hidden-sm-and-down"
          contain
          min-width="300"
          src="@/assets/img/title.png"
          width="100"
        />
        <span class="ml-5 mt-1 font-weight-bold hidden-sm-and-down">be3:~ mypage$ ls $HOME{{ this.title }}</span>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-btn icon to="/profile" class="mr-10 ml-2">
          <v-icon>mdi-card-account-details-outline</v-icon>
          <span class="font-weight-bold ml-1">Profile</span>
        </v-btn>

        <v-btn icon to="/works" class="mr-7 ml-2">
          <v-icon>mdi-folder-multiple-image</v-icon>
          <span class="font-weight-bold ml-1">Works</span>
        </v-btn>

        <v-btn icon to="/blog" class="mr-3 ml-2">
          <v-icon>mdi-book-open-variant</v-icon>
          <span class="font-weight-bold ml-1">Blog</span>
        </v-btn>
      </div>

    </v-app-bar>
    <v-main>
      <router-view @catchTitle="changeTitle"></router-view>
    </v-main>

    <v-footer
      dark
      padless
    >
      <v-card
        class="flex grey"
        flat
        tile
      >
        <!-- <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title> -->

        <v-card-text class="py-2 white--text text-center">
          <strong>{{ new Date().getFullYear() }} — Copyright © Be3 All Rights Reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Home from '@/views/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    title: "",
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  methods: {
    changeTitle(title){
      // alert(title);
      this.title = title;
    }
  }
};
</script>
