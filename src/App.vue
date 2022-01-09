<template>
  <v-app>
    <v-app-bar
      app
      color="grey"
      dark
    >
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
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="300"
          src="@/assets/img/title.png"
          width="100"
        />
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

      <!-- <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
        >
          <v-btn
          color="transparent">
            <v-img
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              max-width="100"
              :src="item.src"
              width="30"
            />
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list> -->
    
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            v-on="on"
          >
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
          >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
    <v-main>
      <router-view></router-view>
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
    menuItems: {
      item1: {
        title: "AboutMe",
        to: "/mypage/about",
        src: require("@/assets/img/cat_icon.png")
      },
      item2: {
        title: "Works",
        to: "/mypage/works",
        src: require("@/assets/img/photo_icon.png")
      },
      item3: {
        title: "Blog",
        to: "/mypage/blog",
        src: require("@/assets/img/blog_icon.png")
      }
    },
  }),
};
</script>
