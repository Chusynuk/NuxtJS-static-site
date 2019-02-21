<template>
  <div class="locations">
    <nuxt-link
      to="/"
      class="city"
      name="berlin"
    >
      All
    </nuxt-link>
    <nuxt-link
      to="/berlin"
      class="city"
      name="berlin"
    >
      Berlin
    </nuxt-link>
    <nuxt-link
      to="/amsterdam"
      class="city"
      name="amsterdam"
    >
      Amsterdam
    </nuxt-link>
    <nuxt-link
      to="/capetown"
      class="city"
      name="capeTown"
    >
      Cape Town
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Locations'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/index.scss";

.locations {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 50vw;
  border: 2px solid $primary-yellow;
  border-radius: 15px;
  margin-top: 100px;
}

.city {
  width: stretch; // OR fill-available
  color: $black;
  text-decoration: none;
}
</style>
