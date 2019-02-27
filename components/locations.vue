<template>
  <div class="locations">
    <nuxt-link
      v-for="(city,index) in links"
      :key="index"
      :to="`${city.page}`"
      :name="`${city.name}`"
      class="city"
    >
      {{ city.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Locations',
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'All',
          page: '/'
        },
        {
          id: 1,
          name: 'Berlin',
          page: '/berlin'
        },
        {
          id: 2,
          name: 'Amsterdam',
          page: '/amsterdam'
        },
        {
          id: 3,
          name: 'Capetown',
          page: '/capetown'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.locations {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 55vw;
  align-items: center;
  border: 2px solid $primary-yellow;
  border-radius: 15px;
  margin-top: 5vh;
}

.nuxt-link-exact-active,
.nuxt-link:active {
  border-radius: 15px;
  background-color: $primary-yellow;
}

.city {
  width: stretch; // OR fill-available
  color: $black;
  text-decoration: none;
}

.city:hover {
  transform: scale(1.2);
}

@media #{$smartphones} {
  .locations {
    display: none;
  }
}
</style>
