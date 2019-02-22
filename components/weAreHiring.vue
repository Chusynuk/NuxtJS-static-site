<template>
  <div class="hiring-member">
    <div class="new-member">
      <a
        href="/"
        class="job-apply"
      >+</a>
    </div>
    <span class="text-content your-name">YOUR NAME</span>
    <span class="text-content">We're hiring</span>
    <span class="text-content">#perspective #grow</span>
  </div>
</template>

<script>
export default {
  name: 'WeAreHiring'
}
</script>

<style lang="scss" scoped>
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
  height: 195px;
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
  padding-left: 30px;
  margin-top: 20px;
}
</style>
