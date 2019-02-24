<template>
  <div class="hiring-member">
    <div class="new-member">
      <a
        href="/"
        class="job-apply"
      >+</a>
    </div>
    <span class="text-content your-name">{{ yourName }}</span>
    <span class="text-content">{{ weAreHiring }}</span>
    <span class="text-content">{{ hashtags }}</span>
  </div>
</template>

<script>
export default {
  name: 'WeAreHiring',
  props: {
    yourName: {
      type: String,
      default: 'YOUR NAME'
    },
    weAreHiring: {
      type: String,
      default: 'We re hiring'
    },
    hashtags: {
      type: String,
      default: '#perspective #grow'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/index.scss";
.hiring-member {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: #e0e0e0;
}

.new-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  background-color: $primary-yellow;
  height: 190px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.job-apply {
  text-decoration: none;
  color: $black;
  font-size: 100px;
  font-weight: 200;
}

.your-name {
  color: $primary-grey;
}

.text-content {
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
