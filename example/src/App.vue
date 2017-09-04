<template>
  <div id="app">
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style lang="scss">
  @import "./components/cat/color.scss";
  @import "./components/cat/iconfont/iconfont.css";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .wrapper {
    min-height: 100vh;
    background-color: $G30;
  }

  .page-header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: $G20;
    transition: all .3s;
    z-index: 100;
    margin-bottom: 25px;
  }

  .collapse {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
  }

  .container {
    display: flex;
    margin: 0 48px;
    border-radius: 4px;
    padding: 24px 0 0;
    margin-bottom: 24px;
    background-color: $G20;
    min-height: 100vh;
  }

  a {
    color: $B50;
  }
</style>
