<template>
  <div class="wrapper">
    <header class="page-header">
      <Navbar></Navbar>
    </header>
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
  }
}
</script>


<style lang="scss" scoped>
  @import "../assets/color.scss";
  .wrapper {
    min-height: 500px;
    background-color: #F8FAFF;
  }

  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: transparent;
    transition: all .3s;
    z-index: 100;
  }

  .collapse {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
  }
</style>
