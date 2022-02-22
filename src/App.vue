<template>
  <v-app>
    <v-app-bar app color="grey" dark>
      <div class="d-flex align-center">
        <router-link to="/mypage">
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
        <v-btn icon to="/mypage/about" class="mr-10 ml-2">
          <v-icon>mdi-card-account-details-outline</v-icon>
          <span class="font-weight-bold ml-1">Profile</span>
        </v-btn>

        <v-btn icon to="/mypage/works" class="mr-7 ml-2">
          <v-icon>mdi-folder-multiple-image</v-icon>
          <span class="font-weight-bold ml-1">Works</span>
        </v-btn>

        <v-btn icon to="/mypage/blog" class="mr-3 ml-2">
          <v-icon>mdi-book-open-variant</v-icon>
          <span class="font-weight-bold ml-1">Blog</span>
        </v-btn>

      </div>

    </v-app-bar>
    <v-main>
      <router-view @catchTitle="changeTitle"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    title: ""
  }),
  methods: {
    changeTitle(title){
      // alert(title);
      this.title = title;
    }
  }
};
</script>
