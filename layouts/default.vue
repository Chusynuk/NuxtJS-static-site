<template>
  <div class="main-container">
    <Headtitle />
    <locations />
    <nuxt />
  </div>
</template>

<script>
import Headtitle from '~/components/Headtitle.vue';
import locations from '~/components/Locations.vue';
export default {
  components: {
    Headtitle,
    locations
  }
};
</script>
<style>
html {
  font-family: Nunito, sans-serif;
  background-color: #f1f1f1;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
