<template>
  <section class="container">
    <div class="grid">
      <teamMember
        v-for="(member, index) in myMembers"
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
  }
};
</script>

<style lang="scss" scoped>
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
