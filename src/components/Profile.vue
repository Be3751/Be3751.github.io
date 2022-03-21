<template>
  <v-container>
    <div class="mt-2 mb-5">
      <span class="text-h5">■プロフィールページ</span><br>
      <span>自己紹介に加えて、スキル、経験について記載しています。</span>
    </div>
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
