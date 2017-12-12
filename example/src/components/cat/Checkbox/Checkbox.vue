<template>
  <label class="cat-checkbox-wrapper"
    :class="[
      isChecked ? 'cat-checkbox-wrapper-checked' : '',
      disabled ? 'cat-checkbox-wrapper-disabled' : ''
    ]"
  >
    <span class="cat-checkbox"
      :class="[
        isChecked ? 'cat-checkbox-checked' : '',
        disabled ? 'cat-checkbox-disabled' : ''
    ]">
      <input
        type="checkbox"
        v-model="isChecked"
        :name="name"
        :disabled="disabled"
        :value="label"
        class="cat-checkbox-input"
      />
      <span class="cat-checkbox-inner"></span>
    </span>
    <span class="cat-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'catCheckbox',
  data: function () {
    return {
      isChecked: this.checked
    }
  },
  watch: {
    isChecked (val) {
      this.$emit('change', val ? this.label : '')
    },
    checked (checked) {
      this.isChecked = checked
    }
  },
  props: {
    name: String,
    label: {
      type: [Boolean, String],
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  }
}
</script>

<style lang="scss">
  @import "../color.scss";
  .cat-checkbox-wrapper, .cat-checkbox {
    display: inline-block;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
  }

  .cat-checkbox-wrapper {
    font-size: 14px;
    margin-right: 8px;

    &:hover {
      .cat-checkbox-inner {
        border-color: $B50;
      }
    }

    &-disabled {
      cursor: not-allowed;
      color: $G70;
      &:hover {
        .cat-checkbox-inner {
          border-color: $G70;
        }
      }
    }
  }

  .cat-checkbox {
    outline: none;
    line-height: 1;
    vertical-align: text-bottom;

    .cat-checkbox-input {
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

    .cat-checkbox-inner {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid $G70;
      background-color: $G20;
      transition: all .3s;

      &:after {
        position: absolute;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scale(0);
        display: table;
        width: 4px;
        height: 8px;
        border: 2px solid $G20;
        border-top: 0;
        border-left: 0;
        content: ' ';
        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
      }
    }

    &-checked{
      .cat-checkbox-inner {
        border-color: $B50;
        background-color: $B50;

        &:after {
          transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
          transform: rotate(45deg) scale(1);
          opacity: 1;
        }
      }
    }

    &-disabled {
      cursor: not-allowed;

      .cat-checkbox-input {
        cursor: not-allowed;
      }

      .cat-checkbox-inner {
        background-color: $G20;
        border-color: $G70;

        &:after {
          border-color: $G70;
        }
      }
    }
  }

  .cat-checkbox-label {
    padding: 0 8px;
  }
</style>
