<template>
  <v-container>
    <!-- <v-layout>
      <v-flex xs12>
        <v-img src="https://www.symph.co/static/img/banner-illus.svg"></v-img>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 id="about">
      <v-flex xs12>
        <span class="display-2 font-weight-bold">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-3 px-5 row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img
            src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/50988163_10213734001079444_2817855097181044736_n.jpg?_nc_cat=104&_nc_ht=scontent-nrt1-1.xx&oh=d558e14acbf714985470fb4b740c35a8&oe=5D357E65"
            alt="avatar"
          >
        </v-avatar>
        <p class="headline font-weight mt-2">Masaya Sonobe</p>
        <p class="title font-weight-thin mt-3">
          Hello I'm a college student in Kyoto.
        </p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 blue>
      <v-flex xs12>
        <span class="display-2 font-weight-bold white--text" id="skills">Skill Sets</span>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center px-3 py-3 blue row wrap>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Vue.js</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Reactjs</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Angular 7</p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center px-3 py-3 blue row wrap>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://tutorialedge.net/images/node.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Node.js</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/mysql-6-logo-png-transparent.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">MySQL</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo_globe.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Neo4j</p>
      </v-flex>
    </v-layout> -->
    <v-row>
      <v-col cols="12">
        <v-img src="@/assets/img/home_design.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row class="grey lighten-3" style="height: 600px;">
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #FFCDD2">
        column 1
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #F8BBD0">
        column 2
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #E1BEE7">
        column 3
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #D1C4E9">
        column 4
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #C5CAE9">
        column 5
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #BBDEFB">
        column 6
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #B3E5FC">
        column 7
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
