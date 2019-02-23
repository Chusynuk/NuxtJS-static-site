<template>
  <div class="title">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Headtitle',
  props: {
    text: {
      type: String,
      default: 'TEAM'
    }
  }
};
</script>

<style lang="scss" scoped>
.title span {
  font-size: 120px;
  text-transform: uppercase;
  color: $head-text;
}
</style>
