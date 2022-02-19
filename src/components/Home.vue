<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="@/assets/img/home_design.jpg"></v-img>
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
