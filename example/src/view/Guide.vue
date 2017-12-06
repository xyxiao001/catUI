<template>
  <div class="wrapper">
    <header class="page-header collapse">
      <Navbar></Navbar>
    </header>
    <section class="container">
      指南
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  data: function () {
    return {
    }
  },
  components: {
    Navbar
  },
  mounted () {
    document.title = '指南'
  }
}
</script>

<style lang="scss" scoped>
</style>
