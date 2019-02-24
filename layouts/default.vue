<template>
  <div class="main-container">
    <HeadTitle />
    <Locations />
    <nuxt />
  </div>
</template>

<script>
import HeadTitle from '~/components/HeadTitle.vue';
import Locations from '~/components/Locations.vue';
export default {
  components: {
    HeadTitle,
    Locations
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
