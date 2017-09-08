<template>
  <label class="cat-radio-wrapper"
    :class="[
      checked ? 'cat-radio-wrapper-checked' : '',
      disabled ? 'cat-radio-wrapper-disabled' : ''
    ]"
  >
    <span class="cat-radio"
      :class="[
        checked ? 'cat-radio-checked' : '',
        disabled ? 'cat-radio-disabled' : ''
    ]">
      <input
        type="radio"
        v-model="radio"
        :name="name"
        :value="label"
        :disabled="disabled"
        class="cat-radio-input"
      />
      <span class="cat-radio-inner"></span>
    </span>
    <span class="cat-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'catRadio',
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
    value (val) {
      this.radio = val
    }
  },
  props: {
    value: [String, Number],
    name: String,
    label: {
      type: [String, Number],
      required: true
    },
    disabled: Boolean
  }
}
</script>

<style lang="scss">
  @import "../color.scss";
  .cat-radio-wrapper, .cat-radio {
    display: inline-block;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
  }

  .cat-radio-wrapper {
    font-size: 14px;
    margin-right: 8px;

    &:hover {
      .cat-radio-inner {
        border-color: $B50;
      }
    }

    &-disabled {
      cursor: not-allowed;
      color: $G70;
      &:hover {
        .cat-radio-inner {
          border-color: $G70;
        }
      }
    }
  }

  .cat-radio {
    outline: none;
    line-height: 1;
    vertical-align: text-bottom;

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

    .cat-radio-inner {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 14px;
      border: 1px solid $G70;
      background-color: $G20;
      transition: all .3s;

      &:after {
        position: absolute;
        width: 8px;
        height: 8px;
        left: 3px;
        top: 3px;
        border-radius: 4px;
        display: table;
        border-top: 0;
        border-left: 0;
        content: " ";
        background-color: $B50;
        opacity: 0;
        transform: scale(0);
        transition: all .3s cubic-bezier(.78,.14,.15,.86);
      }
    }

    &-checked{
      .cat-radio-inner {
        border-color: $B50;

        &:after {
          transform: scale(1);
          opacity: 1;
        }
      }
    }

    &-disabled {
      cursor: not-allowed;

      .cat-radio-input {
        cursor: not-allowed;
      }

      .cat-radio-inner {
        border-color: $G70;

        &:after {
          background-color: $G70;
        }
      }
    }
  }

  .cat-radio-label {
    padding: 0 8px;
  }
</style>
