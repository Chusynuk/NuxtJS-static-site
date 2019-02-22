<template>
  <div class="main-container">
    <headTitle />
    <locations />
    <nuxt />
  </div>
</template>

<script>
import headTitle from '~/components/HeadTitle.vue';
import locations from '~/components/Locations.vue';
export default {
  components: {
    headTitle,
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
