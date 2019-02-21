<template>
  <section class="container">
    <locations />
    <div class="grid">
      <teamMember
        v-for="(member, index) in myMembers"
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
import locations from '~/components/locations.vue'
export default {
  name: 'CapeTown',
  components: {
    teamMember,
    locations
  },
  data() {
    return {
      myMembers: members
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px;
  margin: 0 auto;
  padding: 150px;
  min-height: 100vh;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 10vh;
}
</style>
