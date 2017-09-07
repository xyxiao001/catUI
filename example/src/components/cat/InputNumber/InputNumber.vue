<template>
  <div class="cat-input-number"
    :class="[
      size ? `cat-input-number-${size}` : '',
      disabled ? `cat-input-number-disabled` : ''
   ]"
  >
    <input
      type="number"
      :value="currentValue"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :size="size"
      :max="max"
      :min="min"
      @blur="inputBlur"
      @focus="inputFocus"
      @enter="inputEnter"
      @input="inputChange"
    />
    <div class="cat-input-number-control" v-if="controls & !disabled">
      <span class="icon-control icon-up" :class="[canIncrease ? '' : 'icon-disabled']" @click="increase" @mousedown="(e) => void e.preventDefault()">
        <i class="cat-icon caticon caticon-up"></i>
      </span>
      <span class="icon-control icon-down" :class="[canDcrease ? '' : 'icon-disabled']" @click="decrease" @mousedown="(e) => void e.preventDefault()">
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
      currentValue: this.value
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
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
    disabled: {
      type: Boolean,
      default: false
    },
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    readonly: Boolean,
    autofocus: Boolean
  },
  computed: {
    canIncrease () {
      return this.currentValue + this.step <= this.max
    },
    canDcrease () {
      return this.currentValue - this.step >= this.min
    }
  },
  watch: {
    value (val) {
      val = Number(val)
      this.setCurrentValue(val)
    }
  },
  methods: {
    increase (e) {
      if (!this.canIncrease) return
      let val = this.sum(this.currentValue, this.step, '+')
      if (val > this.max) return
      if (val < this.min) {
        val = this.min
      }
      this.setCurrentValue(val)
    },
    decrease (e) {
      if (!this.canDcrease) return
      let val = this.sum(this.currentValue, this.step, '-')
      if (val < this.min) return
      if (val > this.max) {
        val = this.max
      }
      this.setCurrentValue(val)
    },
    // 处理浮点数相加的误差
    sum (a, b, type) {
      if (type === '-') {
        b = -b
      }
      let t1
      let t2
      let m
      try {
        t1 = a.toString().split('.')[1].length
      } catch (e) {
        t1 = 0
      }
      try {
        t2 = b.toString().split('.')[1].length
      } catch (e) {
        t2 = 0
      }
      m = Math.pow(10, Math.max(t1, t2))
      return (a * m + b * m) / m
    },
    inputChange (e) {
      if (this.disabled) return
      let val = Number(e.target.value)
      this.$emit('input', val)
      this.$emit('change', val)
    },
    inputFocus (e) {
      this.$emit('focus', e)
    },
    inputBlur (e) {
      let val = Number(e.target.value)
      if (val > this.max) {
        val = this.max
      }
      if (val < this.min) {
        val = this.min
      }
      this.setCurrentValue(val)
      this.$emit('change', val)
      this.$emit('blur', e)
    },
    inputEnter (e) {
      this.$emit('enter', e)
    },
    setCurrentValue (val) {
      if (val === this.currentValue) return
      if ((typeof val) !== 'number') {
        val = 0
      }
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

        &:hover {
          opacity: 1;
        }

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

      .icon-disabled {
        cursor: not-allowed;
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
      -webkit-appearance: none;

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

    &-large {
      input {
        padding: 8px 7px;
        height: 36px;
      }

      .cat-input-number-control {
        .icon-control {
          height: 18px;
        }
      }
    }

    &-small {
      input {
        padding: 4px 7px;
        height: 28px;
      }

      .cat-input-number-control {
        .icon-control {
          height: 14px;
        }
      }
    }

    &-disabled {
      input {
        background-color: #f7f7f7;
        opacity: 1;
        cursor: not-allowed;
        color: $G70;

        &:hover, &:focus {
          border-color: $G70;
        }
      }
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
