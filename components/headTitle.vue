<template>
  <div class="title">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'HeadTitle',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title span {
  font-size: 120px;
  text-transform: uppercase;
  color: $head-text;
}
</style>
