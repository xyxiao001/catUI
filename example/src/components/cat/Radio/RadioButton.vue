<template>
  <label class="cat-radio-button"
    :class="[
      checked ? 'cat-radio-button-checked' : '',
      size ? `cat-radio-button-${size}` : '',
      disabled ? 'cat-radio-button-disabled' : ''
    ]"
  >
    <input
      type="radio"
      v-model="radio"
      :name="name"
      :value="label"
      :disabled="disabled"
      class="cat-radio-input"
    />
    <span class="cat-radio-button-inner" :class="checked ? 'cat-radio-button-inner-checked' : ''">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'catRadioButton',
  data: function () {
    return {
      radio: this.value
    }
  },
  computed: {
    checked () {
      return this.label === this.radio
    }
  },
  watch: {
    radio (radio) {
      this.$emit('input', radio)
    },
    value (value) {
      this.radio = value
    }
  },
  props: {
    value: [String, Number],
    name: String,
    label: {
      type: [String, Number],
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    disabled: Boolean
  }
}
</script>

<style lang="scss">
  @import "../color.scss";
  .cat-radio-button {
    position: relative;
    display: inline-block;
    outline: none;

    .cat-radio-input {
      position: absolute;
      left: 0;
      z-index: 1;
      cursor: pointer;
      opacity: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
    }

    .cat-radio-button-inner {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      vertical-align: middle;
      font-weight: 500;
      border-left: 0;
      color: rgba(0,0,0,.65);
      background-color: $G20;
      border: 1px solid $G70;
      border-left: 0;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      margin: 0;
      cursor: pointer;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      padding: 9px 15px;
      font-size: 14px;
      border-radius: 0;
    }

    &:first-child {
      .cat-radio-button-inner {
        border-left: 1px solid $G70;
        border-radius: 4px 0 0 4px;
        box-shadow: none!important;
      }
    }

    &:last-child {
      .cat-radio-button-inner {
        border-radius: 0 4px 4px 0;
      }
    }

    &-checked {
      .cat-radio-button-inner {
        background-color: $B50;
        border-color: $B50;
        color: $G20;
      }
    }

    &-disabled {
      cursor: not-allowed;

      &:first-child {
        .cat-radio-button-inner {
          border-left: 1px solid $G70;
        }
      }

      .cat-radio-button-inner {
        cursor: not-allowed;
        border-color: $G70;
        color: $G80;
        background-color: $G50;

        &-checked {
          color: $G20;
          background-color: $B30;
        }
      }
    }

    &-samll {
      .cat-radio-button-inner {
        padding: 7px 15px;
      }
    }

    &-large {
      .cat-radio-button-inner {
        padding: 12px 20px
      }
    }

  }
</style>
