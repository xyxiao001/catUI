<template>
  <div class="cat-checkbox-group">
    <cat-checkbox
      v-if="type !== 'button'"
      v-for="item in options"
      :key="item.value"
      :disabled="disabled ? disabled : item.disabled"
      :label="item.label"
      :name="item.name"
      v-model="current"
    >
      {{item.text}}
    </cat-checkbox>
  </div>
</template>

<script>
import Checkbox from './Checkbox'

export default {
  name: 'catCheckboxboxGroup',
  data () {
    return {
      current: this.value
    }
  },
  props: {
    type: {
      type: String,
      default: 'checkbox'
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
      console.log(value)
      this.$emit('change', value)
    },
    value (value) {
      this.current = value
    }
  },
  components: {
    catCheckbox: Checkbox
  }
}
</script>

<style lang="scss">
  .cat-checkbox-group {
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
