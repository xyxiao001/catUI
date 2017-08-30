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
