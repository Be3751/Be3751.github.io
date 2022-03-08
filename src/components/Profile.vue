<template>
  <v-container class="d-flex justify-center" style="max-width: 2400px;">
    <v-row>
      <v-col class="d-flex justify-center"><BasicInfo></BasicInfo></v-col>
      <v-col class="d-flex justify-center"><Skill></Skill></v-col>
      <v-col class="d-flex justify-center"><Experience></Experience></v-col>
    </v-row>
  </v-container>
</template>

<script>
import BasicInfo from "@/components/BasicInfo"
import Skill from "@/components/Skill"
import Experience from "@/components/Experience"
export default {
  name: 'Profile',
  components: {
    BasicInfo,
    Skill,
    Experience
  },
  methods:{
      
  },
  data: () => ({
    title: "/Profile",
  }),
  mounted() {
    this.$emit("catchTitle", this.title)
  }
}
</script>
<style>

</style>
