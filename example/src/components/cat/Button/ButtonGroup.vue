<template>
  <div class="cat-btn-group"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'catButtonGroup'
}
</script>

<style lang="scss" scoped>
  @import "../color.scss";
  .cat-btn-group {
    font-size: 0;
    display: inline-block;

    .cat-btn {
      margin-right: -1px;
      border-radius: 0;
    }

    .cat-btn:first-child {
      border-radius: 4px 0 0 4px;
    }

    .cat-btn:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
</style>
