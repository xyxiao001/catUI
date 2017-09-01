<template>
  <div class="at-component__container">
    <div class="at-component__sample">
      <slot name="demo"></slot>
    </div>
    <collapse-transition>
      <div class="at-component__code" v-show="isShow">
        <slot name="source-code"></slot>
      </div>
    </collapse-transition>
    <a v-if="lang === 'en'" class="at-component__code-toggle" @click="isShow = !isShow">{{ isShow ? 'Hide Code' : 'Show Code' }}</a>
    <a v-else class="at-component__code-toggle" @click="isShow = !isShow">{{ isShow ? '隐藏代码' : '显示代码' }}</a>
  </div>
</template>

<script>

import CollapseTransition from '@/utils/collapse-transition'

export default {
  components: {
    CollapseTransition
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    lang () {
      return this.$route.path.split('/')[1] || 'zh'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .btn-copy {
    display: none;
    position: absolute;
    top: 16px;
    right: 16px;
    transition: all .3s;

    &:hover {
      color: #6190E8;
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  .at-component__code:hover {
    .btn-copy {
      display: block;
      animation: fadeIn .3s both;
    }
  }
</style>
