<template>
  <section class="container">
    <div class="grid">
      <teamMember
        v-for="(member, index) in includedCities"
        :key="index"
        :image="member.image"
        :location="member.location"
        :job-position="member.role"
        :hashtags="member.tags"
      />
    </div>
  </section>
</template>
<script>
import teamMember from '~/components/teamMember.vue'
import members from '~/assets/team.json'
export default {
  name: 'CapeTown',
  components: {
    teamMember
  },
  data() {
    return {
      myMembers: members
    }
  },
  computed: {
    includedCities: function() {
      return this.myMembers.filter(member => member.location === 'berlin')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px;
  margin: 0 auto;
  padding: 150px;
  min-height: 100vh;
}
</style>
