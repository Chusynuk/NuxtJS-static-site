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
      <weAreHiring />
    </div>
  </section>
</template>
<script>
import teamMember from '~/components/teamMember.vue';
import members from '~/assets/team.json';
import weAreHiring from '~/components/weAreHiring.vue';
export default {
  name: 'CapeTown',
  components: {
    teamMember,
    weAreHiring
  },
  data() {
    return {
      myMembers: members
    };
  },
  computed: {
    includedCities: function() {
      return this.myMembers.filter(member => member.location === 'cape town');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/index.scss";

.container {
  @include container-mixin;
}

.grid {
  @include grid-mixin;
}

@media #{$tablets} {
  .container {
    // background-color: pink;
    width: stretch;
  }
  .grid {
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

@media #{$desktops} {
  .container {
    // background-color: red;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    padding-left: 10vw;
    padding-right: 10vw;
  }
}
</style>
