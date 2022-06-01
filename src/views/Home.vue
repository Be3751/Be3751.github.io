<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="@/assets/img/home_design.jpg" class="hidden-xs-only"></v-img>
        <v-img src="@/assets/img/home_design_phone.png" class="hidden-sm-and-up"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card>
            <v-img
              src="@/assets/img/gura_icon.png"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>hoge</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
            <v-img
              src="@/assets/img/gura_icon.png"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>hoge</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
            <v-img
              src="@/assets/img/gura_icon.png"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>hoge</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      title: "",
    }),
    mounted() {
      this.$emit("catchTitle", this.title)
    }
  }
</script>
