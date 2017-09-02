<template>
  <i
    class="cat-icon caticon"
    :class="[
     type ? `caticon-${type}` : ''
    ]"
  ></i>
</template>

<script>
export default {
  name: 'catIcon',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .cat-icon {
    padding: 0 10px;
  }
</style>
