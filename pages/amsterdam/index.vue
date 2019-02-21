<template>
  <section class="container">
    <headTitle text="TEAM" />
    <locations />
    <div class="grid">
      <teamMember
        v-for="(member, index) in includedCities"
        :key="index"
        :image="member.image"
        :location="member.location"
        :job-position="member.role"
        :hashtags="member.tags"
      />
      <weAreHiring />
    </div>
  </section>
</template>
<script>
import teamMember from '~/components/teamMember.vue'
import members from '~/assets/team.json'
import locations from '~/components/locations.vue'
import headTitle from '~/components/headTitle.vue'
import weAreHiring from '~/components/weAreHiring.vue'
export default {
  name: 'Amsterdam',
  components: {
    teamMember,
    locations,
    headTitle,
    weAreHiring
  },
  data() {
    return {
      myMembers: members
    }
  },
  computed: {
    includedCities: function() {
      return this.myMembers.filter(member => member.location === 'amsterdam')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/index.scss";

.container {
  @include container-mixin;
}

.grid {
  @include grid-mixin;
}

@media #{$desktops} {
  .container {
    background-color: $background;
  }
}

@media #{$tablets} {
  .container {
    background-color: pink;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-right: 10px;
    margin-right: 10px;
  }
}

@media #{$smartphones} {
  .container {
    background-color: green;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 10vh;
  }
}
</style>
