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
        <span class="ml-5 mt-1">be3:~ mypage$ less $HOME/{{ this.title }}</span>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-btn icon to="/mypage/about" class="mr-2 ml-2">
          <v-icon>mdi-card-account-details-outline</v-icon>
        </v-btn>

        <v-btn icon to="/mypage/works" class="mr-2 ml-2">
          <v-icon>mdi-folder-multiple-image</v-icon>
        </v-btn>

        <v-btn icon to="/mypage/blog" class="mr-2 ml-2">
          <v-icon>mdi-book-open-variant</v-icon>
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
