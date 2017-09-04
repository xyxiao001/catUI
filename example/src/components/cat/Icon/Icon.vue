<template>
  <i
    class="cat-icon caticon"
    :class="[
     type ? `caticon-${type}` : '',
     spin ? 'caticon-spin' : ''
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
    },
    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
