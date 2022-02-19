<template>
  <v-container>
    Works
  </v-container>
</template>

<script>
  export default {
    name: 'Works',
    data: () => ({
      title: "Works"
    }),
    mounted() {
      this.$emit("catchTitle", this.title)
    }
  }
</script>
