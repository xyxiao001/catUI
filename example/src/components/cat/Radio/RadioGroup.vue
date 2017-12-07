<template>
  <div class="cat-radio-group">
    <cat-radio
      v-if="type !== 'button'"
      v-for="item in options"
      :key="item.value"
      :disabled="disabled ? disabled : item.disabled"
      :label="item.label"
      :name="item.name"
      v-model="current"
    >
      {{item.text}}
    </cat-radio>

    <cat-radio-button
      v-if="type === 'button'"
      v-for="item in options"
      :key="item.value"
      :disabled="disabled ? disabled : item.disabled"
      :label="item.label"
      :name="item.name"
      :size="size ? size : item.size"
      v-model="current"
    >
      {{item.text}}
    </cat-radio-button>

  </div>
</template>

<script>
import Radio from './Radio'
import RadioButton from './RadioButton'

export default {
  name: 'catRadioGroup',
  data () {
    return {
      current: this.value
    }
  },
  props: {
    type: {
      type: String,
      default: 'radio'
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    current (value) {
      this.$emit('change', value)
    },
    value (value) {
      this.current = value
    }
  },
  components: {
    catRadio: Radio,
    catRadioButton: RadioButton
  }
}
</script>

<style lang="scss">
  .cat-radio-group {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    line-height: unset;
  }
</style>
