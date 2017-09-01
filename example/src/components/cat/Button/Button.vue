<template>
  <button
    class="cat-btn"
    :class="[
      type ? `cat-btn-${type}` : '',
      size ? `cat-btn-${size}` : '',
      disabled ? 'cat-btn-disabled' : '',
      clicked ? `cat-btn-clicked` : '',
    ]"
    @click="buttonClicked"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'catButton',
  data () {
    return {
      clicked: false,
      timeout: '',
      timeNumber: 250
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    buttonClicked (e) {
      if (this.disabled) return
      clearTimeout(this.timeout)
      this.clicked = true
      this.timeout = setTimeout(() => {
        this.clicked = false
      }, this.timeNumber)
    }
  },
  create () {
    clearTimeout(this.timeout)
  },
  destory () {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped>
  @import "../color.scss";
  .cat-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.15;
    padding: 10px 16px;
    font-size: 12px;
    border-radius: 4px;
    user-select: none;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    position: relative;
    color: rgba(0,0,0,.65);
    background-color: $G20;
    border-color: $G70;
    outline: none;

    &:hover {
      color: $B50;
      border-color: $B50;
    }

    &-clicked:after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: inherit;
      border: 0 solid $B50;
      opacity: 0.4;
      animation: buttonEffect .4s;
      display: block;
    }
  }

  .cat-btn-primary {
    background-color: $B50;
    color: $G20;
    border-color: $B50;

    &:hover {
      background-color: $B30;
      border-color: $B30;
      color: $G20;
    }
  }

  .cat-btn-dashed {
    border-style: dashed;
  }

  .cat-btn-text {
    border: 0;
  }

  .cat-btn-danger {
    background-color: $R50;
    color: $G20;
    border-color: $R50;

    &:hover {
      background-color: $R30;
      border-color: $R30;
      color: $G20;
    }

    &.cat-btn-clicked:after {
      border-color: $R50;
    }
  }

  .cat-btn-info {
    background-color: $A50;
    color: $G20;
    border-color: $A50;

    &:hover {
      background-color: $A30;
      border-color: $A30;
      color: $G20;
    }

    &.cat-btn-clicked:after {
      border-color: $A50;
    }
  }

  .cat-btn-success {
    background-color: $GN50;
    color: $G20;
    border-color: $GN50;

    &:hover {
      background-color: $GN30;
      border-color: $GN30;
      color: $G20;
    }

    &.cat-btn-clicked:after {
      border-color: $GN50;
    }
  }

  .cat-btn-disabled {
    cursor: not-allowed;
    color: #d2d2d2;
    border-color: #ececec;
    background-color: #f7f7f7;

    &:hover {
      color: #d2d2d2;
      border-color: #ececec;
      background-color: #f7f7f7;
    }
  }

  @keyframes buttonEffect {
    to {
      opacity: 0;
      top: -6px;
      left: -6px;
      bottom: -6px;
      right: -6px;
      border-width: 6px;
    }
  }
</style>
