<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="@/assets/img/home_design.jpg" class="hidden-xs-only"></v-img>
        <v-img src="@/assets/img/home_design_phone.png" class="hidden-sm-and-up"></v-img>
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
