<template>
  <div class="cat-input-number">
    <input
      type="number"
      :value="currentValue"
      @blur="inputBlur"
      @focus="inputFocus"
      @enter="inputEnter"
      @input="inputChange"
      :disabled="disabled"
      :size="size"
      :max="max"
      :min="min"
    />
    <div class="cat-input-number-control" v-if="controls">
      <span class="icon-control icon-up" @click="increase" @mousedown="(e) => void e.preventDefault()">
        <i class="cat-icon caticon caticon-up"></i>
      </span>
      <span class="icon-control icon-down" @click="decrease" @mousedown="(e) => void e.preventDefault()">
        <i class="cat-icon caticon caticon-down"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catInputNumber',
  data: function () {
    return {
      currentValue: 0
    }
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      default: 0
    },
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    }
  },

  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    increase (e) {
      let val = this.currentValue + this.step
      this.setCurrentValue(val)
    },
    decrease (e) {
      let val = this.currentValue - this.step
      this.setCurrentValue(val)
    },
    inputChange (e) {
      if (this.disabled) return
      let value = e.target.value
      this.$emit('input', value)
      this.$emit('change', value)
    },
    inputFocus (e) {
      this.$emit('focus', e)
    },
    inputBlur (e) {
      this.$emit('blur', e)
    },
    inputEnter (e) {
      this.$emit('enter', e)
    },
    setCurrentValue (val) {
      if (val === this.currentValue) return
      this.currentValue = val
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../color.scss";
  .cat-input-number {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;

    &-control {
      position: absolute;
      top: 0;
      right: 0;
      width: 22px;
      height: 100%;
      border-left: 1px solid #dfdfdf;
      border-radius: 0 4px 4px 0;
      transition: opacity .3s;
      opacity: 0;

      .icon-control {
        position: relative;
        display: flex;
        width: 100%;
        height: 16px;
        justify-content: center;
        align-items: center;
        color: #bfbfbf;
        font-size: 10px;
        line-height: 1;
        text-align: center;
        transition: all .3s;
        cursor: pointer;

        i {
          font-size: 12px;
          height: 12px;
        }
      }

      .icon-up {
        border-bottom: 1px solid $G70;

        i {
          padding-top: 1px;
        }

        &:hover {
          i {
            color: $B50;
          }
        }
      }

      .icon-down {
        &:hover {
          i {
            color: $B50;
          }
        }
      }
    }

    input {
      width: 100%;
      text-align: left;
      outline: 0;
      height: 32px;
      transition: all .3s linear;
      color: rgba(0,0,0,.65);
      background-color: $G20;
      border: 1px solid $G70;
      border-radius: 4px;
      padding: 0 7px;
      padding-right: 24px;

      &:hover, &:focus {
        border-color: $B50;
      }

      &:focus {
        box-shadow: 0 0 0 2px rgba(16,142,233,.2);
      }
    }

    &:hover &-control{
      opacity: 1;
    }

    input:focus + &-control {
      opacity: 1;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"]{
      -moz-appearance: textfield;
    }
  }
</style>
